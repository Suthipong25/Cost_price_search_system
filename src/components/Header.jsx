import React from 'react';

export default function Header() {
  return (
    <header className="masthead">
      <div className="masthead-main">
        <div className="masthead-logo-wrap">
          <img
            src="/perkin-logo.png"
            alt="Perkin Logistics"
            className="company-logo"
            width="140"
            height="36"
            onError={(e) => {
              // Graceful fallback if image is missing
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div className="logo-fallback" style={{ display: 'none' }}>
            <span className="logo-badge">P</span>
            <span className="logo-text">PERKIN <strong>LOGISTICS</strong></span>
          </div>
        </div>

        <div className="masthead-title-wrap">
          <div className="masthead-breadcrumb">
            <span>Logistics Operations</span>
            <span className="breadcrumb-divider">/</span>
            <span>Commercial Pricing</span>
          </div>
          <h1 id="page-title">ระบบค้นหาต้นทุนรถขนส่งและคำนวณราคาขาย</h1>
          <p className="masthead-subtitle">
            Vehicle Freight Cost Database & Multi-Tier Margin Matrix · ฝ่ายปฏิบัติการขนส่ง
          </p>
        </div>
      </div>

      <div className="masthead-meta">
        <div className="department-tag">
          Perkin Logistics (Thailand) Co., Ltd.
        </div>
      </div>
    </header>
  );
}