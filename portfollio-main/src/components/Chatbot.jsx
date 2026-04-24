import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import "../CSS/Chatbot.css";

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const SYSTEM_PROMPT = `
You are "Pratik-Bot", a friendly and highly intelligent AI assistant for Pratik Kumar's professional portfolio. 
Your goal is to represent Pratik and answer questions about him in a natural, professional, and slightly conversational tone.

About Pratik Kumar:
- Location: Madhepura, Bihar, India
- Education: 3rd Year B.C.A (AI & Data Science) student at B.N.M.U (2023-2026), GPA: 9.0.
- 12th Board: Swami Vivekanand Inter College (2023), 66.6%.
- 10th Board: Madhuram High School Gwalpara (2021), 71.6%.
- Professional Focus: AI Automation, Python, and smart system development.
- Key Skills: Python, C, C++, Machine Learning, NLP, LLM APIs, Voice Assistants, React, Flutter, SQLite, MySQL, n8n, Git, GitHub.
- Key Projects:
  1. MASS (Multi-Agent Smart System): An advanced AI assistant (like Alexa) with continuous listening, system automation, and emotion detection.
  2. Mini Power BI Dashboard: Interactive data visualization using HTML/CSS/JS.
  3. TuneNest: Modern music player app.
  4. DivyaKatha: Storytelling project about the four Yugas.
  5. CyberCafeDeals: Resource hub for students and AI tools.
- Achievements: Class Representative (CR) for 5th Semester.
- Certifications: Claude code, Google Technical, Microsoft, AWS, SkillsVarz, Ready Tensor.

Guidelines:
- If someone asks "Who are you?", introduce yourself as Pratik-Bot.
- If asked about Pratik's contact details, provide his email (pratikverma153@gmail.com) or LinkedIn/GitHub.
- Keep responses concise but informative.
- Be helpful and encourage users to check out his projects.
- Use a "natural" and conversational tone. Feel free to use professional yet friendly language.
- If appropriate, you can use subtle humor or enthusiasm about Pratik's achievements like his 9.0 GPA or his cool AI projects like MASS.
- IMPORTANT: Always refer to Pratik in the third person or as "my creator" if appropriate, but act as his official assistant.
`;

const PREDEFINED_QUESTIONS = [
  { id: "q1", text: "Who is Pratik?" },
  { id: "q2", text: "Tell me about MASS project" },
  { id: "q3", text: "What are your technical skills?" }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I am Pratik-Bot. How can I help you today?" }
  ]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const fetchGroqResponse = async (userText) => {
    if (!GROQ_API_KEY) {
      setMessages((prev) => [...prev, { 
        sender: "bot", 
        text: "API Key missing! Please add VITE_GROQ_API_KEY to your Vercel environment variables to enable the AI." 
      }]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages.map(m => ({ 
              role: m.sender === "user" ? "user" : "assistant", 
              content: m.text 
            })),
            { role: "user", content: userText }
          ],
          temperature: 0.7,
          max_tokens: 500
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error?.message || "API Request Failed");
      }

      const botResponse = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't generate a response.";
      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages((prev) => [...prev, { sender: "bot", text: "I'm having a little trouble connecting to my brain right now. Please try again in a moment!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const text = userInput;
    setUserInput("");
    setMessages((prev) => [...prev, { sender: "user", text }]);
    await fetchGroqResponse(text);
  };

  const handleQuestionClick = async (question) => {
    if (isLoading) return;
    setMessages((prev) => [...prev, { sender: "user", text: question.text }]);
    await fetchGroqResponse(question.text);
  };

  return (
    <>
      <motion.button
        className="chatbot-fab"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? "✕" : "🤖"}
      </motion.button>

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
              {isLoading && (
                <div className="message-wrapper bot">
                  <div className="typing-indicator">
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                  </div>
                </div>
              )}
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

            <form className="chatbot-input-area" onSubmit={handleSendMessage}>
              <input
                type="text"
                className="chatbot-input"
                placeholder="Type a message..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                disabled={isLoading}
              />
              <button type="submit" className="chatbot-send-btn" disabled={isLoading || !userInput.trim()}>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
