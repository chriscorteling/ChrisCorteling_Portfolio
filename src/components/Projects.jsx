import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "CrackCode",
    description:
      "A coding platform project where I worked on authentication, session handling, shop features, inventory logic, purchase flow, and backend structure using modern development practices.",
    tech: ["MongoDB", "Express", "React", "Node.js" ],
    github: "https://github.com/chriscorteling/crackcode",
    live: "",
    image: "/images/crackcode.png"
  },

  {
    title: "Machine Learning Classification Project",
    description:
      "A classification-based machine learning project using algorithms such as Naive Bayes, Logistic Regression, and KNN, with evaluation metrics and visualizations for model performance.",
    tech: ["Python", "Pandas", "scikit-learn", "Matplotlib"],
    github: "https://github.com/chriscorteling/ml-project",
    live: "",
    image: "/images/ML.jpg"
  },

  {
    title: "Personal Portfolio Website",
    description:
      "A modern responsive developer portfolio built to showcase my projects, technical skills, education, and future goals in AI, robotics, and software engineering.",
    tech: ["Next.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/chriscorteling/portfolio",
    live: "",
    image: "/images/project.jpeg"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-spacing">
      <div className="section-container">
        <SectionTitle title="Projects" subtitle="My Work" />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}