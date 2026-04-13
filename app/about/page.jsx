"use client";
import Image from "next/image";
import cv from "../../public/cv.jpeg";
const experience = [
  {
    role: "Frontend Developer",
    company: "MDARJ",
    period: "Feb 2026 – Present",
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
  Frontend: [
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
  "Libraries & Tools": [
    "NextAuth",
    "React Query",
    "React Hook Form",
    "Zod",
    "Axios",
    "Context API",
    "React Router",
    "shadcn/ui",
    "HeroUI",
  ],
  "Backend & Tools": ["Node.js", "MySQL", "Git & GitHub", "REST APIs"],
};

export default function About() {
  return (
      <div className="pt-16 bg-[#0b1120] text-white min-h-screen">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8 py-16 "> 
        {/* Header */}
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start mb-20">
          <div>
            <p className="text-sm text-blue-500 uppercase tracking-wider mb-4">
              About me
            </p>
            <h1 className="font-display text-[clamp(2.2rem,5vw,3.2rem)] leading-[1.1] -tracking-[0.03em] mb-6">
              Building the web,
              <br />
              <em>one component</em>
              <br />
              at a time.
            </h1>
            <p className="text-base text-white/70 leading-7 max-w-lg font-light">
              I'm Ahmed, a Frontend Developer based in Alexandria, Egypt. I
              specialize in React and Next.js with solid TypeScript skills and
              hands-on experience integrating REST APIs. I'm passionate about
              building fast, responsive, and accessible web applications.
            </p>
            <p className="text-base text-white/70 leading-7 max-w-lg font-light mt-4">
              Graduated with a Bachelor's in Information Systems (2023) and
              completed the Front-End Development Track at Route Academy.
              Currently working at MDARJ, eager to grow within collaborative,
              product-driven teams.
            </p>
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

        {/* Experience */}
        <div className="mb-20">
          <p className="text-xs text-blue-500 uppercase tracking-wider mb-8">
            Experience
          </p>
          <div className="flex flex-col divide-y divide-white/10">
            {experience.map((exp, i) => (
              <div key={i} className="grid md:grid-cols-[180px_1fr] gap-8 py-8">
                <div>
                  <p className="text-sm text-white/60 m-0">{exp.period}</p>
                </div>
                <div>
                  <h3 className="text-base font-medium mb-1">{exp.role}</h3>
                  <p className="text-sm text-blue-500 font-medium mb-3">
                    {exp.company}
                  </p>
                  <p className="text-sm text-white/70 leading-7 font-light">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <p className="text-xs text-blue-500 uppercase tracking-wider mb-8">
            Skills
          </p>
          <div className="grid gap-8 md:grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="p-6 bg-white/5 border border-white/10 rounded-lg"
              >
                <p className="text-xs text-white/60 uppercase tracking-[0.08em] mb-4">
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 border border-white/20 rounded-full text-sm text-white/80"
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
