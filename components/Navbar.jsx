// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="bg-[#0a0f1e] text-white border-b border-white/[0.07] h-16 flex items-center">
//       <div className="max-w-7xl mx-auto px-[5%] w-full flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/">
//           <span className="text-xl font-extrabold">
//             Ahmed<span className="text-blue-500">.</span>
//           </span>
//         </Link>

//         {/* Mobile button */}
//         <button className="md:hidden" onClick={() => setOpen(!open)}>
//           {open ? "✖" : "☰"}
//         </button>

//         {/* Links */}
//         <nav
//           className={`flex-col md:flex-row md:flex gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-[#0a0f1e] md:bg-transparent ${
//             open ? "flex" : "hidden md:flex"
//           }`}
//         >
//           <Link
//             href="/"
//             className={
//               pathname === "/"
//                 ? "text-white font-bold relative pb-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-500"
//                 : "text-white/60 hover:text-white"
//             }
//           >
//             Home
//           </Link>

//           <Link
//             href="/about"
//             className={
//               pathname === "/about"
//                 ? "text-white font-bold relative pb-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-500"
//                 : "text-white/60 hover:text-white"
//             }
//           >
//             About
//           </Link>

//           <Link
//             href="/projects"
//             className={
//               pathname === "/projects"
//                 ? "text-white font-bold relative pb-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-500"
//                 : "text-white/60 hover:text-white"
//             }
//           >
//             Projects
//           </Link>

//           <Link
//             href="/contact"
//             className={
//               pathname === "/contact"
//                 ? "text-white font-bold relative pb-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-500"
//                 : "text-white/60 hover:text-white"
//             }
//           >
//             Contact
//           </Link>
//         </nav>
//       </div>
//     </div>
//   );
// }

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#0a0f1e]/90 backdrop-blur-md text-white border-b border-white/[0.07] h-16 flex items-center sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-[5%] w-full flex justify-between items-center">
        {/* Logo styled like a JSX component tag */}
        <Link href="/" className="group">
          <span className="text-xl font-display font-bold tracking-tight">
            <span className="text-white/40 font-mono"></span>
            Ahmed Mohamed
            <span className="text-white/70 font-mono">.</span>
          </span>
        </Link>

        {/* Mobile button */}
        <button
          className="md:hidden font-mono text-lg"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✖" : "☰"}
        </button>

        {/* Links styled like editor tabs */}
        <nav
          className={`flex-col md:flex-row md:flex gap-1 md:gap-2 absolute md:static top-16 left-0 w-full md:w-auto bg-[#0a0f1e] md:bg-transparent border-t border-white/[0.07] md:border-none ${
            open ? "flex" : "hidden md:flex"
          }`}
        >
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 md:py-2 flex items-center gap-2 text-sm transition hover:text-white hover:border-b-2 hover:border-violet-800 rounded-md ${
                  active ? "text-white" : "text-white/50"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full transition ${
                    active ? "bg-amber-400" : "bg-transparent"
                  }`}
                />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
