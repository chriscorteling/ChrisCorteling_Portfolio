"use client";

import { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";

const educationData = [
  {
    title: "BSc (Hons) Computer Science & Engineering",
    institution: "University of Westminster, UK",
    subtitle: "Informatics Institute of Technology, Sri Lanka",
    period: "2024 - Present",
  },
  {
    title: "GCE Advanced Level",
    institution: "St. Benedict's College, Colombo 13",
    subtitle: "Engineering Technology Stream",
    period: "2024",
  },
  {
    title: "GCE Ordinary Level",
    institution: "St. Benedict's College, Colombo 13",
    subtitle: "",
    period: "2020",
  },
  {
    title: "School Education",
    institution: "St. Benedict's College, Colombo 13",
    subtitle: "",
    period: "2010 - 2023",
  },
];

export default function Education() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const total = rect.height + windowHeight;
      const current = windowHeight - rect.top;

      const value = Math.max(0, Math.min(current / total, 1));

      setProgress(value);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section id="education" className="section-spacing">
      <div className="section-container">

        <SectionTitle
          title="Education"
          subtitle="Academic Background"
        />

        <div ref={sectionRef} className="relative max-w-3xl mx-auto">

          {/* Dim base line */}
          <div className="absolute left-3 top-0 h-full w-[2px] bg-white/10" />

          {/* Glowing progress line */}
          <div
            className="absolute left-3 top-0 w-[2px] bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)] transition-all duration-300"
            style={{ height: `${progress * 100}%` }}
          />

          <div className="space-y-12">

            {educationData.map((item, index) => {

              const active = progress > (index + 0.3) / educationData.length;

              return (
                <div key={index} className="relative pl-12">

                  {/* Dot */}
                  <div className="absolute left-3 top-2 -translate-x-1/2">

                    <div
                      className={`h-4 w-4 rounded-full border-2 transition-all duration-500 ${
                        active
                          ? "bg-cyan-400 border-cyan-200 shadow-[0_0_18px_rgba(34,211,238,1)]"
                          : "bg-[#0a0a0a] border-white/20"
                      }`}
                    />

                  </div>

                  {/* Card */}
                  <div className="glass-card p-6 rounded-xl border border-white/10 backdrop-blur-lg hover:border-cyan-400/30 transition">

                    <p className="text-sm text-cyan-300 mb-1">
                      {item.period}
                    </p>

                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="text-cyan-400 mt-1">
                      {item.institution}
                    </p>

                    {item.subtitle && (
                      <p className="text-gray-400 text-sm">
                        {item.subtitle}
                      </p>
                    )}

                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}