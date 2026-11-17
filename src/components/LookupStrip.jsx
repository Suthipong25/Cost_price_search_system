import React from 'react';
import {
  canonical,
  containsValue,
  matchesProvinceValue,
  provinceThaiName,
} from '../utils/formatters.js';

export default function LookupStrip({
  fromQuery,
  setFromQuery,
  selectedFrom,
  onSelectFrom,
  toQuery,
  setToQuery,
  provinceQuery,
  setProvinceQuery,
  selectedVehicle,
  setSelectedVehicle,
  activeDropdown,
  setActiveDropdown,
  fromOptions,
  toOptions,
  provinceOptions,
  availableVehicles,
  onSearch,
}) {
  const handleResetFilters = () => {
    setToQuery('');
    setProvinceQuery('');
    setSelectedVehicle('');
    setActiveDropdown(null);
  };

  return (
    <section className="search-console" aria-label="แถบค้นหาและตัวกรองเส้นทาง">
      <div className="search-console-header">
        <span className="search-console-title">ตัวกรองเส้นทางขนส่ง (Search Filters)</span>
        <div className="search-console-actions">
          {(toQuery || provinceQuery || selectedVehicle) && (
            <button
              type="button"
              className="reset-filters-btn"
              onClick={handleResetFilters}
              title="ล้างตัวกรองทั้งหมด"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" width="12" height="12">
                <path fill="none" stroke="currentColor" strokeWidth="2" d="M18 6L6 18M6 6l12 12" />
              </svg>
              ล้างตัวกรอง
            </button>
          )}
          <span className="search-console-hint">
            สลับช่องด้วย <kbd>Tab</kbd>
          </span>
        </div>
      </div>

      <form
        id="lookup-form"
        className="lookup-strip"
        onSubmit={(e) => {
          e.preventDefault();
          onSearch();
        }}
        noValidate
      >
        {/* FROM Field */}
        <label className="field field-from">
          <span className="field-label">
            ต้นทาง (FROM) <span className="field-required">*</span>
          </span>
          <span className="select-shell">
            <input
              id="from-input"
              name="from"
              type="text"
              placeholder="พิมพ์หรือเลือกต้นทาง..."
              autoComplete="off"
              value={fromQuery}
              onChange={(e) => {
                setFromQuery(e.target.value);
                const exact = fromOptions.find(
                  (opt) => canonical(opt) === canonical(e.target.value)
                );
                if (exact) {
                  onSelectFrom(exact);
                } else {
                  onSelectFrom('');
                }
                setActiveDropdown('from');
              }}
              onFocus={() => setActiveDropdown('from')}
              maxLength={100}
              required
            />
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="field-icon">
              <path d="m7 9.5 5 5 5-5" />
            </svg>

            {activeDropdown === 'from' && (
              <ul className="autocomplete-list" role="listbox">
                {fromOptions
                  .filter((v) => containsValue(v, fromQuery))
                  .slice(0, 40)
                  .map((val) => (
                    <li
                      key={val}
                      className="autocomplete-option"
                      onPointerDown={() => onSelectFrom(val)}
                    >
                      <span className="autocomplete-primary">{val}</span>
                    </li>
                  ))}
                {!fromOptions.some((v) => containsValue(v, fromQuery)) && (
                  <li className="autocomplete-empty">ไม่พบข้อมูลที่ตรงกับคำค้น</li>
                )}
              </ul>
            )}
          </span>
        </label>

        {/* Route Direction Connector */}
        <div className="route-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>

        {/* TO Field */}
        <label className="field field-to">
          <span className="field-label">ปลายทาง / นิคมฯ (TO LOCATION)</span>
          <span className="select-shell">
            <input
              id="to-input"
              name="to"
              type="text"
              placeholder="อำเภอ นิคมฯ หรือสถานที่..."
              autoComplete="off"
              disabled={!selectedFrom}
              value={toQuery}
              onChange={(e) => {
                setToQuery(e.target.value);
                setActiveDropdown('to');
              }}
              onFocus={() => selectedFrom && setActiveDropdown('to')}
              maxLength={150}
            />
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="field-icon">
              <path d="m7 9.5 5 5 5-5" />
            </svg>

            {activeDropdown === 'to' && (
              <ul className="autocomplete-list" role="listbox">
                {toOptions
                  .filter((v) => containsValue(v, toQuery))
                  .slice(0, 40)
                  .map((val) => (
                    <li
                      key={val}
                      className="autocomplete-option"
                      onPointerDown={() => {
                        setToQuery(val);
                        setActiveDropdown(null);
                      }}
                    >
                      <span className="autocomplete-primary">{val}</span>
                    </li>
                  ))}
                {!toOptions.some((v) => containsValue(v, toQuery)) && (
                  <li className="autocomplete-empty">ไม่พบข้อมูลที่ตรงกับคำค้น</li>
                )}
              </ul>
            )}
          </span>
        </label>

        {/* Province Field */}
        <label className="field field-province">
          <span className="field-label">จังหวัดปลายทาง (PROVINCE)</span>
          <span className="select-shell">
            <input
              id="province-input"
              name="province"
              type="text"
              placeholder="ค้นหาตามจังหวัด..."
              autoComplete="off"
              disabled={!selectedFrom}
              value={provinceQuery}
              onChange={(e) => {
                setProvinceQuery(e.target.value);
                setActiveDropdown('province');
              }}
              onFocus={() => selectedFrom && setActiveDropdown('province')}
              maxLength={100}
            />
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="field-icon">
              <path d="m7 9.5 5 5 5-5" />
            </svg>

            {activeDropdown === 'province' && (
              <ul className="autocomplete-list" role="listbox">
                {provinceOptions
                  .filter((v) => matchesProvinceValue(v, provinceQuery))
                  .slice(0, 40)
                  .map((val) => {
                    const thName = provinceThaiName(val);
                    return (
                      <li
                        key={val}
                        className="autocomplete-option"
                        onPointerDown={() => {
                          setProvinceQuery(val);
                          setActiveDropdown(null);
                        }}
                      >
                        <span className="autocomplete-primary">{val}</span>
                        {thName && <span className="autocomplete-secondary">{thName}</span>}
                      </li>
                    );
                  })}
                {!provinceOptions.some((v) => matchesProvinceValue(v, provinceQuery)) && (
                  <li className="autocomplete-empty">ไม่พบข้อมูลที่ตรงกับคำค้น</li>
                )}
              </ul>
            )}
          </span>
        </label>

        {/* Vehicle Field */}
        <label className="field field-vehicle">
          <span className="field-label">ประเภทรถ (VEHICLE)</span>
          <span className="select-shell">
            <select
              id="vehicle-input"
              name="vehicle"
              disabled={!selectedFrom || !availableVehicles.length}
              value={selectedVehicle}
              onChange={(e) => setSelectedVehicle(e.target.value)}
            >
              <option value="">ทุกประเภทรถ</option>
              {availableVehicles.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="field-icon">
              <path d="m7 9.5 5 5 5-5" />
            </svg>
          </span>
        </label>

        {/* Search Button (Controlled Red) */}
        <button
          id="search-button"
          className="search-button"
          type="button"
          disabled={!selectedFrom}
          onClick={onSearch}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="6" />
            <path d="m15.5 15.5 4.5 4.5" strokeWidth="2.5" />
          </svg>
          <span>ค้นหา</span>
        </button>
      </form>
    </section>
  );
}