import React, { useState } from 'react'
import "../css/AttachedDropDown.css";
export default function AttachedDropDown({component}) {
const [min, setMin] = useState(0);
  const [max, setMax] = useState(3000);

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
    {component === "price" &&
      <div className="price-range-wrapper" id = 'AttachedDropDown'>
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
      </div>
}
</>
  );
}
