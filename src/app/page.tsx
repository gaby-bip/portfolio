import {
  ArrowUpRight,
  BriefcaseBusiness,
  Cloud,
  Dot,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/reveal";
import { FeaturedProjects } from "@/components/featured-projects";
import { portfolioData } from "@/data/portfolio";
import { iconMap } from "@/lib/icon-map";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function SectionHeader({
  overline,
  title,
  description,
}: {
  overline: string;
  title: string;
  description: string;
}) {
  return (
    <Reveal className="mb-12">
      <p className="section-overline">{overline}</p>
      <h2 className="section-title">{title}</h2>
      <p className="section-description">{description}</p>
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <Navbar navItems={portfolioData.navItems} linkedInUrl={portfolioData.links.linkedin} />
      <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-28 md:px-8 md:pt-32">
        <section id="home" className="scroll-mt-24">
          <Reveal className="relative overflow-hidden rounded-4xl border border-border/70 bg-surface/85 p-8 shadow-[0_18px_80px_-38px_rgba(10,20,50,0.7)] backdrop-blur sm:p-12">
            <div className="pointer-events-none absolute -left-10 -top-16 h-44 w-44 rounded-full bg-accent/18 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 -bottom-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative z-10 space-y-7">
              <p className="section-overline">Portfólio profissional</p>
              <div className="space-y-4">
                <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
                  {portfolioData.profile.name}
                </h1>
                <p className="text-lg font-medium text-muted-foreground sm:text-xl">
                  {portfolioData.profile.role}
                </p>
              </div>
              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {portfolioData.profile.intro}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={portfolioData.links.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
                >
                  LinkedIn
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                {portfolioData.links.cvs.map((cv) => (
                  <a
                    key={cv.href}
                    href={`${basePath}${cv.href}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/45 hover:text-accent"
                  >
                    {cv.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ))}
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/45 hover:text-accent"
                >
                  Entrar em contato
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {portfolioData.seo.keywords.slice(1).map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="sobre" className="scroll-mt-32 pt-24">
          <SectionHeader
            overline="Sobre"
            title="Desenvolvimento com olhar de quem já esteve no suporte"
            description="Experiência em desenvolvimento Full Stack somada à vivência em sustentação de aplicações, com foco em qualidade e estabilidade."
          />

          <div className="grid gap-5 md:grid-cols-[1.6fr_1fr]">
            <Reveal className="rounded-3xl border border-border/70 bg-surface/85 p-7">
              <div className="space-y-4">
                {portfolioData.profile.bio.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1} className="rounded-3xl border border-border/70 bg-surface/85 p-7">
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                  <p className="text-sm text-muted-foreground">{portfolioData.profile.location}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 text-accent" />
                  <p className="text-sm text-muted-foreground">{portfolioData.profile.availability}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="experiencia" className="scroll-mt-32 pt-24">
          <SectionHeader
            overline="Experiência profissional"
            title="Trajetória com foco em evolução técnica e impacto"
            description="Do suporte N1/N2 e sustentação de sistemas ao desenvolvimento Full Stack."
          />

          <div className="relative space-y-5">
            <span className="absolute left-4 top-4 hidden h-[calc(100%-32px)] w-px bg-border/70 md:block" />
            {portfolioData.experience.map((item, index) => (
              <Reveal
                key={item.company}
                delay={index * 0.05}
                className="relative rounded-3xl border border-border/70 bg-surface/85 p-6 md:pl-11"
              >
                <span className="absolute left-3 top-7 hidden h-2.5 w-2.5 rounded-full bg-accent md:block" />
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{item.company}</h3>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                  <span className="rounded-full border border-border/70 px-3 py-1 text-xs text-muted-foreground">
                    {item.period}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.summary}
                </p>

                <ul className="mt-4 space-y-2">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2 text-sm text-muted-foreground">
                      <Dot className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="stack" className="scroll-mt-32 pt-24">
          <SectionHeader
            overline="Stack tecnológica"
            title="Competências organizadas por domínio técnico"
            description="Tecnologias e ferramentas usadas em desenvolvimento, dados, cloud e suporte técnico."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {portfolioData.stack.map((group, index) => {
              const Icon = iconMap[group.icon];
              return (
                <Reveal
                  key={group.category}
                  delay={index * 0.04}
                  className="rounded-3xl border border-border/70 bg-surface/85 p-5"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-background/70 text-accent">
                    {Icon ? <Icon className="h-5 w-5" /> : null}
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{group.category}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="cloud-ai" className="scroll-mt-32 pt-24">
          <SectionHeader
            overline="Cloud & IA"
            title="Laboratórios e estudos práticos"
            description="Laboratórios com serviços AWS e experimentos com IA, publicados no LinkedIn."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {portfolioData.cloudAiProjects.map((project, index) => (
              <Reveal
                key={project.title}
                delay={index * 0.06}
                className="rounded-3xl border border-border/70 bg-surface/85 p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/70 bg-background/70 text-accent">
                    <Cloud className="h-5 w-5" />
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"
                    aria-label={`Abrir referência de ${project.title}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projetos" className="scroll-mt-32 pt-24">
          <SectionHeader
            overline="Projetos em destaque"
            title="Sites, plataformas e aplicações"
            description="Projetos em que atuei no desenvolvimento, da interface às integrações."
          />

          <FeaturedProjects projects={portfolioData.featuredProjects} />
        </section>

        <section id="certificacoes" className="scroll-mt-32 pt-24">
          <SectionHeader
            overline="Certificações"
            title="Formação complementar"
            description="Capacitações em cloud, inteligência artificial, versionamento e plataformas de mercado."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {portfolioData.certifications.map((certification, index) => (
              <Reveal
                key={certification}
                delay={index * 0.05}
                className="rounded-3xl border border-border/70 bg-surface/85 p-6"
              >
                <p className="mb-4 inline-flex rounded-full border border-border/70 px-3 py-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Certificação
                </p>
                <h3 className="text-base font-semibold text-foreground">{certification}</h3>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="formacao" className="scroll-mt-32 pt-24">
          <SectionHeader
            overline="Formação"
            title="Base acadêmica para evolução técnica consistente"
            description="Conhecimento estruturado para sustentar desenvolvimento de software, cloud e dados."
          />

          <Reveal className="rounded-3xl border border-border/70 bg-surface/85 p-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-background/70 text-accent">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{portfolioData.education.degree}</h3>
                <p className="text-sm text-muted-foreground">{portfolioData.education.institution}</p>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="contato" className="scroll-mt-32 pt-24">
          <Reveal className="relative overflow-hidden rounded-4xl border border-border/70 bg-surface/90 p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent/12 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative z-10">
              <p className="section-overline">Contato</p>
              <h2 className="section-title mb-4">Vamos conversar sobre tecnologia e projetos</h2>
              <p className="section-description mb-8 max-w-2xl">
                Aberta a oportunidades em desenvolvimento Full Stack e em suporte técnico /
                sustentação de sistemas.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={portfolioData.links.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-between rounded-2xl border border-border/70 bg-background/70 px-4 py-3 text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/45 hover:text-foreground"
                >
                  <span className="inline-flex items-center gap-2">
                    <BriefcaseBusiness className="h-4 w-4 text-accent" />
                    LinkedIn
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={portfolioData.links.contact}
                  className="flex items-center justify-between rounded-2xl border border-border/70 bg-background/70 px-4 py-3 text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/45 hover:text-foreground"
                >
                  <span className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4 text-accent" />
                    {portfolioData.contact.email}
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <a
                href={portfolioData.links.contact}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
              >
                {portfolioData.contact.cta}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </section>
      </main>
      <footer className="border-t border-border/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:px-8">
          <span>{portfolioData.profile.name}</span>
          <span>Desenvolvimento Full Stack • Suporte Técnico • Sustentação de Sistemas</span>
        </div>
      </footer>
    </>
  );
}
