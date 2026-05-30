# Portfólio Profissional Premium - Gabrielly Santos

Este projeto é um portfólio profissional construído para apresentar uma atuação multidisciplinar em desenvolvimento de software, cloud computing, inteligência artificial, automação, dados e integrações.

## Objetivo do projeto

Apresentar Gabrielly Santos como uma profissional técnica em evolução contínua, com posicionamento de mercado orientado a:

- Engenharia de software e arquitetura de soluções.
- Automação de processos e produtividade operacional.
- Integração de APIs e sistemas corporativos.
- Cloud computing, monitoramento e infraestrutura.
- Dados, ETL e dashboards executivos.
- Aplicações práticas com IA generativa.

## Stack tecnológica

- **Framework:** Next.js (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Renderização:** Frontend estático, sem backend

## Arquitetura e organização

### Conteúdo centralizado

Todo o conteúdo textual e estratégico do portfólio é mantido em:

- `src/data/portfolio.ts`

Esse arquivo concentra:

- Dados de perfil.
- Links de contato e currículo.
- Experiências profissionais.
- Stack técnica.
- Projetos em destaque.
- Projetos Cloud & AI.
- Certificações e formação.
- Palavras-chave para SEO.

### Camadas principais

- `src/app/layout.tsx`  
  Metadados globais, SEO base, Open Graph e inicialização de tema.

- `src/app/page.tsx`  
  Composição das seções da página principal.

- `src/components/*`  
  Componentes reutilizáveis de navegação, tema, animação e galeria de projetos.

- `public/projects/*`  
  Imagens dos projetos exibidos no portfólio.

## Seções implementadas

- Hero
- Sobre
- Experiência Profissional (timeline)
- Stack Tecnológica
- Cloud & AI Projects
- Projetos em Destaque
- Certificações
- Formação
- Contato

## Recursos de interface e experiência

- Modo claro e escuro com persistência em `localStorage`.
- Navbar fixa com navegação por âncoras.
- Menu mobile responsivo.
- Microanimações suaves com Framer Motion.
- Cards e blocos com hierarquia visual premium.
- Clique nas imagens dos projetos para visualização ampliada em tela.
- Layout responsivo para desktop e mobile.

## SEO e discoverability

O projeto foi estruturado para indexação e legibilidade por:

- Motores de busca (Google).
- Plataformas profissionais (LinkedIn).
- Sistemas ATS.
- Modelos de linguagem (LLMs).

Inclui:

- Metadata com título, descrição e palavras-chave.
- Open Graph.
- Twitter Card.
- `robots.txt`.
- `sitemap.xml`.

## Palavras-chave estratégicas

Alguns termos-chave utilizados no conteúdo:

- Full Stack Developer
- Cloud Computing
- AWS
- Python
- React
- Next.js
- TypeScript
- PostgreSQL
- SQL
- ETL
- Data Analytics
- Automation
- Artificial Intelligence
- Generative AI
- Claude AI
- Prompt Engineering
- API Integration
- FastAPI
- SaaS Development
- Dashboard Development
- Infrastructure Monitoring
- Technical Support

## Observações técnicas

- Projeto frontend-only (sem API própria e sem banco no runtime).
- Conteúdo facilmente atualizável sem alterar a estrutura visual.
