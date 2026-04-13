"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#0a0f1e] text-white border-b border-white/[0.07] h-16 flex items-center">
      <div className="max-w-7xl mx-auto px-[5%] w-full flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="text-xl font-extrabold">
            Ahmed<span className="text-blue-500">.</span>
          </span>
        </Link>

        {/* Mobile button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </button>

        {/* Links */}
        <nav
          className={`flex-col md:flex-row md:flex gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-[#0a0f1e] md:bg-transparent ${
            open ? "flex" : "hidden md:flex"
          }`}
        >
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-white font-bold relative pb-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-500"
                : "text-white/60 hover:text-white"
            }
          >
            Home
          </Link>

          <Link
            href="/about"
            className={
              pathname === "/about"
                ? "text-white font-bold relative pb-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-500"
                : "text-white/60 hover:text-white"
            }
          >
            About
          </Link>

          <Link
            href="/projects"
            className={
              pathname === "/projects"
                ? "text-white font-bold relative pb-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-500"
                : "text-white/60 hover:text-white"
            }
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className={
              pathname === "/contact"
                ? "text-white font-bold relative pb-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-500"
                : "text-white/60 hover:text-white"
            }
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
