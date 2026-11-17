import React, { useState } from 'react';

export default function AddDataModal({
  fromOptions,
  toOptions,
  vehicleOptions,
  provinceOptions,
  initialFrom,
  initialTo,
  initialProvince,
  onClose,
  onSave,
}) {
  const [formData, setFormData] = useState({
    from: initialFrom || '',
    to: initialTo || '',
    vehicleType: '',
    company: '',
    cost: '',
    receive: '',
    toProvince: initialProvince || '',
    toCity: '',
    toLocation: '',
    send: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const costNum = Number(formData.cost);
    if (
      !formData.from ||
      !formData.to ||
      !formData.vehicleType ||
      !formData.company ||
      !Number.isFinite(costNum) ||
      costNum < 0
    ) {
      setError('กรุณากรอก FROM, TO, ประเภทรถ, บริษัท และราคาต้นทุนให้ครบถ้วน');
      return;
    }
    onSave({
      ...formData,
      cost: costNum,
    });
  };

  return (
    <dialog
      className="data-dialog"
      open
      aria-labelledby="add-cost-title"
    >
      <form className="data-form" onSubmit={handleSubmit}>
        <div className="dialog-heading">
          <div>
            <p className="field-label">รายการใหม่</p>
            <h2 id="add-cost-title">เพิ่มข้อมูลต้นทุน</h2>
          </div>
          <button
            className="dialog-close"
            type="button"
            aria-label="ปิดหน้าต่างเพิ่มข้อมูล"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="dialog-body">
          <div className="dialog-route-fields">
            <label className="field">
              <span className="field-label">FROM *</span>
              <input
                name="from"
                required
                list="modal-from-list"
                value={formData.from}
                onChange={handleChange}
                placeholder="พิมพ์หรือเลือกต้นทาง"
              />
              <datalist id="modal-from-list">
                {fromOptions.map((f) => (
                  <option key={f} value={f} />
                ))}
              </datalist>
            </label>

            <label className="field">
              <span className="field-label">TO *</span>
              <input
                name="to"
                required
                list="modal-to-list"
                value={formData.to}
                onChange={handleChange}
                placeholder="พิมพ์หรือเลือกปลายทาง"
              />
              <datalist id="modal-to-list">
                {toOptions.map((t) => (
                  <option key={t} value={t} />
                ))}
              </datalist>
            </label>
          </div>

          <label className="field">
            <span className="field-label">ประเภทรถ *</span>
            <input
              name="vehicleType"
              required
              list="modal-vehicle-list"
              value={formData.vehicleType}
              onChange={handleChange}
              placeholder="เช่น 6 ล้อ"
            />
            <datalist id="modal-vehicle-list">
              {vehicleOptions.map((v) => (
                <option key={v} value={v} />
              ))}
            </datalist>
          </label>

          <label className="field">
            <span className="field-label">บริษัท *</span>
            <input
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              placeholder="ชื่อบริษัท"
            />
          </label>

          <label className="field">
            <span className="field-label">ราคาต้นทุน (บาท) *</span>
            <input
              name="cost"
              required
              type="number"
              min="0"
              step="1"
              value={formData.cost}
              onChange={handleChange}
            />
          </label>

          <details className="optional-details">
            <summary>รายละเอียดเพิ่มเติม (ไม่บังคับ)</summary>
            <div className="optional-content">
              <label className="field">
                <span className="field-label">รับ</span>
                <input name="receive" value={formData.receive} onChange={handleChange} placeholder="สถานที่รับสินค้า" />
              </label>
              <div className="dialog-grid-2">
                <label className="field">
                  <span className="field-label">To province</span>
                  <input
                    name="toProvince"
                    list="modal-province-list"
                    value={formData.toProvince}
                    onChange={handleChange}
                    placeholder="พิมพ์หรือเลือกจังหวัด"
                  />
                  <datalist id="modal-province-list">
                    {provinceOptions.map((p) => (
                      <option key={p} value={p} />
                    ))}
                  </datalist>
                </label>
                <label className="field">
                  <span className="field-label">To City</span>
                  <input name="toCity" value={formData.toCity} onChange={handleChange} placeholder="อำเภอ / เขต" />
                </label>
              </div>
              <div className="dialog-grid-2">
                <label className="field">
                  <span className="field-label">To location</span>
                  <input name="toLocation" value={formData.toLocation} onChange={handleChange} placeholder="สถานที่ปลายทาง" />
                </label>
                <label className="field">
                  <span className="field-label">ส่ง</span>
                  <input name="send" value={formData.send} onChange={handleChange} placeholder="จุดส่งสินค้า" />
                </label>
              </div>
            </div>
          </details>

          {error && (
            <p className="dialog-error" role="alert">
              {error}
            </p>
          )}
        </div>

        <div className="dialog-actions">
          <button className="utility-button" type="button" onClick={onClose}>
            ยกเลิก
          </button>
          <button className="search-button" type="submit">
            บันทึกข้อมูล
          </button>
        </div>
      </form>
    </dialog>
  );
}
