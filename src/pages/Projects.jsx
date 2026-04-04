import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: 'MASS  – AI Voice Assistant',
    desc: 'An intelligent AI voice assistant with continuous listening, system automation, app launching, reminders, emotion detection, and smart responses.',
    ss: '/mamo.png',
    tech: ['Python', 'Speech Recognition', 'Automation', 'AI', 'NLP'],
    live: '#',
    code: 'https://github.com/Pratik-verma-74/Mass-ai-'
  },
  {
  title: '🎵 TuneNest – Modern Music Player',
  desc: 'A sleek and responsive music player with instant playback, reusable components, and a modern UI.',
  ss: '/mentalhealth.jpg',
  tech: ['React', 'Tailwind CSS', 'Lucide Icons'],
  live: 'https://tune-nest1.vercel.app/',
  code: 'https://github.com/Vicky7463/animation-music-h'
  },
  {
    title: '🕉️ DivyaKatha – Stories of the Four Yugas',
    desc: 'An immersive audio-visual storytelling platform exploring Indian mythology across the four Yugas—Satyayuga, Tretayuga, Dvaparayuga, and Kaliyuga. Blending original Hindi voiceovers, emotional narration, vivid visuals, and modern web technologies to reconnect Gen Z with India’s spiritual heritage.',
    ss: '/ISL.png',
    tech: ['React',
    'Vite',
    'Tailwind CSS',
    'Framer Motion',
    'Three.js',
    'Drei',
    'Audio Storytelling'],
    live: 'https://divya-katha2.vercel.app/',
    code: 'https://github.com/Vicky7463/DivyaKatha'
  },
  {
  title: '💼 Portfolio Website',
  desc: 'A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.',
  ss: '/portfolio.jpg',
  tech: ['React', 'Framer Motion', 'Tailwind CSS'],
  live: 'https://portfollio-lime-zeta.vercel.app/',
  code: '#'
  },
  {
    title: '💻 CyberCafeDeals – Free Learning & AI Tools Hub',
    desc: 'CyberCafeDeals is a curated resource platform built using Google Forms that provides a collection of free books, AI tools, study materials, and useful helper websites. Designed especially for students and cyber café users to quickly access learning resources, productivity tools, and digital utilities from a single place.',
    ss: '/Docuchat.png',
    tech: ['Google Forms',
    'Resource Curation',
    'AI Tools Collection',
    'Free Books',
    'Educational Utilities'],
    live: 'https://sites.google.com/view/cybercafedeals/home?authuser=0',
    code: '#'
  },
{
  title: '📊 Datapulse',
  desc: 'Built a mini Power BI-style dashboard using HTML, CSS, and JavaScript for interactive data visualization with charts, KPI cards, and dataset preview',
  ss: '/ProfileX.png',
  tech: ['Power BI', 'Data Visualization', 'HTML', 'CSS', 'JavaScript'],
  live: 'https://69babc8d5997989746045b14--velvety-kataifi-9441c2.netlify.app/',
  code: 'https://github.com/Pratik-verma-74/PowerBi-mini-version'
}
  
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
