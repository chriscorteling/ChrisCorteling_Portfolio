export default function Navbar() {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-lg">
        <div className="section-container flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
        <img
            src="/images/logo.png"
            alt="Chris Corteling Logo"
            className="h-20 w-auto hover:scale-110 transition duration-300"
        />
        
        <span className="text-xl font-semibold tracking-wide">
        Chris<span className="text-cyan-400"> Corteling</span>
       </span>
        </a>
  
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#education" className="hover:text-cyan-400 transition">Education</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </nav>
  
          <a
            href="/cv.pdf"
            target="_blank"
            className="rounded-full border border-cyan-400 px-4 py-2 text-sm font-medium text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
          >
            View CV
          </a>
        </div>
      </header>
    );
  }