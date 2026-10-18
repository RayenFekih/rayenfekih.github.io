import type { ProjectCategory } from "./projectCategories";

export type OpenSourceProject = {
  title: string;
  description: string;
  contribution: string;
  technologies: string[];
  categories: ProjectCategory[];
  href: string;
  links: { label: string; url: string }[];
  metrics: { value: string; label: string }[];
};

export const openSourceProjects: OpenSourceProject[] = [
  {
    title: "hadith-detector",
    description: "Offline Python library for detecting Arabic Hadith passages and retrieving their supporting sources, with exact and configurable fuzzy matching.",
    contribution: "Built and published v0.1.1 on PyPI, including Arabic normalization, positional indexing, ordered matching, source retrieval, original-text offsets, and HTML highlighting.",
    technologies: ["Python", "Arabic NLP", "MARISA", "RapidFuzz"],
    categories: ["genai-nlp"],
    href: "/work/hadith-detector/",
    links: [
      { label: "GitHub", url: "https://github.com/RayenFekih/hadith-detector" },
      { label: "PyPI", url: "https://pypi.org/project/hadith-detector/" }
    ],
    metrics: [
      { value: "14,940", label: "Hadith records from Bukhari and Muslim" },
      { value: "1.04M", label: "indexed Arabic tokens" }
    ]
  }
];
