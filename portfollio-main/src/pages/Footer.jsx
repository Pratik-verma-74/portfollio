import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Linkedin, 
  Github, 
  Instagram, 
  Twitter, 
  Youtube, 
  Facebook, 
  Globe, 
  FileText,
  Mail,
  ExternalLink,
  Download,
  ChevronRight
} from "lucide-react";
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
  { icon: <Linkedin size={18} />, label: "LinkedIn",   href: "https://www.linkedin.com/in/pratik-verma-177b49299/" },
  { icon: <Github size={18} />,   label: "GitHub",     href: "https://github.com/Pratik-verma-74" },
  { icon: <Globe size={18} />,    label: "HuggingFace",href: "#" }, // HuggingFace icon not in Lucide, using Globe or custom
  { icon: <Twitter size={18} />,  label: "Twitter / X",href: "#" },
  { icon: <Instagram size={18} />,label: "Instagram",  href: "https://www.instagram.com/pratikverma025" },
  { icon: <Youtube size={18} />,   label: "YouTube",    href: "#" },
  { icon: <Facebook size={18} />,  label: "Facebook",   href: "https://www.facebook.com/share/1Fzq4du9fn/" },
  { icon: <ExternalLink size={18} />, label: "ORCID",   href: "https://orcid.org/0009-0001-3417-3802" },
];

/* ── CV download buttons for column 4 ── */
const CVS = [
  { label: "Software Engineer",   file: "/resume.pdf" },
  { label: "AI & ML Engineer",    file: "/resume.pdf" },
  { label: "AI Automation Engineer",      file: "/resume.pdf" },
  { label: "VIBE CODER",   file: "/resume.pdf" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-glow"></div>
      
      <motion.div 
        className="footer-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        {/* ── COL 1: Brand ── */}
        <motion.div className="footer-col brand-col" variants={itemVariants}>
          <div className="footer-brand-logo">PV<span>.</span></div>
          <div className="footer-brand-name">Pratik Verma</div>
          <p className="footer-brand-intro">
            AI Automation Engineer & Full-Stack Developer crafting intelligent, 
            data-driven solutions for real-world impact.
          </p>
          <div className="footer-vision-card">
             <p className="footer-brand-vision">
              "Building systems that combine logic, data, and usability."
            </p>
          </div>
        </motion.div>

        {/* ── COL 2: Quick Links ── */}
        <motion.div className="footer-col" variants={itemVariants}>
          <div className="footer-col-title">Quick Links</div>
          <div className="footer-links-grid">
            {QUICK_LINKS.map((l) => (
              <Link key={l.label} to={l.to} className="footer-link-btn">
                <ChevronRight size={12} className="link-arrow" />
                {l.label}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* ── COL 3: Social / Follow Me ── */}
        <motion.div className="footer-col" variants={itemVariants}>
          <div className="footer-col-title">Connect</div>
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
                <span className="footer-social-label">{s.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── COL 4: Download CVs ── */}
        <motion.div className="footer-col" variants={itemVariants}>
          <div className="footer-col-title">Resources</div>
          <div className="footer-cv-list">
            {CVS.map((cv) => (
              <a
                key={cv.label}
                href={cv.file}
                download
                className="footer-cv-btn"
              >
                <Download size={16} />
                <span>{cv.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

      </motion.div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="footer-copy">
            © {year} <span>Pratik Verma</span>. All rights reserved.
          </p>
          <div className="footer-meta">
            <p className="footer-made">
              Built with <span className="tech">React</span> & <span className="tech">Framer Motion</span>
            </p>
            <div className="footer-status">
              <span className="status-dot"></span>
              Available for projects
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}