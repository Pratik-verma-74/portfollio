import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import "../CSS/Home.css"
import '../index.css' 

// 🖼️ Import Assets
import photo from '../../public/photo.jpg'
import sign from '../../public/sign.png'
import githubLogo from '../../public/github.png'
import linkedinLogo from '../../public/linkedin.png'
import gmailLogo from '../../public/gmail.png'
import whatsappLogo from '../../public/whatsapp.png'
import instagramLogo from '../../public/insta.png'
import facebookLogo from '../../public/facebook.png'

export default function Home() {

  // 🔥 Image Toggle State
  const [showSign, setShowSign] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSign((prev) => !prev)
    }, 5000) // 5 sec

    return () => clearInterval(interval)
  }, [])

  const professions = [
    'AI Automation Engineer',
    'Machine Learn',
    "frontend Developer",
    'Computer Vision Researcher',
    'Developer',
  ]

  const quickLinks = [
    { img: githubLogo, title: 'GitHub', link: 'https://github.com/Pratik-verma-74' },
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/pratik-verma-177b49299/' },
    { img: gmailLogo, title: 'Email', link: 'mailto:pratikverma@gmail.com' },
    { img: whatsappLogo, title: 'WhatsApp', link: 'https://wa.me/+917463053829' },
    { img: instagramLogo, title: 'Instagram', link: 'https://www.instagram.com/pratikverma025?igsh=MXViYmlxZW9mandjeQ==' },
    { img: facebookLogo, title: 'Facebook', link: 'https://www.facebook.com/share/1Fzq4du9fn/' },
  ]

  return (
    <section className="home-section">

      {/* Typing Effect Styles */}
      <style>
        {`
          @keyframes typing { from { width: 0; } to { width: 100%; } }
          @keyframes blink { 50% { border-color: transparent; } }
        `}
      </style>

      <div className="home-top">

        {/* Left: Glowing Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="photo-container"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="photo-ring"
          />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="photo-frame"
          >
            {/* 🔥 Image Switch */}
            <AnimatePresence mode="wait">
              <motion.img
                key={showSign ? "sign" : "photo"}
                src={showSign ? sign : photo}
                alt="Pratik Verma"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="profile-photo"
              />
            </AnimatePresence>
          </motion.div>

       

        </motion.div>

        {/* Right: Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >
          <h1 className="home-title">
            Hi, I’m{' '}
            <motion.span
              animate={{ backgroundPositionX: ['0%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="home-name"
            >
              Pratik Verma
            </motion.span>
          </h1>

          <p className="typing-effect">
            Ai Automation Engineer | Frontend Developer | Tech Explorer
          </p>

          {/* Profession Tags */}
          <motion.div className="profession-tags">
            {professions.map((role, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  background: 'linear-gradient(90deg,var(--accent),var(--accent-2))'
                }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="profession-tag"
              >
                {role}
              </motion.div>
            ))}
          </motion.div>

          {/* Info Cards */}
          <motion.div className="info-cards">
            {[
              { label: '📍 Location', value: 'Madhpura, Bihar, India' },
              { label: '💼 Expertise', value: 'AI Automation, Problem Solving' },
              { label: '📧 Contact', value: 'pratikverma153@gmail.com' },
            ].map((info, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 250 }}
                className="info-card"
              >
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>

      {/* Bottom Quick Links */}
      <motion.div className="quick-links">
        <h2 className="quick-links-title">Connect with me</h2>
        <div className="quick-links-list">
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{
                  filter: 'drop-shadow(0 0 15px var(--accent)) brightness(1.2)'
                }}
                className="quick-link-img"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>

    </section>
  )
}