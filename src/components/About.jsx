import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

export default function About() {
  return (
    <Reveal>
      <section id="about" className="section-spacing">
        <div className="section-container">
          <SectionTitle title="About Me" subtitle="Who I Am" />

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                My Journey
              </h3>
              <p className="text-gray-300 leading-8">
                I am a Computer Science undergraduate passionate in AI, Machine Learning with experience on Full-Stack Development, and basic knowledge in DevOps & MLOps. I enjoy learning by
                building practical projects that improve both my technical
                skills and problem-solving mindset.
              </p>
              <p className="text-gray-300 leading-8 mt-4">
                I am especially interested in creating products that combine
                good design, useful features, and strong engineering. My goal
                is to grow into a developer who can build impactful software and
                eventually lead innovative tech ventures.
              </p>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                Positions Held/ Holding
              </h3>
              <ul className="space-y-4 text-gray-300 leading-7">
                <li>• IEEE CIS Logistics Lead 2026/27</li>
                <li>• CO-Founder CrackCode </li>
                <li>• Vice Chair Logistics Lead IEEE</li>
                <li>• Chief Batch Representative L4 & L5</li>
                <li>• Industry Outreach Member </li>
                <li>• RACIIT Member </li>
                <li>• Web Lead CuttingEdge 2025 </li>

              </ul>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}