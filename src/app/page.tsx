"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import Header from '@/components/global/Header';
import { translations } from '@/lib/types';



interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface TranslationsType {
  intro: {
    title1: string;
    title2: string;
    description: string;
    downloadCV: string;
  };
  skills: {
    sectionTitle: string;
    technologies: string;
    programming: {
      title: string;
    };
    database: {
      title: string;
    };
    bigData: {
      title: string;
    };
    webDev: {
      title: string;
    };
    devOps: {
      title: string;
    };
    dataViz: {
      title: string;
    };
    statistics: {
      title: string;
      statAnalysis: string;
      machineLearning: string;
      deepLearning: string;
    };
  };
  education: {
    sectionTitle: string;
    current: string;
    engineerCycle: string;
    polytechLocation: string;
    bachelorDegree: string;
    limougeLocation: string;
    certification: string;
    ibmCertificate: string;
    professionalCertification: string;
  };
  experience: {
    sectionTitle: string;
    job1: {
      date: string;
      location: string;
      title: string;
      company: string;
      tasks: string[];
    };
    job2: {
      date: string;
      location: string;
      title: string;
      company: string;
      tasks: string[];
    };
  };
  projects: {
    sectionTitle: string;
    projectList: Array<{
      title: string;
      description: string;
    }>;
  };
  allRights: string;
}

interface Partner {
  id: string;
  name: string;
  description: string;
  logo?: string;
}

