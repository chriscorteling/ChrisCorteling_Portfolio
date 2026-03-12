"use client";

import { useMemo, useState } from "react";

const starterMessages = [
  {
    id: 1,
    role: "bot",
    text: "Hi, I’m Chris’s portfolio assistant. Ask me about his skills, projects, education, CV, or contact details.",
  },
];

const quickReplies = [
  "Who is Chris?",
  "What projects has he done?",
  "What skills does he have?",
  "How can I contact him?",
];

function getBotReply(message) {
  const text = message.toLowerCase();

  if (text.includes("who is chris") || text.includes("about chris") || text.includes("who are you")) {
    return "Chris Corteling is a Computer Science undergraduate focused on AI, machine learning, full-stack development, and building practical digital products.";
  }

  if (text.includes("project")) {
    return "Chris has worked on projects like CrackCode, a coding platform with modern web development features, and machine learning classification projects using Python and scikit-learn.";
  }

  if (text.includes("skill") || text.includes("tech stack") || text.includes("technology")) {
    return "His stack includes JavaScript, React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, Python, and machine learning tools like pandas, NumPy, scikit-learn, and matplotlib.";
  }

  if (text.includes("education") || text.includes("study") || text.includes("degree")) {
    return "Chris is studying Computer Science and is especially interested in AI, machine learning, software engineering, and modern product development.";
  }

  if (text.includes("cv") || text.includes("resume")) {
    return "You can use the View CV button in the navbar to open Chris’s CV.";
  }

  if (text.includes("contact") || text.includes("email") || text.includes("linkedin") || text.includes("github")) {
    return "You can contact Chris through the Contact section of the portfolio, where his email, GitHub, and LinkedIn are listed.";
  }

  return "I can help with Chris’s background, skills, projects, education, CV, and contact details. Try asking one of those.";
}

export default function ChatbotWindow({ isOpen, onClose }) {
  const [messages, setMessages] = useState(starterMessages);
  const [input, setInput] = useState("");

  const quickReplyItems = useMemo(() => quickReplies, []);

  const handleSend = (customText) => {
    const finalText = (customText ?? input).trim();
    if (!finalText) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      text: finalText,
    };

    const botMessage = {
      id: Date.now() + 1,
      role: "bot",
      text: getBotReply(finalText),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div
      className={`fixed bottom-24 left-6 z-[100] w-[calc(100vw-3rem)] max-w-sm transition-all duration-300 ${
        isOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b1120]/95 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <p className="text-sm font-medium text-cyan-300">Portfolio Assistant</p>
            <p className="text-xs text-gray-400">Ask about Chris, projects, or skills</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 text-gray-400 transition hover:bg-white/5 hover:text-white"
            aria-label="Close chatbot"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="max-h-[24rem] min-h-[18rem] space-y-4 overflow-y-auto px-4 py-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                  message.role === "user"
                    ? "bg-cyan-400 text-black"
                    : "border border-white/10 bg-white/5 text-gray-200"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 px-4 py-3">
          <div className="mb-3 flex flex-wrap gap-2">
            {quickReplyItems.map((item) => (
              <button
                key={item}
                onClick={() => handleSend(item)}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300 transition hover:border-cyan-400/50 hover:text-cyan-300"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
              placeholder="Ask something..."
              className="h-11 flex-1 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-gray-500 focus:border-cyan-400/50"
            />

            <button
              onClick={() => handleSend()}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400 text-black transition hover:scale-105"
              aria-label="Send message"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}