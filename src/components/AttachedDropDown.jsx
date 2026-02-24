import React, { useState } from 'react'
import "../css/AttachedDropDown.css";
export default function AttachedDropDown({component,onClose}) {
const [min, setMin] = useState(0);
  const [max, setMax] = useState(3000);
  const [inStock, setInStock] = useState(true);
  const [outOfStock, setOutOfStock] = useState(true);
  const fmt = (val) =>
    Number(val).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const handleMin = (e) => {
    const v = parseFloat(e.target.value.replace(/,/g, "")) || 0;
    setMin(v);
  };

  const handleMax = (e) => {
    const v = parseFloat(e.target.value.replace(/,/g, "")) || 0;
    setMax(v);
  };

  return (
    <>

      <div className="price-range-wrapper AttachedDropDown">
       {component == "Availability" && 
        <>
        <div className="price-inputs-row">
          <div className="price-input-box">
            <span className="currency-symbol">₹</span>
            <input
              type="number"
              value={min}
              onChange={handleMin}
              min={0}
              max={max}
            />
          </div>
          <span className="separator">to</span>
          <div className="price-input-box">
            <span className="currency-symbol">₹</span>
            <input
              type="number"
              value={max}
              onChange={handleMax}
              min={min}
            />
          </div>
        </div>
        <span className="price-hint">
          The highest price is Rs. {fmt(3000)}
        </span>
        </>
}
{
  component == "price"
  &&
   <div style={{
      display: "inline-flex",
      flexDirection: "column",
      gap: 12,
      background: "#fff",
      borderRadius: 14,
      padding: "16px 20px",
      boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>
      {[
        { label: "In stock", checked: inStock, onChange: setInStock },
        { label: "Out of stock", checked: outOfStock, onChange: setOutOfStock },
      ].map(({ label, checked, onChange }) => (
        <label key={label} style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          cursor: "pointer",
          fontSize: 14,
          fontWeight: 400,
          color: "#111",
          whiteSpace: "nowrap",
          opacity:0.9,
        }}>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            style={{ display: "none" }}
          />
          <div style={{
            width: 18,
            height: 18,
            borderRadius: 6,
            border: "1.5px solid #ccc",
            background: checked ? "#111" : "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "background 0.15s, border-color 0.15s",
          }}>
            {checked && (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <polyline points="1.5,5 4,7.5 8.5,2.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          {label}
        </label>
      ))}
    </div>
}
      </div>

</>
  );
}