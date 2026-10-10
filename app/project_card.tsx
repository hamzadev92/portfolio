type ProjectCardProps = {
  number: string;
  name: string;
  description: string;
  language: string;
  github: string;
  demo?: string;
};

export default function ProjectCard({
  number,
  name,
  description,
  language,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <article className="flex min-h-[280px] flex-col justify-between rounded-3xl bg-neutral-950 p-8 text-white transition hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-white px-3.5 py-1.5 text-sm">
          {language}
        </span>
        <span className="font-display text-xl">{number}</span>
      </div>
      <div>
        <h3 className="font-display mb-2.5 text-3xl font-bold">{name}</h3>
        <p className="mb-5 leading-relaxed text-neutral-300">{description}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-bold">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-300 hover:underline"
          >
            View on GitHub →
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-300 hover:underline"
            >
              Live demo →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
