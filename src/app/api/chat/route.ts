import { NextResponse } from 'next/server';
import { ChatGroq } from "@langchain/groq";
import { TavilySearchResults } from "@langchain/community/tools/tavily_search";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

// Resume data structure
export const resumeData = {
  en: {
    name: "Ikram Iddouch",
    title: "Data Science Engineer",
    summary: "Data science engineering student passionate about AI and data management. Seeking a four-month maximum and six-week minimum internship from May 19, 2025. Interested in data analysis and solving complex problems with rigor, curiosity, and an ability to translate data into concrete solutions.",
    
    education: [
      {
        degree: "Engineering Degree in Computer Science, Data, and Usage",
        institution: "Polytech Annecy-Chambéry",
        year: "2023 - Present",
        description: "Specialized in AI, data analysis, and cloud computing."
      },
      {
        degree: "Bachelor's in Computer Science",
        institution: "University of Limoges",
        year: "2020 - 2023",
        description: "Focused on programming, algorithms, and machine learning."
      }
    ],
    
    experience: [
      {
        position: "Graphic Production Assistant (Worker Internship)",
        company: "Billboards Media Group, Casablanca, Morocco",
        duration: "August 2024",
        description: "Organized graphic data and contributed to rebranding projects."
      },
      {
        position: "Web Development and Web Scraping Intern",
        company: "Enolia, Nantes, France",
        duration: "April 2023 - June 2023",
        description: "Tested different web scraping methods (Scrapy, Goutte, Parsehub) and developed a data processing interface using PHP/MySQL."
      }
    ],
    
    projects: [
      {
        name: "AI Chatbot with RAG",
        description: "Developed a bilingual virtual assistant (FR/EN) using LangChain and Groq. Integrated Tavily Search for real-time information retrieval, implemented suggested questions, and built a Next.js API for query processing.",
        technologies: ["LangChain", "Groq", "Tavily API", "Next.js", "TypeScript"],
        link:"https://github.com/ghostondancefloor"
      },
      {
        name: "Stock Market Prediction Model",
        description: "Designed a stochastic analysis and time-series model applied to Twitter Stocks data.",
        technologies: ["Python", "Pandas", "Scikit-learn", "TensorFlow"],
        link:"https://github.com/ghostondancefloor"
      },
      {
        name: "Falcon 9 Landing Success Prediction",
        description: "Analyzed and modeled data to estimate first-stage reusability and optimize launch costs.",
        technologies: ["Python", "Scikit-learn", "Machine Learning"],
        link:"https://github.com/ghostondancefloor"
      },
      {
        name: "Geopolitical Dashboard",
        description: "Developed an interactive dashboard for visualizing geopolitical data and analyzing international relations.",
        technologies: ["PowerBI", "Tableau", "Looker Studio"],
        link:"https://github.com/ghostondancefloor"
      }
    ],
    
    skills: {
      languages: ["Python (Keras, Scikit-learn, TensorFlow, PyTorch)", "R", "Java", "SQL"],
      ai_ml: ["Supervised and Unsupervised Learning", "NLP", "RAG", "Fine-tuning models", "Scikit-learn"],
      databases: ["MySQL", "MongoDB", "Distributed Databases"],
      big_data: ["PySpark", "Apache Spark", "Hadoop"],
      web_dev: ["FastAPI", "Streamlit", "Flask", "REST API"],
      devops: ["GitHub", "Git", "Docker"],
      visualization: ["PowerBI", "Tableau", "Looker Studio", "Matplotlib", "Seaborn", "Plotly"],
      data_analysis: ["EDA", "Data extraction & preprocessing (APIs, Web Scraping)"]
    },
    
    languages: ["French (Bilingual)", "Arabic (Bilingual)", "English (C1, TOEIC 945)", "Spanish (Beginner)"],
    
    certifications: [
      "IBM Data Science Professional Certificate"
    ],
    
    soft_skills: ["Autonomy", "Teamwork", "Analytical Thinking", "Project Management (Scrum, Agile)"],
    
    contact: {
      email: "ikramiddouch1@gmail.com",
      linkedin: "linkedin.com/in/ikramiddouch",
      github: "github.com/ikramiddouch"
    }
  },
  
  fr: {
    name: "Ikram Iddouch",
    title: "Ingénieur en Science des Données",
    summary: "Étudiante en ingénierie des sciences de données passionnée par l'IA et la gestion des données. À la recherche d'un stage de quatre mois maximum et six semaines minimum à partir du 19 mai 2025. Intéressée par l'analyse de données et la résolution de problèmes complexes avec rigueur, curiosité et une capacité à traduire les données en solutions concrètes.",
    
    education: [
      {
        degree: "Diplôme d'Ingénieur en Informatique, Données et Usages",
        institution: "Polytech Annecy-Chambéry",
        year: "2023 - Présent",
        description: "Spécialisée en IA, analyse de données et cloud computing."
      },
      {
        degree: "Licence en Informatique",
        institution: "Université de Limoges",
        year: "2020 - 2023",
        description: "Axée sur la programmation, les algorithmes et l'apprentissage automatique."
      }
    ],
    
    experience: [
      {
        position: "Assistante de Production Graphique (Stage Ouvrier)",
        company: "Billboards Media Group, Casablanca, Maroc",
        duration: "Août 2024",
        description: "Organisation de données graphiques et contribution aux projets de rebranding."
      },
      {
        position: "Stagiaire en Développement Web et Web Scraping",
        company: "Enolia, Nantes, France",
        duration: "Avril 2023 - Juin 2023",
        description: "Test de différentes méthodes de web scraping (Scrapy, Goutte, Parsehub) et développement d'une interface de traitement de données utilisant PHP/MySQL."
      }
    ],
    
    projects: [
      {
        name: "Chatbot IA avec RAG",
        description: "Développement d'un assistant virtuel bilingue (FR/EN) utilisant LangChain et Groq. Intégration de Tavily Search pour la récupération d'informations en temps réel, implémentation de questions suggérées et construction d'une API Next.js pour le traitement des requêtes.",
        technologies: ["LangChain", "Groq", "Tavily API", "Next.js", "TypeScript"],
        link:"https://github.com/ghostondancefloor"
      },
      {
        name: "Modèle de Prédiction Boursière",
        description: "Conception d'un modèle d'analyse stochastique et de séries temporelles appliqué aux données des actions Twitter.",
        technologies: ["Python", "Pandas", "Scikit-learn", "TensorFlow"],
        link:"https://github.com/ghostondancefloor"
      },
      {
        name: "Prédiction de Réussite d'Atterrissage Falcon 9",
        description: "Analyse et modélisation de données pour estimer la réutilisabilité du premier étage et optimiser les coûts de lancement.",
        technologies: ["Python", "Scikit-learn", "Machine Learning"],
        link:"https://github.com/ghostondancefloor"
      },
      {
        name: "Tableau de Bord Géopolitique",
        description: "Développement d'un tableau de bord interactif pour visualiser les données géopolitiques et analyser les relations internationales.",
        technologies: ["PowerBI", "Tableau", "Looker Studio"],
        link:"https://github.com/ghostondancefloor"
      }
    ],
    
    skills: {
      languages: ["Python (Keras, Scikit-learn, TensorFlow, PyTorch)", "R", "Java", "SQL"],
      ai_ml: ["Apprentissage Supervisé et Non Supervisé", "NLP", "RAG", "Fine-tuning de modèles", "Scikit-learn"],
      databases: ["MySQL", "MongoDB", "Bases de données distribuées"],
      big_data: ["PySpark", "Apache Spark", "Hadoop"],
      web_dev: ["FastAPI", "Streamlit", "Flask", "API REST"],
      devops: ["GitHub", "Git", "Docker"],
      visualization: ["PowerBI", "Tableau", "Looker Studio", "Matplotlib", "Seaborn", "Plotly"],
      data_analysis: ["EDA", "Extraction et prétraitement des données (API, Web Scraping)"]
    },
    
    languages: ["Français (Bilingue)", "Arabe (Bilingue)", "Anglais (C1, TOEIC 945)", "Espagnol (Débutant)"],
    
    certifications: [
      "Certificat Professionnel IBM en Science des Données"
    ],
    
    soft_skills: ["Autonomie", "Travail d'équipe", "Pensée analytique", "Gestion de projet (Scrum, Agile)"],
    
    contact: {
      email: "ikramiddouch1@gmail.com",
      linkedin: "linkedin.com/in/ikramiddouch",
      github: "github.com/ikramiddouch"
    }
  }
};

