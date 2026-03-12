"use client";

export default function ChatbotButton({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      className="fixed bottom-6 left-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/40 bg-[#0f172a]/90 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.18)] backdrop-blur-md transition duration-300 hover:scale-105 hover:border-cyan-300 hover:text-white"
    >
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 10h8M8 14h5m-7 6l-3-3V7a3 3 0 013-3h12a3 3 0 013 3v8a3 3 0 01-3 3H9z"
          />
        </svg>
      )}
    </button>
  );
}