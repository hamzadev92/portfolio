import Navbar from "./navbar";
import Hero from "./hero";
import Reveal from "./reveal";
import Projects from "./projects";
import ContactForm from "./contact_form";
import { contact, dailyBuilds, profile, skills } from "./data";

function SectionHead({
  label,
  title,
  intro,
}: {
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mb-10">
      <p className="text-sm font-bold tracking-[0.14em] text-[#B8300A] uppercase">{label}</p>
      <h2 className="font-display mt-3 text-4xl font-bold tracking-tight md:text-6xl">
        {title}
      </h2>
      {intro && <p className="mt-4 max-w-xl text-lg leading-relaxed text-neutral-600">{intro}</p>}
    </div>
  );
}

const chip = "rounded-full border-[1.5px] border-neutral-950 px-4 py-2";

export default function Home() {
  return (
    <main id="top" className="text-neutral-950">
      <Navbar />
      <Hero />

      <section id="about" className="px-6 py-24 md:px-12">
        <Reveal className="mx-auto max-w-6xl">
          <SectionHead label="About" title="A little about me" />
          <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-neutral-700">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {profile.tags.map((tag) => (
              <span key={tag} className={chip}>
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="projects" className="px-6 pb-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHead label="Work" title="Selected projects" />
          <Projects />
        </div>
      </section>

      <section id="skills" className="px-6 pb-24 md:px-12">
        <Reveal className="mx-auto max-w-6xl">
          <SectionHead label="Skills" title="What I work with" />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {skills.map((s) => (
              <div key={s.group}>
                <h3 className="mb-4 text-xl font-bold">{s.group}</h3>
                <ul className="flex flex-wrap gap-2.5">
                  {s.items.map((item) => (
                    <li key={item} className={chip}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="builds" className="bg-neutral-100 px-6 py-24 md:px-12">
        <Reveal className="mx-auto max-w-6xl">
          <SectionHead
            label="Daily builds"
            title="One small project a day"
            intro="A running log of small projects. Each one gets its own repo, a README and a screenshot when it's done."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {dailyBuilds.map((b) => (
              <div key={b.name} className="rounded-2xl bg-white p-7">
                <p className="text-sm font-bold text-[#B8300A]">{b.status}</p>
                <h3 className="font-display my-2 text-2xl font-bold">{b.name}</h3>
                <p className="text-neutral-600">{b.stack}</p>
                {b.repo && (
                  <a
                    href={b.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block font-bold underline"
                  >
                    View repo →
                  </a>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="contact" className="bg-contact px-6 pt-24 pb-10 text-white md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-start justify-between gap-12">
            <div className="min-w-0 flex-1 basis-[360px]">
              <h2 className="font-display max-w-3xl text-5xl leading-none font-extrabold tracking-tight md:text-7xl lg:text-8xl">
                Let&apos;s build something together.
              </h2>
              <p className="mt-6 max-w-md text-xl leading-relaxed">
                WhatsApp is the fastest way to reach me. Email works too.
              </p>
              <div className="mt-10 flex flex-col gap-3.5 text-xl font-medium">
                <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                  WhatsApp: {contact.whatsappDisplay}
                </a>
                <a href={`mailto:${contact.email}`} className="hover:opacity-80">
                  {contact.email}
                </a>
                <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                  github.com/hamzadev92
                </a>
              </div>
            </div>
            <div className="w-full max-w-md rounded-3xl bg-white p-8 text-neutral-900">
              <ContactForm />
            </div>
          </div>
          <p className="mt-20 border-t border-white/40 pt-6 text-sm">
            © 2026 {profile.name}
          </p>
        </div>
      </section>
    </main>
  );
}
