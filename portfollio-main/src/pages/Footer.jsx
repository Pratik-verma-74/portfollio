import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Footer.css";

/* ── Quick links for column 2 ── */
const QUICK_LINKS = [
  { label: "Home",         to: "/" },
  { label: "Projects",     to: "/projects" },
  { label: "Skills",       to: "/skills" },
  { label: "Certificates", to: "/certificates" },
  { label: "About",        to: "/about" },
  { label: "Experiences",  to: "/resume" },
  { label: "CV / Resume",  to: "/resume" },
  { label: "Gallery",      to: "/gallery" },
  { label: "Research",     to: "/blog" },
  { label: "Contact",      to: "/contact" },
];

/* ── Social links for column 3 ── */
const SOCIALS = [
  { icon: "💼", label: "LinkedIn",   href: "https://www.linkedin.com/in/pratik-verma-177b49299/" },
  { icon: "🐙", label: "GitHub",     href: "https://github.com/Pratik-verma-74" },
  { icon: "🤗", label: "HuggingFace",href: "" },
  { icon: "🐦", label: "Twitter / X",href: "#" },
  { icon: "📸", label: "Instagram",  href: "https://www.instagram.com/pratikverma025" },
  { icon: "▶️", label: "YouTube",    href: "#" },
  { icon: "📘", label: "Facebook",   href: "https://www.facebook.com/share/1Fzq4du9fn/" },
  { icon: "🔬", label: "ORCID",      href: "https://orcid.org/0009-0001-3417-3802" },
];

/* ── CV download buttons for column 4 ── */
const CVS = [
  { label: "Software Engineer",   file: "/resume.pdf" },
  { label: "AI & ML Engineer",    file: "/resume.pdf" },
  { label: "AI Automation Engineer",      file: "/resume.pdf" },
  { label: "VIBE CODER",   file: "/resume.pdf" },
];

/* Inline SVG download icon */
const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-grid">

        {/* ── COL 1: Brand ── */}
        <div className="footer-col">
          <div className="footer-brand-logo">PV</div>
          <div className="footer-brand-name">Pratik Verma</div>
          <p className="footer-brand-intro">
            AI Automation Engineer, Machine Learning enthusiast, and Frontend Developer
            building intelligent systems that combine logic, data, and real-world usability.
          </p>
          <p className="footer-brand-vision">
            "My goal is to grow as an AI Automation Engineer and contribute to impactful
            real-world projects in healthcare, productivity, and smart systems."
          </p>
        </div>

        {/* ── COL 2: Quick Links ── */}
        <div className="footer-col">
          <div className="footer-col-title">Quick Links</div>
          <ul className="footer-links">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── COL 3: Social / Follow Me ── */}
        <div className="footer-col">
          <div className="footer-col-title">Follow Me</div>
          <div className="footer-socials">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-item"
              >
                <span className="footer-social-icon">{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── COL 4: Download CVs ── */}
        <div className="footer-col">
          <div className="footer-col-title">Download CVs</div>
          <div className="footer-cv-list">
            {CVS.map((cv) => (
              <a
                key={cv.label}
                href={cv.file}
                download
                className="footer-cv-btn"
              >
                <DownloadIcon />
                {cv.label}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {year} Pratik Verma. All rights reserved.
        </p>
        <p className="footer-made">
          Built with <span>React</span> + <span>Framer Motion</span> · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}