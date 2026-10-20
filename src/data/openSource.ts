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
  },
  {
    title: "LLM Fine-Tuning Pipelines",
    description: "Personal research project covering GRPO fine-tuning on GSM8K and an SFT dataset pipeline for certification-question generation.",
    contribution: "Built a single-GPU Qwen2.5-3B-Instruct GRPO pipeline using Unsloth, TRL, QLoRA, vLLM generation, and five rule-based rewards, following the standard Unsloth recipe. Built resumable Gemini-based metadata extraction with Pydantic validation for SFT data. No training results or evaluation benchmarks are published.",
    technologies: ["Python", "Unsloth", "TRL", "GRPO", "QLoRA", "vLLM", "Gemini", "Pydantic"],
    categories: ["genai-nlp"],
    href: "https://github.com/RayenFekih/gcp-pmle-question-style-finetuning",
    links: [{ label: "GitHub", url: "https://github.com/RayenFekih/gcp-pmle-question-style-finetuning" }],
    metrics: [{ value: "5", label: "rule-based reward functions" }, { value: "1 GPU", label: "training configuration" }]
  }
];
