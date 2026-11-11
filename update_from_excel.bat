@echo off
chcp 65001 > nul
echo กำลังอัปเดตข้อมูลราคาต้นทุนรถจากไฟล์ Excel ล่าสุด...
node update_from_excel.js
if %ERRORLEVEL% EQU 0 (
    echo.
    echo อัปเดตข้อมูลเสร็จสมบูรณ์! สามารถเปิด index.html เพื่อใช้งานได้ทันที
) else (
    echo.
    echo เกิดข้อผิดพลาดในการอัปเดต กรุณาตรวจสอบว่ามีไฟล์ Excel ในโฟลเดอร์นี้
)
echo.
pause

