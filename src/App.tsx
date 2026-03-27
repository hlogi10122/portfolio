import { motion } from "framer-motion";
import { GitBranch, Briefcase, Music2, Shield, Code2, Disc3, ExternalLink } from "lucide-react";

export default function PortfolioWebsite() {
  const techSkills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Cybersecurity Fundamentals",
    "HTML",
    "CSS",
    "Spring Boot",
    "Tailwind CSS",
    "Git & GitHub",
    "REST APIs",
    "JWT Authentication",
  ];

  const musicSkills = [
    "DJ Performance",
    "Music Production",
    "Beat Matching",
    "Playlist Curation",
    "Live Set Preparation",
    "Sound Selection",
  ];

  const projects = [
    {
      title: "FlexSure",
      type: "Product",
      description:
        "A gadget insurance marketplace — I worked on product flows that make buying cover straightforward and less frustrating.",
      stack: "Angular, Spring Boot, PostgreSQL, Tailwind CSS",
    },
    {
      title: "Movie App",
      type: "Side Project",
      description:
        "A small full‑stack app to practice API design and frontend integration. Useful as a learning project and demo of end‑to‑end work.",
      stack: "Angular, Spring Boot, PostgreSQL",
    },
    {
      title: "Traffik Robhane",
      type: "Music",
      description:
        "My music project: DJ sets, productions, and curated playlists — a place where I experiment with sound and performance.",
      stack: "Spotify, DJ Sets, Production, Curation",
    },
  ];

  const experience = [
    {
      title: "Full-Stack Developer",
      subtitle: "Building useful, reliable software",
      description:
        "I create web apps and APIs used by people — I enjoy turning fuzzy problems into working features and fixing the annoying edge cases.",
      icon: <Code2 className="h-6 w-6" />,
    },
    {
      title: "DJ & Producer",
      subtitle: "Live performance and sound design",
      description:
        "Under Traffik Robhane I DJ, produce tracks, and design sets — I focus on flow, pacing, and good song choices that make people move.",
      icon: <Disc3 className="h-6 w-6" />,
    },
  ];

  const links = [
    {
      label: "GitHub",
      href: "https://github.com/hlogi10122",
      icon: <GitBranch className="h-5 w-5" />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/lehlohonolo-masipa-1606a91b6",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      label: "Spotify",
      href: "https://open.spotify.com/artist/0wR4sOcO8d8b6rdQeefRfo",
      icon: <Music2 className="h-5 w-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-base leading-relaxed text-slate-900 selection:bg-blue-200">

      <section className="relative mx-auto max-w-6xl px-6 pb-16 pt-10 md:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex flex-wrap items-center justify-between gap-4"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Portfolio</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900">Lehlohonolo Masipa</h1>
            <p className="mt-2 text-base text-slate-600">
              Full‑stack developer. I build practical, reliable web products people enjoy using.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-medium text-blue-700">
              <Shield className="h-4 w-4" /> Security-minded developer
            </span>
            <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              Practical products that feel effortless to use.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              I’m <span className="font-semibold text-slate-900">Lehlohonolo Masipa</span>. I write interfaces and APIs that solve real problems.
              I care about sensible structure, clear user flows, and shipping things that actually help people.
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-slate-600">
              <li>Interfaces that are simple, clear, and a little thoughtful.</li>
              <li>Backends that are pragmatic and easy to maintain.</li>
              <li>Practical security — sensible defaults and fewer surprises.</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                View Projects
              </a>
              <a
                href="#music"
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
              >
                Explore Music
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid gap-4"
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Identity</p>
              <h3 className="mt-3 text-2xl font-semibold">Creative + Technical</h3>
              <p className="mt-3 leading-7 text-slate-600">
                A hybrid professional profile that blends software engineering, digital security awareness, and music artistry.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xl font-semibold text-slate-900">Tech</p>
                <p className="mt-2 text-sm text-slate-600">Web apps, APIs, security-first thinking</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xl font-semibold text-slate-900">Music</p>
                <p className="mt-2 text-sm text-slate-600">DJing, production, and curation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12" id="about">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">About</p>
            <h2 className="mt-4 text-3xl font-bold">Who I am</h2>
            <p className="mt-5 leading-7 text-slate-600">
              I work where code and creativity meet. On the tech side I build modern web apps and APIs; on the music side I DJ, produce, and curate sounds for live sets.
              I enjoy solving practical problems, iterating quickly, and keeping things reliable.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Focus Areas</p>
            <div className="mt-5 space-y-3 text-slate-700">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">Full‑stack web apps and thoughtful UI work</div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">Practical security and safe defaults</div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">DJ sets, production, and curated playlists</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Tech</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {techSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Music</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {musicSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12" id="experience">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Experience</p>
        <h2 className="mt-3 text-3xl font-bold">What I bring</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {experience.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="mb-4 inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-3 text-blue-600">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{item.subtitle}</p>
              <p className="mt-5 leading-7 text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12" id="projects">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Projects</p>
        <h2 className="mt-3 text-3xl font-bold">Featured work</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{project.type}</p>
              <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{project.description}</p>
              <p className="mt-5 text-sm text-slate-500">{project.stack}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12" id="music">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Music</p>
          <h2 className="mt-3 text-3xl font-bold">Listen to Traffik Robhane</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Music is a major part of my identity. My sound is shaped by creativity, rhythm, technical preparation, and a desire to create atmosphere and movement through every set and production.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
            <iframe
              style={{ borderRadius: "24px" }}
              src="https://open.spotify.com/embed/artist/0wR4sOcO8d8b6rdQeefRfo?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Player"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-12" id="contact">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Contact</p>
          <h2 className="mt-3 text-3xl font-bold">Want to work together or say hi?</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            I’m always open to chatting about projects, collaborations, or music. If you’ve got an idea or just want to say hello, drop a message via LinkedIn or GitHub.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-3 text-lg font-medium">
                    {link.icon}
                    {link.label}
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="mt-3 text-sm text-slate-500">Open profile</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
