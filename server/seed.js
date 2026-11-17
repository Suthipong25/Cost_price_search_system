import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pool from './db.js';
import initialVehicleCostData from '../src/data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runSeed() {
  const client = await pool.connect();
  try {
    console.log(`🔌 เชื่อมต่อฐานข้อมูล: ${process.env.DB_NAME || 'cost_price_db'} สำเร็จ`);

    // 1. อ่านและรันไฟล์ schema.sql เพื่อสร้างตาราง
    const schemaSql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
    await client.query(schemaSql);
    console.log(`✅ ตาราง vehicle_costs พร้อมใช้งาน`);

    // 2. ตรวจสอบจำนวนข้อมูลเดิม
    const countRes = await client.query('SELECT COUNT(*) FROM vehicle_costs');
    const existingCount = parseInt(countRes.rows[0].count, 10);
    if (existingCount > 0) {
      console.log(`ℹ️ ในตารางมีข้อมูลอยู่แล้ว ${existingCount} รายการ (หากต้องการนำเข้าใหม่ ให้ล้างตารางก่อนด้วย TRUNCATE vehicle_costs;)`);
      return;
    }

    console.log(`⏳ กำลังนำเข้าข้อมูลตั้งต้น 464 เส้นทาง (740 รายการราคา) เข้าสู่ PostgreSQL...`);

    let totalInserted = 0;
    await client.query('BEGIN');

    for (const route of initialVehicleCostData.routes) {
      for (const offer of route.offers) {
        await client.query(
          `INSERT INTO vehicle_costs 
            (from_location, to_location, receive_location, to_province, to_city, to_detail_location, send_location, vehicle_type, company, cost, original_cost, is_edited, source_row)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
          [
            route.from,
            route.to,
            offer.receive || '',
            offer.toProvince || '',
            offer.toCity || '',
            offer.toLocation || '',
            offer.send || '',
            route.vehicleType,
            offer.company,
            offer.cost,
            offer.cost,
            false,
            offer.sourceRow || null,
          ]
        );
        totalInserted++;
      }
    }

    await client.query('COMMIT');
    console.log(`🎉 นำเข้าข้อมูลสำเร็จทั้งหมด ${totalInserted} รายการราคา!`);
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('❌ เกิดข้อผิดพลาดในการ seed ข้อมูล:', err.message);
  } finally {
    client.release();
    await pool.end();
  }
}

runSeed();
