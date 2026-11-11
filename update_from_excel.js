import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as XLSX from 'xlsx';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function findExcelFile() {
  const files = fs.readdirSync(__dirname);
  const matched = files.find(f => f.endsWith('.xlsx') && !f.startsWith('~$') && f.includes('ราคาต้นทุนรถ'));
  return matched || '2026.10.03 ราคาต้นทุนรถ.xlsx';
}

function updateDataFromExcel(excelPath) {
  const fullPath = path.resolve(__dirname, excelPath);
  if (!fs.existsSync(fullPath)) {
    console.error(`ไม่พบไฟล์ Excel: ${excelPath}`);
    process.exit(1);
  }

  console.log(`กำลังอ่านไฟล์ Excel: ${excelPath}...`);
  const buf = fs.readFileSync(fullPath);
  const wb = XLSX.read(buf, { type: 'buffer' });
  const sheetName = wb.SheetNames.find(n => n.includes('ราคาต้นทุนรถ (by lo)')) || wb.SheetNames[0];
  const sheet = wb.Sheets[sheetName];
  if (!sheet) {
    console.error(`ไม่พบชีตราคาต้นทุนในไฟล์`);
    process.exit(1);
  }

  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
  const headerRow = rows[1];

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
            offers: []
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
          send
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

  const resultData = {
    sourceMeta: {
      workbook: path.basename(excelPath),
      sheet: sheetName,
      sourceRows: rows.length,
      routeRecords: routes.length,
      generatedAt: new Date().toISOString()
    },
    vehicleTypes: vehicleTypesOrdered,
    fromValues,
    routes
  };

  const outputJs = `window.VEHICLE_COST_DATA = ${JSON.stringify(resultData, null, 2)};\n`;
  const dataJsPath = path.resolve(__dirname, 'data.js');
  fs.writeFileSync(dataJsPath, outputJs, 'utf8');

  const srcDataJsPath = path.resolve(__dirname, 'src', 'data.js');
  const srcOutputJs = `const VEHICLE_COST_DATA = ${JSON.stringify(resultData, null, 2)};\nexport default VEHICLE_COST_DATA;\nexport { VEHICLE_COST_DATA };\n`;
  fs.writeFileSync(srcDataJsPath, srcOutputJs, 'utf8');

  console.log(`✅ อัปเดต data.js และ src/data.js สำเร็จ!`);
  console.log(`- จำนวนเส้นทาง: ${routes.length} รายการ`);
  console.log(`- จำนวนต้นทาง (FROM): ${fromValues.length} แห่ง`);
  console.log(`- จำนวนประเภทรถ: ${vehicleTypesOrdered.length} ประเภท`);
}

const targetFile = process.argv[2] || findExcelFile();
updateDataFromExcel(targetFile);
