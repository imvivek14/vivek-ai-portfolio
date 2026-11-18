export const profile = {
  name: "Vivek Ashwinkumar Surati",
  shortName: "Vivek Surati",
  role: "AI / Generative AI Engineer",
  location: "Surat, Gujarat, India",
  email: "viveksurati1410@gmail.com",
  phone: "+91 9712366354",
  linkedin: "https://linkedin.com/in/vivek-surati-752906347",
  github: "https://github.com/imvivek14",
  summary:
    "AI/GenAI and Machine Learning Engineer building end-to-end AI systems — from data pipelines and classical ML models to LLM-powered RAG applications and multi-agent automation. I work across data acquisition, model development, API integration and deployment using Python, FastAPI, LangChain and Scikit-learn.",
};

export const skillGroups = [
  { title: "Languages", number: "01", skills: ["Python", "SQL", "Java (Basic)"] },
  { title: "AI & Machine Learning", number: "02", skills: ["Artificial Intelligence", "Large Language Models", "Retrieval-Augmented Generation", "Regression & Classification", "Data Science", "Data Analysis"] },
  { title: "Frameworks & Libraries", number: "03", skills: ["LangChain", "FastAPI", "Next.js", "React", "Streamlit", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"] },
  { title: "Tools & Platforms", number: "04", skills: ["Git", "GitHub", "FAISS", "n8n", "REST API Integration", "Web Scraping", "Vercel"] },
];

export const projects = [
  {
    id: "01", name: "RAG AI Knowledge Assistant", category: "GENERATIVE AI · RAG",
    summary: "A document-grounded question-answering system that turns uploaded PDFs into a searchable knowledge source.",
    details: "Built an end-to-end ingestion-to-conversation pipeline. Documents are processed into embeddings, stored in a FAISS vector store and retrieved as context for Google Gemini to generate relevant answers.",
    stack: ["Python", "FastAPI", "Next.js", "LangChain", "FAISS", "Google Gemini"],
    visual: "rag", featured: true, availability: "Live on Vercel · GitHub listed on resume",
    liveUrl: "https://rag-ai-knowledge-assistant.vercel.app/",
  },
  {
    id: "02", name: "Multi-Agent Research Engine", category: "AGENTIC AI · RESEARCH",
    summary: "A coordinated research workflow that delegates information gathering, fact-checking and report generation to specialized agents.",
    details: "Designed a CrewAI-based multi-agent system with orchestration between specialized agents. Tavily search and OpenRouter enable real-time, LLM-driven research synthesis.",
    stack: ["CrewAI", "Tavily", "OpenRouter", "Streamlit"],
    visual: "agents", featured: false, availability: "Live on Streamlit · GitHub listed on resume",
    liveUrl: "https://multi-agent-research-engine-b4bygfwpfkwmvqtpgjf89n.streamlit.app/",
  },
  {
    id: "03", name: "AI Content Intelligence Platform", category: "AI APPLICATION · NLP",
    summary: "An end-to-end content workflow combining web scraping, topic retrieval, paraphrasing and content generation.",
    details: "Built a multi-component AI platform and integrated the Google Gemini API into a Streamlit interface to connect the content-processing stages in one workflow.",
    stack: ["Python", "Streamlit", "Google Gemini API"],
    visual: "content", featured: false, availability: "Live on Streamlit · GitHub listed on resume",
    liveUrl: "https://content-intelligence-platform.streamlit.app/",
  },
  {
    id: "04", name: "AI Data Analysis Agent", category: "DATA ANALYTICS · AI",
    summary: "A full-stack platform that transforms CSV and Excel datasets into visualizations, EDA reports and actionable insights.",
    details: "Developed an interactive React interface with Recharts to present automated data-analysis results and visual insights. The application is deployed on Vercel.",
    stack: ["React", "JavaScript", "Vite", "Recharts"],
    visual: "analytics", featured: false, availability: "Live on Vercel · GitHub listed on resume",
    liveUrl: "https://ai-data-analysis-agent-beta.vercel.app/",
  },
];

export const experience = {
  role: "Python for Data Science (AI/ML) Intern",
  company: "Durvasa Infotech",
  duration: "January 2026 — March 2026",
  points: [
    "Owned an end-to-end AI/ML workflow independently under mentor guidance, spanning data collection, preprocessing, model development, automation and API deployment.",
    "Developed Python web-scraping workflows for real-world data collection, followed by cleaning, transformation and exploratory data analysis.",
    "Implemented and evaluated regression and classification models with Scikit-learn, iterating through feature selection and model comparison.",
    "Built n8n automation workflows and FastAPI REST endpoints to orchestrate data/API-driven processes; integrated, tested and documented the pipeline.",
  ],
};

export const education = [
  { degree: "Bachelor of Engineering", field: "Computer Science & Engineering", institution: "R.N.G. Patel Institute of Technology, GTU", year: "2026", result: "CGPA 8.01" },
  { degree: "Diploma", field: "Computer Engineering", institution: "Jayvantrai Harrai Desai Polytechnic, GTU", year: "2023", result: "CGPA 6.97" },
];
