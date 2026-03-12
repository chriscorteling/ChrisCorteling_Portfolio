"use client";

export default function BackgroundAnimation() {
  const particles = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    left: `${(i * 13) % 100}%`,
    top: `${(i * 19) % 100}%`,
    delay: `${i * 0.3}s`,
    duration: `${6 + (i % 4)}s`,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="absolute left-[5%] top-[8%] h-96 w-96 rounded-full bg-cyan-500/25 blur-3xl animate-blob" />
      <div className="absolute right-[8%] top-[15%] h-[28rem] w-[28rem] rounded-full bg-blue-500/20 blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-[10%] left-[12%] h-80 w-80 rounded-full bg-purple-500/20 blur-3xl animate-blob animation-delay-4000" />
      <div className="absolute bottom-[12%] right-[10%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl animate-blob animation-delay-6000" />

      <div className="absolute inset-0">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="absolute h-2 w-2 rounded-full bg-cyan-300/50 animate-float-particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
    </div>
  );
}

