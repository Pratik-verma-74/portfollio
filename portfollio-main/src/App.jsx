import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar       from './components/Navbar'
import Footer       from './pages/Footer'
import CustomCursor from './components/CustomCursor'
import PageWrapper  from './components/PageWrapper'
import Chatbot      from './components/Chatbot'
import Home         from './pages/Home'
import Projects     from './pages/Projects'
import Gallery      from './pages/Gallery'
import Certificates from './pages/Certificates'
import Blog         from './pages/Blog'
import Resume       from './pages/Resume'
import About        from './pages/About'
import Contact      from './pages/Contact'
import NotFound     from './pages/NotFound'
import SkillNetwork from './pages/Skills'
import './index.css'

export default function App() {
  const location = useLocation();

  return (
    <div className="app">
      {/* Global Neon Cursor Overlay */}
      <CustomCursor />
      
      {/* Floating Chatbot */}
      <Chatbot />
      
      <Navbar />

      <main style={{ flex: 1, position: 'relative' }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/"            element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/projects"    element={<PageWrapper><Projects /></PageWrapper>} />
            <Route path="/gallery"     element={<PageWrapper><Gallery /></PageWrapper>} />
            <Route path="/skills"      element={<PageWrapper><SkillNetwork /></PageWrapper>} />
            <Route path="/certificates"element={<PageWrapper><Certificates /></PageWrapper>} />
            <Route path="/blog"        element={<PageWrapper><Blog /></PageWrapper>} />
            <Route path="/resume"      element={<PageWrapper><Resume /></PageWrapper>} />
            <Route path="/about"       element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/contact"     element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="*"            element={<PageWrapper><NotFound /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}