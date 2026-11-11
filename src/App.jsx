import React, { useState, useEffect, useMemo, useRef } from 'react';
import * as XLSX from 'xlsx';
import initialVehicleCostData from './data.js';

const percentages = [0.1, 0.12, 0.15, 0.18, 0.21, 0.24, 0.27, 0.3];

const canonical = (value) =>
  (value || '').trim().replace(/\s+/g, ' ').toLocaleUpperCase('th-TH');

const formatMoney = new Intl.NumberFormat('th-TH', {
  maximumFractionDigits: 0,
});

const provinceThaiNames = new Map([
  ['AYUTTHAYA', 'พระนครศรีอยุธยา'],
  ['BKK', 'กรุงเทพมหานคร'],
  ['BANGKOK', 'กรุงเทพมหานคร'],
  ['BURIRUM', 'บุรีรัมย์'],
  ['CHACHOENGSAO', 'ฉะเชิงเทรา'],
  ['CHEV CHONBURI', 'ชลบุรี'],
  ['CHON BURI', 'ชลบุรี'],
  ['CHONBURI', 'ชลบุรี'],
  ['CHIANG MAI', 'เชียงใหม่'],
  ['KHON KAEN', 'ขอนแก่น'],
  ['KRABI', 'กระบี่'],
  ['MAE HONG SON', 'แม่ฮ่องสอน'],
  ['NAKHON PATHOM', 'นครปฐม'],
  ['NAKHON RATCHASIMA', 'นครราชสีมา'],
  ['NAKHON SAWAN', 'นครสวรรค์'],
  ['NONTHABURI', 'นนทบุรี'],
  ['PATHUM THANI', 'ปทุมธานี'],
  ['PATHUMTHANI', 'ปทุมธานี'],
  ['PHRAE', 'แพร่'],
  ['PHUKET', 'ภูเก็ต'],
  ['PRACHINBURI', 'ปราจีนบุรี'],
  ['RATCHABURI', 'ราชบุรี'],
  ['RAYONG', 'ระยอง'],
  ['SAMUT PRAKAN', 'สมุทรปราการ'],
  ['SAMUT SAKHON', 'สมุทรสาคร'],
  ['SAMUT SAKORN', 'สมุทรสาคร'],
  ['SARABURI', 'สระบุรี'],
  ['SONGKLA', 'สงขลา'],
  ['UDON THANI', 'อุดรธานี'],
]);

const provinceThaiName = (value) => provinceThaiNames.get(canonical(value)) || '';

const matchesProvinceValue = (value, query) => {
  const q = canonical(query);
  if (!q) return true;
  return canonical(value).includes(q) || containsValue(provinceThaiName(value), query);
};

const containsValue = (value, query) =>
  !canonical(query) || canonical(value).includes(canonical(query));

