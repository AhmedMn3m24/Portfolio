"use client";

import { useState } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "aabdelmonem863@gmail.com",
    href: "mailto:aabdelmonem863@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/AhmedMn3m24",
    href: "https://github.com/AhmedMn3m24",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ahmedmoneim24",
    href: "https://linkedin.com/in/ahmedmoneim24",
  },
  { label: "Phone", value: "+20 128 666 4236", href: "tel:+201286664236" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.open(`mailto:aabdelmonem863@gmail.com?subject=${subject}&body=${body}`);

    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="pt-16 bg-[#0b1120] text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16 items-center">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-widest text-green-500 mb-3">
            Get in touch
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Let's work <br />
            <span className="italic text-green-500">together.</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Side - Contact Links */}
          <div className="flex flex-col gap-6">
            <p className="text-gray-400 leading-relaxed">
              I'm open to freelance projects, full-time opportunities, and
              collaborations. Feel free to reach out.
            </p>

            <div className="flex flex-col gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  className="flex justify-between items-center py-3 px-4 border border-white/10 rounded-md hover:bg-white/5 hover:text-green-500 transition"
                >
                  <span className="text-xs uppercase text-gray-400">{link.label}</span>
                  <span className="text-sm">{link.value} ↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="p-3 border border-white/20 rounded-md bg-transparent focus:outline-none focus:border-green-500 transition"
            />
            <input
              type="email"
              placeholder="your@email.com"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="p-3 border border-white/20 rounded-md bg-transparent focus:outline-none focus:border-green-500 transition"
            />
            <textarea
              placeholder="Your message..."
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="p-3 border border-white/20 rounded-md bg-transparent resize-none focus:outline-none focus:border-green-500 transition"
            />

            <button
              type="submit"
              className={`p-3 rounded-md text-white font-medium transition ${
                sent ? "bg-green-500" : "bg-black hover:opacity-80"
              }`}
            >
              {sent ? "✓ Opening mail..." : "Send Message →"}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between text-sm text-gray-500 gap-3">
          <p>📍 Alexandria, Egypt — Open to remote</p>
          <p>Arabic · English</p>
        </div>
      </div>
    </div>
  );
}