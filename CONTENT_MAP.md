# Portfolio Content Map

This guide maps each visible website section to the file that controls it. Use it when updating the portfolio without changing the site structure.

## Quick Start

```powershell
npm install
npm run dev
```

Open the local URL printed by Astro. Before publishing changes, run:

```powershell
npm run build
```

## Main Editing Files

| Content | File |
| --- | --- |
| Homepage text, section order, skills, education, and contact | `src/pages/index.astro` |
| Work experience and project summaries | `src/data/experience.ts` |
| Detailed project case studies | `src/content/projects/*.mdx` |
| About page | `src/pages/about/index.astro` |
| Experience page | `src/pages/experience/index.astro` |
| Projects index | `src/pages/work/index.astro` |
| Header navigation | `src/components/Header.astro` |
| Footer text and social links | `src/components/Footer.astro` |
| Site URL, email, social links, and CV path | `src/config/site.ts` |
| Colors, typography, spacing, and responsive styles | `src/styles/global.css` |
| CV file | `public/assets/cv/CV_Mohamed_Rayen_Fekih.pdf` |

## Homepage

The homepage is assembled in `src/pages/index.astro`.

| Visible section | What to edit |
| --- | --- |
| Hero | Name, job title, short summary, and action links near the top of the page |
| Work Experience | Layout is in the homepage; role and project content comes from `src/data/experience.ts` |
| Skills | Edit the `skills` array near the top of the file |
| Selected Projects | Automatically includes projects from `experience.ts` that have an `href` |
| Education | Edit the `education` array near the top of the file |
| Contact | Edit the final contact section; shared email/social URLs come from `src/config/site.ts` |

Current homepage order:

1. Hero
2. Work Experience
3. Skills
4. Selected Projects
5. Education
6. Contact

To reorder sections, move the corresponding `<section>` block in `src/pages/index.astro`.

## Work Experience And Project Cards

Edit `src/data/experience.ts`. Each company is one object in the exported `experience` array:

```ts
{
  company: "Company name",
  role: "Job title",
  period: "Start - End",
  location: "City or Remote",
  summary: "Short overview of the role.",
  responsibilities: [
    "Responsibility or achievement",
  ],
  projects: [
    {
      title: "Project name",
      description: "What the system does and why it matters.",
      contribution: "Your specific contribution.",
      technologies: ["Python", "GCP"],
      client: "Optional public client name",
      metrics: [
        {
          value: "165K+",
          label: "fatwas processed and indexed",
        },
      ],
      href: "/work/project-slug/",
      externalUrl: "https://example.com/",
      externalLabel: "Visit live project",
    },
  ],
}
```

- Remove `metrics` when no public, defensible result is available.
- Keep each metric tied to the project and label whether it represents product reach, engineering scale, a target scope, or a measured result.
- Use `client` only when the organization name is approved for public use.
- Add `href` only when a detailed case-study page exists.
- Add `externalUrl` and `externalLabel` only when a public product or demonstration exists. External links open in a new tab.
- Projects without an `href` still appear under their company, but not in Selected Projects.
- Project order in this array controls the order on the homepage, Work page, and Experience page.
- Keep confidential employer details generalized or sanitized.

## Detailed Case Studies

| Project | File |
| --- | --- |
| Fatwa Semantic Search | `src/content/projects/fatwa-semantic-search.mdx` |
| IslamWeb RAG Chatbot | `src/content/projects/islamweb-rag-chatbot.mdx` |
| Khateeb Assistant | `src/content/projects/khateeb-assistant.mdx` |
| GenAI Assistant Agent | `src/content/projects/genai-assistant-agent.mdx` |

Each MDX file contains frontmatter at the top for case-study metadata and Markdown below it for the full narrative. Project titles, summaries, clients, metrics, technologies, and external product links may appear both in the MDX file and `experience.ts`; update both when changing shared facts.

Optional case-study frontmatter fields include:

```yaml
client: "Public client name"
externalUrl: "https://example.com/"
externalLabel: "Visit live project"
```

To add a case study:

1. Copy an existing file in `src/content/projects/`.
2. Rename it using a lowercase URL slug, such as `new-project.mdx`.
3. Update all frontmatter and body content.
4. Add `href: "/work/new-project/"` to the matching project in `src/data/experience.ts`.
5. Run `npm run build` to validate the content schema and links.

## Shared Site Details

Edit `src/config/site.ts` for:

- Public site URL
- Email address
- LinkedIn URL
- GitHub URL
- CV download path

The header is controlled by `src/components/Header.astro`. The footer is controlled by `src/components/Footer.astro`.

## Updating The CV

Replace this file while keeping the same filename:

`public/assets/cv/CV_Mohamed_Rayen_Fekih.pdf`

All Download CV links use the path defined in `src/config/site.ts`, so no code change is needed when the replacement keeps the same filename.

## Colors And Typography

Edit `src/styles/global.css`. The main color variables are defined near the top:

```css
--navy: #0f172a;
--blue: #2563eb;
--background: #fafaf9;
```

Most component styles are also centralized in this file. Search for the visible class name from the Astro page when adjusting a specific section.

## Deployment

The GitHub Pages workflow is in `.github/workflows/deploy.yml`. It installs Node dependencies, runs the Astro build, uploads `dist`, and deploys that static artifact to GitHub Pages.
