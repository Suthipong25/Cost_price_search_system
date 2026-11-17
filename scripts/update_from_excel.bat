@echo off
chcp 65001 > nul
cd /d "%~dp0\.."
echo กำลังอัปเดตข้อมูลราคาต้นทุนรถจากไฟล์ Excel ล่าสุด...
node scripts/update_from_excel.js
if %ERRORLEVEL% EQU 0 (
    echo.
    echo อัปเดตข้อมูลเสร็จสมบูรณ์!
) else (
    echo.
    echo เกิดข้อผิดพลาดในการอัปเดต กรุณาตรวจสอบว่ามีไฟล์ Excel ในโฟลเดอร์ data/
)
echo.
pause
