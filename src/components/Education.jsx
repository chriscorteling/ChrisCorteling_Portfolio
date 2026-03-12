import SectionTitle from "./SectionTitle";

export default function Education() {
  return (
    <section id="education" className="section-spacing">
      <div className="section-container">
        <SectionTitle title="Education" subtitle="Academic Background" />

        <div className="glass-card p-8">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
            BSc(Hons) Computer Science & Engineering
          </h3>
          <p className="text-gray-300 text-lg">
            University Of Westminster, UK | Informatics Institute Of Technology, Sri Lanka 
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-white">Core Modules</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Java OOP </li>
                <li>• Database </li>
                <li>• Client Servers </li>
                <li>• Machine Learning </li>
                <li>• Algorithms & Data Structures</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-white">Learning Goals</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Build strong programming foundations</li>
                <li>• Develop practical ML and AI skills</li>
                <li>• Create real-world fullstack applications</li>
                <li>• Prepare for internships</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}