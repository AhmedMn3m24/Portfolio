
"use client";

import { useState } from "react";

const contact = {
  email: {
    value: "aabdelmonem863@gmail.com",
    href: "mailto:aabdelmonem863@gmail.com",
  },
  github: {
    value: "github.com/AhmedMn3m24",
    href: "https://github.com/AhmedMn3m24",
  },
  linkedin: {
    value: "linkedin.com/in/ahmedmoneim24",
    href: "https://linkedin.com/in/ahmedmoneim24",
  },
  phone: {
    value: "+20 128 666 4236",
    href: "tel:+201286664236",
  },
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.open(
      `mailto:aabdelmonem863@gmail.com?subject=${subject}&body=${body}`
    );

    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#0b1120] pt-16 text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Header */}
        <div className="mb-16 text-center">
 

          <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            Let's work <br />
            <span className="text-amber-400">together.</span>
          </h1>
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <p className="leading-relaxed text-white/60">
              I'm open to freelance projects, full-time opportunities, and
              collaborations. Feel free to reach out.
            </p>

            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5 font-mono text-sm leading-7">
              <p className="text-white/40">{"{"}</p>

              {Object.entries(contact).map(([key, { value, href }]) => (
                <a
                  key={key}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group -mx-2 flex items-baseline gap-2 rounded px-2 pl-4 transition hover:bg-white/[0.04]"
                >
                  <span className="text-violet-400">{key}:</span>

                  <span className="text-amber-400 group-hover:underline">
                    "{value}"
                  </span>

                  <span className="text-white/0 transition group-hover:text-white/40">
                    ↗
                  </span>
                </a>
              ))}

              <p className="text-white/40">{"}"}</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your name"
              required
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              className="rounded-md border border-white/20 bg-transparent p-3 transition focus:border-amber-400 focus:outline-none"
            />

            <input
              type="email"
              placeholder="your@email.com"
              required
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="rounded-md border border-white/20 bg-transparent p-3 transition focus:border-amber-400 focus:outline-none"
            />

            <textarea
              rows={5}
              placeholder="Your message..."
              required
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
              className="resize-none rounded-md border border-white/20 bg-transparent p-3 transition focus:border-amber-400 focus:outline-none"
            />

            <button
              type="submit"
              className={`rounded-md p-3 font-medium transition ${
                sent
                  ? "bg-green-500 text-white"
                  : "bg-amber-400 text-[#0b1120] hover:bg-amber-300"
              }`}
            >
              {sent ? "✓ Opening mail..." : "Send Message →"}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-20 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row">
          <p>📍 Alexandria, Egypt — Open to Remote</p>
          <p>Arabic · English</p>
        </div>
      </div>
    </div>
  );
}