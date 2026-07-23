import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Sun, Moon } from "lucide-react";
import HTMLFlipBook from "react-pageflip";
import "../CSS/Gallery.css";

const IMAGES = {
  personal: [
    { id: 1, caption: "Memories 📸", photo: "/gallery/img1.jpeg" },
    { id: 2, caption: "Exploring new places 🌍", photo: "/gallery/img2.jpeg" },
    { id: 3, caption: "Candid shots ✨", photo: "/gallery/img3.jpeg" },
    { id: 4, caption: "Vibing with nature 🌿", photo: "/gallery/img4.jpeg" },
    { id: 5, caption: "Cherished memories 🌟", photo: "/gallery/img5.jpeg" },
    { id: 6, caption: "Tech & Life 💻", photo: "/gallery/img6.jpeg" },
    { id: 7, caption: "Journey of growth 🌱", photo: "/gallery/img7.jpeg" },
    { id: 8, caption: "Weekend getaway to clear my head 🌄", photo: "/gallery/lonawala.jpg" },
    { id: 9, caption: "Inspiration strikes away from the screen.", photo: "/gallery/lonawala2.jpg" },
    { id: 10, caption: "Goa diaries 🌴", photo: "/gallery/goa.jpg" },
    { id: 11, caption: "Matheran trip ✨", photo: "/gallery/matheran.jpg" }
  ],
  projects: [
    { id: 1, caption: "MedRep Pro – ID Portal & Smart Identity Card Generator 🪪", photo: "/gallery/medrep_idportal.png" },
    { id: 2, caption: "MedRep Pro – Live MR Tracking with Real-Time Map 📍", photo: "/gallery/medrep_tracking.png" },
    { id: 3, caption: "M.A.S.S – Multi-Agent Smart System | Face Recognition Mode 🤖", photo: "/gallery/mass_ui1.png" },
    { id: 4, caption: "M.A.S.S – Voice Core Dashboard | AI Assistant Interface 🎙️", photo: "/gallery/mass_ui2.png" },
  ],
  achievements: [
    { id: 1, caption: "National level Hackathon 🏆!", photo: "/certs/adira.png" },
    { id: 2, caption: "Microsoft world record🤖", photo: "/certs/bugbuzz.png" },
    { id: 3, caption: "NSS Yuva Aapda Mitra Scheme Training 🎖️", photo: "/certs/nss_certificate.jpg.jpeg" },
  ],
};

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {props.children}
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <div className="page-image-container" onClick={props.onClick}>
          <img src={props.image.photo} alt={props.image.caption} className="page-image" />
        </div>
        <div className="page-caption">
          <p>{props.image.caption}</p>
          {props.image.videoUrl && (
            <a 
              href={props.image.videoUrl} 
              target="_blank" 
              rel="noreferrer"
              className="gallery-demo-btn"
              onClick={(e) => e.stopPropagation()}
            >
              {props.image.buttonText || "Demo Video"}
            </a>
          )}
        </div>
        <div className="page-number">{props.number}</div>
      </div>
    </div>
  );
});

export default function Gallery() {
  const [tab, setTab] = useState("personal");
  const [zoom, setZoom] = useState({ img: null, index: 0 });
  const [isDarkMode, setIsDarkMode] = useState(true);
  const bookRef = useRef(null);
  
  // Reset book to page 0 when tab changes
  useEffect(() => {
    if (bookRef.current && bookRef.current.pageFlip()) {
      bookRef.current.pageFlip().turnToPage(0);
    }
  }, [tab]);

  const openZoom = (index) => setZoom({ img: IMAGES[tab][index].photo, index });
  const closeZoom = () => setZoom({ img: null, index: 0 });

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    const nextIndex = (zoom.index + 1) % IMAGES[tab].length;
    setZoom({ img: IMAGES[tab][nextIndex].photo, index: nextIndex });
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    const prevIndex = (zoom.index - 1 + IMAGES[tab].length) % IMAGES[tab].length;
    setZoom({ img: IMAGES[tab][prevIndex].photo, index: prevIndex });
  };

  const currentPhotos = IMAGES[tab];

  return (
    <motion.section
      className={`gallery-container ${isDarkMode ? "dark-mode" : "light-mode"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <button 
        className="theme-toggle-btn"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? <Sun size={28} /> : <Moon size={28} />}
      </button>

      <motion.h2 className="gallery-title" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        Gallery
      </motion.h2>

      <motion.div className="tab-buttons" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
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

      <div className="book-container">
        <HTMLFlipBook
          width={450}
          height={600}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          className="flip-book"
          ref={bookRef}
        >
          <PageCover>
            <h3 style={{ fontSize: '1.8rem', color: '#ff9933', marginBottom: '15px', fontFamily: '"Georgia", serif', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>सत्यमेव जयते</h3>
            <h2 style={{ fontSize: '2rem', letterSpacing: '2px', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>{tab.toUpperCase()} ALBUM</h2>
          </PageCover>
          {currentPhotos.map((item, i) => (
            <Page key={item.id} number={i + 1} image={item} onClick={() => openZoom(i)} />
          ))}
          <PageCover>
            <img src="/gallery/ashok_stambh.png" alt="Ashok Stambh" style={{ width: '200px', marginBottom: '25px', borderRadius: '12px', boxShadow: '0 8px 25px rgba(0,0,0,0.5)' }} />
            <h2 style={{ fontSize: '1.5rem', letterSpacing: '2px', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>THE END</h2>
          </PageCover>
        </HTMLFlipBook>
      </div>

      <AnimatePresence>
        {zoom.img && (
          <motion.div
            className="zoom-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(6px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            onClick={closeZoom} // Close on overlay click
          >
            <div className="zoom-content" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={zoom.img}
                src={zoom.img}
                alt="zoom"
                className="zoom-img"
                initial={{ scale: 0.9, opacity: 0, x: 20 }}
                animate={{ scale: 1, opacity: 1, x: 0 }}
                exit={{ scale: 0.9, opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    nextImage(null);
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevImage(null);
                  }
                }}
              />

              <button className="close-btn" onClick={closeZoom}>
                <X size={24} />
              </button>

              {currentPhotos.length > 1 && (
                <>
                  <button className="nav-btn left" onClick={(e) => prevImage(e)}>
                    <ChevronLeft size={32} />
                  </button>
                  <button className="nav-btn right" onClick={(e) => nextImage(e)}>
                    <ChevronRight size={32} />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};
