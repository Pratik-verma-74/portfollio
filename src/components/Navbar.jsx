import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { playClick } from "../utils/sfx";
import "../CSS/Navbar.css";

const links = [
  { label: "Home",         to: "/" },
  { label: "Projects",     to: "/projects" },
  { label: "GitHub",       to: "/github" },
  { label: "Skills",       to: "/skills" },
  { label: "Certificates", to: "/certificates" },
  { label: "Resume",       to: "/resume" },
  { label: "About Me",     to: "/about" },
  { label: "Gallery",      to: "/gallery" },
  { label: "Contact",      to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav className="nav">
        <NavLink to="/" className="nav-brand" onClick={playClick}>
          <motion.div
            className="nav-logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            PV
          </motion.div>
          <div className="nav-brand-text">
            <h1>Pratik Verma</h1>
            <div className="nav-tagline">AI Automation · Researcher · Developer</div>
          </div>
        </NavLink>

        {/* Desktop Links */}
        {!isMobile && (
          <div className="nav-links">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) => `nav-link-item${isActive ? " active" : ""}`}
                onClick={playClick}
              >
                {({ isActive }) => (
                  <div style={{ position: "relative" }}>
                    {l.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="nav-underline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                )}
              </NavLink>
            ))}
          </div>
        )}

        {/* Mobile Hamburger Button */}
        {isMobile && (
          <motion.button
            className="nav-hamburger"
            onClick={() => { setIsOpen(true); playClick(); }}
            whileTap={{ scale: 0.9 }}
          >
            ☰
          </motion.button>
        )}
      </nav>

      {/* Modern Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="nav-full-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <motion.button
              className="nav-menu-close"
              onClick={() => { setIsOpen(false); playClick(); }}
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.8 }}
            >
              ✕
            </motion.button>

            {/* Links Centered */}
            <div className="nav-menu-links">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    className={({ isActive }) => `nav-menu-link${isActive ? " active" : ""}`}
                    onClick={() => { setIsOpen(false); playClick(); }}
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}