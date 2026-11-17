import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/company";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="projects-heading"
          eyebrow="Portfolio"
          title="Our Work Speaks for Itself."
          description="Explore the digital solutions we build to turn business ideas into meaningful technology experiences."
        />
        <div className="mt-16 space-y-10">
          {projects.map((project, index) => (
            <FadeIn key={project.slug}>
              <ProjectCard project={project} reverse={index % 2 === 1} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
