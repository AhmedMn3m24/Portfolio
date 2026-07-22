
"use client";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "A responsive e-commerce platform with product cards, wishlist, secure authentication via NextAuth, and form validation with Zod.",
    tech: ["Next.js", "TypeScript", "NextAuth",    "Context",
 "React Hook Form", "Zod"],
    live: "https://e-commerce-app-caqh12.vercel.app/",
    github: "https://github.com/AhmedMn3m24",
    featured:false,
  },

{
  title: "Restaurant Website",
  desc: "A full-featured restaurant web application with dynamic menu categories, API-powered food items, responsive design, smooth page transitions, and a contact form with validation. Built with modern React and Next.js best practices.",
  tech: [
    "Next.js",
    "TypeScript",
    "Context",
    "Tailwind CSS",
    "TanStack Query",
    "React Hook Form",
    "Framer Motion"
  ],

  live: " https://restaurant-app-38by.vercel.app",
  github: "https://github.com/AhmedMn3m24/restaurant-app.git",
  featured: true,
},

  {
    title: "Todo List",
    desc: "A simple and interactive Todo List application built with Vanilla JavaScript. Add, delete, and mark tasks as completed with a clean, responsive UI. Built for practicing DOM manipulation and state handling without frameworks.",
    tech: ["JavaScript", "HTML", "Tailwind"],
    live: "https://todolist-xi-liart.vercel.app",
    github: "https://github.com/AhmedMn3m24/TODOLIST",
    featured: false,
  },
  {
  title: "Developer Portfolio",
  desc: "A modern and responsive portfolio built with Next.js, showcasing my projects, skills, and professional experience. Designed with a clean UI, smooth navigation, and optimized performance.",
  tech: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
  live: "https://https://portfolio-fyos.vercel.app",
  github: "https://github.com/AhmedMn3m24/Portfolio",
  featured: true,
},
  {
    title: "Weather App",
    desc: "A weather application showing 3-day forecasts based on user input city or geolocation. Built with JavaScript and APIs.",
    tech: ["JavaScript", "HTML", "CSS"],
    live: "https://ahmedmn3m24.github.io/Weather_project/",
    github: "https://github.com/AhmedMn3m24/Weather_project",
    featured: false,
  },
  {
    title: "Daniels",
    desc: "A personal portfolio website showing skills, projects, and experience. Built to practice responsive layout and web design.",
    tech: ["HTML", "CSS", "Bootstrap 5"],
    live: "https://ahmedmn3m24.github.io/Daniels_project/",
    github: "https://github.com/AhmedMn3m24/Daniels_project",
    featured: false,
  },
  {
    title: "Mealifay",
    desc: "A landing page for a restaurant, showcasing menu items, reservation options, and responsive design using HTML & CSS.",
    tech: ["HTML5", "CSS3"],
    live: "https://ahmedmn3m24.github.io/Mealfiy_project/",
    github: "https://github.com/AhmedMn3m24/Mealfiy_project",
    featured: false,
  },
  {
    title: "Book Mark App",
    desc: "A bookmark manager app where users can add, delete, and organize their bookmarks. Practicing DOM manipulation and storage in JS.",
    tech: ["JavaScript", "HTML", "CSS"],
    live: "https://ahmedmn3m24.github.io/BookMarks/",
    github: "https://github.com/AhmedMn3m24/BookMarks",
    featured: false,
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#0b1120] pt-16 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Header */}
        <div className="mb-16">
          

          <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Projects I've built.
          </h1>
        </div>

        {/* Projects */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex min-h-[380px] flex-col justify-between rounded-lg border border-white/10 p-6 transition hover:border-white/20 hover:bg-white/[0.04]"
            >
              <span className="font-mono text-sm text-white/25">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="mt-3 flex flex-1 flex-col justify-between">
                <div>
                  <div className="mb-2 flex items-baseline gap-2 flex-wrap">
                    <h2 className="text-lg font-medium">{project.title}</h2>

                    {project.featured && (
                      <span className="font-mono text-xs italic text-violet-400">
                        // featured
                      </span>
                    )}
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-white/60">
                    {project.desc}
                  </p>

                  <p className="font-mono text-xs leading-5 text-white/50">
                    [
                    {project.tech.map((item, idx) => (
                      <span key={item}>
                        <span className="text-amber-400">"{item}"</span>
                        {idx !== project.tech.length - 1 && ", "}
                      </span>
                    ))}
                    ]
                  </p>
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-amber-400 px-3 py-2 text-sm font-medium text-[#0b1120] transition hover:bg-amber-300"
                  >
                    Live ↗
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-white/20 px-3 py-2 text-sm transition hover:bg-white/10"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-white/50">
            Want to see more? Check my GitHub.
          </p>

          <a
            href="https://github.com/AhmedMn3m24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md border border-white/20 px-6 py-3 transition hover:bg-white/10"
          >
            View GitHub ↗
          </a>
        </div>
      </div>
    </div>
  );
}