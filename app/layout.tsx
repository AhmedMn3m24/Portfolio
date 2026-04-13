import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Ahmed Mohamed — Frontend Developer",
  description: "Frontend Developer specializing in React & Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <div className="mx-auto py-3" style={{ backgroundColor: "#0a0f1d" }}>
          {" "}
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
