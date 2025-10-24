'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 right-0 flex justify-end bg-transparent backdrop-blur-md px-8 py-4 text-white z-50 shadow-lg shadow-black/20">
      <div className="flex gap-6 text-lg font-medium">
        <Link
          href="/"
          className="hover:text-purple-400 focus:text-purple-400 transition-colors duration-300 underline-offset-4 hover:underline focus:underline"
          aria-label="Go to About Me section"
        >
          About Me
        </Link>
        <Link
          href="/projects"
          className="hover:text-purple-400 focus:text-purple-400 transition-colors duration-300 underline-offset-4 hover:underline focus:underline"
          aria-label="Go to Projects page"
        >
          Projects
        </Link>
        {/* Optional: Jika single-page app, ganti dengan anchor:
        <a
          href="#about"
          className="hover:text-purple-400 focus:text-purple-400 transition-colors duration-300 underline-offset-4 hover:underline focus:underline"
          aria-label="Scroll to About Me section"
        >
          About Me
        </a>
        <a
          href="#projects"
          className="hover:text-purple-400 focus:text-purple-400 transition-colors duration-300 underline-offset-4 hover:underline focus:underline"
          aria-label="Scroll to Projects section"
        >
          Projects
        </a>
        */}
      </div>
    </nav>
  );
}
