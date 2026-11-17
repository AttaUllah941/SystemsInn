import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/types";

export function ProjectCard({ project, reverse }: { project: Project; reverse?: boolean }) {
  const { image } = project;
  return (
    <article className="glass group grid overflow-hidden rounded-3xl lg:grid-cols-2">
      <div className={`relative flex flex-col justify-center ${reverse ? "lg:order-2" : ""} bg-gradient-to-br from-brand-blue to-brand-navy p-5 sm:p-8 lg:p-10`}>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgb(8_123_255/0.35),transparent_60%)]"
        />
        {/* Browser frame */}
        <div className="relative overflow-hidden rounded-xl border border-white/15 bg-brand-navy shadow-2xl shadow-black/50 transition-transform duration-700 group-hover:-translate-y-1.5 group-hover:scale-[1.015]">
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="ml-3 truncate rounded-md bg-white/10 px-3 py-0.5 text-xs text-brand-mist">
              {new URL(project.url).host}
            </span>
          </div>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="h-auto w-full"
          />
        </div>
        <p className="relative mt-4 text-center text-xs text-brand-mist/80">{image.caption}</p>
      </div>

      <div className="flex flex-col justify-center p-7 sm:p-10">
        <span className="mb-4 inline-flex w-fit items-center rounded-full border border-brand-cyan/40 bg-brand-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-cyan">
          {project.featured ? "Featured Project" : "Project"}
        </span>
        <h3 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
          {project.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-brand-cyan">{project.category}</p>
        <p className="mt-5 font-medium text-white">{project.overview}</p>
        <p className="mt-3 leading-relaxed text-brand-mist">{project.description}</p>

        <ul className="mt-6 space-y-2.5 text-sm text-white/90">
          {project.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" aria-hidden />
              {item}
            </li>
          ))}
        </ul>

        {project.technologies.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-brand-mist"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-8">
          <Button href={project.url} external aria-label={`Visit ${project.name} (opens in a new tab)`}>
            Visit Website
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden
            />
          </Button>
        </div>
      </div>
    </article>
  );
}
