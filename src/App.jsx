import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
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
import MatrixEffect  from './components/MatrixEffect'
import GithubActivity from './pages/GithubActivity'
import './index.css'

export default function App() {
  const location = useLocation();
  const [showMatrix, setShowMatrix] = React.useState(false);

  React.useEffect(() => {
    let keyBuffer = [];
    const target1 = ['a', 'i'];
    const target2 = ['m', 'a', 't', 'r', 'i', 'x'];

    const handleKeyDown = (e) => {
      if (e.target.tagName.toLowerCase() === 'input' || e.target.tagName.toLowerCase() === 'textarea') return;

      keyBuffer.push(e.key.toLowerCase());
      if (keyBuffer.length > 10) keyBuffer.shift();

      const checkMatch = (target) => {
        if (keyBuffer.length < target.length) return false;
        const slice = keyBuffer.slice(-target.length);
        return slice.every((key, i) => key === target[i]);
      };

      if (checkMatch(target1) || checkMatch(target2)) {
        setShowMatrix(true);
        keyBuffer = [];
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="app">
      <AnimatePresence>
        {showMatrix && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ position: 'fixed', inset: 0, zIndex: 99999 }}
          >
            <MatrixEffect onClose={() => setShowMatrix(false)} />
          </motion.div>
        )}
      </AnimatePresence>

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
            <Route path="/github"      element={<PageWrapper><GithubActivity /></PageWrapper>} />
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