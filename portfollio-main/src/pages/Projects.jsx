import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { playClick } from '../utils/sfx'
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
    live: 'https://vercel.com/pratikverma153-gmailcoms-projects/power-bi-mini-version',
    code: 'https://github.com/Pratik-verma-74/PowerBi-mini-version',
  },
]

const DUMMY_PROJECTS = [
  {
    title: '🎓  QP HUB (Question Paper Hub) ALL PREVIOUS YEAR QUESTION PAPERS',
    desc: 'This platform helps students access previous year question papers easily and contribute to the community. specil for bca,ncc,biotechnology students , ',
    ss: 'qphub_ss.png',           // placeholder
    placeholder: '🎓',
    placeholderBg: 'linear-gradient(135deg, #0d1b2a, #1a3550)',
    tech: ['HTML', 'CSS', 'JavaScript', 'SUPABASE'],
    live: 'https://qphub2.netlify.app/',
    code: 'https://github.com/Pratik-verma-74/QPHUB/blob/main/index.html',
    isDemo: false,
  },
  {
    title: 'SMART FILE CONVERTER',
    desc: 'Smart Document Converter is a frontend tool that lets users upload, resize, compress, and convert files into JPG, PNG, or PDF directly in the browser. It also includes a Mass AI chatbot that guides users on document requirements and allows downloading all files together in a ZIP.',
    ss: 'file_converter_ss.png',
    placeholder: '🏥',
    placeholderBg: 'linear-gradient(135deg, #0d1f12, #12332a)',
    tech: ['HTML', 'CSS', 'JavaScript', 'NO BACKEND'],
    live: 'https://69d653ac118b11ec33b1c332--smart-document-converter.netlify.app/',
    code: 'https://github.com/Pratik-verma-74/mass-pdf-converter',
    isDemo: false,
  },
  {
    title: 'MedRep Pro – Smart MR Management System ',
    desc: 'MedRep Pro is a smart web app designed for Medical Representatives to manage doctors, orders, and payments. It helps track dues, generate reports, and organize daily work efficiently. Works offline with no login or database required.',
    ss: 'medrep_pro_ss.png',
    placeholder: '🛒',
    placeholderBg: 'linear-gradient(135deg, #1a0d28, #2e1050)',
    tech: ['HTML', 'CSS', 'JavaScript', 'NO BACKEND', 'LOCALSTORAGE'],
    live: 'https://medicalmrreport.netlify.app/',
    code: 'https://github.com/Pratik-verma-74/samir-app',
    isDemo: false,
  },
  {
    title: 'Medical Representatives to Track Doctor visits Daily Attendance',
    desc: 'MedRep Pro is a smart web app designed for Medical Representatives to manage doctors, orders, and payments. It helps track dues, generate reports, and organize daily work efficiently. Works offline with no login or database required.',
    ss: 'attendance_tracker_ss.png',
    placeholder: '🛒',
    placeholderBg: 'linear-gradient(135deg, #1a0d28, #2e1050)',
    tech: ['HTML', 'CSS', 'JavaScript', 'NO BACKEND', 'LOCALSTORAGE','LIVE TRACKING','MAP'],
    live: 'https://69199d4a1efc7a4a5ecdf79b--resplendent-boba-5d7f4b.netlify.app/',
    code: 'https://github.com/Pratik-verma-74/expense/blob/main/index.html',
    isDemo: false,
  },
  {
    title: 'Patient Report Generator',
    desc: 'THIS APP IS SPECIAL FOR MEDICAL STAFF LIKE NURSES AND  DOCTORS, THEY CAN GENERATE PATIENT REPORTS.A simple web-based tool to register patients, generate unique patient IDs, create PDF reports with patient details, and send information via WhatsApp instantly  ',
    ss: 'patient_report_ss.png',
    placeholder: '🛒',
    placeholderBg: 'linear-gradient(135deg, #1a0d28, #2e1050)',
    tech: ['HTML', 'CSS', 'JavaScript', 'NO BACKEND', 'Download pdf ','excel report','medicine and helth report generator'],
    live: 'https://6936b6eb9520bf1607f56341--ornate-patient-report-pratik.netlify.app/',
    code: 'https://github.com/Pratik-verma-74/patient-report/blob/main/index.html',
    isDemo: false,
  },
  
]

const ALL_PROJECTS = [...ORIGINAL_PROJECTS, ...DUMMY_PROJECTS]

/* ── Card component ── */
function ProjectCard({ p, idx }) {
  return (
    <div className="project-card">
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
              MY Project
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

        <div className="project-actions">
          <a
            href={p.code}
            target="_blank"
            rel="noreferrer"
            className="proj-btn-code"
            onClick={playClick}
          >
            <Github size={13} />
            {p.isDemo ? 'Coming Soon' : 'Code'}
          </a>
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="proj-btn-live"
            onClick={playClick}
          >
            <ExternalLink size={13} />
            {p.isDemo ? 'In Progress' : 'Live'}
          </a>
        </div>
      </div>
    </div>
  )
}

/* ── Page ── */
export default function Projects() {
  return (
    <section className="projects-section">
      {/* Header */}
      <div className="projects-header">
        <h2 className="section-title"> Projects</h2>
        <div className="section-bar" />
        <p className="section-sub">
          A collection of my major works — blending research, AI innovation, and practical engineering.
        </p>
      </div>

      {/* Premium Wrapper */}
      <div className="projects-wrapper">
        {/* Grid */}
        <div className="projects-grid">
          {ALL_PROJECTS.map((p, idx) => (
            <ProjectCard key={idx} p={p} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}