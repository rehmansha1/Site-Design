import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import AttachedDropDown from "./components/AttachedDropDown";

// ── ICONS ──
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const CartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const Grid4Icon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <rect x="2" y="2" width="7" height="7" rx="0.5" />
    <rect x="11" y="2" width="7" height="7" rx="0.5" />
    <rect x="2" y="11" width="7" height="7" rx="0.5" />
    <rect x="11" y="11" width="7" height="7" rx="0.5" />
  </svg>
);

const Grid9Icon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <rect x="1.5" y="1.5" width="5" height="5" rx="0.5" />
    <rect x="7.5" y="1.5" width="5" height="5" rx="0.5" />
    <rect x="13.5" y="1.5" width="5" height="5" rx="0.5" />
    <rect x="1.5" y="7.5" width="5" height="5" rx="0.5" />
    <rect x="7.5" y="7.5" width="5" height="5" rx="0.5" />
    <rect x="13.5" y="7.5" width="5" height="5" rx="0.5" />
    <rect x="1.5" y="13.5" width="5" height="5" rx="0.5" />
    <rect x="7.5" y="13.5" width="5" height="5" rx="0.5" />
    <rect x="13.5" y="13.5" width="5" height="5" rx="0.5" />
  </svg>
);

// Lightning-bolt "W" logo matching the screenshot
const Logo = () => (
  <svg width="26" height="44" viewBox="0 0 26 44" fill="none">
    <path
      d="M1 3 L7.5 36 L13 13 L18.5 36 L25 3"
      stroke="#1a1a1a"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line x1="13" y1="13" x2="13" y2="42" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const AddToCartIcon = ({ className, handleCick }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className={className} onClick={
    handleCick
  }>
    <circle cx="20" cy="20" r="20" fill="#2c2c2c" />
    {/* Cart */}
    <path d="M13 11L11 14v9a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 27 23v-9l-2-3z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <line x1="11" y1="14" x2="27" y2="14" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M23 17a3 3 0 0 1-6 0" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    {/* Plus */}
    <text x="25" y="30" fill="#fff" fontSize="10" fontWeight="900" fontFamily="sans-serif">+</text>
  </svg>
);
// ── PRODUCT DATA ──
const products = [
  {
    id: 1,
    name: "Black Clover Devil T-Shirt",
    price: "Rs. 799.00",
    bg: "#2c2c2c",
    img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&q=80",
  },
  {
    id: 2,
    name: "Eren Yeager Attack on Titan v3 Hoodie",
    price: "Rs. 1,599.00",
    bg: "#1a1a1a",
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&q=80",
  },
  {
    id: 3,
    name: "Eren Yeager v4 Oversized Shirt",
    price: "Rs. 999.00",
    bg: "#3a3a3a",
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&q=80",
  },
  {
    id: 4,
    name: "God Yato Noragami T-Shirt",
    price: "Rs. 799.00",
    bg: "#b8a98a",
    img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&q=80",
  },
  {
    id: 5,
    name: "Gojo v2 Baggy Hoodie",
    price: "Rs. 1,800.00",
    bg: "#6a8fbf",
    img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&q=80",
    soldOut: true,
  },
  {
    id: 6,
    name: "Gojo Baggy Hoodie",
    price: "Rs. 1,800.00",
    bg: "#7a9fbf",
    img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&q=80",
  },
  {
    id: 7,
    name: "Solo Leveling Oversized T-Shirt",
    price: "Rs. 899.00",
    bg: "#2e2e2e",
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&q=80",
  },
  {
    id: 8,
    name: "Blue Lock Isagi T-Shirt",
    price: "Rs. 799.00",
    bg: "#1a4fa0",
    img: "https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=500&q=80",
  },
  {
    id: 9,
    name: "Jujutsu Kaisen Hoodie",
    price: "Rs. 1,499.00",
    bg: "#e8e8e8",
    img: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=500&q=80",
  },
  {
    id: 10,
    name: "Demon Slayer Nezuko Hoodie",
    price: "Rs. 1,399.00",
    bg: "#dcdcdc",
    img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&q=80",
  },
];

export default function App() {
  const [activeView, setActiveView] = useState("grid4");
  const [scrolled, setScrolled] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup (VERY important)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [dest, setDest] = useState({ x: 0, y: 0 });
  const handleCick = (e, id) => {

    const origin = document.getElementsByClassName("cart-btn")[id].getBoundingClientRect();

    const dest = document.getElementById("cart").getBoundingClientRect();

    console.log(origin, dest);
    const deltaX = dest.left - origin.left;
    const deltaY = dest.top - origin.top;
    const flyer = document.getElementById("flyer");
    setOrigin({ x: origin.left, y: origin.top });
    setDest({ x: dest.left, y: dest.top });
    flyer.classList.add("animate");

  }
 const cartOnOpen = () => { 
    const cart = document.getElementById("carty");
    cart.style.right = "0%";
    const overlay = document.getElementById("overlayForCartMenu");
    overlay.classList.add("appear");

}
 const cartOnClose = () => { 
    const cart = document.getElementById("carty");
    cart.style.right = "-50%";
    const overlay = document.getElementById("overlayForCartMenu");
    overlay.classList.remove("appear");
}

  return (
    <>
<div id="overlayForCartMenu"></div>
    <div id="cartMenu">
      <Cart onClose = {cartOnClose}/>

    </div>
      {/* Announcement Bar */}
      <div id="flyer">
        <style>{`
  @keyframes flyToCart {
    0%   { transform: translate(${origin.x}, ${origin.y}) scale(1); opacity: 1; }
    99% { transform: translate(${dest.x}px, ${dest.y}px) scale(1); opacity: 1; }
        100% { transform: translate(${origin.x}px, ${origin.y}px) scale(1); opacity: 1; }

  }
`}</style>
</div>
      <div className={scrolled ? "ann-bar scrolled" : "ann-bar"}>
        Free gift with every prepaid order&nbsp;🎁
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <a href="#">Home</a>
          <a href="#">All Products</a>
          <a href="#">Contact</a>
          <a href="#">About Us</a>
        </div>

        <div className="nav-logo">
          <Logo />
        </div>

        <div className="nav-right">
          <button className="icon-btn" aria-label="Search">
            <SearchIcon />
          </button>
          <button className="icon-btn" aria-label="Account">
            <UserIcon />
          </button>
          <button className="icon-btn" aria-label="Cart" style={{ position: "relative" }} id="cart" onClick={()=>{
cartOnOpen()
          }}>
            <CartIcon />
            <span className="cart-count">0</span>
          </button>
        </div>
      </nav>

      {/* Page Content */}
      <main className="page">
        <h1 className="page-title">Products</h1>

        {/* Filter / Sort Row */}
        <div className="filter-row">
          <div className="filter-left">
            <button className="filter-pill">

              Availability <ChevronDown />
            </button>
            <button className="filter-pill" onClick={()=>{
              document.getElementById("AttachedDropDown").classList.toggle("visible");
            }}>
              <AttachedDropDown component = {"price"}/>
              Price <ChevronDown />
            </button>
          </div>
          <div className="filter-right">
            <span className="item-count">17 items</span>
            <button className="sort-control">
              Sort <ChevronDown />
            </button>
            <div className="view-toggle">
              <button
                className={`view-btn ${activeView === "grid4" ? "active" : ""}`}
                onClick={() => setActiveView("grid4")}
                aria-label="Grid view"
              >
                <Grid4Icon />
              </button>
              <button
                className={`view-btn ${activeView === "grid9" ? "active" : ""}`}
                onClick={() => setActiveView("grid9")}
                aria-label="Compact grid view"
              >
                <Grid9Icon />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {products.map((p) => (
            <div key={p.id} className="product-card">
              <div
                className="product-img-box"
                style={{ background: p.bg }}
                onMouseEnter={() => setHoveredId(p.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img src={p.img} alt={p.name} />
                {p.soldOut && <span className="sold-badge">Sold out</span>}

                {hoveredId === p.id ? (
                  <AddToCartIcon className={"cart-btn hovered"} handleCick={(e) => handleCick(e, p.id)} />
                ) : (<AddToCartIcon className={"cart-btn"} handleCick={() => { }} />
                )}
              </div>
              <div className="product-name">{p.name}</div>
              <div className="product-price">{p.price}</div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}