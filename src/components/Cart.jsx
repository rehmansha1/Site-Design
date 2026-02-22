

import { useState } from "react";
import "../css/Cart.css";

const initialItems = [
  {
    id: 1,
    name: "Eren Yeager v4 Oversized Shirt",
    size: "xl",
    price: 999,
    qty: 7,
    imgBg: "#1a1a1a",
    imgLabel: "YEAGER",
  },
  {
    id: 2,
    name: "God Yato Noragami T-Shirt",
    size: "s",
    price: 799,
    qty: 2,
    imgBg: "#8aa8bc",
    imgLabel: "",
  },
  {
    id: 3,
    name: "God Yato Noragami T-Shirt",
    size: "2xl",
    price: 799,
    qty: 6,
    imgBg: "#8aa8bc",
    imgLabel: "",
  },
];

function TrashIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14H6L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4h6v2" />
    </svg>
  );
}

export default function Cart({ onClose }) {
  const [items, setItems] = useState(initialItems);

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalQty = items.reduce((s, i) => s + i.qty, 0);
  const estimatedTotal = items.reduce((s, i) => s + i.price * i.qty, 0);

  const fmt = (n) =>
    "Rs. " + n.toLocaleString("en-IN", { minimumFractionDigits: 2 });

  return (
    <div id="carty">
      {/* Header */}
      <div className="cart__header">
        <div className="cart__title-row">
          <span className="cart__title">Cart</span>
          <span className="cart__badge">{totalQty}</span>
        </div>
        <button className="cart__close-btn" onClick={()=>{onClose()}}>✕</button>
      </div>

      {/* Items */}
      {items.map((item) => ( 
        <div key={item.id} className="cart__item">
          {/* Thumbnail */}
          <div
            className="cart__thumb"
            style={{ background: item.imgBg }}
          >
            {item.imgLabel && (
              <span className="cart__thumb-label">{item.imgLabel}</span>
            )}
          </div>

          {/* Details */}
          <div className="cart__details">
            <div className="cart__item-top">
              <span className="cart__item-name">{item.name}</span>
              <span className="cart__item-total">{fmt(item.price * item.qty)}</span>
            </div>
            <div className="cart__item-size">{item.size}</div>
            <div className="cart__item-unit-price">{fmt(item.price)}</div>

            <div className="cart__controls">
              <div className="cart__qty-control">
                <button
                  className="cart__qty-btn"
                  onClick={() => updateQty(item.id, -1)}
                >
                  −
                </button>
                <span className="cart__qty-value">{item.qty}</span>
                <button
                  className="cart__qty-btn"
                  onClick={() => updateQty(item.id, 1)}
                >
                  +
                </button>
              </div>
              <button
                className="cart__delete-btn"
                onClick={() => removeItem(item.id)}
              >
                <TrashIcon />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Spacer */}
      <div className="cart__spacer" />

      {/* Discount */}
    <div className="cart__footer">
        <div className="cart__discount-row">
          <span className="cart__discount-label">Discount</span>
          <span className="cart__discount-plus">+</span>
        </div>

        <div className="cart__total-row">
          <span className="cart__total-label">Estimated total</span>
          <span className="cart__total-value">{fmt(estimatedTotal)}</span>
        </div>
        <p className="cart__tax-note">Taxes and shipping calculated at checkout.</p>

        <button className="cart__checkout-btn">Check out</button>
      </div>
    </div>
  );
}