"use client";
import { useState } from "react";
import { categories, projects } from "./data";
import ProjectCard from "./project_card";

export default function Projects() {
  const [active, setActive] = useState("All");
  const shown =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div
        className="mb-10 flex flex-wrap gap-3"
        role="group"
        aria-label="Filter projects"
      >
        {["All", ...categories].map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
            className={`rounded-full border border-neutral-950 px-5 py-2 text-sm font-bold transition ${
              active === c
                ? "bg-neutral-950 text-white"
                : "text-neutral-950 hover:bg-neutral-100"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {shown.map((p, i) => (
          <ProjectCard
            key={p.name}
            number={String(i + 1).padStart(2, "0")}
            name={p.name}
            description={p.description}
            language={p.language}
            github={p.github}
            demo={p.demo}
          />
        ))}
      </div>
    </>
  );
}
