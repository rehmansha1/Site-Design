import { useState } from "react";

const NAV_LINKS = ["Home", "All Products", "Contact", "About Us"];

const SIZES = ["s", "m", "l", "xl", "2xl"];

const RELATED = [
  {
    name: "Roronoa Zoro v4 Limited Edition Unisex Shirt",
    price: "Rs. 999.00",
    bg: "#2d5a3d",
    label: "THE HEAVYWEIGHT FRENCH TERRY TEE\nTHAT HUGS YOU LIKE A COZY SWEATER",
    textColor: "#c8b96e",
    img: "zoro-shirt",
  },
  {
    name: "Roronoa Zoro v4 One Piece Hoodie",
    price: "Rs. 2,200.00",
    bg: "#111",
    img: "zoro-hoodie",
  },
  {
    name: "Luffy Gear 5 One Piece T-Shirt",
    price: "Rs. 979.00",
    bg: "#e8edf3",
    img: "luffy-shirt",
  },
];

const FAQS = [
  "Do you ship to my country?",
  "What if I receive a damaged or incorrect item?",
  "What payment methods do you accept?",
  "How long does delivery take?",
  "Will I get tracking info?",
];

const FOOTER_LINKS = ["About Us", "Contact", "Terms & Conditions", "Shipping Policy", "Refund/Returns", "Privacy Policy"];

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState("s");
  const [qty, setQty] = useState(1);
  const [openFaq, setOpenFaq] = useState(null);
  const [email, setEmail] = useState("");

  return (
    <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", color: "#111", background: "#fff", minHeight: "100vh" }}>
      {/* NAV */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 40px", borderBottom: "1px solid #eee", position: "sticky", top: 0, background: "#fff", zIndex: 100 }}>
        <div style={{ display: "flex", gap: 32 }}>
          {NAV_LINKS.map((l) => (
            <a key={l} href="#" style={{ textDecoration: "none", color: "#111", fontSize: 14, fontWeight: 400 }}>{l}</a>
          ))}
        </div>
        <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: 1, fontFamily: "serif", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
          <svg width="28" height="36" viewBox="0 0 28 36" fill="none">
            <path d="M4 2 L14 34 L24 2 M9 18 L19 18" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <SearchIcon />
          <UserIcon />
          <div style={{ position: "relative" }}>
            <CartIcon />
            <span style={{ position: "absolute", top: -8, right: -8, background: "#111", color: "#fff", borderRadius: "50%", fontSize: 10, width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>27</span>
          </div>
        </div>
      </nav>

      {/* PRODUCT SECTION */}
      <div style={{ display: "flex", gap: 40, padding: "0 40px 60px", maxWidth: 1400, margin: "0 auto" }}>
        {/* LEFT: Images Grid */}
        <div style={{ flex: "0 0 60%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
          {/* Main shirt image */}
          <div style={{ background: "#f0f0f0", aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
            <YeagerShirtSVG />
          </div>
          {/* Texture close-up */}
          <div style={{ background: "#1a1a1a", aspectRatio: "1", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-end", padding: 24, position: "relative", overflow: "hidden" }}>
            <TexturePattern />
            <div style={{ position: "relative", zIndex: 2 }}>
              <p style={{ color: "#fff", fontFamily: "monospace", fontSize: 13, letterSpacing: 3, margin: "0 0 4px", textTransform: "uppercase", fontWeight: 700 }}>RICH TEXTURE</p>
              <p style={{ color: "#aaa", fontFamily: "monospace", fontSize: 10, letterSpacing: 2, margin: 0, textTransform: "uppercase" }}>FEELS AS PREMIUM AS IT LOOKS</p>
            </div>
          </div>
          {/* Denim patchwork */}
          <div style={{ background: "#0d0d0d", aspectRatio: "1", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-end", padding: 24, position: "relative", overflow: "hidden" }}>
            <DenimPattern />
            <div style={{ position: "relative", zIndex: 2 }}>
              <p style={{ color: "#fff", fontFamily: "monospace", fontSize: 13, letterSpacing: 3, margin: "0 0 4px", textTransform: "uppercase", fontWeight: 700 }}>DENIM</p>
              <p style={{ color: "#aaa", fontFamily: "monospace", fontSize: 10, letterSpacing: 2, margin: "0 0 2px", textTransform: "uppercase" }}>PATCHWORK EFFECT</p>
              <p style={{ color: "#aaa", fontFamily: "monospace", fontSize: 10, letterSpacing: 2, margin: 0, textTransform: "uppercase" }}>WITH BATTLE-WORN TEXTURE</p>
            </div>
          </div>
          {/* Model photo */}
          <div style={{ background: "#3a4a35", aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
            <ModelSVG />
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div style={{ flex: 1, paddingTop: 40 }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 8px", lineHeight: 1.2 }}>Eren Yeager v4<br />Oversized Shirt</h1>
          <p style={{ fontSize: 16, margin: "0 0 32px", color: "#111" }}>Rs. 999.00</p>

          <div style={{ marginBottom: 24 }}>
            <p style={{ fontSize: 13, fontWeight: 500, margin: "0 0 12px" }}>Size</p>
            <div style={{ display: "flex", gap: 8 }}>
              {SIZES.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  style={{
                    width: 48, height: 48, border: selectedSize === s ? "none" : "1px solid #ddd",
                    borderRadius: 4, background: selectedSize === s ? "#111" : "#fff",
                    color: selectedSize === s ? "#fff" : "#111", fontSize: 13,
                    cursor: "pointer", fontWeight: 500, transition: "all 0.15s"
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <a href="#" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#555", textDecoration: "none", marginBottom: 24 }}>
            <span>📏</span> Size chart
          </a>

          {/* Qty + Add to cart */}
          <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", border: "1px solid #ddd", borderRadius: 6, overflow: "hidden" }}>
              <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width: 40, height: 52, border: "none", background: "#fff", fontSize: 18, cursor: "pointer", color: "#111" }}>−</button>
              <span style={{ width: 40, textAlign: "center", fontSize: 14, fontWeight: 500 }}>{qty}</span>
              <button onClick={() => setQty(qty + 1)} style={{ width: 40, height: 52, border: "none", background: "#fff", fontSize: 18, cursor: "pointer", color: "#111" }}>+</button>
            </div>
            <button style={{ flex: 1, background: "#111", color: "#fff", border: "none", borderRadius: 6, fontSize: 15, fontWeight: 600, cursor: "pointer", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <CartIcon color="#fff" size={16} /> Add to cart
            </button>
          </div>

          <button style={{ width: "100%", background: "#111", color: "#fff", border: "none", borderRadius: 6, fontSize: 15, fontWeight: 600, cursor: "pointer", padding: "16px 24px", marginBottom: 28 }}>
            Buy it now
          </button>

          <p style={{ fontSize: 14, lineHeight: 1.65, color: "#333" }}>
            Attack on Titan (Shingeki no Kyojin) – <strong>Eren Yeager</strong> merch, designed with love by <strong>wylln.</strong> This design is printed on <strong>240GSM</strong> 100% cotton fabric that's naturally breathable and lightweight with a sheer finish which gives our prints the looks it deserves and you, the comfort and quality you desire.
          </p>
        </div>
      </div>

      {/* YOU MAY ALSO LIKE */}
      <div style={{ padding: "40px 40px 60px", maxWidth: 1400, margin: "0 auto" }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 24 }}>You may also like</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 32 }}>
          {RELATED.map((item, i) => (
            <div key={i} style={{ cursor: "pointer" }}>
              <div style={{ background: item.bg, borderRadius: 4, aspectRatio: "1", display: "flex", alignItems: "flex-end", justifyContent: "center", marginBottom: 12, overflow: "hidden", position: "relative" }}>
                {i === 0 && <ZoroShirtSVG />}
                {i === 1 && <ZoroHoodieSVG />}
                {i === 2 && <LuffyShirtSVG />}
                {item.label && (
                  <div style={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
                    <p style={{ color: item.textColor || "#fff", fontFamily: "monospace", fontSize: 9, letterSpacing: 2, margin: 0, textTransform: "uppercase", whiteSpace: "pre-line" }}>{item.label}</p>
                  </div>
                )}
                {i === 2 && (
                  <div style={{ position: "absolute", bottom: 12, right: 12 }}>
                    <button style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid #ddd", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>↻</button>
                  </div>
                )}
              </div>
              <p style={{ fontSize: 14, margin: "0 0 4px", fontWeight: 400 }}>{item.name}</p>
              <p style={{ fontSize: 14, margin: 0, color: "#111" }}>{item.price}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <button style={{ background: "#111", color: "#fff", border: "none", borderRadius: 6, padding: "16px 0", width: "100%", maxWidth: 520, fontSize: 15, fontWeight: 600, cursor: "pointer" }}>View more</button>
        </div>
      </div>

      {/* TRUST BADGES */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
        {[
          { icon: "♡", title: "PREMIUM PRINTS", desc: "If you don't find it premium enough, the return is on us." },
          { icon: "✈", title: "WORLDWIDE SHIPPING", desc: "Get your orders delivered to you anywhere in the world" },
          { icon: "🔒", title: "SECURE PAYMENT", desc: "Your payment information is processed securely." },
        ].map((b, i) => (
          <div key={i} style={{ padding: "40px 32px", textAlign: "center", borderRight: i < 2 ? "1px solid #eee" : "none" }}>
            <div style={{ fontSize: 24, marginBottom: 12 }}>{b.icon}</div>
            <p style={{ fontSize: 14, fontWeight: 700, margin: "0 0 8px", letterSpacing: 1, textTransform: "uppercase" }}>{b.title}</p>
            <p style={{ fontSize: 13, color: "#666", margin: 0, lineHeight: 1.5 }}>{b.desc}</p>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 40px" }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 32 }}>Frequently asked questions</h2>
        {FAQS.map((q, i) => (
          <div key={i} style={{ borderBottom: "1px solid #e5e5e5" }}>
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              style={{ width: "100%", background: "none", border: "none", padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", fontSize: 14, color: "#111", textAlign: "left" }}
            >
              {q}
              <span style={{ fontSize: 18, transform: openFaq === i ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>⌄</span>
            </button>
            {openFaq === i && (
              <div style={{ paddingBottom: 16, fontSize: 14, color: "#555", lineHeight: 1.6 }}>
                Please contact us for more details about this question.
              </div>
            )}
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer style={{ background: "#111", color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "48px 60px", borderBottom: "1px solid #333" }}>
          <div>
            <p style={{ fontSize: 18, fontWeight: 700, margin: "0 0 6px" }}>Join our email list</p>
            <p style={{ fontSize: 13, color: "#999", margin: 0 }}>Get exclusive deals and early access to new products.</p>
          </div>
          <div style={{ display: "flex", gap: 0, maxWidth: 480, width: "100%" }}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              style={{ flex: 1, background: "#2a2a2a", border: "none", borderRadius: "24px 0 0 24px", padding: "14px 20px", color: "#fff", fontSize: 14, outline: "none" }}
            />
            <button style={{ background: "#2a2a2a", border: "none", borderRadius: "0 24px 24px 0", padding: "14px 20px", color: "#fff", cursor: "pointer", fontSize: 16 }}>→</button>
          </div>
        </div>
        <div style={{ padding: "40px 60px", textAlign: "center" }}>
          <p style={{ fontFamily: "'Courier New', monospace", fontSize: 42, fontWeight: 900, color: "#c8e64a", letterSpacing: 4, margin: "0 0 32px", textTransform: "uppercase" }}>WYLLN</p>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
            {FOOTER_LINKS.map((l) => (
              <a key={l} href="#" style={{ color: "#ccc", fontSize: 13, textDecoration: "none" }}>{l}</a>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ color: "#666", fontSize: 12, margin: 0 }}>© 2026 Wylln ✕ ⭐</p>
            <a href="#" style={{ color: "#ccc", textDecoration: "none", fontSize: 20 }}>📷</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── ICONS ── */
function SearchIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>;
}
function UserIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
}
function CartIcon({ color = "#111", size = 20 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>;
}

/* ── ILLUSTRATIVE SVGS ── */
function YeagerShirtSVG() {
  return (
    <svg viewBox="0 0 300 320" width="80%" style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.15))" }}>
      {/* shirt body */}
      <path d="M60 80 L30 120 L65 140 L65 280 L235 280 L235 140 L270 120 L240 80 L200 60 Q175 50 150 50 Q125 50 100 60 Z" fill="#222" />
      {/* sleeves */}
      <path d="M60 80 L30 120 L65 140 L90 100 Z" fill="#1a1a1a" />
      <path d="M240 80 L270 120 L235 140 L210 100 Z" fill="#1a1a1a" />
      {/* worn texture */}
      <path d="M80 90 Q90 85 100 92 Q110 88 120 95" stroke="#444" strokeWidth="1" fill="none" opacity="0.5"/>
      <path d="M180 88 Q195 82 210 90 Q220 85 230 92" stroke="#444" strokeWidth="1" fill="none" opacity="0.5"/>
      {/* YEAGER text */}
      <text x="150" y="155" textAnchor="middle" fill="#eee" fontSize="28" fontWeight="900" fontFamily="serif" letterSpacing="4" style={{filter:"blur(0.2px)"}}>YEAGER</text>
      {/* figure */}
      <ellipse cx="150" cy="195" rx="30" ry="45" fill="#333" />
      <circle cx="150" cy="155" r="18" fill="#2a2a2a" />
      {/* distress lines */}
      <line x1="85" y1="180" x2="95" y2="230" stroke="#555" strokeWidth="1" opacity="0.4"/>
      <line x1="200" y1="175" x2="210" y2="225" stroke="#555" strokeWidth="1" opacity="0.4"/>
      <line x1="130" y1="240" x2="170" y2="242" stroke="#555" strokeWidth="0.5" opacity="0.3"/>
    </svg>
  );
}

function TexturePattern() {
  return (
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.4 }} viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
      {Array.from({ length: 30 }).map((_, i) => (
        <line key={i} x1={Math.random()*200} y1={Math.random()*200} x2={Math.random()*200} y2={Math.random()*200} stroke="#eee" strokeWidth={Math.random()*2} />
      ))}
    </svg>
  );
}

function DenimPattern() {
  return (
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.35 }} viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
      {Array.from({ length: 20 }).map((_, i) => (
        <rect key={i} x={Math.random()*180} y={Math.random()*180} width={10+Math.random()*30} height={10+Math.random()*30} fill="none" stroke="#666" strokeWidth="1" />
      ))}
    </svg>
  );
}

function ZoroShirtSVG() {
  return (
    <svg viewBox="0 0 300 320" width="70%">
      <path d="M60 80 L30 120 L65 140 L65 280 L235 280 L235 140 L270 120 L240 80 L200 60 Q175 50 150 50 Q125 50 100 60 Z" fill="#1a4a2a" />
      <path d="M60 80 L30 120 L65 140 L90 100 Z" fill="#153820" />
      <path d="M240 80 L270 120 L235 140 L210 100 Z" fill="#153820" />
      <text x="150" y="175" textAnchor="middle" fill="#c8b96e" fontSize="18" fontWeight="700" fontFamily="serif" letterSpacing="6">roronoa</text>
      <ellipse cx="150" cy="135" rx="28" ry="42" fill="#1d5030" opacity="0.8"/>
    </svg>
  );
}

function ZoroHoodieSVG() {
  return (
    <svg viewBox="0 0 300 340" width="65%">
      <path d="M55 90 Q50 70 70 50 Q100 30 150 30 Q200 30 230 50 Q250 70 245 90 L270 130 L235 148 L220 100 L220 310 L80 310 L80 100 L65 148 L30 130 Z" fill="#111" />
      <path d="M120 30 Q135 55 150 60 Q165 55 180 30" fill="#0a0a0a" />
      <ellipse cx="150" cy="45" rx="30" ry="20" fill="#0d0d0d" />
      <text x="150" y="200" textAnchor="middle" fill="#555" fontSize="16" fontWeight="700" fontFamily="serif" letterSpacing="5">roronoa</text>
      <ellipse cx="150" cy="160" rx="24" ry="36" fill="#1a1a1a" opacity="0.7"/>
    </svg>
  );
}

function LuffyShirtSVG() {
  return (
    <svg viewBox="0 0 300 320" width="70%">
      <path d="M60 80 L30 120 L65 140 L65 280 L235 280 L235 140 L270 120 L240 80 L200 60 Q175 50 150 50 Q125 50 100 60 Z" fill="#f8f8f6" />
      <path d="M60 80 L30 120 L65 140 L90 100 Z" fill="#ebebeb" />
      <path d="M240 80 L270 120 L235 140 L210 100 Z" fill="#ebebeb" />
      {/* Luffy gear 5 figure */}
      <circle cx="150" cy="148" r="22" fill="#6b9be8" />
      <ellipse cx="150" cy="185" rx="20" ry="28" fill="#7aabec" />
      <circle cx="140" cy="195" r="9" fill="#5a8fdc" />
      <circle cx="160" cy="200" r="9" fill="#5a8fdc" />
      <circle cx="138" cy="215" r="7" fill="#4a7fcc" />
      <circle cx="162" cy="220" r="7" fill="#4a7fcc" />
    </svg>
  );
}

function ModelSVG() {
  return (
    <svg viewBox="0 0 300 320" width="100%" height="100%" style={{ objectFit: "cover" }}>
      <rect width="300" height="320" fill="#2d3d28" />
      {/* foliage suggestion */}
      {Array.from({ length: 15 }).map((_, i) => (
        <ellipse key={i} cx={30+i*17+Math.random()*20} cy={20+Math.random()*80} rx={20+Math.random()*30} ry={15+Math.random()*20} fill={`rgba(40,70,30,${0.4+Math.random()*0.4})`} />
      ))}
      {/* person silhouette */}
      <circle cx="150" cy="130" r="35" fill="#5a4a3a" />
      <rect x="115" y="160" width="70" height="90" rx="8" fill="#222" />
      {/* hair */}
      <path d="M120 115 Q150 100 180 115 Q185 100 175 90 Q155 75 130 85 Z" fill="#2a1a0a" />
    </svg>
  );
}