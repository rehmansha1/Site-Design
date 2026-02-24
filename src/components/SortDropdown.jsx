import { useState } from "react";

const sortOptions = [
  "Featured",
  "Best selling",
  "Alphabetically, A-Z",
  "Alphabetically, Z-A",
  "Price, low to high",
  "Price, high to low",
  "Date, old to new",
  "Date, new to old",
];

export default function SortDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Alphabetically, A-Z");

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10,
          }}
        />
      )}

      <div style={{ position: "relative", display: "inline-block", zIndex: 11, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        {/* Trigger */}
        <button
          onClick={() => setOpen((o) => !o)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 13,
            fontWeight: 400,
            color: "#6b6b6b",
            padding: "4px 0",
            fontFamily: "inherit",
            zIndex:1
 
          }}
        >
          Sort
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
            }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {/* Dropdown */}
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 12px)",
            left: "50%",
            transform: open ? "translateX(-50%) translateY(0) scale(1)" : "translateX(-50%) translateY(-6px) scale(0.98)",
            background: "#fff",
            borderRadius: 20,
            boxShadow: "0 8px 40px rgba(0,0,0,0.13)",
            padding: "10px 0",
            minWidth: 220,
            zIndex: 11,
            opacity: open ? 1 : 0,
            pointerEvents: open ? "all" : "none",
            transition: "opacity 0.18s ease, transform 0.18s ease",
          }}
        >
          {sortOptions.map((option) => {
            const isSelected = option === selected;
            return (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  width: "100%",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "10px 20px",
                  fontSize: 15,
                  fontWeight: isSelected ? 600 : 400,
                  color: "#111",
                  textAlign: "left",
                  fontFamily: "inherit",
                  transition: "background 0.12s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#f5f5f5"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "none"; }}
              >
                {/* Checkmark for selected */}
                <span style={{ width: 16, flexShrink: 0, display: "flex", alignItems: "center" }}>
                  {isSelected && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </span>
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}