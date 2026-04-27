import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "../CSS/Gallery.css";

const IMAGES = {
  personal: [
    {
      id: 1,
      caption: "Memories 📸",
      photos: ["/gallery/img1.jpeg"],
    },
    {
      id: 2,
      caption: "Good Times ✨",
      photos: ["/gallery/pratik2.jpg"],
    },
    {
      id: 3,
      caption: "Photography 🎨",
      photos: ["/gallery/pratik3.jpg"],
    },
    {
      id: 4,
      caption: "Vibes 🌊",
      photos: ["/gallery/pratik4.jpg"],
    },
    {
      id: 5,
      caption: "Life 🌟",
      photos: ["/gallery/pratik5.jpg"],
    },
    {
      id: 6,
      caption: "Weekend getaway to clear my head 🌄",
      photos: ["/gallery/lonawala.jpg"],
    },
    {
      id: 7,
      caption: "Inspiration strikes away from the screen.",
      photos: ["/gallery/lonawala2.jpg"],
    },
    {
      id: 8,
      caption: "Special Moments 📸",
      photos: ["/gallery/img1.jpeg"],
    },
    {
      id: 9,
      caption: "Exploring new places 🌍",
      photos: ["/gallery/img2.jpeg"],
    },
    {
      id: 10,
      caption: "Candid shots ✨",
      photos: ["/gallery/img3.jpeg"],
    },
    {
      id: 11,
      caption: "Vibing with nature 🌿",
      photos: ["/gallery/img4.jpeg"],
    },
    {
      id: 12,
      caption: "Cherished memories 🌟",
      photos: ["/gallery/img5.jpeg"],
    },
    {
      id: 13,
      caption: "Tech & Life 💻",
      photos: ["/gallery/img6.jpeg"],
    },
    {
      id: 14,
      caption: "Journey of growth 🌱",
      photos: ["/gallery/img7.jpeg"],
    },
  ],
  projects: [
    {
      id: 1,
      caption:
        "It’s an AI-powered tool that understands what someone might be feeling based on their words.",
      photos: ["/gallery/m.png", "/gallery/m2.jpeg"],
    },
    {
      id: 2,
      caption: "📂 ProfileX - Smart Data Profiler + Preprocessor",
      photos: ["/gallery/profilex.jpeg", "/gallery/profilex2.jpeg", "/gallery/profilex3.jpeg", "/gallery/profilex4.jpeg"],
    },
    {
      id: 3,
      caption: "MASS AI – Advanced Automation & AI Voice Assistant 🤖",
      photos: ["/gallery/m.png"], // Main Mass AI image
      videoUrl: "/gallery/mass_demo.mp4", // Local video file
      buttonText: "MASS AI Demo Video"
    },
  ],
  achievements: [
    {
      id: 1,
      caption: "National level Hackathon 🏆!",
      photos: ["/certs/adira.png"],
    },
    {
      id: 2,
      caption: "Microsoft world record🤖",
      photos: ["/certs/bugbuzz.png"],
    },
  ],
};

// ✨ Animation Variants
const pageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ✨ Tab Switching Animations
const tabContentVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -30, scale: 0.98, transition: { duration: 0.4 } },
};

export default function Gallery() {
  const [tab, setTab] = useState("personal");
  const [zoom, setZoom] = useState({ img: null, post: null, index: 0 });

  const openZoom = (post, index) =>
    setZoom({ img: post.photos[index], post, index });

  const closeZoom = () => setZoom({ img: null, post: null, index: 0 });

  const nextImage = () => {
    if (!zoom.post) return;
    const nextIndex = (zoom.index + 1) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[nextIndex], index: nextIndex });
  };

  const prevImage = () => {
    if (!zoom.post) return;
    const prevIndex =
      (zoom.index - 1 + zoom.post.photos.length) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[prevIndex], index: prevIndex });
  };

  return (
    <motion.section
      className="gallery-container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* 🌟 Title */}
      <motion.h2 className="gallery-title" variants={childVariants}>
        Gallery
      </motion.h2>

      {/* 🧭 Tabs */}
      <motion.div className="tab-buttons" variants={childVariants}>
        {["personal", "projects", "achievements"].map((type) => (
          <motion.button
            key={type}
            className={`tab ${tab === type ? "active" : ""}`}
            onClick={() => setTab(type)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      {/* 🖼️ Posts with Animation on Tab Switch */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab} // Important for AnimatePresence to detect tab change
          className="post-feed"
          variants={tabContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {IMAGES[tab].map((post) => (
            <motion.div
              key={post.id}
              className="post-card"
              variants={childVariants}
              whileHover={{ y: -4 }}
            >
              <p className="caption">{post.caption}</p>
              <div
                className={`photo-grid ${
                  post.photos.length > 1 ? "multi" : "single"
                }`}
              >
                {post.photos.map((src, i) => (
                  <motion.div
                    key={i}
                    className="photo-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    onClick={() => openZoom(post, i)}
                  >
                    <img src={src} alt="gallery" />
                  </motion.div>
                ))}
              </div>
              
              {/* 🎬 Demo Video Button */}
              {post.videoUrl && (
                <motion.a 
                  href={post.videoUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="gallery-demo-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {post.buttonText || "Demo Video"}
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* 🔍 Zoom Overlay */}
      <AnimatePresence>
        {zoom.img && (
          <motion.div
            className="zoom-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(6px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
          >
            <motion.img
              key={zoom.img}
              src={zoom.img}
              alt="zoom"
              className="zoom-img"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {zoom.post?.photos.length > 1 && (
              <>
                <button className="nav-btn left" onClick={prevImage}>
                  <ChevronLeft size={32} />
                </button>
                <button className="nav-btn right" onClick={nextImage}>
                  <ChevronRight size={32} />
                </button>
              </>
            )}
            <button className="close-btn" onClick={closeZoom}>
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
