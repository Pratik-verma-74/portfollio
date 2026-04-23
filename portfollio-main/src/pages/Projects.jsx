import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import '../CSS/Projects.css'

/* ── Original 6 projects (logic & data untouched) ── */
const ORIGINAL_PROJECTS = [
  {
    title: 'MASS – AI Voice Assistant',
    desc: 'An intelligent AI voice assistant with continuous listening, system automation, app launching, reminders, emotion detection, and smart responses.',
    ss: '/mamo.png',
    tech: ['Python', 'Speech Recognition', 'Automation', 'AI', 'NLP'],
    live: '#',
    code: 'https://github.com/Pratik-verma-74/Mass-ai-',
  },
  {
    title: '🎵 TuneNest – Modern Music Player',
    desc: 'A sleek and responsive music player with instant playback, reusable components, and a modern UI.',
    ss: '/mentalhealth.jpg',
    tech: ['React', 'Tailwind CSS', 'Lucide Icons'],
    live: 'https://tune-nest1.vercel.app/',
    code: 'https://github.com/Vicky7463/animation-music-h',
  },
  {
    title: '🕉️ DivyaKatha – Stories of the Four Yugas',
    desc: 'An immersive audio-visual storytelling platform exploring Indian mythology across the four Yugas. Blending original Hindi voiceovers, emotional narration, vivid visuals, and modern web technologies.',
    ss: '/ISL.png',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'Audio Storytelling'],
    live: 'https://divya-katha2.vercel.app/',
    code: 'https://github.com/Vicky7463/DivyaKatha',
  },
  {
    title: '💼 Portfolio Website',
    desc: 'A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.',
    ss: '/portfolio.jpg',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    live: 'https://portfollio-lime-zeta.vercel.app/',
    code: '#',
  },
  {
    title: '💻 CyberCafeDeals – Free Learning & AI Tools Hub',
    desc: 'A curated resource platform providing free books, AI tools, study materials, and useful helper websites — designed for students and cyber café users.',
    ss: '/Docuchat.png',
    tech: ['Google Forms', 'Resource Curation', 'AI Tools', 'Free Books'],
    live: 'https://sites.google.com/view/cybercafedeals/home?authuser=0',
    code: '#',
  },
  {
    title: '📊 Datapulse',
    desc: 'A mini Power BI-style dashboard using HTML, CSS, and JavaScript for interactive data visualization with charts, KPI cards, and dataset preview.',
    ss: '/ProfileX.png',
    tech: ['Power BI', 'Data Visualization', 'HTML', 'CSS', 'JavaScript'],
    live: 'https://69babc8d5997989746045b14--velvety-kataifi-9441c2.netlify.app/',
    code: 'https://github.com/Pratik-verma-74/PowerBi-mini-version',
  },
]

const DUMMY_PROJECTS = [
  {
    title: '🎓 AI Attendance System',
    desc: 'A face-recognition-powered attendance tracker that automatically logs student presence using OpenCV and DeepFace. Supports real-time detection, CSV export, and a dashboard for teachers.',
    ss: null,           // placeholder
    placeholder: '🎓',
    placeholderBg: 'linear-gradient(135deg, #0d1b2a, #1a3550)',
    tech: ['Python', 'OpenCV', 'DeepFace', 'Flask', 'SQLite', 'React'],
    live: '#',
    code: '#',
    isDemo: true,
  },
  {
    title: '🏥 MR Management Tool',
    desc: 'A medical-representative field-force management dashboard with visit scheduling, doctor database, sample tracking, and performance analytics built for pharma teams.',
    ss: null,
    placeholder: '🏥',
    placeholderBg: 'linear-gradient(135deg, #0d1f12, #12332a)',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
    live: '#',
    code: '#',
    isDemo: true,
  },
  {
    title: '🛒 E-commerce Dashboard',
    desc: 'A full-stack e-commerce admin panel with real-time inventory management, order tracking, revenue charts, customer analytics, and product CRUD operations.',
    ss: null,
    placeholder: '🛒',
    placeholderBg: 'linear-gradient(135deg, #1a0d28, #2e1050)',
    tech: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    live: '#',
    code: '#',
    isDemo: true,
  },
]

const ALL_PROJECTS = [...ORIGINAL_PROJECTS, ...DUMMY_PROJECTS]

/* ── Card component ── */
function ProjectCard({ p, idx }) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: idx * 0.1 }}
    >
      {/* Screenshot / placeholder */}
      <div className="project-ss">
        {p.ss ? (
          <img src={p.ss} alt={p.title} loading="lazy" />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              background: p.placeholderBg,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}
          >
            <span style={{ fontSize: '3rem' }}>{p.placeholder}</span>
            <span
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)',
              }}
            >
              Demo Project
            </span>
          </div>
        )}
      </div>

      <div className="project-body">
        <h3 className="project-title">{p.title}</h3>
        <p className="project-desc">{p.desc}</p>

        {/* Tech tags */}
        <div className="project-tags">
          {p.tech.map((t) => (
            <span key={t} className="project-tag">{t}</span>
          ))}
        </div>

        {/* Actions */}
        <div className="project-actions">
          <motion.a
            href={p.code}
            target="_blank"
            rel="noreferrer"
            className="proj-btn-code"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <Github size={13} />
            {p.isDemo ? 'Coming Soon' : 'Code'}
          </motion.a>
          <motion.a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="proj-btn-live"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <ExternalLink size={13} />
            {p.isDemo ? 'In Progress' : 'Live Demo'}
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Page ── */
export default function Projects() {
  return (
    <motion.section
      className="projects-section"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="projects-header">
        <h2 className="section-title"> Projects</h2>
        <div className="section-bar" />
        <p className="section-sub">
          A collection of my major works — blending research, AI innovation, and practical engineering.
        </p>
      </div>

      {/* Grid */}
      <div className="projects-grid">
        {ALL_PROJECTS.map((p, idx) => (
          <ProjectCard key={idx} p={p} idx={idx} />
        ))}
      </div>
    </motion.section>
  )
}