import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../CSS/Navbar.css";

const links = [
  { label: "Home",         to: "/" },
  { label: "Projects",     to: "/projects" },
  { label: "Skills",       to: "/skills" },
  { label: "Certificates", to: "/certificates" },
  { label: "Resume",       to: "/resume" },
  { label: "About Me",     to: "/about" },
  { label: "Gallery",      to: "/gallery" },
  { label: "Contact",      to: "/contact" },
];

export default function Navbar() {
  const [isOpen,     setIsOpen]     = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navRef   = useRef(null);
  const linksRef = useRef(null);

  /* ── overflow detection (original logic preserved) ── */
  const checkOverflow = () => {
    if (!navRef.current || !linksRef.current) return;
    setShowButton(linksRef.current.scrollWidth > navRef.current.offsetWidth - 10);
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  /* close drawer on Escape */
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") setIsOpen(false); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  /* prevent body scroll while drawer is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* ── Main Navbar ── */}
      <nav ref={navRef} className="nav">

        {/* Brand */}
        <div className="nav-brand">
          <motion.div
            className="nav-logo"
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 14 }}
          >
            PV
          </motion.div>

          <div className="nav-brand-text">
            <h1>Pratik Verma</h1>
            <div className="nav-tagline">AI Automation · Researcher · Developer</div>
          </div>
        </div>

        {/* Desktop Links */}
        <div
          ref={linksRef}
          className="nav-links"
          style={{ display: showButton ? "none" : "flex" }}
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `nav-link-item${isActive ? " active" : ""}`
              }
            >
              {({ isActive }) => (
                <motion.div
                  whileHover={{ color: "var(--accent)" }}
                  transition={{ duration: 0.2 }}
                  style={{ position: "relative" }}
                >
                  {l.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="nav-underline"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0 }}
                      transition={{ duration: 0.25 }}
                    />
                  )}
                </motion.div>
              )}
            </NavLink>
          ))}
        </div>

        {/* Hamburger button */}
        {showButton && (
          <motion.button
            className="nav-hamburger"
            style={{ marginLeft: "auto" }}
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            whileTap={{ scale: 0.92 }}
          >
            {isOpen ? "✕" : "☰"}
          </motion.button>
        )}
      </nav>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isOpen && showButton && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              className="nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Right Side Drawer */}
            <motion.div
              className="nav-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            >
              {/* Close button */}
              <button
                className="nav-mobile-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>

              {/* Links */}
              <div className="nav-drawer-links">
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 + 0.1, duration: 0.2 }}
                  >
                    <NavLink
                      to={l.to}
                      end={l.to === "/"}
                      className={({ isActive }) =>
                        `nav-mobile-link${isActive ? " active" : ""}`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {l.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}