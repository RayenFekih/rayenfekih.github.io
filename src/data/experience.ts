export type ExperienceProject = {
  title: string;
  description: string;
  contribution: string;
  technologies: string[];
  metric?: {
    value: string;
    label: string;
  };
  href?: string;
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  responsibilities: string[];
  projects: ExperienceProject[];
};

export const experience: Experience[] = [
  {
    company: "iHorizons",
    role: "AI Engineer",
    location: "Qatar · Remote",
    period: "Jul 2025 - Present",
    summary:
      "Building Arabic GenAI applications, retrieval systems, and cloud-based AI workflows for production use.",
    responsibilities: [
      "Develop and deploy RAG, semantic search, and multi-agent applications.",
      "Build data and inference pipelines with Google Cloud and Vertex AI.",
      "Implement evaluation and human-review workflows for sensitive use cases."
    ],
    projects: [
      {
        title: "Fatwa Semantic Search",
        description:
          "Semantic search and content-processing pipeline for the IslamWeb FatwaTok application.",
        contribution:
          "Built batch summarization, embeddings, vector retrieval, Quran detection, text-to-speech processing, and the production GCP pipeline.",
        technologies: ["Python", "Gemini", "Vertex AI", "BigQuery", "Cloud Run"],
        metric: { value: "165K+", label: "fatwas processed and indexed" },
        href: "/work/fatwa-semantic-search/"
      },
      {
        title: "IslamWeb RAG Chatbot",
        description:
          "Arabic assistant grounded in an established corpus of religious rulings.",
        contribution:
          "Developed retrieval and response workflows, plus an intent agent that escalates appropriate conversations to a scholar.",
        technologies: ["Python", "Gemini Embeddings", "BigQuery Vector Search", "Telegram"],
        href: "/work/islamweb-rag-chatbot/"
      },
      {
        title: "Khateeb Assistant",
        description:
          "Multi-agent system that supports Friday sermon preparation using trusted Arabic sources.",
        contribution:
          "Implemented requirement extraction, retrieval, generation, moderation, summarization, and LLM-as-judge evaluation.",
        technologies: ["n8n", "Google RAG Engine", "Gemini", "Vertex AI"],
        href: "/work/khateeb-assistant/"
      }
    ]
  },
  {
    company: "Infor",
    role: "Machine Learning Engineer",
    location: "New York · Remote",
    period: "May 2023 - Jun 2025",
    summary:
      "Developed enterprise GenAI, pricing, and product recommendation systems.",
    responsibilities: [
      "Built and evaluated machine learning solutions for enterprise customers.",
      "Optimized production inference and created automated delivery pipelines.",
      "Worked across data analysis, modeling, deployment, and customer requirements."
    ],
    projects: [
      {
        title: "GenAI Assistant Agent",
        description:
          "Graph-based assistant with function calling, dynamic routing, and contextual memory.",
        contribution:
          "Developed the LangGraph workflow, memory retrieval, tool integration, and Docker deployment.",
        technologies: ["Python", "LangGraph Studio", "LangChain", "Docker"],
        href: "/work/genai-assistant-agent/"
      },
      {
        title: "Pricing System",
        description:
          "Machine learning engine that recommends prices while balancing revenue and customer retention.",
        contribution:
          "Built product and customer segmentation models, evaluated performance, and deployed customer-specific solutions.",
        technologies: ["Python", "Scikit-learn", "Pandas", "Tableau"],
        metric: { value: "3", label: "B2B customer deployments" }
      },
      {
        title: "Product Recommendation Systems",
        description:
          "Models that recommend complementary products to support larger basket sizes and revenue.",
        contribution:
          "Optimized production code with Cython and NumPy and created CI/CD workflows.",
        technologies: ["Python", "Cython", "NumPy", "CI/CD"],
        metric: { value: "80%", label: "reduction in response time" }
      }
    ]
  },
  {
    company: "Cognira",
    role: "Data Scientist",
    location: "Tunisia · On-site",
    period: "Feb 2021 - May 2023",
    summary:
      "Developed retail forecasting and manufacturing process-optimization solutions.",
    responsibilities: [
      "Translated customer requirements into applied machine learning solutions.",
      "Prepared large operational datasets with PySpark and SQL.",
      "Deployed models and automated recurring analytics workflows."
    ],
    projects: [
      {
        title: "Retail Demand Forecasting",
        description:
          "Time-series forecasting engine developed and deployed for a leading retailer.",
        contribution:
          "Processed and cleaned transaction data, developed forecasting workflows, and worked with client teams on delivery.",
        technologies: ["Python", "PySpark", "SQL", "Time Series"],
        metric: { value: "10M+", label: "transactions processed" }
      },
      {
        title: "Process Quality Optimization",
        description:
          "Regression and explainability system for improving cheese-manufacturing efficiency.",
        contribution:
          "Built the modeling and explainability modules and automated daily operational reporting.",
        technologies: ["Python", "Regression", "ML Explainability", "Dashboards"],
        metric: { value: "15%", label: "profit-margin improvement" }
      }
    ]
  }
];