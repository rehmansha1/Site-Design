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

      <div className="price-range-wrapper AttachedDropDown">
       {component == "price" && 
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
  component == "Availability"
  &&
  <div>
    <div>Available</div>
    <div>Out Of Stock</div>
    </div>
}
      </div>

</>
  );
}