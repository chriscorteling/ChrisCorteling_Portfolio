import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="section-spacing">
      <div className="section-container">
        <SectionTitle title="Contact Me" subtitle="Let’s Connect" />

        <div className="glass-card p-8 md:p-10 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Interested in working together?
          </h3>

          <p className="text-gray-300 leading-8 max-w-2xl mx-auto">
            I’m currently building my skills in software engineering, AI, and
            fullstack development, and I’m open to internship opportunities,
            collaborations, and meaningful tech conversations.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:crcorteling@gmail.com"
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black hover:scale-105 transition"
            >
              Email Me
            </a>

            <a
              href="https://github.com/chriscorteling"
              target="_blank"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/chris-corteling"
              target="_blank"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}