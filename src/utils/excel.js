import * as XLSX from 'xlsx';

export function parseWorkbook(buffer, fileName) {
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

export function exportRoutesToExcel(routes, percentages) {
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

  routes.forEach((route) => {
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
  return exportName;
}

export function formatTableForClipboard(displayRows, percentages) {
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
  return lines.join('\n');
}
