export interface Experience {
  id: string;
  title: string;
  organization: string;
  shortDescription: string;
  longDescription: string[];
  skills?: string[];
  duration: string;
  type: 'technical' | 'leadership';
}

export const experiences: Experience[] = [
  {
    id: 'data-science-intern',
    title: 'Data Science Intern',
    organization: 'Synapxe',
    duration: 'Jan 2025 - Present',
    shortDescription: 'Redesigned a clinical search engine using LLM-based entity extraction, Neo4j knowledge graph, and Azure OCR to improve ICD code retrieval accuracy.',
    longDescription: [
      '🧠 Intelligent Medical Search Engine (RAG + Neo4j)',
      '- Redesigned a clinical search engine to retrieve ICD codes from natural language queries.',
      '- Used GPT-4 and GPT-4-mini for Named Entity Recognition (NER) and entity extraction of clinical terms.',
      '- Developed a Neo4j knowledge graph linking SNOMED CT concepts to ICD codes via semantic and hierarchical relationships.',
      '-Enabled context-aware retrieval, improving Top-10 ICD code accuracy by 5%.',
      '-Combined LLM reasoning with structured graph search for better clinical query understanding.',
      '',
      '🧾 Drug Information OCR Pipeline (Azure Document Intelligence)',
      '-Built an OCR pipeline using Microsoft Azure Document Intelligence to process scanned drug documents.',
      '-Extracted key fields like drug names, dosages, and routes of administration from images and forms.',
      '-Transformed unstructured scanned text into structured, machine-readable format.',
      '-Enabled easier search, analysis, and integration of medication data into downstream systems.'
    ],
    skills: ['Python', 'Neo4j', 'Azure OCR', 'GPT-4', 'RAG', 'Knowledge Graphs'],
    type: 'technical'
  },
  
  {
    id: 'Research-Assistant',
    title: 'Research Assistant',
    organization: 'NUS Faculty of Science',
    duration: 'Dec 2024 - Jan 2025',
    shortDescription: 'Developed a React-based revision platform using LLMs to generate linear algebra questions, enhancing learning for 600+ students through interactive design and data-driven insights.',
    longDescription: [
      '📚 AI-Powered Linear Algebra Platform',
      '- Designed and built a React-based web platform to support revision for 600+ Linear Algebra students',
      '- Implemented a Question Generator using OpenAI API to produce diverse, syllabus-aligned questions',
      '- Improved student revision efficiency by 1.4× through personalized question generation',
      '- Created intuitive UI/UX with Figma, incorporating iterative improvements from student feedback',
      '- Developed visual analytics using Excel and Python to track engagement and teaching effectiveness',
      '- Demonstrated end-to-end capability in LLM integration, frontend development, and data-driven design'
    ],
    skills: ['Python', 'React', 'GPT-4o-mini', 'Figma'],
    type: 'technical'
  },
  {
    id: 'Data-Analyst',
    title: 'Data Analyst Intern',
    organization: 'ASTAR',
    duration: 'May 2024 - Dec 2024',
    shortDescription: 'Built a multimodal NLP pipeline using LLaMA, HuggingFace, and prompt engineering to extract sustainability insights, speeding up article processing by 1.5× and supporting data-driven evaluations with Tableau.',
    longDescription: [
      '📊 Sustainability Journal Analysis & Keyword Extraction',
      '- Integrated databases of curated sustainability-related keywords for automated tagging',
      '- Applied LLaMA via HuggingFace Transformers for entity extraction, reducing manual processing by 40%',
      '- Employed multimodal LLM methods and prompt engineering to handle complex input formats',
      '- Improved workflow speed by 1.5× through automated content processing',
      '- Developed custom web scrapers with BeautifulSoup for article metadata extraction',
      '- Preprocessed hundreds of sustainability articles using ML-based similarity detection',
      '',
      '📈 Data Visualization for Sustainability Evaluation',
      '- Designed interactive Tableau dashboards for sustainability metrics visualization',
      '- Supported research paper development with company performance comparisons',
      '- Translated complex ESG data into clear, actionable visuals for stakeholders',
      '- Created comprehensive data stories for academic publication'
    ],
    skills: ['Python', 'TensorFlow', 'LLaMA', 'HuggingFace', 'BeautifulSoup', 'Tableau', 'Data Analytics'],
    type: 'technical'
  },
  {
    id: 'tencent-intern',
    title: 'Game Data Compliance Intern',
    organization: 'Tencent',
    duration: 'Jan 2024 - Apr 2024',
    shortDescription: 'Ensured quality and compliance of cookie implementations, conducted research on gaming industry products in international markets, and assisted with project management.',
    longDescription: [
      '🛡️ Data Privacy & Compliance',
      '- Conducted website cookie scanning to ensure quality and compliance with privacy regulations',
      '- Configured cookie banner scripts to meet legal requirements across different jurisdictions',
      '- Implemented data protection measures in line with international privacy standards',
      '',
      '📊 Market Research & Analysis',
      '- Produced comprehensive research reports on gaming industry products',
      '- Specialized in analysis of international market trends and compliance requirements',
      '- Synthesized findings to inform product development and compliance strategies',
      '',
      '📋 Project Management',
      '- Assisted team in project management for delivery and implementation of compliance initiatives',
      '- Coordinated with cross-functional teams to ensure timely project completion',
      '- Contributed to documentation and tracking of project milestones'
    ],
    skills: ['Data Privacy', 'Compliance', 'Market Research', 'Project Management', 'Cookie Implementation'],
    type: 'technical'
  },
  {
    id: 'Welfare-Director',
    title: 'Welfare Director (JCRC)',
    organization: 'NUS Raffles Hall',
    duration: 'AY24/25',
    shortDescription: "Led 8 welfare-focused committees to support residents' well-being through internal initiatives and external volunteer programs for special needs, elderly, children, and migrant workers.",
    longDescription: [
      '💙 Internal Welfare Initiatives',
      '- Organized regular food giveaways, care packs, and late-night snacks during exam periods',
      '- Facilitated mental health discussions and safe space dialogues for emotional support',
      '',
      '🤝 External Community Service',
      '- Led volunteering programs serving diverse communities:',
      '     • Migrant workers, Special needs, Elderly, Children',
      '- Partnered with local organizations for meaningful community engagement',
      '- Raised social awareness through hands-on volunteer experiences',
      '',
      '👥 Leadership & Management',
      '- Oversaw and coordinated 8 welfare-related committees',
      '- Developed comprehensive welfare strategy covering both internal and external efforts'
    ],
    skills: ['Community Service', 'Event Planning', 'Team Leadership', 'Mental Health Advocacy', 'Social Impact'],
    type: 'leadership'
  },
  {
    id: 'production-manager',
    title: 'Production Manager',
    organization: 'Raffles Hall Musical Production',
    duration: 'AY23/24',
    shortDescription: 'Led the administration, publicity, and marketing efforts for an annual musical production involving 200 people, managing communications and logistics for opening, closing, and show day.',
    longDescription: [
      '👥 Production Management',
      '',
      '- Led a team of 200 members in organizing the annual hall musical production',
      '- Oversaw comprehensive administrative operations and logistics planning',
      '- Coordinated with multiple departments to ensure seamless production flow',
      '',
      '👥 Event Operations',
      '',
      '- Managed external communications for opening, closing, and show day events',
      '- Coordinated ticketing systems and audience management',
      '- Handled vendor relationships and external stakeholder communications',
      '- Ensured smooth execution of production-day operations and logistics'
    ],
    skills: ['Event Management', 'Marketing Strategy', 'Team Leadership', 'Stakeholder Management', 'Production Planning'],
    type: 'leadership'
  },
  {
    id: 'Captain',
    title: 'Table Tennis Captain',
    organization: 'NUS Raffles Hall',
    duration: 'AY23/24',
    shortDescription: 'Led a team of 20 as Table Tennis Captain to achieve 2nd place in Inter-Hall Games, while organizing regular trainings and team bonding sessions.',
    longDescription: [
      '🤝 Team Leadership & Achievement',
      '',
      '- Led and trained a 20-member team to secure 2nd place in Inter-Hall Games',
      '- Coordinated match logistics and strategic lineup planning',
      '- Liaised with hall sports committee for scheduling and resource support',
      '🤝 Training & Development',
      '',
      '- Organized and conducted weekly training sessions',
      '- Focused on improving team performance and tactical cohesion',
      '- Developed training programs to enhance individual skills',
      '🤝 Team Building',
      '',
      '- Planned regular team bonding activities and social events',
      '- Strengthened team morale, trust, and communication',
      '- Created an inclusive and supportive team environment'
    ],
    skills: ['Team Leadership', 'Sports Management', 'Training & Development', 'Event Planning', 'Strategic Planning'],
    type: 'leadership'
  },
  {
    id: 'volunteer-corps-president',
    title: 'President, Volunteer Corps',
    organization: 'NUS Raffles Hall',
    duration: 'Jan 2023 - May 2024',
    shortDescription: 'Led the Special Needs volunteer program, planning and executing 7 adhoc events and weekly volunteering sessions with organizations like Mindsville and Genesis School.',
    longDescription: [
      '🤝 Event Planning & Execution',
      '',
      '- Planned, set up, and executed 7 adhoc events for special needs beneficiaries',
      '- Organized and maintained regular weekly volunteering sessions with partner organizations',
      '- Built sustainable relationships with Mindsville and Genesis School',
      '',
      '👥 Team Coordination & Training',
      '',
      '- Recruited and trained volunteers to work with special needs beneficiaries',
      '- Developed training materials and guidelines for volunteer engagement',
      '- Fostered a supportive and inclusive volunteering environment',
      '',
      '📊 Program Impact & Growth',
      '',
      '- Expanded program reach and impact through new partnerships',
      '- Implemented feedback systems to improve volunteer experience',
      '- Documented best practices for future program sustainability'
    ],
    skills: ['Volunteer Management', 'Event Planning', 'Training & Development', 'Community Engagement', 'Program Development'],
    type: 'leadership'
  }
]; 