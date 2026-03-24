export default function ProjectCard({ title, description, tech, github, live, image }) {
    return (
      <div className="glass-card p-6 flex flex-col justify-between hover:-translate-y-1 transition">
        <div>
        <div className="mb-4 h-44 overflow-hidden rounded-xl border border-white/10">
         <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
           />
        </div>
  
          <h3 className="text-2xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-300 leading-7 mb-5">{description}</p>
  
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
  
        <div className="flex gap-3 mt-auto">
          <a
            href={github}
            target="_blank"
            className="rounded-full border border-white/20 px-4 py-2 text-sm hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            GitHub
          </a>
  
          {live && (
            <a
              href={live}
              target="_blank"
              className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-black hover:scale-105 transition"
            >
              Website
            </a>
          )}
        </div>
      </div>
    );
  }