// Type definitions
type language = 'en' | 'fr';

interface RequestBody {
  message: string;
  language: language;
  isInitialMessage?: boolean;
}

// Définition d'une interface pour les résultats de recherche
interface SearchResult {
  title: string;
  url: string;
  content: string;
  score?: number;
}

interface SearchResults {
  results: SearchResult[];
}

interface ChatResponse {
  message: string;
  hasEnoughContext: boolean;
  suggestedQuestions: string[];
  confidence: number;
  searchResults?: SearchResults; // Type spécifique au lieu de any
  success: boolean;
}

// Initialize the chat model and search tool
const chatModel = new ChatGroq({
  modelName: "llama-3.2-90b-vision-preview",
  temperature: 0.7,
});

const searchTool = new TavilySearchResults({
  apiKey: process.env.TAVILY_API_KEY!,
});

// Create context from resume data
const createResumeContext = (lang: language): string => {
  const data = resumeData[lang];
  
  // Format education section
  const educationContext = data.education
    .map(edu => `
      Degree: ${edu.degree}
      Institution: ${edu.institution}
      Year: ${edu.year}
      Description: ${edu.description || 'N/A'}
    `).join('\n');
    
  // Format experience section
  const experienceContext = data.experience
    .map(exp => `
      Position: ${exp.position}
      Company: ${exp.company}
      Duration: ${exp.duration}
      Description: ${exp.description || 'N/A'}
      Technologies: ${exp.technologies?.join(', ') || 'N/A'}
    `).join('\n');
    
  // Format projects section
  const projectsContext = data.projects
    .map(proj => `
      Name: ${proj.name}
      Description: ${proj.description}
      Technologies: ${proj.technologies?.join(', ') || 'N/A'}
      Link: ${proj.link || 'N/A'}
    `).join('\n');
    
  // Format skills section
  const skillsContext = Object.entries(data.skills)
    .map(([category, skills]) => `
      Category: ${category}
      Skills: ${skills.join(', ')}
    `).join('\n');

  // Format certifications
  const certificationsContext = data.certifications?.join(', ') || 'N/A';
  
  // Format soft skills
  const softSkillsContext = data.soft_skills?.join(', ') || 'N/A';

  return `
    Personal Information:
    Name: ${data.name}
    Title: ${data.title}
    Summary: ${data.summary}
    
    Education:
    ${educationContext}
    
    Professional Experience:
    ${experienceContext}
    
    Projects:
    ${projectsContext}
    
    Skills:
    ${skillsContext}
    
    Languages: ${data.languages.join(', ')}
    
    Certifications: ${certificationsContext}
    
    Soft Skills: ${softSkillsContext}
    
    Contact: 
    Email: ${data.contact.email}
    LinkedIn: ${data.contact.linkedin}
    GitHub: ${data.contact.github}
  `;
};

