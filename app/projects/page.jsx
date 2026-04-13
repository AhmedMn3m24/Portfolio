"use client";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "A responsive e-commerce platform with product cards, wishlist, secure authentication via NextAuth, and form validation with Zod.",
    tech: ["Next.js", "TypeScript", "NextAuth", "React Hook Form", "Zod"],
    live: "https://e-commerce-app-caqh12.vercel.app/",
    github: "https://github.com/AhmedMn3m24",
    featured: true,
    number: "01",
    img: "../../public/asstes/ecommerce.png",
  },
{
  title: "Todo List",
  desc: "A simple and interactive Todo List application built with Vanilla JavaScript. It allows users to add, delete, and mark tasks as completed with a clean and responsive UI. Built for practicing DOM manipulation and state handling without frameworks.",
  tech: ["JavaScript", "HTML", "Tailwind"],
  live: "https://todolist-xi-liart.vercel.app",
  github: "https://github.com/AhmedMn3m24/TODOLIST.git",
  featured: false,
  number: "02",
  img: "../../public/assets/login.png",
},
  {
    title: "Weather App",
    desc: "A weather application showing 3-day forecasts based on user input city or geolocation. Built with JavaScript and APIs.",
    tech: ["JavaScript", "HTML", "CSS"],
    live: "https://ahmedmn3m24.github.io/Weather_project/",
    github: "https://github.com/AhmedMn3m24/Weather_project",
    featured: false,
    number: "03",
    img: "../../public/asstes/weather.png",
  },
  {
    title: "Denisls ",
    desc: "A personal portfolio website showing skills, projects, and experience. Built to practice responsive layout and web design.",
    tech: ["HTML", "CSS", "Bootstrap 5"],
    live: "https://ahmedmn3m24.github.io/Daniels_project/",
    github: "https://ahmedmn3m24.github.io/Daniels_project/",
    featured: false,
    number: "04",
    img: "../../public/asstes/deniisls.png",
  },
  

  {
    title: "Mealifay",
    desc: "A landing page for a restaurant, showcasing menu items, reservation options, and responsive design using HTML & CSS.",
    tech: ["HTML5", "CSS3"],
    live: "https://ahmedmn3m24.github.io/Mealfiy_project/",
    github: "https://ahmedmn3m24.github.io/Mealfiy_project/",
    featured: false,
    number: "05",
    img: "../../public/asstes/mealifay.png",
  },

  {
    title: "Book Mark App",
    desc: "A bookmark manager app where users can add, delete, and organize their bookmarks. Practicing DOM manipulation and storage in JS.",
    tech: ["JavaScript", "HTML", "CSS"],
    live: "https://ahmedmn3m24.github.io/BookMarks/",
    github: "https://ahmedmn3m24.github.io/BookMarks/",
    featured: false,
    number: "06",
    img: "../../public/asstes/bookmark.png",
  },
];

export default function Projects() {
  return (
    <div className="pt-16 bg-[#0b1120] text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-widest text-green-500 mb-3">
            Selected work
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Projects I've built.
          </h1>
        </div>

        {/* Project Cards - Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="flex flex-col justify-between p-6 border border-white/10 rounded-lg hover:bg-white/5 crouser pointer  transition min-h-[350px]"
            >
              {/* Number & Content */}
              <div className="flex flex-col gap-3 h-full">
                <span className="text-gray-400 text-sm">{project.number}</span>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-lg font-medium">{project.title}</h2>
                      {project.featured && (
                        <span className="text-xs px-2 py-1 rounded-full border border-green-500 text-green-500">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-white/70 leading-relaxed mb-3">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 border rounded-full text-white/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 mt-4">
                    <a
                      href={project.live}
                      target="_blank"
                      className="px-3 py-2 bg-green-500 text-white rounded-md text-center hover:opacity-80 transition"
                    >
                      Live ↗
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      className="px-3 py-2 border border-white/20 rounded-md text-center hover:bg-white/10 transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-white/60 mb-4">
            Want to see more? Check my GitHub.
          </p>
          <a
            href="https://github.com/AhmedMn3m24"
            target="_blank"
            className="inline-block px-6 py-3 border border-white/20 rounded-md hover:bg-white/10 transition"
          >
            View GitHub ↗
          </a>
        </div>
      </div>
    </div>
  );
}
