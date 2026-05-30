"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BadgeCheck, Expand, X } from "lucide-react";
import { Reveal } from "@/components/reveal";

type FeaturedProject = {
  name: string;
  image: string;
  status: string;
  description: string;
  features: readonly string[];
  technologies: readonly string[];
};

type FeaturedProjectsProps = {
  projects: readonly FeaturedProject[];
};

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const [activeProject, setActiveProject] = useState<FeaturedProject | null>(null);

  useEffect(() => {
    if (!activeProject) {
      document.body.style.overflow = "";
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeProject]);

  return (
    <>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <Reveal
            key={project.name}
            delay={index * 0.08}
            className="overflow-hidden rounded-3xl border border-border/70 bg-surface/90"
          >
            <div className="group relative h-52 w-full overflow-hidden border-b border-border/70 sm:h-64">
              <Image
                src={project.image}
                alt={`Preview do projeto ${project.name}`}
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 1024px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <button
                type="button"
                onClick={() => setActiveProject(project)}
                className="absolute inset-0 bg-black/0 transition-colors duration-300 hover:bg-black/20"
                aria-label={`Abrir imagem do projeto ${project.name} em tela cheia`}
              />
              <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/45 px-3 py-1 text-xs text-white backdrop-blur">
                <Expand className="h-3.5 w-3.5" />
                Clique para ampliar
              </span>
            </div>
            <div className="grid gap-6 p-6 md:grid-cols-[1.2fr_1fr]">
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
                  <span className="rounded-full border border-border/70 bg-background/70 px-2.5 py-1 text-xs text-muted-foreground">
                    {project.status}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Principais funcionalidades
                </h4>
                <ul className="mt-3 space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/82 p-4 backdrop-blur-sm"
          onClick={() => setActiveProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Visualização ampliada de ${activeProject.name}`}
        >
          <button
            type="button"
            onClick={() => setActiveProject(null)}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/50 text-white transition-colors hover:bg-black/70"
            aria-label="Fechar visualização"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="relative h-[82vh] w-[min(96vw,1400px)]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeProject.image}
              alt={`Imagem ampliada do projeto ${activeProject.name}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}

