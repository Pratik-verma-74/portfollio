import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
        padding: "2rem 1rem",
        boxSizing: "border-box",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .aboutme-card { padding: 2rem 1.5rem !important; }
          .aboutme-title { font-size: 1.5rem !important; }
          .aboutme-edu-title { font-size: 1.3rem !important; }
          .aboutme-edu-card { flex-direction: column !important; align-items: flex-start !important; gap: 0.8rem !important; padding: 1.2rem 1.2rem !important; }
          .aboutme-edu-icon { display: flex; flex-shrink: 0; }
          .aboutme-desc { font-size: 1rem !important; }
        }
        @media (max-width: 480px) {
          .aboutme-card { padding: 1.4rem 1rem !important; }
          .aboutme-title { font-size: 1.3rem !important; }
          .aboutme-edu-title { font-size: 1.15rem !important; }
          .aboutme-edu-card { padding: 1rem !important; }
          .aboutme-edu-heading { font-size: 1rem !important; }
        }
      `}</style>

      {/* About + Education Card */}
      <motion.div
        className="aboutme-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          marginTop: "1rem",
          lineHeight: 1.8,
          background: "rgba(255,255,255,0.04)",
          padding: "2.5rem 2.5rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <h2
          className="aboutme-title"
          style={{
            fontSize: "clamp(1.3rem, 4vw, 1.9rem)",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        {/* Description */}
        <p
          className="aboutme-desc"
          style={{
            fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "1rem",
          }}
        >
          Hi, I'm <strong>Pratik Verma</strong> — an aspiring{" "}
          <strong>AI Automation Engineer</strong> and{" "}
          <strong>Machine Learning enthusiast</strong>. I enjoy building intelligent applications that combine logic, data,
          and real-world usability.
        </p>

        <p style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)", color: "rgba(255,255,255,0.8)" }}>
          I have hands-on experience working with <strong>Python</strong> with{" "}
          <strong>technical precision</strong>. My goal is to build solutions
          that not only perform — but also inspire.
        </p>

        <p style={{ fontSize: "clamp(0.9rem, 2.5vw, 1rem)", color: "rgba(255,255,255,0.75)", marginTop: "0.8rem" }}>
          My long-term goal is to grow as an AI Automation Engineer
          and contribute to impactful real-world projects in healthcare,
          productivity, and smart systems.
        </p>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: "2.5rem" }}
        >
          <h3
            className="aboutme-edu-title"
            style={{
              fontSize: "clamp(1.2rem, 3.5vw, 1.6rem)",
              marginBottom: "1.5rem",
              background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            {/* Education Card 1 */}
            <motion.div
              className="aboutme-edu-card"
              whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(0,255,200,0.15)" }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.4rem 1.8rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
                flexWrap: "wrap",
              }}
            >
              <div className="aboutme-edu-icon" style={{ flexShrink: 0 }}>
                <FaUniversity size={36} color="var(--accent)" />
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <h4
                  className="aboutme-edu-heading"
                  style={{ color: "var(--accent)", marginBottom: "0.4rem", fontSize: "clamp(1rem, 3vw, 1.2rem)" }}
                >
                  B.C.A — Bachelor of Computer Application
                </h4>
                <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "0.2rem", fontSize: "clamp(0.85rem, 2.5vw, 1rem)" }}>
                  <strong>B.N.M.U (Bhupendra Narayan Mandal University)</strong> — Madhepura, Bihar
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(0.8rem, 2vw, 0.9rem)" }}>3rd Year (Pursuing) | GPA: 8.5</p>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(0.8rem, 2vw, 0.9rem)" }}>2022 – 2026</p>
              </div>
            </motion.div>

            {/* Education Card 2 */}
            <motion.div
              className="aboutme-edu-card"
              whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(0,255,200,0.15)" }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.4rem 1.8rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
                flexWrap: "wrap",
              }}
            >
              <div className="aboutme-edu-icon" style={{ flexShrink: 0 }}>
                <FaGraduationCap size={34} color="var(--accent)" />
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <h4
                  className="aboutme-edu-heading"
                  style={{ color: "var(--accent)", marginBottom: "0.4rem", fontSize: "clamp(1rem, 3vw, 1.2rem)" }}
                >
                  Higher Secondary Education (12th Grade)
                </h4>
                <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "0.2rem", fontSize: "clamp(0.85rem, 2.5vw, 1rem)" }}>
                  <strong>Swami Vivekanand Inter College</strong> — Madhepura, Bihar
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(0.8rem, 2vw, 0.9rem)" }}>Bihar Board | Percentage: 66.6%</p>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(0.8rem, 2vw, 0.9rem)" }}>Completed in 2023</p>
              </div>
            </motion.div>

            {/* Education Card 3 */}
            <motion.div
              className="aboutme-edu-card"
              whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(0,255,200,0.15)" }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.4rem 1.8rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
                flexWrap: "wrap",
              }}
            >
              <div className="aboutme-edu-icon" style={{ flexShrink: 0 }}>
                <FaSchool size={32} color="var(--accent)" />
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <h4
                  className="aboutme-edu-heading"
                  style={{ color: "var(--accent)", marginBottom: "0.4rem", fontSize: "clamp(1rem, 3vw, 1.2rem)" }}
                >
                  Secondary Education (10th Grade)
                </h4>
                <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "0.2rem", fontSize: "clamp(0.85rem, 2.5vw, 1rem)" }}>
                  <strong>Madhuram High School Gwalpara</strong> — Madhepura, Bihar
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(0.8rem, 2vw, 0.9rem)" }}>Bihar Board | Percentage: 71.6%</p>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(0.8rem, 2vw, 0.9rem)" }}>Completed in 2020</p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;