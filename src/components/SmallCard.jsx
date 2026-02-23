import { useState, useRef, useEffect } from "react";
import "../css/SmallCard.css";


const LERP = 0.1; // smoothing factor (0 = no movement, 1 = instant)
const MAX_X = 10;
const MAX_Y = 8;

export default function SmallCard({ open, setOpen,title, price,productImage }) {
  const [selectedSize, setSelectedSize] = useState("s");
  const [quantity, setQuantity] = useState(1);
  const [closing, setClosing] = useState(false);
  const [added, setAdded] = useState(false);

  const modalRef  = useRef(null);
  const rectRef   = useRef(null);
  const rafRef    = useRef(null);
  const current   = useRef({ rx: 0, ry: 0 }); // current displayed values
  const target    = useRef({ rx: 0, ry: 0 }); // where we want to go
  const hovering  = useRef(false);

  const sizes = ["s", "m", "l", "xl", "2xl"];

  // Continuous lerp loop — runs while card is mounted
  useEffect(() => {
    const loop = () => {
      const el = modalRef.current;
      if (el) {
        const c = current.current;
        const t = target.current;

        c.rx += (t.rx - c.rx) * LERP;
        c.ry += (t.ry - c.ry) * LERP;

        // Stop updating when close enough (saves CPU when idle)
        const dist = Math.abs(t.rx - c.rx) + Math.abs(t.ry - c.ry);
        if (dist > 0.01) {
          el.style.transform = `rotateX(${c.rx}deg) rotateY(${c.ry}deg)`;
          el.style.boxShadow = `
            ${-c.ry * 2.5}px ${c.rx * 2 + 28}px 55px rgba(0,0,0,0.28),
            0 8px 16px rgba(0,0,0,0.12)
          `;
        }
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setAdded(false);
      setOpen(false);
    }, 200);
  };

  const handleMouseEnter = () => {
    hovering.current = true;
    // Cache rect once before any transform shifts the layout
    rectRef.current = modalRef.current?.getBoundingClientRect() ?? null;
  };

  const handleMouseMove = (e) => {
    const rect = rectRef.current;
    if (!rect || closing) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width  / 2;
    const cy = rect.height / 2;

    // Normalise -1 → 1, clamp so edges don't overshoot
    const nx = Math.max(-1, Math.min(1, (x - cx) / cx));
    const ny = Math.max(-1, Math.min(1, (y - cy) / cy));

    target.current.ry =  nx * MAX_X;
    target.current.rx = -ny * MAX_Y;
  };

  const handleMouseLeave = () => {
    hovering.current = false;
    rectRef.current  = null;
    target.current   = { rx: 0, ry: 0 }; // lerp back to flat
  };

  if (!open) return null;

  return (
    <div className={`overlay ${closing ? "closing" : ""}`} onClick={handleClose}>
      <div className={`modalWrapper ${closing ? "closing" : ""}`}>
        <div
          ref={modalRef}
          className="modal"
          onClick={(e) => e.stopPropagation()}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left: Image */}
          <div className="imageSection">
            <img src={productImage} alt="God Yato Noragami T-Shirt" className="mainImage" />
            <div className="thumbnailStrip">
              {[0, 1].map((i) => (
                <div key={i} className="thumbnail">
                  <img src={productImage} alt="" className="thumbnailImg" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div className="details">
            <button className="closeBtn" onClick={handleClose} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <h2 className="title">{title}</h2>
            <p className="price">{price}</p>

            <div>
              <p className="sizeLabel">Size</p>
              <div className="sizeGrid">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`sizeBtn ${selectedSize === size ? "active" : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="quantityRow">
              <div className="quantityControl">
                <button className="qtyBtn" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
                <span className="qtyDisplay">{quantity}</span>
                <button className="qtyBtn" onClick={() => setQuantity((q) => q + 1)}>+</button>
              </div>
              <button
                className={`addToCartBtn ${added ? "added" : ""}`}
                onClick={() => { if (!added) setAdded(true); setTimeout(() => {
                    document.getElementsByClassName("closeBtn")[0].click();
                }, 500);}}
              >
                <div className="btnSlot" >
                  {/* Default: "Add to cart" */}
                  <div className="btnContent btnDefault">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 01-8 0" />
                    </svg>
                    Add to cart
                  </div>
                  {/* Added state */}
                  <div className="btnContent btnAdded">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Added
                  </div>
                </div>
              </button>
            </div>

            <button className="buyNowBtn">Buy it now</button>
          </div>
        </div>
      </div>
    </div>
  );
}