const getSystemPrompt = (lang: language, isInitialMessage: boolean = false): string => {
  if (lang === 'fr') {
    return `Tu es un chatbot intelligent pour le portfolio en ligne de ${resumeData.fr.name}, conçu pour aider les recruteurs et les visiteurs à découvrir son profil professionnel.
    
    ${isInitialMessage 
      ? "Commence par un message d'accueil chaleureux et professionnel. Présente-toi comme un assistant IA sur le site de " + resumeData.fr.name + " et propose des questions pertinentes pour démarrer la conversation. Mentionne qu'elle est à la recherche d'un stage de 6 semaines à 4 mois à partir du 19 mai 2025." 
      : "Analyse la question et fournis une réponse utile et pertinente sur le parcours professionnel, les compétences ou les projets de " + resumeData.fr.name + ". Sois enthousiaste et représente bien ses qualités, tout en restant précis et professionnel."}
    
    Quand on te demande des informations sur ses compétences techniques ou projets, fournit des détails précis et souligne ses forces en data science et IA.
    
    Si un recruteur pose des questions sur sa disponibilité ou ses intérêts professionnels, mentionne qu'elle recherche un stage de 6 semaines à 4 mois à partir du 19 mai 2025 dans le domaine de la data science/IA.
    
    Retourne TOUJOURS une réponse au format JSON strict avec:
    {
      "message": string (${isInitialMessage ? "message d'accueil" : "ta réponse"}),
      "hasEnoughContext": boolean (indique si tu as assez d'informations pour répondre de façon précise),
      "suggestedQuestions": array (3 questions pertinentes ${isInitialMessage ? "pour démarrer la conversation" : "de suivi"}, ciblées aux intérêts des recruteurs),
      "confidence": number (niveau de confiance de 0 à 1)
    }

    Informations sur ${resumeData.fr.name}:
    ${createResumeContext('fr')}`;
  }

  return `You are an intelligent chatbot for ${resumeData.en.name}'s online portfolio, designed to help recruiters and visitors discover her professional profile.
  
  ${isInitialMessage 
    ? "Start with a warm and professional welcome message. Introduce yourself as an AI assistant on " + resumeData.en.name + "'s website and suggest relevant questions to start the conversation. Mention that she is looking for an internship of 6 weeks to 4 months starting May 19, 2025." 
    : "Analyze the question and provide helpful and relevant information about " + resumeData.en.name + "'s professional background, skills, or projects. Be enthusiastic and represent her qualities well, while remaining accurate and professional."}
  
  When asked about her technical skills or projects, provide specific details and highlight her strengths in data science and AI.
  
  If a recruiter asks about her availability or professional interests, mention that she is looking for an internship of 6 weeks to 4 months starting May 19, 2025, in the field of data science/AI.
  
  ALWAYS return a strict JSON response with:
  {
    "message": string (${isInitialMessage ? "welcome message" : "your response"}),
    "hasEnoughContext": boolean (indicates if you have enough information to provide an accurate response),
    "suggestedQuestions": array (3 relevant ${isInitialMessage ? "conversation starter" : "follow-up"} questions targeted to recruiters' interests),
    "confidence": number (confidence level from 0 to 1)
  }

  Information about ${resumeData.en.name}:
  ${createResumeContext('en')}`;
};

