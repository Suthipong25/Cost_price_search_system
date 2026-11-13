-- ==============================================================================
-- DATABASE SCHEMA: vehicle_costs
-- สำหรับระบบค้นหาราคาต้นทุนรถ (Cost Price Search System)
-- ==============================================================================

-- 1. ตารางเก็บข้อมูลราคาต้นทุนรถ
CREATE TABLE IF NOT EXISTS vehicle_costs (
    id SERIAL PRIMARY KEY,
    from_location VARCHAR(150) NOT NULL,         -- ต้นทาง เช่น บางกะดี43, Air BKK
    to_location VARCHAR(150) NOT NULL,           -- ปลายทาง เช่น WUS, กระทุ่มแบน
    receive_location VARCHAR(255) DEFAULT '',    -- จุดรับสินค้า
    to_province VARCHAR(150) DEFAULT '',         -- จังหวัดปลายทาง เช่น Ayutthaya, BKK
    to_city VARCHAR(150) DEFAULT '',             -- อำเภอ/เมืองปลายทาง
    to_detail_location VARCHAR(255) DEFAULT '',  -- สถานที่ปลายทาง
    send_location VARCHAR(255) DEFAULT '',       -- จุดส่งสินค้า
    vehicle_type VARCHAR(100) NOT NULL,          -- ประเภทรถ เช่น 6 ล้อ, ปิ๊กอัฟ, 10ล้อ
    company VARCHAR(200) NOT NULL,               -- ชื่อบริษัทขนส่ง
    cost NUMERIC(12, 2) NOT NULL,                -- ราคาต้นทุนปัจจุบัน
    original_cost NUMERIC(12, 2) NOT NULL,       -- ราคาต้นทุนเดิม (สำหรับปุ่มคืนค่า)
    is_edited BOOLEAN DEFAULT FALSE,             -- สถานะการแก้ไขราคา (true/false)
    source_row INT,                              -- แถวอ้างอิงจากไฟล์ Excel เดิม
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 2. ดัชนี (Indexes) เพื่อให้ค้นหาได้รวดเร็วทันใจ
CREATE INDEX IF NOT EXISTS idx_costs_from ON vehicle_costs (from_location);
CREATE INDEX IF NOT EXISTS idx_costs_to ON vehicle_costs (to_location);
CREATE INDEX IF NOT EXISTS idx_costs_province ON vehicle_costs (to_province);
CREATE INDEX IF NOT EXISTS idx_costs_vehicle ON vehicle_costs (vehicle_type);
