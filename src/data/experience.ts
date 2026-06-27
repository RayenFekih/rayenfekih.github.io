export type ExperienceProject = {
  title: string;
  description: string;
  contribution: string;
  technologies: string[];
  client?: string;
  metrics?: {
    value: string;
    label: string;
  }[];
  href?: string;
  externalUrl?: string;
  externalLabel?: string;
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
      "Developed Arabic retrieval, content-processing, RAG, and multi-agent AI systems for government-sector IslamWeb services.",
    responsibilities: [
      "Deliver government-sector semantic search, RAG, and multi-agent applications.",
      "Build content enrichment, classification, and automation pipelines with Google Cloud and Vertex AI.",
      "Implement evaluation and human-review workflows for sensitive public-service use cases."
    ],
    projects: [
      {
        title: "Fatwa Semantic Search",
        description:
          "Hybrid retrieval system for finding the most relevant fatwa across the Ministry's IslamWeb corpus.",
        contribution:
          "Built Gemini embedding retrieval, BM25 keyword retrieval, RRF fusion, retrieval evaluation workflows, human labeling support, LLM-assisted relevance review, and production search deployment.",
        technologies: ["Python", "Gemini Embeddings", "BigQuery Vector Search", "BM25", "Hybrid Retrieval", "RRF", "Google Cloud"],
        client: "Qatar Ministry of Awqaf and Islamic Affairs",
        metrics: [
          // { value: "165K+", label: "searchable Arabic fatwas" },
          { value: "3s", label: "hybrid search response time" },
          { value: "10M+", label: "average monthly visits to IslamWeb" },
        ],
        href: "/work/fatwa-semantic-search/",
        externalUrl: "https://fatwatok.islamweb.net/",
        externalLabel: "Visit FatwaTok"
      },
      {
        title: "Fatwa Content Processing Pipeline",
        description:
          "Scheduled production pipeline for fetching new fatwas, enriching the content, generating summaries and audio, and refreshing search artifacts.",
        contribution:
          "Built a daily Cloud Run pipeline that detects newly published fatwas, fetches and processes content, runs Gemini batch summarization, flags sensitive and modern topics, generates Arabic TTS with Quran-aware preprocessing, and refreshes BM25 search artifacts.",
        technologies: ["Python", "Gemini Batch Inference", "Google Cloud Scheduler", "Cloud Run", "Cloud Storage", "BigQuery", "Text-to-Speech", "BM25"],
        client: "Qatar Ministry of Awqaf and Islamic Affairs",
        metrics: [
          { value: "165K+", label: "Fatwa text processed" },
          { value: "Daily", label: "scheduled content synchronization" },
          { value: "Arabic", label: "TTS + Quran-aware preprocessing" }
        ],
        href: "/work/fatwa-content-processing-pipeline/"
      },
      {
        title: "Khateeb Multi-Agent Assistant",
        description:
          "A grounded Arabic sermon-generation assistant for Khateebs, using retrieval, specialist agents, moderation, and review loops to support Friday sermon preparation while preserving human accountability.",
        contribution:
          "Built the n8n POC and helped move the production workflow to Google ADK and Agent Engine, separating requirement extraction, retrieval, drafting, moderation, revision, word-count adjustment, and human review.",
        technologies: ["Google ADK", "Agent Engine", "Vertex AI", "Google RAG Engine", "Gemini", "n8n", "Arabic NLP", "Multi-Agent Workflows"],
        client: "Qatar Ministry of Awqaf and Islamic Affairs",
        metrics: [
          { value: "1,000+", label: "mosques in the intended Qatar support scope" },
          { value: "4", label: "collaborating specialist agents" }
        ],
        href: "/work/khateeb-assistant/"
      },
      {
        title: "IslamWeb RAG Chatbot",
        description:
          "Arabic assistant grounded in an established corpus of religious rulings, with scholar escalation for sensitive requests.",
        contribution:
          "Developed retrieval and response workflows, plus an intent agent that escalates appropriate conversations to a scholar.",
        technologies: ["Python", "Gemini Embeddings", "BigQuery Vector Search", "Telegram"],
        client: "Qatar Ministry of Awqaf and Islamic Affairs",
        // metrics: [
        //   { value: "165K+", label: "fatwas processed and indexed" }
        // ],
        href: "/work/islamweb-rag-chatbot/"
      },
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
        technologies: ["Python", "Langchain", "LangGraph Studio", "LangChain", "Docker"],
        // href: "/work/genai-assistant-agent/"
      },
      {
        title: "Pricing System",
        description:
          "Machine learning engine that recommends prices while balancing revenue and customer retention.",
        contribution:
          "Built product and customer segmentation models, evaluated performance, and deployed customer-specific solutions.",
        technologies: ["Python", "Scikit-learn", "Pandas", "Tableau", "Clustering"],
        metrics: [{ value: "3", label: "Customer deployments" }]
      },
      {
        title: "Product Recommendation Systems",
        description:
          "Upsell and cross-sell recommendation systems that increase basket size and revenue.",
        contribution:
          "Built recommendation models for upselling and cross-selling, optimized inference with Cython and NumPy to reduce response time by 80% and created CI/CD workflows.",
        technologies: ["Python", "Cython", "NumPy", "CI/CD"],
        metrics: [{ value: "80%", label: "reduction in response time" }]
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
          "Scalable demand forecasting and promotion planning engine for large-scale retail operations.",
        contribution:
          "Designed and deployed a scalable forecasting engine that predicts product demand and evaluates promotional impact across millions of retail transactions.",
        technologies: ["Python", "PySpark", "SQL", "Time Series"],
        metrics: [
          { value: "10M+", label: "transactions processed" },
          { value: "3", label: "Customer deployments" }
        ]
      },
      {
        title: "Process Quality Optimization",
        description:
          "Regression and explainability system for improving cheese-manufacturing efficiency.",
        contribution:
          "Built the modeling and explainability modules and automated daily operational reporting.",
        technologies: ["Python", "Regression", "ML Explainability", "Dashboards"],
        metrics: [{ value: "15%", label: "profit-margin improvement" }]
      }
    ]
  }
];
