# 🚛 ระบบค้นหาข้อมูลต้นทุนรถขนส่ง (Vehicle Cost Search System)

ระบบเปรียบเทียบและจัดการต้นทุนรถขนส่งสินค้าตามเส้นทางจากข้อมูลฝ่าย Logistics พร้อมคำนวณราคาขายตามอัตรากำไร (Margin) พัฒนาด้วย **React (Vite)** และเชื่อมต่อฐานข้อมูล **PostgreSQL** แบบ Real-time

---

## ✨ ไฮไลต์และความสามารถหลัก

- 🔍 **ค้นหาและกรองเส้นทางรวดเร็ว:** ค้นหาด้วย **FROM (ต้นทาง)**, **TO (ปลายทาง)**, จังหวัด (ไทย/อังกฤษ) และกรองตามประเภทรถ
- 🏷️ **ไฮไลต์ราคาต่ำสุด (Lowest Cost):** คำนวณและแสดงป้ายกำกับ `ต่ำสุด` สำหรับบริษัทที่เสนอราคาดีที่สุดในแต่ละประเภทรถ
- 📊 **คำนวณอัตรากำไรอัตโนมัติ:** แสดงราคาขายบวกกำไรครอบคลุมทุกระดับ **10%, 12%, 15%, 18%, 21%, 24%, 27%, 30%**
- ✏️ **แก้ไขราคาและเพิ่มเส้นทางได้ทันที:** มีฟอร์มแก้ไขราคา (พร้อมปุ่มคืนค่าเดิม) และฟอร์มเพิ่มเส้นทางใหม่ โดยบันทึกลงฐานข้อมูลทันที
- 📁 **รองรับการทำงานร่วมกับ Excel & SharePoint:**
  - นำเข้าไฟล์ `.xlsx` เพื่ออัปเดตราคาจาก SharePoint
  - ส่งออกผลลัพธ์เป็นไฟล์ Excel ล่าสุด
  - ปุ่มคัดลอกตารางเพื่อนำไปวางใน Excel ได้ทันที

---

## 🛠️ สถาปัตยกรรมระบบ (Tech Stack)

| ส่วนของระบบ | เทคโนโลยีที่ใช้ | รายละเอียด |
| :--- | :--- | :--- |
| **Frontend** | React 18, Vite | UI คมชัด ค้นหารวดเร็ว พร้อมระบบตัวช่วยพิมพ์ค้นหา |
| **Backend API** | Node.js, Express.js | จัดการ REST API สำหรับดึง แก้ไข และเพิ่มข้อมูลต้นทุน |
| **Database** | PostgreSQL | จัดเก็บข้อมูลต้นทุนในตาราง `vehicle_costs` ปลอดภัยและถาวร |
| **Office Tooling** | SheetJS (xlsx) | ประมวลผลและแปลงไฟล์สเปรดชีต Excel |

---

## 🚀 วิธีการเริ่มต้นใช้งาน (Quick Start)

### 1. ติดตั้ง Dependencies (ทำเฉพาะครั้งแรก)
```bash
npm install
```

### 2. ตั้งค่าการเชื่อมต่อฐานข้อมูล (`.env`)
คัดลอกไฟล์ `.env.example` เป็น `.env` แล้วระบุข้อมูลการเชื่อมต่อตามความเหมาะสม:
```env
PORT=5000
DB_HOST=your_db_host
DB_PORT=5432
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
```
> **หมายเหตุ:** ไฟล์ `.env` มีการใส่ไว้ใน `.gitignore` เรียบร้อยแล้ว เพื่อความปลอดภัย ห้ามนำไฟล์ `.env` ที่มีรหัสผ่านจริงขึ้น Git เด็ดขาด

### 3. สร้างตารางและนำเข้าข้อมูลตั้งต้น (Database Seeding)
ดับเบิลคลิกไฟล์ **`scripts/seed.bat`** หรือรันผ่าน Terminal:
```bash
npm run seed
```
*(ระบบจะสร้างตาราง `vehicle_costs` และนำเข้าข้อมูลตั้งต้น 464 เส้นทาง รวม 784 รายการราคาเข้าสู่ฐานข้อมูลอัตโนมัติ)*

