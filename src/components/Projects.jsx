import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "CrackCode",
    description:
      "A coding platform project where I worked on authentication, session handling, shop features, inventory logic, purchase flow, and backend structure using modern development practices.",
    tech: ["MongoDB", "Express", "React", "Node.js" ],
    github: "https://github.com/CrackCode-dev/CrackCode-Main.git",
    live: "https://www.crackcodehq.com",
    image: "/Images/CrackCode.png"
  },

  {
    title: "DineM8",
    description:
      "A Restaurent Management System to manage the work flow between customer and waiter to the kitchen using smart unique QR-Systems",
    tech: ["C#", ".NET Core", "PostgreSQL", "React" ],
    github: "https://github.com/chriscorteling/Restaurant-Management-System.git",
    live: "",
    image: "/Images/Dinem8.png"
  },

  {
    title: "UMI EDU Website",
    description:
      "A website that is built to showcase the Life Under Water. Which is one of the SDG 14 Goals. ",
    tech: ["Python", "Pandas", "scikit-learn", "Matplotlib"],
    github: "https://github.com/KulaniShobashi/SDG-Life-under-water.git",
    live: "",
    image: "/Images/Life.jpg"
  },

  {
    title: "Personal Portfolio Website",
    description:
      "A modern responsive developer portfolio built to showcase my projects, technical skills, education, and future goals in AI, robotics, and software engineering.",
    tech: ["Next.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/chriscorteling/ChrisCorteling_Portfolio.git",
    live: "",
    image: "/Images/project.jpeg"
  },

 /* {
    title: "Data traffic Reader",
    description: 
     "A project covers up basic classification machine learning. From giving a dataset this project consists of data understanding, cleaning and reading thorough out a histogram.",
    tech: ["Python", "Pandas"],
    github: "https://github.com/chriscorteling/Traffic-Data-Viewer.git",
    live: "",
    image: "/Images/Traffic.png"
  } */
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