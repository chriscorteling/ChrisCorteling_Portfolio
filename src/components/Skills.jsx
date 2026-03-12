import SectionTitle from "./SectionTitle";

const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "Python", "Java", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database & Tools",
    items: ["MongoDB", "Git", "GitHub", "Postman", "VS Code"],
  },
  {
    title: "Machine Learning",
    items: ["Pandas", "NumPy", "scikit-learn", "Matplotlib"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-spacing">
      <div className="section-container">
        <SectionTitle title="Skills & Tech Stack" subtitle="What I Use" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 hover:border-cyan-400 hover:text-cyan-400 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}