import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../CSS/Home.css'

// 🖼️ Assets from public folder
const photo        = '/photo.jpg'
const sign         = '/sign.png'
const githubLogo   = '/github.png'
const linkedinLogo = '/linkedin.png'
const gmailLogo    = '/gmail.png'
const whatsappLogo = '/whatsapp.png'
const instagramLogo = '/insta.png'
const facebookLogo = '/facebook.png'

export default function Home() {

  // 🔥 Image Toggle State — original logic preserved
  const [showSign, setShowSign] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => setShowSign((prev) => !prev), 5000)
    return () => clearInterval(interval)
  }, [])

  const professions = [
    'AI Automation Engineer',
    'Machine Learning',
    'Frontend Developer',
    'Computer Vision Researcher',
    'Developer',
  ]

  const quickLinks = [
    { img: githubLogo,    title: 'GitHub',    link: 'https://github.com/Pratik-verma-74' },
    { img: linkedinLogo,  title: 'LinkedIn',  link: 'https://www.linkedin.com/in/pratik-verma-177b49299/' },
    { img: gmailLogo,     title: 'Email',     link: 'mailto:pratikverma153@gmail.com' },
    { img: whatsappLogo,  title: 'WhatsApp',  link: 'https://wa.me/+917463053829' },
    { img: instagramLogo, title: 'Instagram', link: 'https://www.instagram.com/pratikverma025' },
    { img: facebookLogo,  title: 'Facebook',  link: 'https://www.facebook.com/share/1Fzq4du9fn/' },
  ]

  return (
    <section className="home-section">
      <div className="home-top">

        {/* ── LEFT: Photo ── */}
        <motion.div
          className="photo-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <div className="photo-ring" />

          <div className="photo-frame">
            <AnimatePresence mode="wait">
              <motion.img
                key={showSign ? 'sign' : 'photo'}
                src={showSign ? sign : photo}
                alt="Pratik Verma"
                className="profile-photo"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.9, ease: 'easeInOut' }}
              />
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ── RIGHT: Info ── */}
        <motion.div
          className="home-info"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <h1 className="home-title">
            Hi, I'm{' '}
            <motion.span
              className="home-name"
              animate={{ backgroundPositionX: ['0%', '200%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            >
              Pratik Verma
            </motion.span>
          </h1>

          <p className="typing-effect">
            AI Automation Engineer | Frontend Developer | Tech Explorer
          </p>

          {/* Profession Tags */}
          <motion.div className="profession-tags">
            {professions.map((role, i) => (
              <motion.div
                key={i}
                className="profession-tag"
                whileHover={{ scale: 1.06 }}
                transition={{ type: 'spring', stiffness: 220 }}
              >
                {role}
              </motion.div>
            ))}
          </motion.div>

          {/* Info Cards */}
          <div className="info-cards">
            {[
              { label: '📍 Location', value: 'Madhpura, Bihar, India' },
              { label: '💼 Expertise', value: 'AI Automation, Problem Solving' },
              { label: '📧 Contact',  value: 'pratikverma153@gmail.com' },
            ].map((info, i) => (
              <motion.div
                key={i}
                className="info-card"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Bottom: Quick Links ── */}
      <motion.div
        className="quick-links"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <h2 className="quick-links-title">Connect with me</h2>
        <div className="quick-links-list">
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.18, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 280 }}
            >
              <img src={item.img} alt={item.title} className="quick-link-img" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}