// page.tsx

import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope,  FaWhatsapp } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
export default function Home() {
  const projects = [
    {
      title: "LMS Sederhana",
      desc: "Platform pembelajaran dengan otentikasi dan tampilan responsive.",
      tech: ["Next.js", "Tailwind", "Supabase"],
      link: "#",
    },
    {
      title: "Portfolio Interaktif",
      desc: "Website personal dengan animasi dan dark mode.",
      tech: ["React", "Framer Motion"],
      link: "#",
    },
    {
      title: "Dashboard Sekolah",
      desc: "Visualisasi data dan laporan untuk manajemen pesantren.",
      tech: ["Chart.js", "Next.js"],
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-gray-900 text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <Image
              src="/foto.png"
              alt="Profile"
              width={200}
              height={100}
              className="rounded-full border-2 border-white/20 shadow-md"
            />
            <div>
              <h1 className="text-2xl font-bold">Muchamad Yazid Ardani</h1>
              <p className="text-sm text-gray-300">Web Developer • Student Informatika</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-4">
            <a href="#about" className="text-sm text-gray-300 hover:text-white">About</a>
            <a href="#projects" className="text-sm text-gray-300 hover:text-white">Projects</a>
            <a href="#contact" className="text-sm text-gray-300 hover:text-white">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#" aria-label="github" className="p-2 rounded-md hover:bg-white/5">
              <FaGithub />
            </a>
            <a href="#" aria-label="linkedin" className="p-2 rounded-md hover:bg-white/5">
              <FaLinkedin />
            </a>
            <a href="mailto:example@email.com" aria-label="email" className="p-2 rounded-md hover:bg-white/5">
              <FaEnvelope />
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-16">
          <div className="md:col-span-2">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Hi, I'm Yazid 👋</h2>
            <p className="text-gray-300 max-w-2xl mb-6">
              Saya seorang pengembang web yang bersemangat membangun antarmuka pengguna
              yang bersih, mudah diakses, dan indah. Saat ini saya sedang mempelajari Next.js, Tailwind CSS, 
              dan membangun perangkat pendidikan untuk sekolah-sekolah berbasis pesantren.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold shadow-lg hover:scale-[1.01] transition-transform"
              >
                Contact Me
              </a>

              <a
                href="#projects"
                className="inline-block px-6 py-3 border border-white/10 rounded-lg text-sm hover:bg-white/5 transition"
              >
                See Projects
              </a>
            </div>
          </div>

          <div className="mx-auto">
            <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-indigo-600 to-pink-500 p-1 shadow-xl">
              <Image
                src="/foto 1.png"
                alt="profile big"
                width={200}
                height={200}
                className="rounded-full bg-black"
              />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">About Me</h3>
          <p className="text-gray-300 max-w-3xl">
           Saya adalah lulusan Pondok Pesantren Almunawwir dan SMK dengan jurusan Teknik Kendaraan Ringan Otomotif (TKRO). Saat ini, saya sedang menempuh studi di Universitas Nahdlatul Ulama (UNU) Yogyakarta. Saya sangat antusias dengan teknologi, UI/UX, dan pendidikan. Saya senang menciptakan solusi digital yang membantu guru dan siswa fokus pada pembelajaran, bukan pada peralatan. Di luar dunia pemrograman, saya juga mempelajari hukum dan mengeksplorasi bagaimana teknologi dapat memperluas akses pendidikan.
          </p>
        </section>

        {/* SKILLS */}
     <section className="mb-20">
  <h3 className="text-3xl font-semibold mb-8 text-center">Skills & Tools ⚙️</h3>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 justify-items-center">
    <Skill icon={<SiHtml5 size={32} />} label="HTML" colorClass="text-orange-400" />
    <Skill icon={<SiCss3 size={32} />} label="CSS" colorClass="text-blue-500" />
    <Skill icon={<SiJavascript size={32} />} label="JavaScript" colorClass="text-yellow-400" />
    <Skill icon={<SiReact size={32} />} label="React" colorClass="text-cyan-300" />
    <Skill icon={<SiNextdotjs size={32} />} label="Next.js" colorClass="text-white" />
    <Skill icon={<SiTailwindcss size={32} />} label="Tailwind" colorClass="text-sky-400" />
  </div>
</section>

    {/* PROJECTS */}
<section id="projects" className="mb-20">
  <div className="flex items-center justify-between mb-8">
    <h3 className="text-3xl font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
      Projects 
    </h3>
    <span className="text-sm text-gray-400">Some of my best creations,FAKE</span>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {projects.map((p, i) => (
      <a
        key={p.title}
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`group block rounded-2xl p-6 border border-white/10 text-white
          transition-all duration-500 transform hover:scale-[1.03] hover:-translate-y-1
          shadow-lg hover:shadow-2xl hover:shadow-purple-500/20
          bg-gradient-to-br ${
            i % 3 === 0
              ? "from-purple-600/30 to-indigo-700/30"
              : i % 3 === 1
              ? "from-pink-500/30 to-rose-700/30"
              : "from-blue-500/30 to-cyan-600/30"
          } backdrop-blur-md`}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <h4 className="font-bold text-xl mb-2 group-hover:text-white transition-all">
              {p.title}
            </h4>
            <p className="text-sm text-gray-200 mb-4 leading-relaxed">
              {p.desc}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {p.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full font-medium
                  bg-white/20 text-white backdrop-blur-sm
                  group-hover:bg-white/40 transition"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </a>
    ))}
  </div>
</section>


{/* CONTACT */}
<footer
  id="contact"
  className="mt-16 pt-12 border-t border-white/10 backdrop-blur-sm"
>
  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
    <div>
      <h4 className="text-2xl font-semibold mb-2">
        Let’s build something together 🚀
      </h4>
      <p className="text-gray-300 max-w-md">
        I’m always open to new projects, collaborations, or just a friendly chat.
      </p>

      {/* CONTACT DETAILS */}
      <div className="mt-5 space-y-3 text-gray-300">
        <p className="flex items-center gap-2 hover:text-pink-400 transition">
          <FaEnvelope className="text-pink-400" size={18} />
          <a
            href="mailto:muhzee16@gmail.com"
            className="underline"
          >
            muhzee16@gmail.com
          </a>
        </p>

        <p className="flex items-center gap-2 hover:text-green-400 transition">
          <FaWhatsapp className="text-green-400" size={18} />
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            className="underline"
          >
            +62 819 1568 0315
          </a>
        </p>

        <p className="flex items-center gap-2 hover:text-purple-400 transition">
          <RiInstagramLine className="text-purple-400" size={20} />
          <a
            href="https://instagram.com/username"
            target="_blank"
            className="underline"
          >
            @muhzee17
          </a>
        </p>
      </div>
    </div>

    {/* CTA BUTTONS */}
    <div className="flex gap-3">
      <a
        href="#"
        className="px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:opacity-90 shadow-lg transition"
      >
        Hire Me
      </a>
      <a
        href="/resume.pdf"
        className="px-5 py-2.5 border border-white/20 rounded-lg hover:bg-white/5 transition"
      >
        Download CV
      </a>
    </div>
  </div>

  <p className="text-xs text-gray-500 mt-10 text-center">
    © {new Date().getFullYear()}YAZID — Built with ❤️ using Next.js & Tailwind
  </p>
</footer>

      </div>
    </main>
  );
}


// Small Skill component (can be placed in same file or separated)
function Skill({ icon, label, colorClass }: { icon: React.ReactNode; label: string; colorClass?: string }) {
  return (
    <div className="flex items-center gap-3 bg-white/3 px-3 py-2 rounded-xl border border-white/6">
      <div className={`p-1 rounded-md ${colorClass}`}>{icon}</div>
      <span className="text-sm">{label}</span>
    </div>
  );
}


