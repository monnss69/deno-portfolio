import TypingAnimation from "../islands/TypingAnimation.tsx";
import { Icon, loadIcons } from "@iconify-icon/react";
import Wave from "../components/Wave.tsx";

// Preload icons for technologies
loadIcons([
  "majesticons:suitcase",
  "tabler:calendar-filled",
  "carbon:location-filled",
  "logos:react",
  "logos:typescript-icon",
  "logos:go",
  "logos:postgresql",
  "vscode-icons:file-type-js-official",
  "logos:tailwindcss-icon",
  "logos:express",
  "logos:playwright",
  "logos:docker-icon",
  "carbon:chart-line",
  "carbon:model-alt"
]);

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl relative z-10">
          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
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
          
          <div className="space-y-4">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Computer Science student at NUS (GPA: 4.83/5.0)
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Specializing in full-stack development and quantitative analysis, with experience in healthcare tech and financial modeling.
            </p>
            
            <div className="flex gap-4 mt-8">
              <a 
                href="/cv.pdf" 
                className="btn btn-primary"
                download
              >
                Download CV
              </a>
              <a 
                href="https://github.com/monnss69" 
                target="_blank"
                className="btn btn-outline"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    <>
      <Wave flip={false} />
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-xl transform transition-all duration-300 hover:scale-105 hover:rotate-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon icon={value.icon} className="w-8 h-8 text-primary" />
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                    {value.title}
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Wave flip={true} />
    </>
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
    },
    {
      title: "Quantitative Research Virtual Program",
      company: "JPMorgan Chase & Co.",
      timePeriod: "Jan 2025",
      location: "Remote",
      highlights: [
        "Completed simulation focused on quantitative research methods",
        "Analyzed loan books for default probability estimation",
        "Implemented dynamic programming for FICO score categorization"
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
      ],
      metrics: [
        { label: "Active Users", value: "1000+" },
        { label: "Performance Score", value: "96+" },
        { label: "Uptime", value: "99%" },
        { label: "Categories", value: "3" }
      ]
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-primary text-center mb-12">
        Featured Projects
      </h2>
      
      <div className="max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden mb-8 transform transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Icon icon={project.icon} className="w-10 h-10" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    className="btn btn-circle btn-ghost"
                    aria-label="GitHub"
                  >
                    <Icon icon="fa-brands:github" className="w-6 h-6" />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    className="btn btn-circle btn-primary"
                    aria-label="Live Demo"
                  >
                    <Icon icon="majesticons:external-link" className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {project.metrics.map((metric, k) => (
                  <div
                    key={k}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-primary">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.highlights.map((highlight, l) => (
                  <div key={l} className="flex items-start gap-2">
                    <Icon
                      icon="majesticons:check-circle"
                      className="w-5 h-5 text-primary flex-shrink-0 mt-1"
                    />
                    <span className="text-gray-600 dark:text-gray-300">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Technologies = () => {
  const techCategories = [
    {
      name: "Frontend Development",
      techs: [
        { name: "React", icon: "logos:react" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
        { name: "Framer Motion", icon: "logos:framer" }
      ]
    },
    {
      name: "Backend Development",
      techs: [
        { name: "Go", icon: "logos:go" },
        { name: "Express.js", icon: "logos:express" },
        { name: "PostgreSQL", icon: "logos:postgresql" },
        { name: "JWT", icon: "logos:jwt-icon" }
      ]
    },
    {
      name: "Testing & DevOps",
      techs: [
        { name: "Playwright", icon: "logos:playwright" },
        { name: "Vercel", icon: "logos:vercel-icon" },
        { name: "Supabase", icon: "logos:supabase-icon" },
        { name: "GitHub Actions", icon: "logos:github-actions" }
      ]
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-primary text-center mb-12">
        Technologies & Skills
      </h2>
      
      <div className="max-w-5xl mx-auto space-y-12">
        {techCategories.map((category, i) => (
          <div key={i} className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              {category.name}
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {category.techs.map((tech, j) => (
                <div
                  key={j}
                  className="group bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex flex-col items-center gap-3">
                    <Icon
                      icon={tech.icon}
                      className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="text-gray-600 dark:text-gray-300 font-medium">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Skills */}
      <div className="mt-16 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          Additional Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Quantitative Analysis",
            "Financial Modeling",
            "UI/UX Design",
            "RESTful APIs",
            "Authentication Systems",
            "Performance Optimization",
            "Dynamic Programming",
            "Data Structures",
            "Algorithms"
          ].map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 relative">
      <div className="absolute inset-0 bg-[url('/background.webp')] opacity-10 bg-cover bg-center bg-no-repeat pointer-events-none"></div>
      <div className="relative z-10">
        <Hero />
        <Values />
        <Projects />
        <Experience />
        <Technologies />
      </div>
    </div>
  );
}