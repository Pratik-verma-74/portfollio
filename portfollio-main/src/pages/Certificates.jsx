import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CERTS = {
  tech: [
    {
      title: "Certificate Of Attendance — Amazon Web Services",
      org: "AWS",
      date: "10 April 2025",
      img: "/certs/flipkart.jpg",
      link: "/certs/flipkart.jpg",
    },
    {
      title: "Agentic AI Innovation Challenge",
      org: "Ready Tensor",
      date: "24 April 2025",
      img: "/certs/hack2skill.png",
      link: "/certs/hack2skill.png",
    },
    {
      title: "Web Development Hackathon",
      org: "GRAVITY CODING",
      date: "18 May 2025",
      img: "/certs/adira.png",
      link: "/certs/adira.png",
    },
  ],
  other: [
    {
      title: "Master in Python using AI",
      org: "SkillEcted",
      date: "16 May 2025",
      img: "/certs/codathon.png",
      link: "/certs/codathon.png",
    },
    {
      title: "Microsoft AI Fest Guinness World Record",
      org: "Microsoft",
      date: "8 April 2025",
      img: "/certs/bugbuzz.png",
      link: "/certs/bugbuzz.png",
    },
    {
      title: "Introduction to SQL",
      org: "Data Flair",
      date: "23 July 2023",
      img: "/certs/dataloom.png",
      link: "/certs/dataloom.png",
    },
  ],
};

export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      <style>{`
        .certs-section {
          width: 100%;
          min-height: 100vh;
          padding: 2.5rem 1.5rem;
          box-sizing: border-box;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
        .certs-inner {
          width: 100%;
          max-width: 1100px;
          background: #111;
          border-radius: 14px;
          padding: 1.8rem;
          box-sizing: border-box;
        }
        .certs-heading {
          font-size: clamp(1.4rem, 4vw, 1.8rem);
          color: #fff;
          margin-bottom: 0.3rem;
        }
        .certs-lead {
          color: #aaa;
          font-size: clamp(0.82rem, 2.5vw, 0.95rem);
          margin-bottom: 1.2rem;
        }
        .certs-tabs {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }
        .cert-tab-btn {
          padding: 8px 20px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: 500;
          font-size: clamp(0.82rem, 2.5vw, 0.92rem);
          transition: background 0.25s;
        }
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.2rem;
        }
        .cert-card {
          background: #1a1a1a;
          border-radius: 12px;
          padding: 1rem;
          color: #fff;
        }
        .cert-img {
          width: 100%;
          height: 150px;
          border-radius: 10px;
          object-fit: cover;
          margin-bottom: 10px;
          display: block;
        }
        .cert-title {
          font-size: clamp(0.82rem, 2.5vw, 0.95rem);
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 4px;
        }
        .cert-meta {
          font-size: clamp(0.75rem, 2vw, 0.82rem);
          color: #bbb;
          margin-bottom: 10px;
        }
        .cert-view-btn {
          background: #007bff;
          border: none;
          color: white;
          border-radius: 6px;
          padding: 6px 14px;
          cursor: pointer;
          font-size: clamp(0.78rem, 2vw, 0.88rem);
          transition: opacity 0.2s;
        }
        .cert-view-btn:hover { opacity: 0.85; }

        /* Modal */
        .cert-modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.85);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 1rem;
          box-sizing: border-box;
        }
        .cert-modal-img {
          max-width: 100%;
          max-height: 88vh;
          border-radius: 10px;
          box-shadow: 0 0 30px rgba(255,255,255,0.15);
          object-fit: contain;
          display: block;
        }

        @media (max-width: 768px) {
          .certs-section { padding: 1.5rem 1rem; }
          .certs-inner { padding: 1.4rem; }
          .cert-grid { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
        }
        @media (max-width: 480px) {
          .certs-section { padding: 1rem 0.75rem; }
          .certs-inner { padding: 1rem; border-radius: 10px; }
          .cert-grid { grid-template-columns: 1fr; }
          .cert-img { height: 180px; }
        }
      `}</style>

      <section className="certs-section">
        <motion.div 
          className="certs-inner"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="certs-heading">Certificates 🏅</h2>
          <p className="certs-lead">Explore my certifications — technical &amp; others.</p>

          {/* Tabs */}
          <div className="certs-tabs">
            {["tech", "other"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="cert-tab-btn"
                style={{
                  background: tab === t ? "#007bff" : "#333",
                  color: "#fff",
                }}
              >
                {t === "tech" ? "Tech" : "Others"}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="cert-grid">
            <AnimatePresence mode="wait">
              {CERTS[tab].map((c, idx) => (
                <motion.div
                  key={c.title}
                  className="cert-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 15px rgba(0,123,255,0.4)",
                  }}
                >
                  <img src={c.img} alt={c.title} className="cert-img" />
                  <p className="cert-title">{c.title}</p>
                  <p className="cert-meta">{c.org} • {c.date}</p>
                  <button
                    className="cert-view-btn"
                    onClick={() => setSelectedCert(c)}
                  >
                    View
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              src={selectedCert.img}
              alt={selectedCert.title}
              className="cert-modal-img"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}