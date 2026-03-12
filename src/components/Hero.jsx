


"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const fullText = "Chris Corteling";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="section-container min-h-[90vh] flex flex-col justify-center items-center text-center relative overflow-hidden"
    >
      {/* Profile Image */}
      <div className="mb-8">
        <img
          src="/images/pro-pic.png"
          alt="Chris Corteling"
          className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.45)] hover:scale-105 transition duration-300"
        />
      </div>

      <p className="mb-4 text-cyan-400 tracking-[0.25em] uppercase text-sm">
        Computer Science Undergraduate
      </p>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-4xl">
        Hi, I’m{" "}
        <span className="text-cyan-400">
          {typedText}
          <span className="animate-pulse">|</span>
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-base md:text-lg text-gray-300 leading-8">
        CO-Founder @CrackCode, Passionate in AI, Machine Learning, Full-Stack
        Development, Digital Marketing. I enjoy creating clean, scalable, and
        user-focused applications and building relations with team works.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href="#projects"
          className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black hover:scale-110 transition duration-300"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:scale-110 transition duration-300"
        >
          Contact Me
        </a>
      </div>

      <div className="mt-14 flex flex-wrap justify-center gap-4 text-sm text-gray-300">
        <span className="glass-card px-4 py-2 hover:-translate-y-1 transition duration-300">
          AI Enthusiast
        </span>
        <span className="glass-card px-4 py-2 hover:-translate-y-1 transition duration-300">
          Fullstack Developer
        </span>
        <span className="glass-card px-4 py-2 hover:-translate-y-1 transition duration-300">
          Robotics Interest
        </span>
        <span className="glass-card px-4 py-2 hover:-translate-y-1 transition duration-300">
          Data Science Learner
        </span>
      </div>
    </section>
  );
}

