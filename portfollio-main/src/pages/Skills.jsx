import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../CSS/Skills.css";

/* ── All original data preserved ── */
const SKILLS = [
  { name: "Python",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C",          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "HTML",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "MySQL",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "PyTorch",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "OpenCV",     logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg" },
];

const ROWS = [
  [
    { title: "Programming Languages",   items: ["Python", "C", "C++", "Java"] },
    { title: "Web Technologies",         items: ["HTML", "CSS", "JavaScript", "React"] },
    { title: "Databases & Tools",        items: ["MySQL", "Git", "n8n"] },
    { title: "Frameworks & Libraries",   items: ["TensorFlow", "PyTorch", "OpenCV"] },
  ],
  [
    {
      title: "Core Concepts",
      items: ["Data Structures & Algorithms", "Machine Learning", "AI Automation", "Explainable AI"],
    },
    {
      title: "Soft Skills",
      items: ["Teamwork", "Problem Solving", "Creativity", "Adaptability", "Communication"],
    },
  ],
];

export default function Skills() {
  const stageRef = useRef();

  /* ── Original floating-ball placement logic — untouched ── */
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const circles = Array.from(stage.querySelectorAll(".skill-circle"));
    const rect    = stage.getBoundingClientRect();
    const placed  = [];

    const isOverlapping = (x, y, size) =>
      placed.some((p) => {
        const dx = p.x - x, dy = p.y - y;
        return Math.sqrt(dx * dx + dy * dy) < p.size / 2 + size / 2 + 30;
      });

    circles.forEach((circle) => {
      const size = circle.offsetWidth;
      let x, y, tries = 0;
      do {
        x = Math.random() * (rect.width  - size - 16);
        y = Math.random() * (rect.height - size - 16);
        tries++;
      } while (isOverlapping(x, y, size) && tries < 150);

      placed.push({ x, y, size });
      circle.style.left = `${x}px`;
      circle.style.top  = `${y}px`;

      const dx = (Math.random() - 0.5) * 80;
      const dy = (Math.random() - 0.5) * 80;
      circle.animate(
        [{ transform: "translate(0,0)" }, { transform: `translate(${dx}px,${dy}px)` }],
        { duration: 5000 + Math.random() * 2500, direction: "alternate", iterations: Infinity, easing: "ease-in-out" }
      );
    });
  }, []);

  return (
    <section className="skills-container" id="skills">

      {/* Header */}
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h2>My Skills</h2>
        <div className="skills-underline" />
        <p>✨ Technical expertise blended with creativity — explore my core competencies below.</p>
      </motion.div>

      {/* Floating Orbs */}
      <motion.div
        className="skills-stage"
        ref={stageRef}
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.name}
            className="skill-circle"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.07, duration: 0.55, ease: "easeOut" }}
            whileHover={{
              scale: 1.28,
              boxShadow: "0 0 30px 8px rgba(0,180,255,0.55)",
              background: "rgba(0,180,255,0.1)",
            }}
          >
            <motion.img
              src={s.logo}
              alt={s.name}
              loading="lazy"
              whileHover={{ rotate: [0, 6, -6, 0], transition: { duration: 0.45 } }}
            />
            <span>{s.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Table */}
      <div className="skills-table">
        {ROWS.map((row, rowIndex) => (
          <div key={rowIndex} className="skills-row">
            {row.map((col, colIndex) => (
              <motion.div
                key={col.title}
                className="skill-box"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.55, delay: (rowIndex + colIndex) * 0.08 }}
              >
                <h3>{col.title}</h3>
                <ul>
                  {col.items.map((item, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 6, color: "var(--accent)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}