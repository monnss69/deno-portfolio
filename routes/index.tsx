import { Icon, loadIcons } from "@iconify-icon/react";
import TypingAnimation from "../islands/TypingAnimation.tsx";
import TechnologiesSection from "../islands/TechnologiesSection.tsx";

// Preload commonly used icons
loadIcons([
  "majesticons:suitcase",
  "tabler:calendar-filled",
  "carbon:location-filled",
  "logos:react",
  "logos:typescript-icon",
  "logos:go",
  "logos:postgresql",
  "logos:tailwindcss-icon",
  "logos:express",
  "logos:playwright",
  "carbon:chart-line"
]);

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-primary">
              <TypingAnimation
                strings={[
                  "Hello, I'm Minh",
                  "Full Stack Developer",
                  "Quantitative Analyst"
                ]}
                autoStart={true}
              />
            </span>
          </h1>
          
          <div className="space-y-6">
            <p className="text-2xl text-gray-200">
              Computer Science student at NUS 
              <span className="text-primary ml-2 font-semibold">
                (GPA: 4.83/5.0)
              </span>
            </p>
            <p className="text-xl text-gray-300">
              Specializing in full-stack development and quantitative analysis, 
              with experience in healthcare tech and financial modeling.
            </p>
            
            <div className="flex gap-4 pt-4">
              <a 
                href="/cv.pdf" 
                className="btn btn-primary btn-lg"
                download
              >
                <Icon icon="majesticons:document" className="w-5 h-5 mr-2" />
                Download CV
              </a>
              <a 
                href="https://github.com/monnss69" 
                target="_blank"
                className="btn btn-outline btn-lg"
              >
                <Icon icon="fa-brands:github" className="w-5 h-5 mr-2" />
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Junior Software Engineer",
      company: "NUS TeleHealthCore",
      timePeriod: "Sep 2024 - Present",
      location: "Remote",
      highlights: [
        "Led development of full-stack healthcare platform with React & Express.js",
        "Reduced API response time by 40% through optimized React architecture",
        "Established Playwright testing framework with 90% coverage",
        "Designed responsive UI/UX using Tailwind CSS"
      ]
    },
    {
      title: "Research Consultant",
      company: "WorldQuant BRAIN",
      timePeriod: "Nov 2024 - Jan 2025",
      location: "Remote",
      highlights: [
        "Created 100+ quantitative financial models (Alphas)",
        "Analyzed 120,000+ financial data fields across diverse instruments",
        "Developed market prediction models using WorldQuant's BRAIN platform"
      ]
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-primary text-center mb-12">
        Work Experience
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="relative space-y-8">
          {experiences.map((experience, i) => (
            <div key={i} className="relative">
              {/* Timeline connector */}
              {i < experiences.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-primary/20"></div>
              )}
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 ml-16 relative hover:shadow-2xl transition-all duration-300">
                {/* Timeline dot */}
                <div className="absolute left-0 top-8 w-4 h-4 rounded-full bg-primary -translate-x-8"></div>
                
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                  {experience.title}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                  <span className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Icon icon="majesticons:building" className="w-5 h-5 text-primary" />
                    {experience.company}
                  </span>
                  <span className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Icon icon="majesticons:calendar" className="w-5 h-5 text-primary" />
                    {experience.timePeriod}
                  </span>
                  <span className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Icon icon="majesticons:location" className="w-5 h-5 text-primary" />
                    {experience.location}
                  </span>
                </div>
                
                <ul className="space-y-2">
                  {experience.highlights.map((highlight, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Icon icon="majesticons:check-circle" className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Academic Web Forum",
      description: "Full-stack academic discussion platform built for university students",
      period: "Dec 2024 - Jan 2025",
      link: "https://student-hub-frontend.vercel.app/",
      github: "https://github.com/monnss69",
      type: "Full Stack",
      icon: "logos:react",
      tech: ["React", "TypeScript", "Go", "PostgreSQL", "Tailwind CSS"],
      highlights: [
        "Architected forum platform serving 1000+ monthly users",
        "Implemented JWT authentication & bcrypt password hashing",
        "Achieved 96+ Lighthouse performance score",
        "Maintained 99% uptime via Vercel deployment"
      ]
    },
    {
      title: "Quantitative Research Virtual Internship",
      description: "Financial analysis project for loan default prediction",
      period: "JPMorgan Chase & Co. Jan 2025",
      type: "Data Science",
      icon: "logos:python",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Jupyter"],
      highlights: [
        "Built predictive models for loan default probability",
        "Implemented dynamic programming algorithms for FICO score analysis",
        "Developed automated data processing pipeline"
      ]
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-primary text-center mb-12">
        Featured Projects
      </h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-base-200 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] border border-base-300"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-base-300 rounded-lg">
                  <Icon icon={project.icon} className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {project.period}
                  </p>
                </div>
                <span className="ml-auto px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  {project.type}
                </span>
              </div>

              <p className="text-gray-300 mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 rounded-md bg-base-300 text-gray-200 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mb-4">
                {project.highlights.map((highlight, l) => (
                  <li key={l} className="flex items-start gap-2">
                    <Icon
                      icon="majesticons:check-circle"
                      className="w-5 h-5 text-primary flex-shrink-0 mt-1"
                    />
                    <span className="text-gray-300">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Links */}
              {project.link && (
                <div className="flex gap-3 mt-4 pt-4 border-t border-base-300">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="btn btn-sm btn-ghost gap-2"
                    >
                      <Icon icon="fa-brands:github" className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    className="btn btn-sm btn-primary gap-2"
                  >
                    <Icon icon="majesticons:external-link" className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Values = () => {
  const values = [
    {
      title: "Quantitative Research",
      description: "Created 100+ financial models at WorldQuant BRAIN using advanced quantitative methods. Analyzed 120,000+ financial data fields for market prediction.",
      icon: "carbon:chart-line",
    },
    {
      title: "Full Stack Development",
      description: "Built healthcare platforms with React & Express.js achieving 40% faster API response times. Developed secure authentication systems with JWT and bcrypt.",
      icon: "logos:react",
    },
    {
      title: "Performance Optimization",
      description: "Achieved 96+ Lighthouse score through optimized React architecture and responsive design. Maintained 99% uptime via automated deployment.",
      icon: "carbon:optimization",
    },
  ];

  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <div
              key={i}
              className="bg-base-100 rounded-xl p-6 shadow-xl transform transition-all duration-300 hover:scale-105 border border-base-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon icon={value.icon} className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-gray-200">
                  {value.title}
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200">
      <div className="relative z-10">
        <Hero />
        <Experience />
        <Projects />
        <Values />
        <TechnologiesSection />
      </div>
    </div>
  );
}