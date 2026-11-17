import React from 'react';
import { formatMoney } from '../utils/formatters.js';

export default function PriceTable({
  displayRows,
  percentages,
  selectedFrom,
  toQuery,
  provinceQuery,
  selectedVehicle,
  onEditRow,
}) {
  return (
    <div
      className="table-scroll"
      tabIndex={0}
      aria-label="ตารางรายละเอียดเส้นทาง ราคาต้นทุนแยกตามบริษัท และราคาบวกเปอร์เซ็นต์"
    >
      <table className="price-ledger">
        <thead>
          <tr>
            <th scope="col" className="sticky-col sticky-from">FROM</th>
            <th scope="col" className="col-sub">รับ</th>
            <th scope="col" className="col-province">To province</th>
            <th scope="col" className="col-city">To City</th>
            <th scope="col" className="sticky-col sticky-to">To location</th>
            <th scope="col" className="col-sub">ส่ง</th>
            <th scope="col" className="sticky-col sticky-vehicle">ประเภทรถ</th>
            <th scope="col" className="sticky-col sticky-company">บริษัท</th>
            <th scope="col" className="cost-column">
              ราคาต้นทุน (Net)
            </th>
            <th scope="col" className="margin-col">+10%</th>
            <th scope="col" className="margin-col">+12%</th>
            <th scope="col" className="margin-col">+15%</th>
            <th scope="col" className="margin-col margin-std">+18% (Std)</th>
            <th scope="col" className="margin-col">+21%</th>
            <th scope="col" className="margin-col">+24%</th>
            <th scope="col" className="margin-col">+27%</th>
            <th scope="col" className="margin-col">+30%</th>
          </tr>
        </thead>
        <tbody>
          {!selectedFrom ? (
            <tr className="empty-row">
              <td colSpan={17}>
                <div className="empty-message-wrap">
                  <p className="empty-title">กรุณาเลือกหรือค้นหาจุดรับสินค้า (FROM)</p>
                  <p className="empty-subtitle">ระบบจะแสดงข้อมูลราคาต้นทุนและเปรียบเทียบทุกบริษัทขนส่งในเส้นทางนั้น</p>
                </div>
              </td>
            </tr>
          ) : displayRows.length === 0 ? (
            <tr className="missing-row">
              <td colSpan={17}>
                <div className="missing-message-wrap">
                  <p className="missing-title">ไม่พบรายการราคาตามเงื่อนไขที่กำหนด</p>
                  <p className="missing-details">
                    ต้นทาง: <strong>{selectedFrom}</strong>
                    {toQuery && <> · ปลายทาง: <strong>{toQuery}</strong></>}
                    {provinceQuery && <> · จังหวัด: <strong>{provinceQuery}</strong></>}
                    {selectedVehicle && <> · ประเภทรถ: <strong>{selectedVehicle}</strong></>}
                  </p>
                </div>
              </td>
            </tr>
          ) : (
            displayRows.map((row, idx) => {
              const prices = percentages.map((p) => Math.round(row.cost * (1 + p)));
              return (
                <tr
                  key={`${row.from}-${row.to}-${row.vehicleType}-${row.company}-${idx}`}
                  className={`result-row ${row.isMin ? 'row-is-lowest' : ''}`}
                  style={{ animationDelay: `${Math.min(idx * 20, 240)}ms` }}
                >
                  <td className="sticky-col sticky-from font-medium">{row.from}</td>
                  <td className="col-sub text-muted">{row.receive || '—'}</td>
                  <td className="col-province text-muted">{row.toProvince || '—'}</td>
                  <td className="col-city text-muted">{row.toCity || '—'}</td>
                  <td className="sticky-col sticky-to font-medium">{row.toLocation || row.to || '—'}</td>
                  <td className="col-sub text-muted">{row.send || '—'}</td>
                  <td className="sticky-col sticky-vehicle">
                    <span className="vehicle-badge">{row.vehicleType}</span>
                  </td>
                  <td className="sticky-col sticky-company font-semibold">{row.company}</td>
                  <td className="cost-cell">
                    <div className="cost-display">
                      {row.isMin && (
                        <span className="badge-lowest" title="ราคาต่ำสุดของประเภทรถนี้">
                          ต่ำสุด
                        </span>
                      )}
                      {row.isEdited && (
                        <span
                          className="badge-edited"
                          title={`แก้ไขจากราคาเดิม: ${formatMoney.format(row.originalCost)} บาท`}
                        >
                          แก้ไขแล้ว
                        </span>
                      )}
                      <span className="cost-amount font-nums">{formatMoney.format(row.cost)}</span>
                      <button
                        type="button"
                        className="edit-cost-btn"
                        title={`แก้ไขราคา ${row.company}`}
                        aria-label={`แก้ไขราคา ${row.company} (${row.vehicleType})`}
                        onClick={() => onEditRow(row)}
                      >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" fill="none" stroke="currentColor" strokeWidth="2" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" fill="none" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="margin-cell font-nums">{formatMoney.format(prices[0])}</td>
                  <td className="margin-cell font-nums">{formatMoney.format(prices[1])}</td>
                  <td className="margin-cell font-nums">{formatMoney.format(prices[2])}</td>
                  <td className="margin-cell margin-std font-nums font-semibold">{formatMoney.format(prices[3])}</td>
                  <td className="margin-cell font-nums">{formatMoney.format(prices[4])}</td>
                  <td className="margin-cell font-nums">{formatMoney.format(prices[5])}</td>
                  <td className="margin-cell font-nums">{formatMoney.format(prices[6])}</td>
                  <td className="margin-cell font-nums font-semibold text-strong">{formatMoney.format(prices[7])}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}