interface SkillsSectionProps {
  t: TranslationsType;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ t }) => {
  const skillCategories: SkillCategory[] = [
    {
      title: t.skills.programming.title,
      skills: [
        { name: "Python", icon: "/icons/python.png" },
        { name: "TensorFlow", icon: "/icons/tensorflow.png" },
        { name: "PyTorch", icon: "/icons/pytorch.png" },
        { name: "R", icon: "/icons/r.png" },
        { name: "Java", icon: "/icons/java.png" }
      ]
    },
    {
      title: t.skills.database.title,
      skills: [
        { name: "MySQL", icon: "/icons/programing.png" },
        { name: "MongoDB", icon: "/icons/mongodb.png" },
        { name: "Distributed DB", icon: "/icons/distributed.png" }
      ]
    },
    {
      title: t.skills.bigData.title,
      skills: [
        { name: "Apache Spark", icon: "/icons/apache_spark.png" },
        { name: "Hadoop", icon: "/icons/hadoop.png" },
        { name: "Azure", icon: "/icons/azure.png" }
      ]
    },
    {
      title: t.skills.webDev.title,
      skills: [
        { name: "FastAPI", icon: "/icons/fastapi.png" },
        { name: "Streamlit", icon: "/icons/streamlit.png" },
        { name: "REST API", icon: "/icons/api.png" }
      ]
    },
    {
      title: t.skills.devOps.title,
      skills: [
        { name: "GitHub", icon: "/icons/github-sign.png" },
        { name: "GitLab", icon: "/icons/gitlab.png" },
        { name: "Docker", icon: "/icons/docker.png" }
      ]
    },
    {
      title: t.skills.dataViz.title,
      skills: [
        { name: "PowerBI", icon: "/icons/powerbi.png" },
        { name: "Tableau", icon: "/icons/tableau.png" },
        { name: "Looker Studio", icon: "/icons/looker.png" },
        { name: "Plotly", icon: "/icons/plotly.png" }
      ]
    },
    {
      title: t.skills.statistics.title,
      skills: [
        { name: t.skills.statistics.statAnalysis, icon: "/icons/stat.png" },
        { name: t.skills.statistics.machineLearning, icon: "/icons/machine_learning.png" },
        { name: t.skills.statistics.deepLearning, icon: "/icons/deep-learning.png" }
      ]
    }
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="py-16 bg-slate-50"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            {t.skills.sectionTitle} <span className="text-[#a39e87]">&</span> {t.skills.technologies}
          </h2>
          <div className="w-24 h-1 bg-[#a39e87] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-[#a39e87] mb-6 pb-2 border-b border-slate-200">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 flex items-center justify-center bg-slate-50 rounded-full mb-3 p-3 transition-all duration-300 group-hover:bg-[#f5f5dc] group-hover:shadow-md">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-slate-800">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const CVLandingPage: React.FC = () => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [t, setT] = useState<TranslationsType>(translations.fr as TranslationsType);
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Check if code is running in browser environment before accessing localStorage
    if (typeof window !== 'undefined') {
      // Load saved language preference if available
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage === 'fr' || savedLanguage === 'en') {
        setLanguage(savedLanguage as 'fr' | 'en');
        setT(translations[savedLanguage] as TranslationsType);
      }
    }
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
  
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleLanguageChange = (newLanguage: 'fr' | 'en') => {
    setLanguage(newLanguage);
    setT(translations[newLanguage] as TranslationsType);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguage);
    }
  };
  
  
  const router = useRouter();
  const handleRouteMessage = () => {
    router.push('/chat');
  };
  
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        body {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    
      <div className="fixed inset-0 bg-gradient-to-br from-stone-900 to-black -z-10" />

      <div className="relative min-h-screen overflow-x-hidden">
        <Header language={language} handleLanguageChange={handleLanguageChange} />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-8 md:mt-12 lg:mt-16 space-y-24">
          {/* Introduction Section */}
          <motion.section 
            id="introduction"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20"
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                <span className="text-stone-300">{t.intro.title1}</span> {t.intro.title2}
              </h2>
              <p className="text-lg text-white mb-8 leading-relaxed">
                {t.intro.description}
              </p>
              <div className="flex space-x-4">
                <a href="mailto:ikramiddouch1@gmail.com" className="flex items-center text-white hover:text-stone-300 transition-colors duration-300">
                  <Mail size={20} className="mr-2" />
                  <span>ikramiddouch1@gmail.com</span>
                </a>
              </div>
              <div className="flex mt-4 space-x-4">
                <a href="tel:0758814671" className="flex items-center text-white hover:text-stone-300 transition-colors duration-300">
                  <Phone size={20} className="mr-2" />
                  <span>0758814671</span>
                </a>
              </div>
              <div className="flex mt-4 space-x-4">
                <a href="#" className="flex items-center text-white hover:text-stone-300 transition-colors duration-300">
                  <Linkedin size={20} className="mr-2" />
                  <span>LinkedIn</span>
                </a>
                <a href="#" className="flex items-center text-white hover:text-stone-300 transition-colors duration-300">
                  <Github size={20} className="mr-2" />
                  <span>GitHub</span>
                </a>
              </div>
              <div className="mt-8">
                <Button className="bg-stone-800 hover:bg-stone-700 text-white rounded-full px-6 py-2 transition-all duration-300 hover:shadow-lg">
                  <Download size={18} className="mr-2" />
                  {t.intro.downloadCV}
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 border-4 border-stone-200 shadow-lg"
              >
                <img 
                  src="ikram.jpeg" 
                  alt="Ikram Iddouch" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.section>

          {/* Formation Section */}
          <motion.section
            id="education"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-20"
          >
            <div className="bg-stone-100 rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold text-black mb-6 border-b-2 border-stone-300 pb-2 flex items-center">
                <span className="bg-stone-800 text-white px-3 py-1 rounded-md mr-2 text-lg">01</span>
                {t.education.sectionTitle}
              </h2>
              <ul className="space-y-8">
                <li className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/3">
                    <h3 className="font-bold text-black">2023 - {t.education.current}</h3>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="font-semibold text-black text-lg">{t.education.engineerCycle}</h4>
                    <p className="text-stone-600">{t.education.polytechLocation}</p>
                  </div>
                </li>
                <li className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/3">
                    <h3 className="font-bold text-black">2020 - 2023</h3>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="font-semibold text-black text-lg">{t.education.bachelorDegree}</h4>
                    <p className="text-stone-600">{t.education.limougeLocation}</p>
                  </div>
                </li>
                <li className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/3">
                    <h3 className="font-bold text-black">{t.education.certification}</h3>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="font-semibold text-black text-lg">{t.education.ibmCertificate}</h4>
                    <p className="text-stone-600">{t.education.professionalCertification}</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Expérience Professionnelle Section */}
          <motion.section
            id="experience"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-20"
          >
            <div className="bg-stone-100 rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold text-black mb-6 border-b-2 border-stone-300 pb-2 flex items-center">
                <span className="bg-stone-800 text-white px-3 py-1 rounded-md mr-2 text-lg">02</span>
                {t.experience.sectionTitle}
              </h2>
              <div className="space-y-8 relative">
                <div className="absolute left-[16.5%] top-0 bottom-0 w-px bg-stone-200 hidden md:block"></div>
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative">
                    <div className="absolute right-0 top-2 w-3 h-3 bg-stone-800 rounded-full hidden md:block"></div>
                    <h3 className="font-bold text-black">{t.experience.job1.date}</h3>
                    <p className="text-stone-600">{t.experience.job1.location}</p>
                  </div>
                  <div className="md:w-2/3 md:pl-8">
                    <h4 className="font-semibold text-black text-lg">{t.experience.job1.title}</h4>
                    <p className="text-stone-800 font-medium">{t.experience.job1.company}</p>
                    <ul className="text-stone-600 mt-2 list-disc pl-5">
                      {t.experience.job1.tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative">
                    <div className="absolute right-0 top-2 w-3 h-3 bg-stone-800 rounded-full hidden md:block"></div>
                    <h3 className="font-bold text-black">{t.experience.job2.date}</h3>
                    <p className="text-stone-600">{t.experience.job2.location}</p>
                  </div>
                  <div className="md:w-2/3 md:pl-8">
                    <h4 className="font-semibold text-black text-lg">{t.experience.job2.title}</h4>
                    <p className="text-stone-800 font-medium">{t.experience.job2.company}</p>
                    <ul className="text-stone-600 mt-2 list-disc pl-5">
                      {t.experience.job2.tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Projets Section */}
          <motion.section
            id="projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-20"
          >
            <div className="bg-stone-100 rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold text-black mb-6 border-b-2 border-stone-300 pb-2 flex items-center">
                <span className="bg-stone-800 text-white px-3 py-1 rounded-md mr-2 text-lg">03</span>
                {t.projects.sectionTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.projects.projectList.map((project, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 hover:shadow-md transition-all duration-300 hover:border-stone-300">
                    <h3 className="font-bold text-black text-lg mb-2">{project.title}</h3>
                    <p className="text-stone-600">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <SkillsSection t={t} />

        </main>

        {/* Footer */}
        <footer className="w-full bg-stone-900 text-white py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-stone-700">
            <p className="text-center text-sm text-stone-400">
              © 2025 Ikram Iddouch. {t.allRights}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CVLandingPage;