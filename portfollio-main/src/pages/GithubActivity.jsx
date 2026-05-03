import React from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import '../CSS/GithubActivity.css';

export default function GithubActivity() {
  // Using the classic GitHub dark theme colors for the green squares
  const explicitTheme = {
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <motion.section 
      className="github-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="github-header">
        <h2 className="section-title">GitHub Contributions</h2>
        <div className="section-bar" />
        <p className="section-sub">
          Days I code. Building, researching, and contributing to projects.
        </p>
      </div>

      <motion.div 
        className="calendar-container"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <GitHubCalendar 
          username="Pratik-verma-74" 
          blockSize={16}
          blockMargin={6}
          colorScheme="dark"
          theme={explicitTheme}
          fontSize={16}
        />
      </motion.div>
    </motion.section>
  );
}
