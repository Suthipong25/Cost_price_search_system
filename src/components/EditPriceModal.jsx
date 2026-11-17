import React, { useState } from 'react';
import { formatMoney } from '../utils/formatters.js';

export default function EditPriceModal({ row, onClose, onSave, onRevert }) {
  const [costValue, setCostValue] = useState(row.cost);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = Number(costValue);
    if (!Number.isFinite(num) || num < 0) {
      setError('กรุณากรอกราคาต้นทุนที่ถูกต้อง (ตัวเลข 0 ขึ้นไป)');
      return;
    }
    onSave(num);
  };

  return (
    <dialog
      className="data-dialog"
      open
      aria-labelledby="edit-cost-title"
    >
      <form className="data-form" onSubmit={handleSubmit}>
        <div className="dialog-heading">
          <div>
            <p className="field-label">แก้ไขราคา</p>
            <h2 id="edit-cost-title">แก้ไขราคาต้นทุน</h2>
          </div>
          <button
            className="dialog-close"
            type="button"
            aria-label="ปิดหน้าต่างแก้ไขราคา"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="dialog-body">
          <div className="dialog-route-fields" aria-label="ข้อมูลเส้นทางที่กำลังแก้ไข">
            <div>
              <span className="field-label">เส้นทาง</span>
              <p className="dialog-static-text">
                {row.from} → {row.to}
              </p>
            </div>
            <div>
              <span className="field-label">ประเภทรถ / บริษัท</span>
              <p className="dialog-static-text">
                {row.vehicleType} · {row.company}
              </p>
            </div>
          </div>

          <label className="field">
            <span className="field-label">
              ราคาต้นทุนใหม่ (บาท) <span aria-hidden="true">*</span>
            </span>
            <input
              name="cost"
              type="number"
              min="0"
              step="1"
              autoFocus
              required
              value={costValue}
              onChange={(e) => setCostValue(e.target.value)}
            />
          </label>

          <div className="dialog-hint">
            {row.isEdited && row.originalCost !== row.cost ? (
              <span>
                ราคาเดิมจากไฟล์: <strong>{formatMoney.format(row.originalCost)} บาท</strong>{' '}
                (กำลังใช้ราคาแก้ไข)
              </span>
            ) : (
              <span>
                ราคาปัจจุบัน: <strong>{formatMoney.format(row.cost)} บาท</strong>
              </span>
            )}
          </div>

          {error && (
            <p className="dialog-error" role="alert">
              {error}
            </p>
          )}
        </div>

        <div className="dialog-actions">
          {row.isEdited && (
            <button className="utility-button" type="button" onClick={onRevert}>
              คืนค่าราคาเดิม
            </button>
          )}
          <button className="utility-button" type="button" onClick={onClose}>
            ยกเลิก
          </button>
          <button className="search-button" type="submit">
            บันทึกราคา
          </button>
        </div>
      </form>
    </dialog>
  );
}