export async function POST(req: Request) {
  try {
    const body = await req.json() as RequestBody;
    const { message, language = 'en', isInitialMessage = false } = body;

    // Generate relevant search queries based on the user's message
    const searchQuery = `${resumeData[language].name} ${message} ${resumeData[language].title} data science machine learning`;
    
    // Search for relevant information about your background or technologies mentioned
    let searchResults: SearchResults;
    try {
      searchResults = await searchTool.invoke(searchQuery) as SearchResults;
    } catch (searchError) {
      console.error('Search API Error:', searchError);
      searchResults = { results: [] }; // Provide empty results if search fails
    }

    // Create messages array with system prompt and search results
    const messages = [
      new SystemMessage(getSystemPrompt(language, isInitialMessage)),
      new SystemMessage(`Additional context from search: ${JSON.stringify(searchResults)}`),
      new HumanMessage(message)
    ];

    // Get response from chat model
    const result = await chatModel.invoke(messages);
    
    // Parse the response as JSON
    let parsedResponse: ChatResponse;
    try {
      parsedResponse = JSON.parse(result.content as string);
    } catch (parseError) {
      console.error('Failed to parse LLM response:', parseError);
      
      // Attempt to extract JSON from potential text response
      const jsonRegex = /{[\s\S]*}/g;
      const jsonMatch = (result.content as string).match(jsonRegex);
      
      if (jsonMatch && jsonMatch.length > 0) {
        try {
          parsedResponse = JSON.parse(jsonMatch[0]);
        } catch (_) {
          throw new Error('Invalid response format from LLM');
        }
      } else {
        throw new Error('Invalid response format from LLM');
      }
    }

    // Validate response structure
    if (!parsedResponse.message || !Array.isArray(parsedResponse.suggestedQuestions)) {
      throw new Error('Invalid response structure from LLM');
    }

    // Ensure suggested questions is exactly 3 items
    parsedResponse.suggestedQuestions = parsedResponse.suggestedQuestions.slice(0, 3);
    
    // Prepare default questions that would be useful for recruiters
    const defaultQuestions = {
      en: [
        "What experience do you have with machine learning projects?",
        "Are you available for remote internships?",
        "What are your strongest technical skills?"
      ],
      fr: [
        "Quelle expérience avez-vous avec des projets d'apprentissage automatique ?",
        "Êtes-vous disponible pour des stages à distance ?",
        "Quelles sont vos compétences techniques les plus fortes ?"
      ]
    };
    
    while (parsedResponse.suggestedQuestions.length < 3) {
      const defaultQuestion = defaultQuestions[language][parsedResponse.suggestedQuestions.length];
      parsedResponse.suggestedQuestions.push(defaultQuestion);
    }

    return NextResponse.json({
      ...parsedResponse,
      success: true,
      searchResults
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    
    const errorResponse: ChatResponse = {
      message: language === 'fr' 
        ? "Désolé, je n'ai pas pu traiter votre demande. Veuillez réessayer." 
        : "Sorry, I couldn't process your request. Please try again.",
      hasEnoughContext: false,
      suggestedQuestions: [
        language === 'fr' 
          ? "Quelles sont les compétences techniques d'Ikram ?" 
          : "What are Ikram's technical skills?",
        language === 'fr' 
          ? "Quand Ikram est-elle disponible pour un stage ?" 
          : "When is Ikram available for an internship?",
        language === 'fr' 
          ? "Quels projets Ikram a-t-elle réalisés ?" 
          : "What projects has Ikram worked on?"
      ],
      confidence: 0,
      success: false
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}