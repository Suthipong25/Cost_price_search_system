import React, { useState, useEffect, useMemo, useRef } from 'react';
import initialVehicleCostData from './data.js';
import { PERCENTAGES, STORAGE_KEYS } from './constants/index.js';
import {
  canonical,
  formatMoney,
  uniqueSorted,
  refreshRouteMin,
} from './utils/formatters.js';
import {
  parseWorkbook,
  exportRoutesToExcel,
  formatTableForClipboard,
} from './utils/excel.js';
import {
  fetchCosts,
  updateCost as updateCostApi,
  revertCost as revertCostApi,
  createCost as createCostApi,
} from './services/api.js';

import Header from './components/Header.jsx';
import LookupStrip from './components/LookupStrip.jsx';
import ResultToolbar from './components/ResultToolbar.jsx';
import PriceTable from './components/PriceTable.jsx';
import EditPriceModal from './components/EditPriceModal.jsx';
import AddDataModal from './components/AddDataModal.jsx';
import Toast from './components/Toast.jsx';

export default function App() {
  const [data, setData] = useState(() => {
    // 1. Initial base data
    let base = JSON.parse(JSON.stringify(initialVehicleCostData));
    try {
      const imported = JSON.parse(localStorage.getItem(STORAGE_KEYS.IMPORTED_DATA) || 'null');
      if (imported && Array.isArray(imported.routes) && imported.routes.length) {
        base = imported;
      }
    } catch { /* ignore */ }

    // Assign IDs and baseline costs
    base.routes.forEach((route, rIndex) => {
      route.offers.forEach((offer, oIndex) => {
        offer.id = `orig-${rIndex}-${oIndex}`;
        offer.originalCost = offer.cost;
        offer.isEdited = false;
      });
    });

    // 2. Merge added routes from localStorage
    try {
      const savedRoutes = JSON.parse(localStorage.getItem(STORAGE_KEYS.ADDED_ROUTES) || '[]');
      if (Array.isArray(savedRoutes)) {
        savedRoutes.forEach((route, rIdx) => {
          if (!route || !route.from || !route.to || !route.vehicleType || !Array.isArray(route.offers)) return;
          route.offers.forEach((offer, oIdx) => {
            if (!offer.id) offer.id = `saved-${rIdx}-${oIdx}`;
            if (offer.originalCost == null) offer.originalCost = offer.cost;
            if (offer.isEdited == null) offer.isEdited = false;
          });
          const existing = base.routes.find(
            (item) =>
              canonical(item.from) === canonical(route.from) &&
              canonical(item.to) === canonical(route.to) &&
              canonical(item.vehicleType) === canonical(route.vehicleType)
          );
          if (existing) {
            route.offers.forEach((o) => existing.offers.push(o));
            refreshRouteMin(existing);
          } else {
            refreshRouteMin(route);
            base.routes.push(route);
          }
          if (!base.vehicleTypes.some((v) => canonical(v) === canonical(route.vehicleType))) {
            base.vehicleTypes.push(route.vehicleType);
          }
          if (!base.fromValues.some((v) => canonical(v) === canonical(route.from))) {
            base.fromValues.push(route.from);
          }
        });
      }
    } catch { /* ignore */ }

    // 3. Apply price overrides from localStorage
    try {
      const overrides = JSON.parse(localStorage.getItem(STORAGE_KEYS.PRICE_OVERRIDES) || '{}');
      if (overrides && typeof overrides === 'object') {
        base.routes.forEach((route) => {
          let changed = false;
          route.offers.forEach((offer) => {
            if (offer.id && overrides[offer.id] && Number.isFinite(overrides[offer.id].cost)) {
              offer.cost = overrides[offer.id].cost;
              offer.isEdited = offer.originalCost != null && offer.cost !== offer.originalCost;
              changed = true;
            }
          });
          if (changed) refreshRouteMin(route);
        });
      }
    } catch { /* ignore */ }

    return base;
  });

  // Filter States
  const [selectedFrom, setSelectedFrom] = useState('');
  const [fromQuery, setFromQuery] = useState('');
  const [toQuery, setToQuery] = useState('');
  const [provinceQuery, setProvinceQuery] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');

  // Dropdown open states
  const [activeDropdown, setActiveDropdown] = useState(null); // 'from' | 'to' | 'province' | null

  // Modals & Notifications
  const [editingRow, setEditingRow] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isUsingPostgres, setIsUsingPostgres] = useState(false);

  const toastTimerRef = useRef(null);

  const showToast = (msg) => {
    clearTimeout(toastTimerRef.current);
    setToastMessage(msg);
    toastTimerRef.current = setTimeout(() => setToastMessage(''), 3000);
  };

  // Check and load data from PostgreSQL Backend API on mount
  useEffect(() => {
    async function loadFromDatabase() {
      try {
        const dbData = await fetchCosts();
        if (dbData && Array.isArray(dbData.routes) && dbData.routes.length > 0) {
          setData(dbData);
          setIsUsingPostgres(true);
          showToast(`🟢 เชื่อมต่อ PostgreSQL สำเร็จ (${dbData.routes.length} เส้นทาง)`);
        }
      } catch {
        // Backend not running, falls back to local data gracefully
        setIsUsingPostgres(false);
      }
    }
    loadFromDatabase();
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.select-shell')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('pointerdown', handleOutsideClick);
    return () => document.removeEventListener('pointerdown', handleOutsideClick);
  }, []);

  // Map of vehicle order
  const vehicleOrder = useMemo(() => {
    return new Map(data.vehicleTypes.map((type, idx) => [type, idx]));
  }, [data.vehicleTypes]);

  // FROM options
  const fromOptions = useMemo(() => uniqueSorted(data.fromValues), [data.fromValues]);

  // Routes matching current FROM
  const routesForFrom = useMemo(() => {
    if (!selectedFrom) return [];
    return data.routes.filter((r) => canonical(r.from) === canonical(selectedFrom));
  }, [data.routes, selectedFrom]);

  // TO options for current FROM
  const toOptions = useMemo(() => {
    if (!selectedFrom) return [];
    let rList = routesForFrom;
    if (provinceQuery.trim()) {
      rList = rList.filter((r) =>
        r.offers.some((o) => (o.toProvince || '').toLowerCase().includes(provinceQuery.trim().toLowerCase()))
      );
    }
    return uniqueSorted(rList.map((r) => r.to));
  }, [selectedFrom, routesForFrom, provinceQuery]);

  // Province options for current FROM
  const provinceOptions = useMemo(() => {
    if (!selectedFrom) return [];
    let rList = routesForFrom;
    if (toQuery.trim()) {
      rList = rList.filter((r) => r.to.toLowerCase().includes(toQuery.trim().toLowerCase()));
    }
    return uniqueSorted(rList.flatMap((r) => r.offers.map((o) => o.toProvince)));
  }, [selectedFrom, routesForFrom, toQuery]);

  // Filtered matching routes
  const matchedRoutes = useMemo(() => {
    if (!selectedFrom) return [];
    const tQuery = toQuery.trim();
    const pQuery = provinceQuery.trim();
    return routesForFrom.filter((r) => {
      const matchTo = !tQuery || r.to.toLowerCase().includes(tQuery.toLowerCase());
      const matchProvince =
        !pQuery ||
        r.offers.some((o) =>
          (o.toProvince || '').toLowerCase().includes(pQuery.toLowerCase())
        );
      return matchTo && matchProvince;
    });
  }, [selectedFrom, routesForFrom, toQuery, provinceQuery]);

  // Available vehicle types for current routes
  const availableVehicles = useMemo(() => {
    if (!matchedRoutes.length) return [];
    const set = new Set(matchedRoutes.map((r) => r.vehicleType));
    return Array.from(set).sort(
      (a, b) => (vehicleOrder.get(a) ?? 999) - (vehicleOrder.get(b) ?? 999)
    );
  }, [matchedRoutes, vehicleOrder]);

  // Display rows
  const displayRows = useMemo(() => {
    if (!selectedFrom) return [];
    let routes = matchedRoutes;
    if (selectedVehicle) {
      routes = routes.filter((r) => canonical(r.vehicleType) === canonical(selectedVehicle));
    }
    const rows = [];
    const pQuery = provinceQuery.trim().toLowerCase();
    routes.forEach((route) => {
      route.offers
        .filter((offer) => !pQuery || (offer.toProvince || '').toLowerCase().includes(pQuery))
        .forEach((offer) => {
          rows.push({
            route,
            offer,
            from: route.from,
            to: route.to,
            vehicleType: route.vehicleType,
            company: offer.company,
            cost: offer.cost,
            originalCost: offer.originalCost ?? offer.cost,
            isEdited: Boolean(offer.isEdited),
            receive: offer.receive,
            toProvince: offer.toProvince,
            toCity: offer.toCity,
            toLocation: offer.toLocation,
            send: offer.send,
            isMin: offer.cost === route.minCost,
            vehicleOrder: vehicleOrder.get(route.vehicleType) ?? 999,
          });
        });
    });

    rows.sort((a, b) => {
      if (a.vehicleOrder !== b.vehicleOrder) return a.vehicleOrder - b.vehicleOrder;
      if (a.cost !== b.cost) return a.cost - b.cost;
      return a.company.localeCompare(b.company, 'th');
    });

    return rows;
  }, [selectedFrom, matchedRoutes, selectedVehicle, provinceQuery, vehicleOrder]);

  // Handlers
  const handleSelectFrom = (val) => {
    setSelectedFrom(val);
    setFromQuery(val);
    setToQuery('');
    setProvinceQuery('');
    setSelectedVehicle('');
    setActiveDropdown(null);
  };

  const handleEditPriceSave = async (row, newCost) => {
    const updatedCost = Math.round(newCost);
    row.offer.cost = updatedCost;
    row.offer.isEdited = row.offer.originalCost != null && updatedCost !== row.offer.originalCost;
    refreshRouteMin(row.route);

    // Save to PostgreSQL if connected
    if (isUsingPostgres && typeof row.offer.id === 'number') {
      try {
        await updateCostApi(row.offer.id, updatedCost);
      } catch (err) {
        console.error('Failed to update cost in PostgreSQL:', err);
      }
    } else {
      // Save to localStorage overrides fallback
      try {
        const overrides = JSON.parse(localStorage.getItem(STORAGE_KEYS.PRICE_OVERRIDES) || '{}');
        if (row.offer.isEdited) {
          overrides[row.offer.id] = {
            cost: updatedCost,
            updatedAt: new Date().toISOString(),
          };
        } else {
          delete overrides[row.offer.id];
        }
        localStorage.setItem(STORAGE_KEYS.PRICE_OVERRIDES, JSON.stringify(overrides));
      } catch { /* ignore */ }
    }

    setData((prev) => ({ ...prev }));
    setEditingRow(null);
    showToast(`อัปเดตราคา ${row.company} เป็น ${formatMoney.format(updatedCost)} บาทแล้ว`);
  };

  const handleRevertPrice = async (row) => {
    const original = row.offer.originalCost ?? row.offer.cost;
    row.offer.cost = original;
    row.offer.isEdited = false;
    refreshRouteMin(row.route);

    // Revert in PostgreSQL if connected
    if (isUsingPostgres && typeof row.offer.id === 'number') {
      try {
        await revertCostApi(row.offer.id);
      } catch (err) {
        console.error('Failed to revert in PostgreSQL:', err);
      }
    } else {
      try {
        const overrides = JSON.parse(localStorage.getItem(STORAGE_KEYS.PRICE_OVERRIDES) || '{}');
        delete overrides[row.offer.id];
        localStorage.setItem(STORAGE_KEYS.PRICE_OVERRIDES, JSON.stringify(overrides));
      } catch { /* ignore */ }
    }

    setData((prev) => ({ ...prev }));
    setEditingRow(null);
    showToast(`คืนค่าราคาเดิม ${formatMoney.format(original)} บาท เรียบร้อยแล้ว`);
  };

  const handleAddNewData = async (newEntry) => {
    const { from, to, vehicleType, company, cost, receive, toProvince, toCity, toLocation, send } = newEntry;

    let route = data.routes.find(
      (item) =>
        canonical(item.from) === canonical(from) &&
        canonical(item.to) === canonical(to) &&
        canonical(item.vehicleType) === canonical(vehicleType)
    );

    const newOffer = {
      id: `added-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      company,
      cost,
      originalCost: cost,
      isEdited: false,
      sourceRow: null,
      receive,
      toProvince,
      toCity,
      toLocation,
      send,
    };

    if (isUsingPostgres) {
      try {
        const saved = await createCostApi(newEntry);
        if (saved && saved.item && saved.item.id) {
          newOffer.id = saved.item.id;
        }
      } catch (err) {
        console.error('Failed to insert new cost into PostgreSQL:', err);
      }
    }

    if (route) {
      route.offers.push(newOffer);
      refreshRouteMin(route);
    } else {
      route = {
        from,
        to,
        vehicleType,
        minCost: cost,
        minCompany: company,
        offers: [newOffer],
      };
      data.routes.push(route);
    }

    if (!data.fromValues.some((v) => canonical(v) === canonical(from))) {
      data.fromValues.push(from);
    }
    if (!data.vehicleTypes.some((v) => canonical(v) === canonical(vehicleType))) {
      data.vehicleTypes.push(vehicleType);
    }

    if (!isUsingPostgres) {
      try {
        const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.ADDED_ROUTES) || '[]');
        const savedRoute = existing.find(
          (item) =>
            canonical(item.from) === canonical(from) &&
            canonical(item.to) === canonical(to) &&
            canonical(item.vehicleType) === canonical(vehicleType)
        );
        if (savedRoute) {
          savedRoute.offers.push(newOffer);
          refreshRouteMin(savedRoute);
        } else {
          existing.push({
            from,
            to,
            vehicleType,
            minCost: route.minCost,
            minCompany: route.minCompany,
            offers: [newOffer],
          });
        }
        localStorage.setItem(STORAGE_KEYS.ADDED_ROUTES, JSON.stringify(existing));
      } catch { /* ignore */ }
    }

    setData((prev) => ({ ...prev }));
    setIsAddModalOpen(false);
    showToast(`บันทึกข้อมูล ${from} → ${to} เรียบร้อยแล้ว`);
  };

  const handleCopyClipboard = async () => {
    if (!displayRows.length) return;
    const text = formatTableForClipboard(displayRows, PERCENTAGES);
    try {
      await navigator.clipboard.writeText(text);
      showToast(`คัดลอกตาราง ${displayRows.length} รายการแล้ว (สามารถวางใน Excel ได้ทันที)`);
    } catch {
      showToast('ไม่สามารถคัดลอกได้ กรุณาลองใหม่อีกครั้ง');
    }
  };

  const handleImportExcel = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = parseWorkbook(event.target.result, file.name);
        if (!parsed.routes.length) {
          showToast('ไม่พบข้อมูลเส้นทางในไฟล์ Excel นี้');
          return;
        }

        parsed.routes.forEach((route, rIndex) => {
          route.offers.forEach((offer, oIndex) => {
            offer.id = `orig-${rIndex}-${oIndex}`;
            offer.originalCost = offer.cost;
            offer.isEdited = false;
          });
        });

        localStorage.setItem(STORAGE_KEYS.IMPORTED_DATA, JSON.stringify(parsed));
        localStorage.removeItem(STORAGE_KEYS.PRICE_OVERRIDES);

        setData(parsed);
        showToast(`อัปเดตข้อมูลจาก ${file.name} สำเร็จ (${parsed.routes.length} เส้นทาง)`);
      } catch (err) {
        showToast(`เกิดข้อผิดพลาดในการอ่านไฟล์: ${err.message}`);
      } finally {
        e.target.value = '';
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const handleExportExcel = () => {
    const filename = exportRoutesToExcel(data.routes, PERCENTAGES);
    showToast(`ส่งออกไฟล์ ${filename} เรียบร้อยแล้ว`);
  };

  return (
    <div className="app-shell">
      <main className="app-main" aria-labelledby="page-title">
        <Header />

        <LookupStrip
          fromQuery={fromQuery}
          setFromQuery={setFromQuery}
          selectedFrom={selectedFrom}
          onSelectFrom={handleSelectFrom}
          toQuery={toQuery}
          setToQuery={setToQuery}
          provinceQuery={provinceQuery}
          setProvinceQuery={setProvinceQuery}
          selectedVehicle={selectedVehicle}
          setSelectedVehicle={setSelectedVehicle}
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
          fromOptions={fromOptions}
          toOptions={toOptions}
          provinceOptions={provinceOptions}
          availableVehicles={availableVehicles}
          onSearch={() => showToast(`ค้นหา ${selectedFrom} (${displayRows.length} รายการ)`)}
        />

        <section className="result-section" aria-labelledby="result-heading">
          <div className="result-heading-row">
            <div>
              <h2 id="result-heading">ผลการค้นหา</h2>
              <p id="result-summary">
                {selectedFrom
                  ? `พบ ${displayRows.length} รายการราคา · ต้นทาง: ${selectedFrom}${
                      toQuery ? ` · ปลายทาง: ${toQuery}` : ''
                    }${provinceQuery ? ` · จังหวัด: ${provinceQuery}` : ''}${
                      selectedVehicle ? ` · ประเภทรถ: ${selectedVehicle}` : ''
                    }`
                  : 'เลือกต้นทางเพื่อดูข้อมูลทุกปลายทาง'}
              </p>
            </div>

            <ResultToolbar
              hasData={displayRows.length > 0}
              onImportExcel={handleImportExcel}
              onExportExcel={handleExportExcel}
              onOpenAddModal={() => setIsAddModalOpen(true)}
              onCopyClipboard={handleCopyClipboard}
            />
          </div>

          <p className="scroll-hint">
            เลื่อนตารางในแนวนอนเพื่อดูรายละเอียดเส้นทางและเปอร์เซ็นต์ทั้งหมด
          </p>

          <PriceTable
            displayRows={displayRows}
            percentages={PERCENTAGES}
            selectedFrom={selectedFrom}
            toQuery={toQuery}
            provinceQuery={provinceQuery}
            selectedVehicle={selectedVehicle}
            onEditRow={(row) => setEditingRow(row)}
          />
        </section>

        {editingRow && (
          <EditPriceModal
            row={editingRow}
            onClose={() => setEditingRow(null)}
            onSave={(newCost) => handleEditPriceSave(editingRow, newCost)}
            onRevert={() => handleRevertPrice(editingRow)}
          />
        )}

        {isAddModalOpen && (
          <AddDataModal
            fromOptions={fromOptions}
            toOptions={uniqueSorted(data.routes.map((r) => r.to))}
            vehicleOptions={data.vehicleTypes}
            provinceOptions={uniqueSorted(data.routes.flatMap((r) => r.offers.map((o) => o.toProvince)))}
            initialFrom={selectedFrom}
            initialTo={toQuery}
            initialProvince={provinceQuery}
            onClose={() => setIsAddModalOpen(false)}
            onSave={handleAddNewData}
          />
        )}
      </main>

      <Toast message={toastMessage} />
    </div>
  );
}
