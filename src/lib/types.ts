
export interface Translations {
  title: string;
  subtitle: string;
  description: string;
  learnMore: string;
  partners: string;
  chatbot: string;
  close: string;
  learnMoreAbout: string;
  contactUs: string;
  quickLinks: string;
  newsletter: string;
  stayUpdated: string;
  emailPlaceholder: string;
  subscribe: string;
  about: string;
  events: string;
  allRights: string;
  joinUs: string;
  ourMission: string;
  followUs: string;
  chatWithUs: string;
  news: string;
  contact: string;
  intro: string;
  downloadCV: string;
  educationTitle: string;
  experienceTitle: string;
  projectsTitle:string;
  skillsTitle: string;
  current: string;
  engineeringCycle: string;
  polytechAnnecy: string;
  bachelorCS: string;
  universityLimoges:string;
  certification: string;
  ibmCertification:string;
  certificationDescription: string;
  graphicProductionAssistant: string;
  billboardsMedia: string;
  graphicDataOrganization: string;
  webDevelopment: string;
  enolia: string;
  webScrapingAutomation:string;
  phpMysqlDevelopment: string;
  stockPrediction: string;
  stockPredictionDesc: string;
  geopoliticalDashboard: string;
  geopoliticalDashboardDesc: string;
  falcon9Prediction: string;
  falcon9PredictionDesc: string;
  programming: string;
  database: string;
  bigDataCloud: string;
  webDev: string;
  devOps:string;
  dataViz:string;
  statistics: string;
}

