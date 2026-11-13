@echo off
chcp 65001 > nul
echo ========================================================
echo กำลังเริ่มต้นระบบค้นหาราคาต้นทุนรถ (React + PostgreSQL)
echo ========================================================
echo.
echo 1. เปิด Backend API Server (Node.js + PostgreSQL)...
start "Cost Price Backend API (Port 5000)" cmd /k "node server.js"

timeout /t 2 > nul

echo 2. เปิด React Frontend (Vite Port 3000)...
start "Cost Price Frontend (Port 3000)" cmd /k "npm run dev"

echo.
echo ✅ ระบบเริ่มทำงานเรียบร้อยแล้ว!
echo - Backend API:  http://localhost:5000/api/costs
echo - Frontend Web: http://localhost:3000
echo ========================================================
