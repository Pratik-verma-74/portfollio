import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";
import "../CSS/About.css";

/* ── All original content & logic preserved ── */
const EDU = [
  {
    icon: <FaUniversity size={34} color="var(--accent)" />,
    degree: "B.C.A — Bachelor of Computer Application",
    school: "B.N.M.U (Bhupendra Narayan Mandal University) — Madhepura, Bihar",
    detail1: "3rd Year (Pursuing) | GPA: 8.5",
    detail2: "2022 – 2026",
  },
  {
    icon: <FaGraduationCap size={32} color="var(--accent)" />,
    degree: "Higher Secondary Education (12th Grade)",
    school: "Swami Vivekanand Inter College — Madhepura, Bihar",
    detail1: "Bihar Board | Percentage: 66.6%",
    detail2: "Completed in 2023",
  },
  {
    icon: <FaSchool size={30} color="var(--accent)" />,
    degree: "Secondary Education (10th Grade)",
    school: "Madhuram High School Gwalpara — Madhepura, Bihar",
    detail1: "Bihar Board | Percentage: 71.6%",
    detail2: "Completed in 2020",
  },
];

export default function AboutMe() {
  return (
    <div className="about-container">

      <motion.div
        className="aboutme-card"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {/* ── About header ── */}
        <h2 className="aboutme-title">About Me</h2>

        {/* ── Description paragraphs (original text preserved) ── */}
        <p className="aboutme-desc">
          Hi, I'm <strong>Pratik Verma</strong> — an aspiring{" "}
          <strong>AI Automation Engineer</strong> and{" "}
          <strong>Machine Learning enthusiast</strong>. I enjoy building intelligent
          applications that combine logic, data, and real-world usability.
        </p>

        <p className="aboutme-desc">
          I have hands-on experience working with <strong>Python</strong> with{" "}
          <strong>technical precision</strong>. My goal is to build solutions that not
          only perform — but also inspire.
        </p>

        <p className="aboutme-desc" style={{ opacity: 0.88 }}>
          My long-term goal is to grow as an AI Automation Engineer and contribute to
          impactful real-world projects in healthcare, productivity, and smart systems.
        </p>

        {/* ── Education section ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          style={{ marginTop: "2.5rem" }}
        >
          <h3 className="aboutme-edu-title">Education</h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {EDU.map((e, i) => (
              <motion.div
                key={i}
                className="aboutme-edu-card"
                whileHover={{ scale: 1.015, boxShadow: "0 0 28px rgba(0,180,255,0.14)" }}
                transition={{ duration: 0.28 }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="aboutme-edu-icon">{e.icon}</div>

                <div style={{ minWidth: 0, flex: 1 }}>
                  <h4 className="aboutme-edu-heading">{e.degree}</h4>
                  <p style={{
                    color: "rgba(255,255,255,0.82)",
                    marginBottom: "0.2rem",
                    fontSize: "clamp(0.82rem, 2.5vw, 0.95rem)"
                  }}>
                    <strong>{e.school}</strong>
                  </p>
                  <p style={{ color: "var(--muted)", fontSize: "clamp(0.78rem, 2vw, 0.88rem)" }}>
                    {e.detail1}
                  </p>
                  <p style={{ color: "var(--muted)", fontSize: "clamp(0.78rem, 2vw, 0.88rem)" }}>
                    {e.detail2}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}