### 4. เปิดใช้งานระบบ
ดับเบิลคลิกไฟล์ **`start_all.bat`** 
ระบบจะเปิดบริการทั้งสองส่วนพร้อมกัน:
- 🌐 **Frontend (Web):** [http://localhost:3000](http://localhost:3000)
- ⚙️ **Backend API:** [http://localhost:5000](http://localhost:5000)

---

## 📋 รายละเอียดคอลัมน์ในตาราง

| คอลัมน์ | รายละเอียด |
| :--- | :--- |
| **FROM** | สถานที่ต้นทาง (จุดรับสินค้า) |
| **รับ** | จุดรับสินค้าย่อย/คลังสินค้า |
| **To province** | จังหวัดปลายทาง |
| **To City** | อำเภอ/เมืองปลายทาง |
| **To location** | จุดส่งสินค้า/ชื่อโรงงานหรือนิคมฯ |
| **ส่ง** | รายละเอียดจุดส่ง |
| **ประเภทรถ** | ชนิดของรถบรรทุก เช่น 4W, 6W, 10W, เทรลเลอร์, หัวลากตู้สั้น/ยาว |
| **บริษัท** | ชื่อบริษัทขนส่งที่ให้บริการ |
| **ราคาต้นทุน** | ต้นทุนสุทธิ (แสดงป้าย *ต่ำสุด* หรือ *แก้ไขแล้ว*) |
| **10% – 30%** | ราคาขายที่คำนวณบวกกำไรตามสัดส่วน |

---

## 📂 โครงสร้างโฟลเดอร์โปรเจกต์ (Clean Architecture)

```text
Cost_price_search_system/
├── data/                              # ไฟล์ข้อมูลต้นทาง (Excel / Raw Data)
│   └── 2026.10.03 ราคาต้นทุนรถ.xlsx
├── server/                            # Backend API (Node.js + Express + PostgreSQL)
│   ├── db.js                          # Database Pool เชื่อมต่อ PostgreSQL แบบรวมศูนย์
│   ├── server.js                      # Express REST API Server
│   ├── seed.js                        # สคริปต์สร้างตารางและ Seed ข้อมูลลง Database
│   └── schema.sql                     # SQL DDL สร้างตาราง vehicle_costs และ Indexes
├── scripts/                           # สคริปต์คำสั่งและงานบำรุงรักษา
│   ├── seed.bat                       # สคริปต์นำเข้าข้อมูลเข้า PostgreSQL
│   ├── start_dev.bat                  # สคริปต์รันเฉพาะ Frontend สำหรับ Dev
│   ├── update_from_excel.bat          # สคริปต์อัปเดตข้อมูลจากไฟล์ Excel
│   └── update_from_excel.js           # โค้ดแปลงข้อมูล Excel ลงไฟล์ระบบ
├── src/                               # Frontend (React 18 + Vite)
│   ├── components/                    # แยก Component ตามหน้าที่ (Single Responsibility)
│   │   ├── Header.jsx                 # ส่วนหัวกระดาษและชื่อระบบ
│   │   ├── LookupStrip.jsx            # แถบค้นหา FROM/TO/จังหวัด/ประเภทรถ พร้อม Dropdown
│   │   ├── ResultToolbar.jsx          # แถบเครื่องมือจัดการ (SharePoint, Import, Export, Copy, Print)
│   │   ├── PriceTable.jsx             # ตารางแสดงราคา เปรียบเทียบ และคำนวณ Margin
│   │   ├── EditPriceModal.jsx         # Modal หน้าต่างแก้ไขราคาและปุ่มคืนค่าเดิม
│   │   ├── AddDataModal.jsx           # Modal หน้าต่างเพิ่มเส้นทางและข้อมูลใหม่
│   │   └── Toast.jsx                  # กล่องข้อความแจ้งเตือนสถานะการทำงาน
│   ├── constants/                     # ค่าคงที่ระบบ (Margin %, Storage Keys, ชื่อจังหวัด)
│   │   └── index.js
│   ├── services/                      # API Client สำหรับเรียกใช้งาน Backend REST API
│   │   └── api.js
│   ├── utils/                         # ฟังก์ชัน Utility (Formatters, ตรรกะค้นหา, จัดการ Excel)
│   │   ├── excel.js
│   │   └── formatters.js
│   ├── App.jsx                        # Root Controller Component
│   ├── main.jsx                       # จุดเริ่มต้น React application
│   ├── data.js                        # ข้อมูลสำรองตั้งต้นสำหรับระบบ
│   └── styles.css                     # สไตล์ตกแต่ง UI ระบบ
├── legacy/                            # ไฟล์ต้นแบบ Vanilla JS เดิม (แยกเก็บไว้เป็นประวัติ)
├── start_all.bat                      # [Main] ดับเบิลคลิกเพื่อเปิดทั้ง Backend และ Frontend ในคลิกเดียว
├── index.html                         # Entry HTML สำหรับ Vite
├── vite.config.js                     # การตั้งค่า Vite & Code Splitting
├── package.json                       # รายการ Dependencies และ NPM Scripts
├── .env.example                       # ตัวอย่างการตั้งค่าตัวแปรสภาพแวดล้อม
└── README.md                          # คู่มือการใช้งานระบบ
```

---