const uniqueSorted = (values) => {
  const seen = new Set();
  return values
    .filter(Boolean)
    .map((v) => String(v).trim())
    .filter((v) => {
      const key = canonical(v);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => a.localeCompare(b, 'th'));
};

const refreshRouteMin = (route) => {
  if (!route || !Array.isArray(route.offers) || !route.offers.length) return;
  let minOffer = route.offers[0];
  for (const o of route.offers) {
    if (o.cost < minOffer.cost) {
      minOffer = o;
    }
  }
  route.minCost = minOffer.cost;
  route.minCompany = minOffer.company;
};

const SHAREPOINT_URL =
  'https://perkinthailand-my.sharepoint.com/:x:/g/personal/it_perkin-logistics_com/IQBm3F50UhwgS73h8SShEK1ZAVjXtaMkeUxt7wuNrdq-Sxo?e=nPMwEV';

const STORAGE_KEYS = {
  IMPORTED_DATA: 'vehicle-cost-imported-data-v1',
  ADDED_ROUTES: 'vehicle-cost-added-routes-v1',
  PRICE_OVERRIDES: 'vehicle-cost-price-overrides-v1',
};

function parseWorkbook(buffer, fileName) {
  const wb = XLSX.read(buffer, { type: 'array' });
  const sheetName =
    wb.SheetNames.find((n) => n.includes('ราคาต้นทุนรถ (by lo)')) ||
    wb.SheetNames.find((n) => n.includes('ราคาต้นทุนรถ')) ||
    wb.SheetNames[0];
  const sheet = wb.Sheets[sheetName];
  if (!sheet) throw new Error('ไม่พบชีตข้อมูลราคาต้นทุนในไฟล์นี้');

  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
  const headerRow = rows[1] || [];

  const vehicleCols = [];
  for (let c = 10; c <= 27; c++) {
    const name = (headerRow[c] || '').toString().replace(/\s+/g, ' ').trim();
    if (name) vehicleCols.push({ index: c, type: name });
  }

  const routesMap = new Map();
  const fromValuesSet = new Set();
  const vehicleTypesOrdered = [];
  vehicleCols.forEach(({ type }) => {
    if (!vehicleTypesOrdered.includes(type)) vehicleTypesOrdered.push(type);
  });

  for (let i = 2; i < rows.length; i++) {
    const r = rows[i];
    if (!r) continue;
    const from = (r[1] || '').toString().trim();
    if (!from) continue;
    fromValuesSet.add(from);

    const receive = (r[2] || '').toString().trim();
    const toProvince = (r[3] || '').toString().trim();
    const toCity = (r[4] || '').toString().trim();
    const toLocation = (r[5] || '').toString().trim();
    const send = (r[6] || '').toString().trim();
    const company = (r[7] || '').toString().trim();
    const to = (toLocation || toCity || send || toProvince || '').replace(/\s+/g, ' ').trim();
    if (!to) continue;

    vehicleCols.forEach(({ index, type }) => {
      const cellVal = r[index];
      const cost = typeof cellVal === 'number' ? cellVal : parseFloat(cellVal);
      if (Number.isFinite(cost) && cost > 0) {
        const key = from.toUpperCase() + '|||' + to.toUpperCase() + '|||' + type.toUpperCase();
        if (!routesMap.has(key)) {
          routesMap.set(key, {
            from,
            to,
            vehicleType: type,
            minCost: cost,
            minCompany: company,
            offers: [],
          });
        }
        const route = routesMap.get(key);
        route.offers.push({
          company,
          cost,
          sourceRow: i + 1,
          receive,
          toProvince,
          toCity,
          toLocation,
          send,
        });
        if (cost < route.minCost) {
          route.minCost = cost;
          route.minCompany = company;
        }
      }
    });
  }

  const routes = Array.from(routesMap.values());
  const fromValues = Array.from(fromValuesSet);

  return {
    sourceMeta: {
      workbook: fileName || '2026.10.03 ราคาต้นทุนรถ.xlsx',
      sheet: sheetName,
      sourceRows: rows.length,
      routeRecords: routes.length,
      generatedAt: new Date().toISOString(),
    },
    vehicleTypes: vehicleTypesOrdered,
    fromValues,
    routes,
  };
}

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

    // 2. Merge added routes
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

    // 3. Apply price overrides
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

  const toastTimerRef = useRef(null);
  const fileInputRef = useRef(null);

  const showToast = (msg) => {
    clearTimeout(toastTimerRef.current);
    setToastMessage(msg);
    toastTimerRef.current = setTimeout(() => setToastMessage(''), 3000);
  };

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
        r.offers.some((o) => matchesProvinceValue(o.toProvince || '', provinceQuery.trim()))
      );
    }
    return uniqueSorted(rList.map((r) => r.to));
  }, [selectedFrom, routesForFrom, provinceQuery]);

  // Province options for current FROM
  const provinceOptions = useMemo(() => {
    if (!selectedFrom) return [];
    let rList = routesForFrom;
    if (toQuery.trim()) {
      rList = rList.filter((r) => containsValue(r.to, toQuery.trim()));
    }
    return uniqueSorted(rList.flatMap((r) => r.offers.map((o) => o.toProvince)));
  }, [selectedFrom, routesForFrom, toQuery]);

  // Filtered matching routes
  const matchedRoutes = useMemo(() => {
    if (!selectedFrom) return [];
    const tQuery = toQuery.trim();
    const pQuery = provinceQuery.trim();
    return routesForFrom.filter((r) => {
      const matchTo = containsValue(r.to, tQuery);
      const matchProvince =
        !pQuery || r.offers.some((o) => matchesProvinceValue(o.toProvince || '', pQuery));
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
    const pQuery = provinceQuery.trim();
    routes.forEach((route) => {
      route.offers
        .filter((offer) => !pQuery || matchesProvinceValue(offer.toProvince || '', pQuery))
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

  const handleEditPriceSave = (row, newCost) => {
    const updatedCost = Math.round(newCost);
    row.offer.cost = updatedCost;
    row.offer.isEdited = row.offer.originalCost != null && updatedCost !== row.offer.originalCost;
    refreshRouteMin(row.route);

    // Save to localStorage overrides
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

    // Update state to trigger re-render
    setData((prev) => ({ ...prev }));
    setEditingRow(null);
    showToast(`อัปเดตราคา ${row.company} เป็น ${formatMoney.format(updatedCost)} บาทแล้ว`);
  };

  const handleRevertPrice = (row) => {
    const original = row.offer.originalCost ?? row.offer.cost;
    row.offer.cost = original;
    row.offer.isEdited = false;
    refreshRouteMin(row.route);

    try {
      const overrides = JSON.parse(localStorage.getItem(STORAGE_KEYS.PRICE_OVERRIDES) || '{}');
      delete overrides[row.offer.id];
      localStorage.setItem(STORAGE_KEYS.PRICE_OVERRIDES, JSON.stringify(overrides));
    } catch { /* ignore */ }

    setData((prev) => ({ ...prev }));
    setEditingRow(null);
    showToast(`คืนค่าราคาเดิม ${formatMoney.format(original)} บาท เรียบร้อยแล้ว`);
  };

  const handleAddNewData = (newEntry) => {
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

    setData((prev) => ({ ...prev }));
    setIsAddModalOpen(false);
    showToast(`บันทึกข้อมูล ${from} → ${to} เรียบร้อยแล้ว`);
  };

  const handleCopyClipboard = async () => {
    if (!displayRows.length) return;
    const headers = [
      'FROM',
      'รับ',
      'To province',
      'To City',
      'To location',
      'ส่ง',
      'ประเภทรถ',
      'บริษัท',
      'ราคาต้นทุน',
      '10%',
      '12%',
      '15%',
      '18%',
      '21%',
      '24%',
      '27%',
      '30%',
    ];
    const lines = [headers.join('\t')];
    displayRows.forEach((r) => {
      const prices = percentages.map((p) => Math.round(r.cost * (1 + p)));
      lines.push(
        [
          r.from,
          r.receive || '',
          r.toProvince || '',
          r.toCity || '',
          r.toLocation || '',
          r.send || '',
          r.vehicleType,
          r.company,
          r.cost,
          ...prices,
        ].join('\t')
      );
    });

    try {
      await navigator.clipboard.writeText(lines.join('\n'));
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
    const rowsData = [
      [
        'FROM',
        'รับ',
        'To province',
        'To City',
        'To location',
        'ส่ง',
        'ประเภทรถ',
        'บริษัท',
        'ราคาต้นทุน',
        '10%',
        '12%',
        '15%',
        '18%',
        '21%',
        '24%',
        '27%',
        '30%',
      ],
    ];

    data.routes.forEach((route) => {
      route.offers.forEach((offer) => {
        const prices = percentages.map((p) => Math.round(offer.cost * (1 + p)));
        rowsData.push([
          route.from,
          offer.receive || '',
          offer.toProvince || '',
          offer.toCity || '',
          offer.toLocation || '',
          offer.send || '',
          route.vehicleType,
          offer.company,
          offer.cost,
          ...prices,
        ]);
      });
    });

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(rowsData);
    XLSX.utils.book_append_sheet(wb, ws, 'ราคาต้นทุนรถ_ล่าสุด');
    const exportName = `ราคาต้นทุนรถ_อัปเดตล่าสุด_${new Date().toISOString().slice(0, 10)}.xlsx`;
    XLSX.writeFile(wb, exportName);
    showToast(`ส่งออกไฟล์ ${exportName} เรียบร้อยแล้ว`);
  };

  return (
    <div className="app-shell">
      <section className="docket" aria-labelledby="page-title">
        <div className="perforation perforation-left" aria-hidden="true" />
        <div className="perforation perforation-right" aria-hidden="true" />

        <header className="masthead">
          <div>
            <h1 id="page-title">ระบบค้นหาข้อมูลต้นทุนรถ</h1>
            <p>เปรียบเทียบต้นทุนทุกบริษัทตามเส้นทางจากข้อมูลฝ่าย Logistics (React Version)</p>
          </div>
        </header>

        {/* Lookup Strip */}
        <form
          id="lookup-form"
          className="lookup-strip"
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          {/* FROM Field */}
          <label className="field">
            <span className="field-label">FROM</span>
            <span className="select-shell">
              <input
                id="from-input"
                name="from"
                type="text"
                placeholder="พิมพ์หรือเลือกต้นทาง"
                autoComplete="off"
                value={fromQuery}
                onChange={(e) => {
                  setFromQuery(e.target.value);
                  const exact = fromOptions.find(
                    (opt) => canonical(opt) === canonical(e.target.value)
                  );
                  if (exact) {
                    setSelectedFrom(exact);
                  } else {
                    setSelectedFrom('');
                  }
                  setActiveDropdown('from');
                }}
                onFocus={() => setActiveDropdown('from')}
                maxLength={100}
                required
              />
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="m7 9.5 5 5 5-5" />
              </svg>

              {activeDropdown === 'from' && (
                <ul className="autocomplete-list" role="listbox">
                  {fromOptions
                    .filter((v) => containsValue(v, fromQuery))
                    .slice(0, 40)
                    .map((val) => (
                      <li
                        key={val}
                        className="autocomplete-option"
                        onPointerDown={() => handleSelectFrom(val)}
                      >
                        <span className="autocomplete-primary">{val}</span>
                      </li>
                    ))}
                  {!fromOptions.some((v) => containsValue(v, fromQuery)) && (
                    <li className="autocomplete-empty">ไม่พบข้อมูลที่ตรงกับคำค้น</li>
                  )}
                </ul>
              )}
            </span>
          </label>

          {/* Route Arrow */}
          <div className="route-mark" aria-hidden="true">
            <svg viewBox="0 0 36 24" focusable="false">
              <circle cx="4" cy="12" r="2.5" />
              <path d="M6.5 12H31M24.5 5.5 31 12l-6.5 6.5" />
            </svg>
          </div>

          {/* TO Field */}
          <label className="field">
            <span className="field-label">TO</span>
            <span className="select-shell">
              <input
                id="to-input"
                name="to"
                type="text"
                placeholder="พิมพ์หรือเลือกปลายทาง"
                autoComplete="off"
                disabled={!selectedFrom}
                value={toQuery}
                onChange={(e) => {
                  setToQuery(e.target.value);
                  setActiveDropdown('to');
                }}
                onFocus={() => selectedFrom && setActiveDropdown('to')}
                maxLength={150}
              />
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="m7 9.5 5 5 5-5" />
              </svg>

              {activeDropdown === 'to' && (
                <ul className="autocomplete-list" role="listbox">
                  {toOptions
                    .filter((v) => containsValue(v, toQuery))
                    .slice(0, 40)
                    .map((val) => (
                      <li
                        key={val}
                        className="autocomplete-option"
                        onPointerDown={() => {
                          setToQuery(val);
                          setActiveDropdown(null);
                        }}
                      >
                        <span className="autocomplete-primary">{val}</span>
                      </li>
                    ))}
                  {!toOptions.some((v) => containsValue(v, toQuery)) && (
                    <li className="autocomplete-empty">ไม่พบข้อมูลที่ตรงกับคำค้น</li>
                  )}
                </ul>
              )}
            </span>
          </label>

          {/* Province Field */}
          <label className="field field-province">
            <span className="field-label">จังหวัดปลายทาง</span>
            <span className="select-shell">
              <input
                id="province-input"
                name="province"
                type="text"
                placeholder="พิมพ์หรือเลือกจังหวัด"
                autoComplete="off"
                disabled={!selectedFrom}
                value={provinceQuery}
                onChange={(e) => {
                  setProvinceQuery(e.target.value);
                  setActiveDropdown('province');
                }}
                onFocus={() => selectedFrom && setActiveDropdown('province')}
                maxLength={100}
              />
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="m7 9.5 5 5 5-5" />
              </svg>

              {activeDropdown === 'province' && (
                <ul className="autocomplete-list" role="listbox">
                  {provinceOptions
                    .filter((v) => matchesProvinceValue(v, provinceQuery))
                    .slice(0, 40)
                    .map((val) => {
                      const thName = provinceThaiName(val);
                      return (
                        <li
                          key={val}
                          className="autocomplete-option"
                          onPointerDown={() => {
                            setProvinceQuery(val);
                            setActiveDropdown(null);
                          }}
                        >
                          <span className="autocomplete-primary">{val}</span>
                          {thName && <span className="autocomplete-secondary">{thName}</span>}
                        </li>
                      );
                    })}
                  {!provinceOptions.some((v) => matchesProvinceValue(v, provinceQuery)) && (
                    <li className="autocomplete-empty">ไม่พบข้อมูลที่ตรงกับคำค้น</li>
                  )}
                </ul>
              )}
            </span>
          </label>

          {/* Vehicle Field */}
          <label className="field field-vehicle">
            <span className="field-label">ประเภทรถ</span>
            <span className="select-shell">
              <select
                id="vehicle-input"
                name="vehicle"
                disabled={!selectedFrom || !availableVehicles.length}
                value={selectedVehicle}
                onChange={(e) => setSelectedVehicle(e.target.value)}
              >
                <option value="">ทุกประเภทรถ (ทั้งหมด)</option>
                {availableVehicles.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="m7 9.5 5 5 5-5" />
              </svg>
            </span>
          </label>

          <button
            id="search-button"
            className="search-button"
            type="button"
            disabled={!selectedFrom}
            onClick={() => {
              // Re-focus or refresh
              showToast(`ค้นหา ${selectedFrom} (${displayRows.length} รายการ)`);
            }}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4 4" />
            </svg>
            ค้นหาข้อมูล
          </button>
        </form>

        {/* Results Section */}
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

            <div className="result-actions">
              <a
                id="sharepoint-link"
                className="utility-button sharepoint-button"
                href={SHAREPOINT_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="เปิดไฟล์ Excel บน SharePoint เพื่อดูหรือแก้ไขราคา"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                เปิดไฟล์บน SharePoint
              </a>

              <button
                id="import-excel-button"
                className="utility-button"
                type="button"
                onClick={() => fileInputRef.current?.click()}
                title="นำเข้าไฟล์ Excel จาก SharePoint เพื่ออัปเดตราคาเป็นล่าสุด"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                อัปเดตจาก Excel
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".xlsx, .xls"
                style={{ display: 'none' }}
                onChange={handleImportExcel}
              />

              <button
                id="export-excel-button"
                className="utility-button"
                type="button"
                onClick={handleExportExcel}
                title="ส่งออกราคาปัจจุบันเป็นไฟล์ Excel สำหรับนำไปอัปโหลดทับบน SharePoint"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                ส่งออก Excel
              </button>

              <button
                id="add-data-button"
                className="utility-button"
                type="button"
                onClick={() => setIsAddModalOpen(true)}
              >
                ＋ เพิ่มข้อมูลใหม่
              </button>

              <button
                id="copy-button"
                className="utility-button"
                type="button"
                disabled={!displayRows.length}
                onClick={handleCopyClipboard}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="8" y="8" width="11" height="11" rx="1" />
                  <path d="M16 8V5H5v11h3" />
                </svg>
                คัดลอก
              </button>

              <button
                className="utility-button"
                type="button"
                onClick={() => window.print()}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 9V4h10v5M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
                  <path d="M7 14h10v6H7z" />
                </svg>
                พิมพ์
              </button>
            </div>
          </div>

          <p className="scroll-hint">
            เลื่อนตารางในแนวนอนเพื่อดูรายละเอียดเส้นทางและเปอร์เซ็นต์ทั้งหมด
          </p>

          <div
            className="table-scroll"
            tabIndex={0}
            aria-label="ตารางรายละเอียดเส้นทาง ราคาต้นทุนแยกตามบริษัท และราคาบวกเปอร์เซ็นต์"
          >
            <table className="price-ledger">
              <thead>
                <tr>
                  <th scope="col">FROM</th>
                  <th scope="col">รับ</th>
                  <th scope="col">To province</th>
                  <th scope="col">To City</th>
                  <th scope="col">To location</th>
                  <th scope="col">ส่ง</th>
                  <th scope="col">ประเภทรถ</th>
                  <th scope="col">บริษัท</th>
                  <th scope="col" className="cost-column">ราคาต้นทุน</th>
                  <th scope="col">10%</th>
                  <th scope="col">12%</th>
                  <th scope="col">15%</th>
                  <th scope="col">18%</th>
                  <th scope="col">21%</th>
                  <th scope="col">24%</th>
                  <th scope="col">27%</th>
                  <th scope="col">30%</th>
                </tr>
              </thead>
              <tbody>
                {!selectedFrom ? (
                  <tr className="empty-row">
                    <td colSpan={17}>เลือกต้นทางเพื่อดูข้อมูลทุกปลายทาง</td>
                  </tr>
                ) : displayRows.length === 0 ? (
                  <tr className="missing-row">
                    <td colSpan={17}>
                      ไม่พบราคาสำหรับ {selectedFrom}
                      {toQuery && ` · ปลายทาง: ${toQuery}`}
                      {provinceQuery && ` · จังหวัด: ${provinceQuery}`}
                      {selectedVehicle && ` · ประเภทรถ: ${selectedVehicle}`}
                    </td>
                  </tr>
                ) : (
                  displayRows.map((row, idx) => {
                    const prices = percentages.map((p) => Math.round(row.cost * (1 + p)));
                    return (
                      <tr key={`${row.from}-${row.to}-${row.vehicleType}-${row.company}-${idx}`} className="result-row">
                        <td>{row.from}</td>
                        <td>{row.receive || '—'}</td>
                        <td>{row.toProvince || '—'}</td>
                        <td>{row.toCity || '—'}</td>
                        <td>{row.toLocation || '—'}</td>
                        <td>{row.send || '—'}</td>
                        <td>{row.vehicleType}</td>
                        <td>{row.company}</td>
                        <td className="cost-cell">
                          <div className="cost-display">
                            <span className="cost-amount">{formatMoney.format(row.cost)}</span>
                            {row.isMin && (
                              <span className="badge-lowest" title="ราคาต่ำสุดของประเภทรถนี้">
                                ต่ำสุด
                              </span>
                            )}
                            {row.isEdited && (
                              <span
                                className="badge-edited"
                                title={`แก้ไขจากราคาเดิม: ${formatMoney.format(row.originalCost)} บาท`}
                              >
                                แก้ไขแล้ว
                              </span>
                            )}
                            <button
                              type="button"
                              className="edit-cost-btn"
                              title={`แก้ไขราคา ${row.company}`}
                              aria-label={`แก้ไขราคา ${row.company} (${row.vehicleType})`}
                              onClick={() => setEditingRow(row)}
                            >
                              <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                              </svg>
                              แก้ไข
                            </button>
                          </div>
                        </td>
                        {prices.map((p, pIdx) => (
                          <td key={pIdx}>{formatMoney.format(p)}</td>
                        ))}
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Edit Price Modal */}
        {editingRow && (
          <EditPriceModal
            row={editingRow}
            onClose={() => setEditingRow(null)}
            onSave={(newCost) => handleEditPriceSave(editingRow, newCost)}
            onRevert={() => handleRevertPrice(editingRow)}
          />
        )}

        {/* Add Data Modal */}
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

        {/* Footer */}
        <footer className="docket-footer">
          <div>
            <p>
              แหล่งข้อมูล: <strong>2026.10.3 ราคาต้นทุนรถ (by lo)</strong> ·{' '}
              <a href={SHAREPOINT_URL} target="_blank" rel="noopener noreferrer">
                เปิดไฟล์บน SharePoint ↗
              </a>
            </p>
            <p>แสดงรายละเอียด From, รับ, จังหวัด, เมือง, สถานที่ และส่งตามไฟล์ Excel</p>
          </div>
          <p id="data-meta-info" className="data-meta-info">
            ข้อมูลล่าสุด: {data.sourceMeta?.workbook || '2026.10.03 ราคาต้นทุนรถ.xlsx'} (
            {data.sourceMeta?.generatedAt
              ? new Date(data.sourceMeta.generatedAt).toLocaleString('th-TH', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })
              : ''}
            ) · {data.routes.length} เส้นทาง
          </p>
        </footer>
      </section>

      {/* Toast Notification */}
      <div className={`toast ${toastMessage ? 'is-visible' : ''}`} role="status" aria-live="polite">
        {toastMessage}
      </div>
    </div>
  );
}

// Edit Price Modal Component
function EditPriceModal({ row, onClose, onSave, onRevert }) {
  const [costValue, setCostValue] = useState(row.cost);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = Number(costValue);
    if (!Number.isFinite(num) || num < 0) {
      setError('กรุณากรอกราคาต้นทุนที่ถูกต้อง (ตัวเลข 0 ขึ้นไป)');
      return;
    }
    onSave(num);
  };

  return (
    <dialog className="data-dialog" open style={{ display: 'block', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 100 }}>
      <form className="data-form" onSubmit={handleSubmit}>
        <div className="dialog-heading">
          <div>
            <p className="field-label">แก้ไขราคา</p>
            <h2 id="edit-cost-title">แก้ไขราคาต้นทุน</h2>
          </div>
          <button className="dialog-close" type="button" aria-label="ปิด" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="dialog-route-fields" aria-label="ข้อมูลเส้นทางที่กำลังแก้ไข">
          <div>
            <span className="field-label">เส้นทาง</span>
            <p className="dialog-static-text">{row.from} → {row.to}</p>
          </div>
          <div>
            <span className="field-label">ประเภทรถ / บริษัท</span>
            <p className="dialog-static-text">{row.vehicleType} · {row.company}</p>
          </div>
        </div>

        <label className="field">
          <span className="field-label">
            ราคาต้นทุนใหม่ (บาท) <span aria-hidden="true">*</span>
          </span>
          <input
            name="cost"
            type="number"
            min="0"
            step="1"
            autoFocus
            required
            value={costValue}
            onChange={(e) => setCostValue(e.target.value)}
          />
        </label>

        <div className="dialog-hint">
          {row.isEdited && row.originalCost !== row.cost ? (
            <span>
              ราคาเดิมจากไฟล์: <strong>{formatMoney.format(row.originalCost)} บาท</strong> (กำลังใช้ราคาแก้ไข)
            </span>
          ) : (
            <span>
              ราคาปัจจุบัน: <strong>{formatMoney.format(row.cost)} บาท</strong>
            </span>
          )}
        </div>

        {error && <p className="dialog-error" role="alert">{error}</p>}

        <div className="dialog-actions">
          {row.isEdited && (
            <button className="utility-button" type="button" onClick={onRevert}>
              คืนค่าราคาเดิม
            </button>
          )}
          <button className="utility-button" type="button" onClick={onClose}>
            ยกเลิก
          </button>
          <button className="search-button" type="submit">
            บันทึกราคา
          </button>
        </div>
      </form>
    </dialog>
  );
}

// Add Data Modal Component
function AddDataModal({
  fromOptions,
  toOptions,
  vehicleOptions,
  provinceOptions,
  initialFrom,
  initialTo,
  initialProvince,
  onClose,
  onSave,
}) {
  const [formData, setFormData] = useState({
    from: initialFrom || '',
    to: initialTo || '',
    vehicleType: '',
    company: '',
    cost: '',
    receive: '',
    toProvince: initialProvince || '',
    toCity: '',
    toLocation: '',
    send: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const costNum = Number(formData.cost);
    if (!formData.from || !formData.to || !formData.vehicleType || !formData.company || !Number.isFinite(costNum) || costNum < 0) {
      setError('กรุณากรอก FROM, TO, ประเภทรถ, บริษัท และราคาต้นทุนให้ครบถ้วน');
      return;
    }
    onSave({
      ...formData,
      cost: costNum,
    });
  };

  return (
    <dialog className="data-dialog" open style={{ display: 'block', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 100 }}>
      <form className="data-form" onSubmit={handleSubmit}>
        <div className="dialog-heading">
          <div>
            <p className="field-label">รายการใหม่</p>
            <h2>เพิ่มข้อมูลต้นทุน</h2>
          </div>
          <button className="dialog-close" type="button" aria-label="ปิด" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="dialog-route-fields">
          <label className="field">
            <span className="field-label">FROM *</span>
            <input
              name="from"
              required
              list="modal-from-list"
              value={formData.from}
              onChange={handleChange}
              placeholder="พิมพ์หรือเลือกต้นทาง"
            />
            <datalist id="modal-from-list">
              {fromOptions.map((f) => (
                <option key={f} value={f} />
              ))}
            </datalist>
          </label>

          <label className="field">
            <span className="field-label">TO *</span>
            <input
              name="to"
              required
              list="modal-to-list"
              value={formData.to}
              onChange={handleChange}
              placeholder="พิมพ์หรือเลือกปลายทาง"
            />
            <datalist id="modal-to-list">
              {toOptions.map((t) => (
                <option key={t} value={t} />
              ))}
            </datalist>
          </label>
        </div>

        <label className="field">
          <span className="field-label">ประเภทรถ *</span>
          <input
            name="vehicleType"
            required
            list="modal-vehicle-list"
            value={formData.vehicleType}
            onChange={handleChange}
            placeholder="เช่น 6 ล้อ"
          />
          <datalist id="modal-vehicle-list">
            {vehicleOptions.map((v) => (
              <option key={v} value={v} />
            ))}
          </datalist>
        </label>

        <label className="field">
          <span className="field-label">บริษัท *</span>
          <input
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            placeholder="ชื่อบริษัท"
          />
        </label>

        <label className="field">
          <span className="field-label">ราคาต้นทุน (บาท) *</span>
          <input
            name="cost"
            required
            type="number"
            min="0"
            step="1"
            value={formData.cost}
            onChange={handleChange}
          />
        </label>

        <details className="optional-details">
          <summary>รายละเอียดเพิ่มเติม (ไม่บังคับ)</summary>
          <label className="field">
            <span className="field-label">รับ</span>
            <input name="receive" value={formData.receive} onChange={handleChange} />
          </label>
          <label className="field">
            <span className="field-label">To province</span>
            <input
              name="toProvince"
              list="modal-province-list"
              value={formData.toProvince}
              onChange={handleChange}
              placeholder="พิมพ์หรือเลือกจังหวัด"
            />
            <datalist id="modal-province-list">
              {provinceOptions.map((p) => (
                <option key={p} value={p} />
              ))}
            </datalist>
          </label>
          <label className="field">
            <span className="field-label">To City</span>
            <input name="toCity" value={formData.toCity} onChange={handleChange} />
          </label>
          <label className="field">
            <span className="field-label">To location</span>
            <input name="toLocation" value={formData.toLocation} onChange={handleChange} />
          </label>
          <label className="field">
            <span className="field-label">ส่ง</span>
            <input name="send" value={formData.send} onChange={handleChange} />
          </label>
        </details>

        {error && <p className="dialog-error" role="alert">{error}</p>}

        <div className="dialog-actions">
          <button className="utility-button" type="button" onClick={onClose}>
            ยกเลิก
          </button>
          <button className="search-button" type="submit">
            บันทึกข้อมูล
          </button>
        </div>
      </form>
    </dialog>
  );
}

