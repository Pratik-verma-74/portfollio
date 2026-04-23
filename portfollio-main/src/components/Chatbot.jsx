import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../CSS/Chatbot.css";

const PREDEFINED_QUESTIONS = [
  {
    id: "q1",
    text: "Who is Pratik?",
    answer: "I am Pratik Verma, an AI Automation Engineer, Researcher, and Developer passionate about robotics, drones, and intelligent systems!"
  },
  {
    id: "q2",
    text: "What are your core skills?",
    answer: "My core skills include Full Stack Development, AI Automation, Computer Vision, Robotics, IoT, and Satellite Engineering."
  },
  {
    id: "q3",
    text: "How can I contact you?",
    answer: "You can reach me via the Contact page, or directly email me at pratikverma153@gmail.com!"
  }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I am Pratik-Bot. How can I help you today?" }
  ]);
  const messagesEndRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleQuestionClick = (question) => {
    // Add user's question to the chat
    setMessages((prev) => [...prev, { sender: "user", text: question.text }]);
    
    // Simulate thinking delay
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: question.answer }]);
    }, 600);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        className="chatbot-fab"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? "✕" : "💬"}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="chatbot-header">
              <h3>🤖 Pratik-Bot</h3>
              <p>AI Assistant</p>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message-wrapper ${msg.sender}`}>
                  <div className={`message-bubble ${msg.sender}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="chatbot-options">
              {PREDEFINED_QUESTIONS.map((q) => (
                <button
                  key={q.id}
                  className="chatbot-option-btn"
                  onClick={() => handleQuestionClick(q)}
                >
                  {q.text}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
