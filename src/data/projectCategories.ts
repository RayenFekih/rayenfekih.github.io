export type ProjectCategory =
  | "genai-nlp"
  | "computer-vision"
  | "regression-forecasting"
  | "clustering"
  | "recommendation-systems";

export const projectCategoryLabels: Record<ProjectCategory, string> = {
  "genai-nlp": "GenAI & NLP",
  "computer-vision": "Computer Vision",
  "regression-forecasting": "Regression & Forecasting",
  clustering: "Clustering",
  "recommendation-systems": "Recommendation Systems"
};

export const projectCategoryOptions: { value: ProjectCategory; label: string }[] = [
  { value: "genai-nlp", label: projectCategoryLabels["genai-nlp"] },
  { value: "computer-vision", label: projectCategoryLabels["computer-vision"] },
  { value: "regression-forecasting", label: projectCategoryLabels["regression-forecasting"] },
  { value: "clustering", label: projectCategoryLabels.clustering },
  { value: "recommendation-systems", label: projectCategoryLabels["recommendation-systems"] }
];