export const translations = {
  fr: {
    // Header translations (assuming you already have these)
    contact : "Me contacter",
    // Introduction section
    intro: {
      title1: "Élève Ingénieure",
      title2: "en Science des Données",
      description: "Étudiante en deuxième année de cycle ingénieur à Polytech Annecy, avec pour ambition de devenir data scientist, je suis à la recherche d'un stage de 4 mois maximum et 6 semaines minimum à partir du 20 mai 2025 et d'une alternance d'un an (contrat de professionnalisation) à partir d'octobre 2025. Passionnée par l'analyse de données et la résolution de problématiques complexes, je me distingue par ma rigueur, ma curiosité et ma capacité à traduire des données en solutions concrètes.",
      downloadCV: "Télécharger mon CV"
    },
    
    // Education section
    education: {
      sectionTitle: "Parcours Universitaire",
      current: "en cours",
      engineerCycle: "Cycle ingénieur Informatique, Données, Usages",
      polytechLocation: "Polytech Annecy-Chambéry, Annecy, France",
      bachelorDegree: "Licence Informatique",
      limougeLocation: "Université de Limoges, Limoges, France",
      certification: "Certification",
      ibmCertificate: "IBM Data Science Professional Certificate",
      professionalCertification: "Certification professionnelle en Data Science"
    },
    
    // Experience section
    experience: {
      sectionTitle: "Expérience Professionnelle",
      job1: {
        date: "Août 2024",
        location: "Casablanca, Maroc",
        title: "Assistante de production graphique",
        company: "Billboards Media Group",
        tasks: ["Nettoyage et structuration des données pour optimiser leur exploitation.",
          "Développement de scripts d’automatisation pour réduire les tâches répétitives."]
      },
      job2: {
        date: "Avril - Juin 2023",
        location: "Nantes, France",
        title: "Développement Web et Web Scraping",
        company: "Enolia",
        tasks: [
          "Mise en place d’un système permettant de récupérer automatiquement les données de plus de 5000 produits auprès des fournisseurs via des techniques de web scraping. ",
          "Développement d’un module d’intégration des données, transformant et insérant directement les informations collectées dans la base de données de l’entreprise, réduisant ainsi le temps de traitement manuel de 80%."
        ]
      }
    },
    
    // Projects section
    projects: {
      sectionTitle: "Projets",
      projectList: [
        {
          title: "Modèle de prévision boursière",
          description: "Développement d'un modèle basé sur l'analyse stochastique et les séries temporelles appliqué aux données de Twitter Stocks."
        },
        {
          title: "Dashboard pour analyse Géopolitique",
          description: "Développement d'un tableau de bord interactif permettant de visualiser les données géopolitiques et d'analyser les relations internationales."
        },
        {
          title: "Prédiction du succès d'atterrissage du Falcon 9",
          description: "Analyse et modélisation des données pour estimer la réutilisabilité du premier étage et optimiser les coûts de lancement."
        }
      ]
    },
    
    // Skills section
    skills: {
      sectionTitle: "Compétences",
      technologies: "Technologies",
      programming: {
        title: "Programmation"
      },
      database: {
        title: "Base de données"
      },
      bigData: {
        title: "Big Data et Cloud"
      },
      webDev: {
        title: "Développement Web et API"
      },
      devOps: {
        title: "DevOps et MLOps"
      },
      dataViz: {
        title: "Data Visualisation"
      },
      statistics: {
        title: "Statistiques & Modélisation",
        statAnalysis: "Analyse Statistique",
        machineLearning: "Machine Learning",
        deepLearning: "Deep Learning"
      }
    },
    
    // Footer
    allRights: "Tous droits réservés."
  },
  
  en: {
    // Header translations (assuming you already have these)
    contact: "Contact Me",
    // Introduction section
    intro: {
      title1: "Engineering Student",
      title2: "in Data Science",
      description: "As a second-year engineering student at Polytech Annecy, aspiring to become a data scientist, I am looking for an internship of maximum 4 months and minimum 6 weeks starting from May 20th, 2025, and a one-year apprenticeship (professional training contract) starting from October 2025. Passionate about data analysis and solving complex problems, I distinguish myself by my rigor, curiosity, and ability to translate data into concrete solutions.",
      downloadCV: "Download my CV"
    },
    
    // Education section
    education: {
      sectionTitle: "Education",
      current: "ongoing",
      engineerCycle: "Engineering Degree in Computer Science, Data, and Usage",
      polytechLocation: "Polytech Annecy-Chambéry, Annecy, France",
      bachelorDegree: "Bachelor's Degree in Computer Science",
      limougeLocation: "University of Limoges, Limoges, France",
      certification: "Certification",
      ibmCertificate: "IBM Data Science Professional Certificate",
      professionalCertification: "Professional Certification in Data Science"
    },
    
    // Experience section
    experience: {
      sectionTitle: "Professional Experience",
      job1: {
        date: "August 2024",
        location: "Casablanca, Morocco",
        title: "Graphic Production Assistant",
        company: "Billboards Media Group",
        tasks: [
          "Cleaning, and structuring of data to optimize its utilization.", 
          "Development of automation scripts to reduce repetitive tasks. "
          
        ]
        
      },
      job2: {
        date: "April - June 2023",
        location: "Nantes, France",
        title: "Web Development and Web Scraping",
        company: "Enolia",
        tasks: [
          "Implementation of a system allowing the automatic retrieval of data for more than 5,000 products from suppliers using web scraping techniques.",
          "Development of a data integration module, transforming and directly inserting the collected information into the company's database, thereby reducing manual processing time by 80%."
          
        ]
      }
    },
    
    // Projects section
    projects: {
      sectionTitle: "Projects",
      projectList: [
        {
          title: "Stock Market Prediction Model",
          description: "Development of a model based on stochastic analysis and time series applied to Twitter Stocks data."
        },
        {
          title: "Dashboard for Geopolitical Analysis",
          description: "Development of an interactive dashboard to visualize geopolitical data and analyze international relations."
        },
        {
          title: "Falcon 9 Landing Success Prediction",
          description: "Data analysis and modeling to estimate first stage reusability and optimize launch costs."
        }
      ]
    },
    
    // Skills section
    skills: {
      sectionTitle: "Skills",
      technologies: "Technologies",
      programming: {
        title: "Programming"
      },
      database: {
        title: "Database"
      },
      bigData: {
        title: "Big Data and Cloud"
      },
      webDev: {
        title: "Web Development and API"
      },
      devOps: {
        title: "DevOps and MLOps"
      },
      dataViz: {
        title: "Data Visualization"
      },
      statistics: {
        title: "Statistics & Modeling",
        statAnalysis: "Statistical Analysis",
        machineLearning: "Machine Learning",
        deepLearning: "Deep Learning"
      }
    },
    
    // Footer
    allRights: "All rights reserved."
  }
};