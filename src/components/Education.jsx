// import SectionTitle from "./SectionTitle";

// export default function Education() {
//   return (
//     <section id="education" className="section-spacing">
//       <div className="section-container">
//         <SectionTitle title="Education" subtitle="Academic Background" />

//         <div className="glass-card p-8">
//           <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
//             BSc(Hons) Computer Science & Engineering
//           </h3>
//           <p className="text-gray-300 text-lg">
//             University Of Westminster, UK | Informatics Institute Of Technology, Sri Lanka 
//           </p>

//           <div className="mt-6 grid md:grid-cols-2 gap-6">
//             <div>
//               <h4 className="font-semibold mb-2 text-white">Core Modules</h4>
//               <ul className="text-gray-300 space-y-2">
//                 <li>• Java OOP </li>
//                 <li>• Database </li>
//                 <li>• Client Servers </li>
//                 <li>• Machine Learning </li>
//                 <li>• Algorithms & Data Structures</li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-semibold mb-2 text-white">Learning Goals</h4>
//               <ul className="text-gray-300 space-y-2">
//                 <li>• Build strong programming foundations</li>
//                 <li>• Develop practical ML and AI skills</li>
//                 <li>• Create real-world fullstack applications</li>
//                 <li>• Prepare for internships</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

export default function Education() {
  const education = [
    {
      title: "BSc (Hons) Computer Science & Engineering",
      institution: "University of Westminster, UK",
      location: "Informatics Institute of Technology, Sri Lanka",
      period: "2024 - Present",
      description:
        "Focused on software engineering, AI, machine learning, and full-stack development.",
    },
    {
      title: "GCE Advanced Level",
      institution: "St. Benedict's College, Colombo 13",
      location: "Engineering Technology Stream",
      period: "2024",
      description: "Studied Engineering Technology with focus on technical and analytical skills.",
    },
    {
      title: "GCE Ordinary Level",
      institution: "St. Benedict's College, Colombo 13",
      location: "",
      period: "2020",
      description: "",
    },
    {
      title: "Primary & Secondary Education",
      institution: "St. Benedict's College, Colombo 13",
      location: "",
      period: "2010 - 2023",
      description: "",
    },
  ];

  return (
    <section id="education" className="section-container py-24">
      <div className="text-center mb-16">
        <p className="text-cyan-400 tracking-[0.3em] text-sm uppercase">
          Academic Background
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-4">Education</h2>
      </div>

      <div className="max-w-3xl mx-auto relative border-l border-cyan-400/30">

        {education.map((item, index) => (
          <div key={index} className="mb-12 ml-8 relative">

            {/* Timeline Dot */}
            <span className="absolute -left-[38px] flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400 shadow-lg"></span>

            <div className="glass-card p-6 rounded-xl border border-white/10 backdrop-blur-lg">

              <h3 className="text-xl font-semibold text-cyan-400">
                {item.title}
              </h3>

              <p className="text-gray-300 mt-1">
                {item.institution}
              </p>

              {item.location && (
                <p className="text-gray-400 text-sm">
                  {item.location}
                </p>
              )}

              <p className="text-sm text-cyan-300 mt-2">
                {item.period}
              </p>

              {item.description && (
                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  {item.description}
                </p>
              )}

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}