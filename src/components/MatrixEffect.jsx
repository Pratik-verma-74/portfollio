import React, { useEffect, useRef } from 'react';

const MatrixEffect = ({ onClose }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Make canvas full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Characters - taken from the unicode charset
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=~[]{}|;:,.<>/?日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ';
    const characters = letters.split('');

    const fontSize = 16;
    let columns = canvas.width / fontSize;

    // An array of drops - one per column
    let drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    // Drawing the characters
    function draw() {
      // Black background with opacity to show trailing characters
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0'; // Green text
      ctx.font = fontSize + 'px monospace';

      // Loop over the drops
      for (let i = 0; i < drops.length; i++) {
        // A random character to print
        const text = characters[Math.floor(Math.random() * characters.length)];

        // x = i * fontSize, y = value of drops[i] * fontSize
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Sending the drop back to the top randomly after it has crossed the screen
        // Adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Incrementing Y coordinate
        drops[i]++;
      }
    }

    const intervalId = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = canvas.width / fontSize;
      drops = [];
      for (let x = 0; x < columns; x++) {
        drops[x] = 1;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 9999,
      backgroundColor: 'black'
    }}>
      <canvas ref={canvasRef} style={{ display: 'block' }}></canvas>
      <button 
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '10px 20px',
          background: 'rgba(0, 255, 0, 0.1)',
          color: '#0F0',
          border: '1px solid #0F0',
          borderRadius: '5px',
          fontFamily: 'monospace',
          fontSize: '16px',
          cursor: 'pointer',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          backdropFilter: 'blur(4px)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(0, 255, 0, 0.4)';
          e.target.style.boxShadow = '0 0 15px #0F0';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(0, 255, 0, 0.1)';
          e.target.style.boxShadow = 'none';
        }}
      >
        Exit Matrix
      </button>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#0F0',
        fontFamily: 'monospace',
        textShadow: '0 0 10px #0F0',
        pointerEvents: 'none',
        textAlign: 'center',
        background: 'rgba(0,0,0,0.7)',
        padding: '30px',
        borderRadius: '10px',
        border: '1px solid #0F0'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>SYSTEM COMPROMISED</h2>
        <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>The Matrix has you...</p>
      </div>
    </div>
  );
};

export default MatrixEffect;
