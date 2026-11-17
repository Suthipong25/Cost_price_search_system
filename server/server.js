import express from 'express';
import cors from 'cors';
import pool from './db.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Helper: Format database rows into nested routes structure
function formatRoutesFromRows(rows) {
  const routesMap = new Map();
  const fromSet = new Set();
  const vehicleSet = new Set();

  for (const row of rows) {
    const from = row.from_location;
    const to = row.to_location;
    const vehicleType = row.vehicle_type;
    const cost = parseFloat(row.cost);
    const originalCost = parseFloat(row.original_cost || row.cost);
    const isEdited = Boolean(row.is_edited);

    fromSet.add(from);
    vehicleSet.add(vehicleType);

    const key = `${from.toUpperCase()}|||${to.toUpperCase()}|||${vehicleType.toUpperCase()}`;
    if (!routesMap.has(key)) {
      routesMap.set(key, {
        from,
        to,
        vehicleType,
        minCost: cost,
        minCompany: row.company,
        offers: [],
      });
    }

    const route = routesMap.get(key);
    const offer = {
      id: row.id,
      company: row.company,
      cost,
      originalCost,
      isEdited,
      sourceRow: row.source_row,
      receive: row.receive_location || '',
      toProvince: row.to_province || '',
      toCity: row.to_city || '',
      toLocation: row.to_detail_location || '',
      send: row.send_location || '',
    };

    route.offers.push(offer);
    if (cost < route.minCost) {
      route.minCost = cost;
      route.minCompany = row.company;
    }
  }

  return {
    sourceMeta: {
      source: 'PostgreSQL Database',
      database: process.env.DB_NAME || 'cost_price_db',
      routeRecords: routesMap.size,
      updatedAt: new Date().toISOString(),
    },
    vehicleTypes: Array.from(vehicleSet),
    fromValues: Array.from(fromSet).sort((a, b) => a.localeCompare(b, 'th')),
    routes: Array.from(routesMap.values()),
  };
}

// 1. ดึงข้อมูลราคาและเส้นทางทั้งหมด
app.get('/api/costs', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM vehicle_costs ORDER BY from_location, to_location, cost ASC'
    );
    const formatted = formatRoutesFromRows(result.rows);
    res.json(formatted);
  } catch (err) {
    console.error('Error fetching costs:', err);
    res.status(500).json({ error: 'ไม่สามารถดึงข้อมูลจากฐานข้อมูลได้', details: err.message });
  }
});

// 2. อัปเดตราคาต้นทุน
app.put('/api/costs/:id', async (req, res) => {
  const { id } = req.params;
  const { cost } = req.body;
  const numCost = parseFloat(cost);

  if (!Number.isFinite(numCost) || numCost < 0) {
    return res.status(400).json({ error: 'ราคาต้องเป็นตัวเลขมากกว่าหรือเท่ากับ 0' });
  }

  try {
    const checkRes = await pool.query('SELECT original_cost FROM vehicle_costs WHERE id = $1', [id]);
    if (checkRes.rows.length === 0) {
      return res.status(404).json({ error: 'ไม่พบรายการที่ต้องการแก้ไข' });
    }

    const originalCost = parseFloat(checkRes.rows[0].original_cost);
    const isEdited = Math.round(numCost) !== Math.round(originalCost);

    const updateRes = await pool.query(
      `UPDATE vehicle_costs 
       SET cost = $1, is_edited = $2, updated_at = NOW() 
       WHERE id = $3 
       RETURNING *`,
      [numCost, isEdited, id]
    );

    res.json({
      success: true,
      message: 'อัปเดตราคาสำเร็จ',
      item: updateRes.rows[0],
    });
  } catch (err) {
    console.error('Error updating cost:', err);
    res.status(500).json({ error: 'เกิดข้อผิดพลาดในการบันทึกราคา', details: err.message });
  }
});

// 3. คืนค่าราคาเดิม (Revert)
app.post('/api/costs/revert/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      `UPDATE vehicle_costs 
       SET cost = original_cost, is_edited = false, updated_at = NOW() 
       WHERE id = $1 
       RETURNING *`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'ไม่พบรายการที่ต้องการคืนค่า' });
    }

    res.json({
      success: true,
      message: 'คืนค่าราคาเดิมสำเร็จ',
      item: result.rows[0],
    });
  } catch (err) {
    console.error('Error reverting cost:', err);
    res.status(500).json({ error: 'เกิดข้อผิดพลาดในการคืนค่าราคาเดิม', details: err.message });
  }
});

// 4. เพิ่มข้อมูลใหม่
app.post('/api/costs', async (req, res) => {
  const {
    from,
    to,
    vehicleType,
    company,
    cost,
    receive = '',
    toProvince = '',
    toCity = '',
    toLocation = '',
    send = '',
  } = req.body;

  const numCost = parseFloat(cost);
  if (!from || !to || !vehicleType || !company || !Number.isFinite(numCost) || numCost < 0) {
    return res.status(400).json({ error: 'กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน' });
  }

  try {
    const insertRes = await pool.query(
      `INSERT INTO vehicle_costs 
        (from_location, to_location, receive_location, to_province, to_city, to_detail_location, send_location, vehicle_type, company, cost, original_cost, is_edited)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, false)
       RETURNING *`,
      [from, to, receive, toProvince, toCity, toLocation, send, vehicleType, company, numCost, numCost]
    );

    res.status(201).json({
      success: true,
      message: 'เพิ่มข้อมูลใหม่สำเร็จ',
      item: insertRes.rows[0],
    });
  } catch (err) {
    console.error('Error inserting cost:', err);
    res.status(500).json({ error: 'เกิดข้อผิดพลาดในการเพิ่มข้อมูล', details: err.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', serverTime: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`🚀 PostgreSQL Backend API Server รันอยู่ที่ http://localhost:${port}`);
});

export default app;
