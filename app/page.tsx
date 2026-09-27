'use client';

import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Code2,
  Database,
  Terminal,
  ExternalLink,
  Film,
  BriefcaseBusiness,
  GraduationCap,
  Trophy,
  MapPin,
} from 'lucide-react';

const profile = {
  name: 'Aabhesh Singh Shekhawat',
  title: 'Software Developer',
  email: 'aabheshbanna12@gmail.com',
  linkedin: 'https://www.linkedin.com/in/aabhesh-singh-shekhawat-b8b027294/',
  github: 'https://github.com/Aabhesh1',
  location: 'New Delhi, India',
};

const skillGroups = [
  { label: 'Languages', items: ['Java', 'Python', 'C', 'C++', 'JavaScript', 'TypeScript', 'SQL'] },
  { label: 'Frontend', items: ['HTML', 'CSS', 'React.js', 'Next.js', 'Tailwind CSS'] },
  { label: 'Backend', items: ['FastAPI', 'REST APIs', 'Node.js'] },
  { label: 'Databases', items: ['MySQL', 'MongoDB', 'PostgreSQL'] },
  { label: 'Core CS', items: ['Data Structures & Algorithms', 'OOP', 'DBMS'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Postman'] },
];

const projects = [
  {
    title: 'DentalAI',
    type: 'Full-Stack + ML Project',
    period: 'Aug 2025 — May 2026',
    featured: true,
    desc: 'An intelligent oral-health analysis and consultation platform designed to connect a web application, backend APIs, database workflows and machine-learning based dental image analysis.',
    bullets: [
      'Built an end-to-end workflow from data ingestion and image preprocessing to prediction output.',
      'Worked on image classification, feature extraction and model training for dental disease detection.',
      'Designed the application around a modern web frontend, FastAPI backend and PostgreSQL data layer.',
      'Evaluated model performance using accuracy, precision and recall.',
    ],
    stack: ['Next.js', 'React', 'FastAPI', 'PostgreSQL', 'Python', 'PyTorch'],
    github: 'https://github.com/Aabhesh1/DentalAI',
  },
  {
    title: 'Fruit Basket Game',
    type: 'Python Project',
    period: 'Jun 2024 — Jul 2024',
    featured: false,
    desc: 'An interactive Python game built with Turtle, featuring custom visuals, animated gameplay, collision detection, scoring, sound effects and randomized obstacles.',
    bullets: [
      'Implemented real-time collision detection and scoring logic.',
      'Added randomized fruit and obstacle spawning for replayable gameplay.',
      'Integrated Pygame sound effects to improve player interaction.',
    ],
    stack: ['Python', 'Turtle', 'Pygame'],
    github: null,
  },
];

const dentalScreens = [
  { src: '/dental-home.png', title: 'DentalAI landing page', caption: 'Product landing experience with animated network background and primary actions.' },
  { src: '/dental-analysis-home.png', title: 'AI Dental Analysis entry', caption: 'Image-upload workflow for starting a dental analysis.' },
  { src: '/dental-analysis-page.png', title: 'Analysis workspace', caption: 'Authenticated analysis workspace with image selection, preview and report areas.' },
  { src: '/dental-login.png', title: 'Authentication', caption: 'Login interface designed for the DentalAI application.' },
  { src: '/dental-profile.png', title: 'User profile', caption: 'Profile area for authenticated users.' },
  { src: '/dental-api.png', title: 'Backend API', caption: 'FastAPI documentation showing the password-reset endpoint.' },
];

const fade = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

export default function Home() {
  return (
    <main>
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/75 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <a href="#home" className="font-bold tracking-tight">AS<span className="accent">.</span></a>
          <div className="hidden gap-7 text-sm text-zinc-400 md:flex">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <a href="/Aabhesh-Singh-Shekhawat-Resume.pdf" download className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#d8ff3e]">Resume</a>
        </div>
      </nav>

      <section id="home" className="grid-bg relative flex min-h-screen items-center overflow-hidden pt-16">
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />
        <div className="container relative grid items-center gap-14 py-24 md:grid-cols-[1.3fr_.7fr]">
          <motion.div initial="hidden" animate="show" variants={fade}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-3 py-2 text-xs text-zinc-300">
              <span className="status-dot" /> Open to software opportunities
            </div>
            <p className="mb-4 text-sm uppercase tracking-[.3em] accent">Software Developer • Full-Stack</p>
            <h1 className="max-w-4xl text-5xl font-black leading-[.95] tracking-[-.05em] md:text-8xl">
              I build software<br /><span className="text-zinc-500">that solves real problems.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              I&apos;m Aabhesh Singh Shekhawat, a Computer Science & Engineering (Data Science) graduate focused on software development, web applications and practical problem solving.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-[#d8ff3e] px-5 py-3 font-bold text-black">View my work <ArrowUpRight size={18} /></a>
              <a href={profile.email === '' ? '#contact' : `mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-semibold hover:bg-white/5">Contact me <Mail size={17} /></a>
            </div>
            <div className="mt-9 flex items-center gap-5 text-zinc-500">
              <a aria-label="GitHub" href={profile.github} target="_blank" rel="noreferrer" className="social-link"><Github /></a>
              <a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noreferrer" className="social-link"><Linkedin /></a>
              <a aria-label="Email" href={`mailto:${profile.email}`} className="social-link"><Mail /></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7 }} className="profile-card card glow relative overflow-hidden p-6 md:p-8">
            <div className="portrait-wrap">
              <img src="/headshot.png" alt="Aabhesh Singh Shekhawat" className="portrait" />
              <div className="portrait-glow" />
            </div>
            <div className="relative z-10 -mt-2">
              <p className="mt-4 text-xs uppercase tracking-[.25em] text-zinc-500">Software Developer</p>
              <h2 className="mt-2 text-2xl font-bold">Aabhesh Singh Shekhawat</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-500">Building practical software with a focus on clean interfaces, APIs, databases and problem solving.</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="mini-stat"><Code2 size={17} /><span>Software</span></div>
                <div className="mini-stat"><Terminal size={17} /><span>Full-Stack</span></div>
                <div className="mini-stat"><Database size={17} /><span>Databases</span></div>
                <div className="mini-stat"><BriefcaseBusiness size={17} /><span>Fresher</span></div>
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs text-zinc-500"><MapPin size={14} /> {profile.location}</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-[.7fr_1.3fr]">
            <div><p className="eyebrow">01 / About</p><h2 className="section-title">A developer who<br />likes to build.</h2></div>
            <div className="text-zinc-400">
              <p className="text-lg leading-8">I&apos;m a Computer Science graduate who enjoys <span className="text-white">programming and problem solving</span>. I&apos;m particularly interested in software and web development, and I like turning ideas into working applications.</p>
              <p className="mt-5 leading-7">My experience spans frontend development, backend APIs, databases and project-based machine-learning workflows. I&apos;m currently focused on becoming a strong software developer who can understand a problem, build the solution and keep improving it.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="card p-5"><Code2 className="mb-4 accent" /><p className="font-bold">Software</p><p className="mt-1 text-xs text-zinc-500">Problem solving + code</p></div>
                <div className="card p-5"><Terminal className="mb-4 accent" /><p className="font-bold">Full-Stack</p><p className="mt-1 text-xs text-zinc-500">UI + APIs + databases</p></div>
                <div className="card p-5"><Database className="mb-4 accent" /><p className="font-bold">Data</p><p className="mt-1 text-xs text-zinc-500">SQL + NoSQL systems</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section border-y border-white/5 bg-white/[.015]">
        <div className="container">
          <p className="eyebrow">02 / Skills</p>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">Tools I work with.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map(group => <div className="card p-6" key={group.label}><p className="text-xs uppercase tracking-[.2em] accent">{group.label}</p><div className="mt-5 flex flex-wrap gap-2">{group.items.map(skill => <span className="tag" key={skill}>{skill}</span>)}</div></div>)}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><p className="eyebrow">03 / Selected work</p><h2 className="section-title">Projects that show<br />how I think.</h2></div>
            <p className="max-w-md text-sm leading-6 text-zinc-500">A small set of projects that demonstrate practical programming, application development and end-to-end thinking.</p>
          </div>
          <div className="mt-12 space-y-6">
            {projects.map(p => <motion.article whileHover={{ y: -4 }} key={p.title} className={`card overflow-hidden p-7 md:p-9 ${p.featured ? 'featured-project' : ''}`}>
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                <div><p className="text-xs uppercase tracking-widest accent">{p.type}</p><h3 className="mt-3 text-3xl font-bold md:text-4xl">{p.title}</h3><p className="mt-2 text-xs uppercase tracking-widest text-zinc-600">{p.period}</p></div>
                {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400 hover:text-white">GitHub <ExternalLink size={15} /></a>}
              </div>
              <p className="mt-6 max-w-4xl leading-7 text-zinc-400">{p.desc}</p>
              <div className="mt-7 grid gap-3 md:grid-cols-2">
                {p.bullets.map(b => <div className="project-point" key={b}><span className="point-dot" />{b}</div>)}
              </div>
              <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">{p.stack.map(x => <span className="tag" key={x}>{x}</span>)}</div>
              {p.featured && (
                <div className="mt-10 border-t border-white/10 pt-8">
                  <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
                    <div><p className="eyebrow">Inside the build</p><h4 className="mt-2 text-2xl font-bold">DentalAI in action.</h4></div>
                    <p className="max-w-lg text-sm leading-6 text-zinc-500">Selected screenshots from the application, covering the product UI, analysis workflow, authentication, profile experience and backend API.</p>
                  </div>
                  <div className="mt-7 grid gap-5 md:grid-cols-2">
                    {dentalScreens.map(screen => (
                      <figure key={screen.src} className="screenshot-card group overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                        <div className="screenshot-frame"><img src={screen.src} alt={screen.title} className="screenshot" /></div>
                        <figcaption className="p-4"><p className="font-semibold">{screen.title}</p><p className="mt-1 text-xs leading-5 text-zinc-500">{screen.caption}</p></figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}
            </motion.article>)}
          </div>
        </div>
      </section>

      <section id="education" className="section border-y border-white/5 bg-white/[.015]">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-[.7fr_1.3fr]">
            <div><p className="eyebrow">04 / Education & achievements</p><h2 className="section-title">The foundation<br />behind the work.</h2></div>
            <div className="space-y-8">
              <div className="timeline-card"><GraduationCap className="accent" size={24} /><div><p className="text-xs uppercase tracking-widest accent">2022 — 2026</p><h3 className="mt-2 text-xl font-bold">B.Tech — Computer Science & Engineering (Data Science)</h3><p className="mt-2 text-sm leading-6 text-zinc-500">KCC Institute of Technology & Management, Greater Noida</p><p className="mt-3 text-sm text-zinc-400">Graduated in 2026 with <span className="text-white">First Division</span>.</p></div></div>
              <div className="timeline-card"><Trophy className="accent" size={24} /><div><p className="text-xs uppercase tracking-widest accent">Hackathons</p><h3 className="mt-2 text-xl font-bold">Smart India Hackathon 2022</h3><p className="mt-2 text-sm leading-6 text-zinc-500">Participated in the national-level innovation challenge.</p><h3 className="mt-5 text-xl font-bold">Code-O-Fiesta Hackathon 2023</h3><p className="mt-2 text-sm leading-6 text-zinc-500">Participated in team-based coding and problem-solving challenges.</p></div></div>
              <div className="timeline-card"><Terminal className="accent" size={24} /><div><p className="text-xs uppercase tracking-widest accent">Additional learning</p><h3 className="mt-2 text-xl font-bold">AICTE-SANKALP Workshop</h3><p className="mt-2 text-sm leading-6 text-zinc-500">Workshop on High Performance Computing, October 2024, organized by AICTE and KCC Institute of Technology.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card cinematic-card overflow-hidden p-8 md:p-14">
            <div className="grid gap-10 md:grid-cols-[1.3fr_.7fr] md:items-end">
              <div><Film className="mb-5 accent" /><p className="eyebrow text-zinc-500">Beyond code</p><h2 className="mt-3 text-4xl font-black md:text-5xl">A little cinematic personality.</h2><p className="mt-5 max-w-2xl leading-7 text-zinc-400">I enjoy movies, especially action and thriller cinema. Film criticism is a creative side interest I&apos;m developing alongside my software career.</p></div>
              <div className="rounded-2xl bg-white/[.03] p-6"><p className="text-sm text-zinc-300">Personal principle</p><p className="mt-3 text-sm leading-6 text-zinc-500">Build the technical foundation first. Keep the creative side alive. Let both grow without competing for attention.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <div className="text-center"><p className="eyebrow">05 / Contact</p><h2 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">Let&apos;s build something.</h2><p className="mx-auto mt-6 max-w-xl leading-7 text-zinc-500">I&apos;m currently looking for software development opportunities, collaborations and interesting problems to solve.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-[#d8ff3e] px-6 py-3 font-bold text-black"><Mail size={18} /> Email me</a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold"><Github size={18} /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold"><Linkedin size={18} /> LinkedIn</a>
              <a href="/Aabhesh-Singh-Shekhawat-Resume.pdf" download className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold"><Download size={18} /> Resume</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8"><div className="container flex flex-col justify-between gap-3 text-sm text-zinc-600 md:flex-row"><p>© {new Date().getFullYear()} Aabhesh Singh Shekhawat</p><p>Software Developer • New Delhi, India</p></div></footer>
    </main>
  );
}
