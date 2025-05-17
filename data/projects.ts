export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string[];
  tags: string[];
  githubUrl?: string;
  documentationUrl?: string;
  demoUrl?: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Knowledge Graph Query Engine for SNOMED to ICD Code Mapping",
    description: "A clinical search engine combining Retrieval-Augmented Generation (RAG) with Neo4j knowledge graphs to improve medical code mapping accuracy. Implemented entity extraction and semantic search to achieve a 5% boost in retrieval precision.",
    longDescription: [
      "🧠 Developed a RAG-powered clinical search engine using GPT-4 and Neo4j",
      "📊 Built knowledge graph linking SNOMED CT concepts to ICD codes",
      "🔍 Enhanced search with entity extraction and semantic matching",
      "📈 Achieved 5% improvement in Top-10 ICD code retrieval accuracy",
      "🛠️ Tech stack: GPT-4, Neo4j, Python, React, Azure"
    ],
    tags: ["Neo4j", "GPT-4", "RAG", "Knowledge Graph", "Python", "React"],
    documentationUrl: "/docs/knowledge-graph-documentation.pdf",
    imageUrl: "/projects/kg.jpg"
  },
  {
    id: "2",
    title: "Drug Information OCR Pipeline",
    description: "An intelligent OCR pipeline that extracts structured drug information from scanned documents using Azure Document Intelligence, enabling efficient search and analysis of medication data.",
    longDescription: [
      "📄 Built OCR pipeline using Azure Document Intelligence",
      "🔍 Extracted key drug information fields from scanned documents",
      "🔄 Transformed unstructured text into searchable database entries",
      "📊 Enabled downstream analytics and data integration",
      "🛠️ Tech stack: Azure OCR, Python, SQL Database"
    ],
    tags: ["Azure", "OCR", "Document Intelligence", "Python", "SQL"],
    imageUrl: "/projects/ocr.jpg"
  },
  {
    id: "3",
    title: "AI-Powered Linear Algebra Platform",
    description: "An interactive web platform that revolutionized linear algebra revision for 600+ students through personalized LLM-powered question generation and comprehensive analytics.",
    longDescription: [
      "🎓 Designed and built React-based revision platform",
      "🤖 Integrated OpenAI API for dynamic question generation",
      "📊 Implemented analytics dashboard for learning insights",
      "🎨 Created intuitive UI/UX with Figma",
      "📈 Improved student revision efficiency by 1.4×"
    ],
    tags: ["React", "OpenAI", "LLM", "Figma", "Python", "Analytics"],
    githubUrl: "https://github.com/falariee/Ma2001",
    imageUrl: "/projects/math.jpg"
  },
  {
    id: "4",
    title: "Sustainability Journal Analysis Platform",
    description: "A comprehensive data analysis platform that processes sustainability journals using LLaMA and HuggingFace transformers, providing actionable insights through Tableau visualizations.",
    longDescription: [
      "🔍 Developed NLP pipeline for sustainability content analysis",
      "🤖 Integrated LLaMA via HuggingFace for entity extraction",
      "🔄 Automated content processing with 1.5× speed improvement",
      "📊 Created interactive Tableau dashboards for insights",
      "📈 Reduced manual processing time by 40%"
    ],
    tags: ["LLaMA", "HuggingFace", "Python", "Tableau", "NLP"],
    documentationUrl: "/docs/Journal paper data analysis.pdf",
    imageUrl: "/projects/green_compass.jpg"
  }
]
