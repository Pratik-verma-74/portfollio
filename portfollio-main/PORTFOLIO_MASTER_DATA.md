# 📄 PORTFOLIO MASTER DATA (OFFICIAL RECORD)

This file serves as the single source of truth for Pratik Verma's Portfolio project. It contains all critical data, technical configurations, and lessons learned to ensure continuity across different AI agent sessions.

---

## 👤 1. USER PROFILE (PRATIK VERMA)
- **Full Name:** Pratik Verma
- **Current Role:** 3rd Year B.C.A Student (AI & Data Science)
- **University:** B.N.M.U University, Madhepura, Bihar, India
- **GPA:** 9.0 / 10.0
- **Academic Background:** 
  - 10th (Bihar Board): 71.6%
  - 12th (Bihar Board): 66.6%
- **Contact:** pratikverma153@gmail.com | pratikverma025@gmail.com
- **Professional Links:**
  - GitHub: [https://github.com/Pratik-verma-74](https://github.com/Pratik-verma-74)
  - LinkedIn: [https://www.linkedin.com/in/pratik-verma-177b49299/](https://www.linkedin.com/in/pratik-verma-177b49299/)
  - LeetCode: [https://leetcode.com/u/Pratikverma/](https://leetcode.com/u/Pratikverma/)

---

## 🛠️ 2. TECH STACK
- **Core:** React 18 (Vite)
- **Styling:** Vanilla CSS + Inline Styles + Framer Motion
- **Animations:** Framer Motion (Transitions, Hover effects)
- **Visuals:** D3.js (Skill Network), Lucide-React (Icons)
- **Interactive:** Custom Cursor, Page Transitions, AI Chatbot (UI-only)
- **Deployment:** Vercel

---

## 💼 3. PROJECTS PORTFOLIO
1. **M.A.S.S (Multi-Agent Smart System):** Bilingual (Hindi+English) AI Voice Assistant with emotion detection.
2. **TuneNest:** Modern, sleek Music Player built with React.
3. **DivyaKatha:** Audio-visual mythological storytelling platform.
4. **CyberCafeDeals:** Resource hub for students and AI tools.
5. **DataPulse:** Mini Power BI-style interactive dashboard.

---

## ⚙️ 4. SKILLS & EXPERTISE
- **Languages:** Python (Expert), C, C++, Java, SQL.
- **AI/ML:** Machine Learning, NLP, Computer Vision (OpenCV, TensorFlow).
- **Web:** React, Vite, Framer Motion, D3.js.
- **Tools:** Git, n8n (Automation), SQLite.

---

## ⚠️ 5. CRITICAL TECHNICAL NOTES (READ THIS FIRST)

### 🚨 React Version Conflict (The "S" Error)
- **Issue:** Using React `18.3.x` with certain Three.js/R3F reconcilers causes a `TypeError: Cannot read properties of undefined (reading 'S')`.
- **Fix:** LOCK React and React-DOM exactly to **`18.2.0`** in `package.json`.
- **Overrides:** Use `"overrides": { "react": "18.2.0" }` to force sub-dependencies to comply.

### ⚡ Vite Caching
- If weird "undefined" errors persist after dependency changes, **DELETE `node_modules/.vite`** or run `npm run dev -- --force`.

### 🌐 Vercel Deployment
- **Root Directory:** Keep it **EMPTY** if files are at the root of the repo.
- **Node Environment:** Ensure `.npmrc` has `legacy-peer-deps=true` if build fails due to peer dependency conflicts.
- **Asset Paths:** Always use `/filename.ext` (e.g., `/photo.jpg`) for files in the `public` folder. Do NOT use `import ... from '/public/...'`.

---

## 🤖 6. CHATBOT KNOWLEDGE BASE
Pratik-Bot should answer queries based on the following:
- "Who is Pratik?" -> Mention BCA, AI & Data Science, BNMU, 9.0 GPA.
- "Projects?" -> List M.A.S.S, TuneNest, DivyaKatha, CyberCafeDeals.
- "Skills?" -> Focus on Python, AI Automation, ML, and React.

---
*Created on: 2026-04-23 by Antigravity (AI Coding Assistant)*
