"use client";
import Image from "next/image";
import cv from "../../public/cv.jpeg";

const bioLines = [
  "I'm Ahmed, a Frontend Developer based in Alexandria, Egypt.",
  "I specialize in React and Next.js with solid TypeScript skills",
  "and hands-on experience integrating REST APIs.",
  "I'm passionate about building fast, responsive, and accessible",
  "web applications.",
  "",
  "Graduated with a Bachelor's in Information Systems (2023) and",
  "completed the Front-End Development Track at Route Academy.",
  "Currently working at MDARJ, eager to grow within",
  "collaborative, product-driven teams.",
];

const experience = [
  {
    role: "Frontend Developer",
    company: "MDARJ",
    period: "June 2025 – Present",
    desc: "Developing and maintaining responsive web interfaces using React.js and Next.js. Implemented reusable components, optimized app performance, and ensured cross-browser compatibility. Collaborating with the product team on new features, UI/UX improvements, and architecture decisions. Focused on clean code, accessibility, and pixel-perfect designs.",
  },
  {
    role: "Developer Intern — IT Department",
    company: "Ezz Steel",
    period: "Jul 2024 – Oct 2024",
    desc: "Built and maintained frontend features using React.js, enhancing user experience with dynamic interfaces. Integrated MySQL databases to fetch and render backend data efficiently. Worked on form validations, state management, and asynchronous API calls. Collaborated with senior developers to learn best practices in code structuring and version control.",
  },
  {
    role: "Data Entry & Invoice Assistant",
    company: "Accounting Office",
    period: "Mar 2023 – Sep 2023",
    desc: "Managed electronic invoices, processed financial data, and maintained organized records. Developed strong attention to detail, accuracy, and time management skills. Gained experience in handling large datasets, using office software efficiently, and maintaining structured workflows — all of which enhanced analytical thinking and problem-solving abilities.",
  },
];

const skills = {
  "frontend.ts": [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "SASS",
    "Bootstrap 5",
  ],
  "toolkit.ts": [
    "NextAuth",
    "TanStack Query",
    "React Hook Form",
    "Zod",
    "Axios",
    "Context API",
    "React Router",
    "shadcn/ui",
    "HeroUI",
  ],
  "backend.ts": ["Node.js", "MySQL", "Git & GitHub", "REST APIs"],
};

export default function About() {
  return (
    <div className="pt-16 bg-[#0b1120] text-white min-h-screen">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8 py-16">
        {/* Header + terminal-window signature */}
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start mb-24">
          <div>
            <h1 className="font-display text-[clamp(2.2rem,5vw,3.2rem)] leading-[1.1] -tracking-[0.03em] mb-8">
              Building the web,
              <br />
              <em className="text-amber-400 not-italic">one component</em>
              <br />
              at a time.
            </h1>

            {/* Terminal window */}
            <div className="rounded-lg border border-white/10 bg-white/[0.03] overflow-hidden max-w-lg">
              <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10 bg-white/[0.02]">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                <span className="ml-3 text-xs font-mono text-white/40">
                  about.js
                </span>
              </div>
              <div className="p-4 md:p-5 font-mono text-[13px] leading-6">
                {bioLines.map((line, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-white/25 select-none w-4 text-right shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-slate-400">
                      {line && <span className="text-violet-400/70">// </span>}
                      {line}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full px-[9px] bg-gradient-to-br from-blue-500 to-blue-800 shadow-[0_0_60px_rgba(59,130,246,0.25)] transition-transform hover:scale-105 ">
              <Image
                src={cv}
                alt="Ahmed Abdelmonem"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Experience — code-gutter timeline */}
        <div className="mb-24">
          <p className="font-mono text-xs text-slate-500 mb-8">
            <span className="text-violet-400">//</span> experience.log
          </p>
          <div className="flex flex-col">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="grid md:grid-cols-[64px_1fr] gap-6 py-8 border-t border-white/10 first:border-t-0"
              >
                <div className="flex md:flex-col gap-2 md:gap-1">
                  <span className="font-mono text-2xl text-amber-400/80 font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                    <h3 className="text-base font-medium">{exp.role}</h3>
                    <span className="font-mono text-xs text-white/40">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-amber-400 font-medium mb-3">
                    {exp.company}
                  </p>
                  <p className="text-sm text-white/60 leading-7 font-light max-w-2xl">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <div className="grid gap-6 md:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-500/40 hover:bg-white/[0.05]"
              >
                <h3 className="mb-5 text-lg font-semibold capitalize">
                  {category.replace(".ts", "")}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-300 transition hover:bg-blue-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
