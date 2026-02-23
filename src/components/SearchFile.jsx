import { useState, useEffect, useRef } from "react";

const products = [
  { id: 1, name: "Black Clover Devil T-Shirt", price: "Rs. 799.00", img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&q=80" },
  { id: 2, name: "Eren Yeager Attack on Titan v3 Hoodie", price: "Rs. 1,599.00", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
  { id: 3, name: "Eren Yeager v4 Oversized Shirt", price: "Rs. 999.00", img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
  { id: 4, name: "God Yato Noragami T-Shirt", price: "Rs. 799.00", img: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=400&q=80" },
  { id: 5, name: "Demon Slayer Tanjiro Tee", price: "Rs. 849.00", img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&q=80" },
  { id: 6, name: "Death Note Ryuk Oversized", price: "Rs. 899.00", img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80" },
  { id: 7, name: "Jujutsu Kaisen Hoodie", price: "Rs. 1,399.00", img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&q=80" },
  { id: 8, name: "One Piece Graphic Tee", price: "Rs. 749.00", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&q=80" },
];

const SearchIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="10.5" cy="10.5" r="6.5" /><line x1="15.5" y1="15.5" x2="21" y2="21" />
  </svg>
);

const CloseIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#"
      style={{ textDecoration: "none", color: "inherit", display: "block", cursor: "pointer" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        background: "#f4f4f4",
        borderRadius: 12,
        overflow: "hidden",
        aspectRatio: "3/4",
        marginBottom: 10,
      }}>
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        />
      </div>
      <p style={{ fontSize: 13, fontWeight: 500, color: "#111", lineHeight: 1.4, marginBottom: 4 }}>
        {product.name}
      </p>
      <p style={{ fontSize: 13, fontWeight: 600, color: "#111" }}>
        {product.price}
      </p>
    </a>
  );
}

function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const filtered = query.trim()
    ? products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
    : products;

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: 60,
        paddingLeft: 16,
        paddingRight: 16,
        zIndex: 100,
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? "all" : "none",
        transition: "opacity 0.25s ease",
      }}
    >
      <div style={{
        background: "#fff",
        borderRadius: 20,
        width: "100%",
        maxWidth: 720,
        maxHeight: "80vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 32px 80px rgba(0,0,0,0.25)",
        transform: isOpen ? "translateY(0) scale(1)" : "translateY(-16px) scale(0.98)",
        transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        fontFamily: "'DM Sans', sans-serif",
      }}>
        {/* Search bar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "20px 24px",
          borderBottom: "1px solid #f0f0f0",
          flexShrink: 0,
        }}>
          <span style={{ color: "#888", display: "flex" }}><SearchIcon /></span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              fontFamily: "inherit",
              fontSize: 16,
              color: "#111",
              background: "transparent",
            }}
          />
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#888",
              padding: 4,
              display: "flex",
              alignItems: "center",
              borderRadius: 6,
              transition: "color 0.15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = "#111"; e.currentTarget.style.background = "#f5f5f5"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "#888"; e.currentTarget.style.background = "none"; }}
          >
            <CloseIcon />
          </button>
        </div>

        {/* Body */}
        <div style={{ overflowY: "auto", padding: 24, flex: 1 }}>
          <p style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#111",
            marginBottom: 16,
          }}>
            Products
          </p>

          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 0", color: "#aaa", fontSize: 14 }}>
              No products found.
            </div>
          ) : (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
            }}>
              {filtered.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SearchFile({ isOpen, onClose}) {

  return (
      <SearchModal isOpen={isOpen} onClose={onClose} />
  );
}