import React, { useRef } from 'react';
import { SHAREPOINT_URL } from '../constants/index.js';

export default function ResultToolbar({
  hasData,
  onImportExcel,
  onExportExcel,
  onOpenAddModal,
  onCopyClipboard,
}) {
  const fileInputRef = useRef(null);

  return (
    <div className="result-actions" role="toolbar" aria-label="เครื่องมือจัดการข้อมูล">
      <a
        id="sharepoint-link"
        className="utility-button sharepoint-button"
        href={SHAREPOINT_URL}
        target="_blank"
        rel="noopener noreferrer"
        title="เปิดไฟล์ Excel บน SharePoint เพื่อดูหรือแก้ไขราคา"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
        เปิด SharePoint
      </a>

      <button
        id="import-excel-button"
        className="utility-button"
        type="button"
        onClick={() => fileInputRef.current?.click()}
        title="นำเข้าไฟล์ Excel จาก SharePoint เพื่ออัปเดตราคาเป็นล่าสุด"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        อัปเดตจาก Excel
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept=".xlsx, .xls"
        style={{ display: 'none' }}
        onChange={onImportExcel}
      />

      <button
        id="export-excel-button"
        className="utility-button"
        type="button"
        onClick={onExportExcel}
        title="ส่งออกราคาปัจจุบันเป็นไฟล์ Excel สำหรับนำไปอัปโหลดทับบน SharePoint"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        ส่งออก Excel
      </button>

      <button
        id="copy-button"
        className="utility-button"
        type="button"
        disabled={!hasData}
        onClick={onCopyClipboard}
        title="คัดลอกตารางเพื่อนำไปวางใน Excel"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        คัดลอกตาราง
      </button>

      <button
        className="utility-button"
        type="button"
        onClick={() => window.print()}
        title="พิมพ์รายงานตารางราคา"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 9V4h10v5M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M7 14h10v6H7z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </svg>
        พิมพ์
      </button>

      <button
        id="add-data-button"
        className="utility-button primary-action-button"
        type="button"
        onClick={onOpenAddModal}
        title="เพิ่มเส้นทางและข้อมูลราคาใหม่ลงระบบ"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 4v16m8-8H4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        เพิ่มข้อมูลใหม่
      </button>
    </div>
  );
}