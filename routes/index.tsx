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

function Hero() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold text-primary">
          <TypingAnimation
            strings={['"Hello, World!"', "I'm Minh.", "I'm a Developer."]}
            autoStart={true}
          />
        </h1>
        <p className="text-xl mt-4 text-gray-600 dark:text-gray-300">
          Computer Science student at NUS specializing in full-stack development, test automation, and quantitative analysis.
        </p>
      </div>
    </div>
  );
}

function Values() {
  const values = [
    {
      title: "Quantitative Analysis",
      description: "Created 100+ financial models at WorldQuant BRAIN, analyzing 120,000+ fields across diverse financial instruments. Ranked 19th in NUS Alphathon 2024.",
      icon: "carbon:chart-line",
    },
    {
      title: "Full Stack Development",
      description: "Built scalable applications using React, Express.js, Golang, PostgreSQL, and modern testing frameworks like Playwright and Selenium.",
      icon: "logos:react",
    },
    {
      title: "Mathematical Modeling",
      description: "Received Honorable Mention in International Math Modeling Competition 2023. Top 8 finalist in Vietnam Math Modeling Competition.",
      icon: "carbon:model-alt",
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
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 ${
                  i % 2 ? "md:translate-y-8" : ""
                }`}
              >
                <div className="p-6">
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
              </div>
            ))}
          </div>
        </div>
      </section>
      <Wave flip={true} />
    </>
  );
}

function Experience() {
  const experiences = [
    {
      title: "Research Consultant",
      company: "WorldQuant BRAIN",
      timePeriod: "Nov 2024 - Present",
      location: "Remote",
      highlights: ["Created 100+ quantitative financial models", "Analyzed 120,000+ financial data fields"]
    },
    {
      title: "Junior Research Assistant (QA)",
      company: "NUS TeleHealthCore",
      timePeriod: "Sep 2024 - Present",
      location: "Singapore",
      highlights: ["Built full-stack app with React & Express.js", "Developed Playwright testing framework"]
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <h1 className="text-4xl font-bold text-primary text-center md:text-left">
          Work Experience
        </h1>
        <div className="flex-1 max-w-2xl">
          {experiences.map((experience, i) => (
            <div key={i} className="relative">
              {i > 0 && (
                <div className="absolute left-4 -top-6 h-6 w-px bg-gray-300 dark:bg-gray-600" />
              )}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  {experience.title}
                </h2>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <span className="flex items-center gap-2">
                    <Icon icon="majesticons:suitcase" className="w-5 h-5 text-primary" />
                    {experience.company}
                  </span>
                  <span className="flex items-center gap-2">
                    <Icon icon="tabler:calendar-filled" className="w-5 h-5 text-primary" />
                    {experience.timePeriod}
                  </span>
                  <span className="flex items-center gap-2">
                    <Icon icon="carbon:location-filled" className="w-5 h-5 text-primary" />
                    {experience.location}
                  </span>
                  <ul className="mt-4 space-y-2">
                    {experience.highlights.map((highlight, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "Student Hub Singapore",
      description: "Full-stack academic forum platform using React, TypeScript, Go, and PostgreSQL. Features secure authentication with JWT tokens and bcrypt, integrated with Supabase for database management. Built responsive UI using Tailwind CSS and Framer Motion. Deployed on Vercel with automated CI/CD pipeline, achieving 99% uptime.",
      link: "https://student-hub-frontend.vercel.app/",
      type: "Full Stack",
      icon: "logos:react"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-primary text-center mb-12">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-3 mb-4">
              <Icon className="w-8 h-8" icon={project.icon} />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                {project.title}
              </h2>
              <span className="ml-auto px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                {project.type}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              className="btn btn-primary"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Technologies() {
  const technologies = [
    "logos:react",
    "logos:typescript-icon",
    "logos:go",
    "logos:postgresql",
    "logos:express",
    "logos:tailwindcss-icon",
    "logos:playwright",
    "logos:selenium",
    "logos:supabase-icon",
    "logos:framer",
    "logos:jwt-icon",
    "logos:vercel-icon"
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-primary text-center mb-12">
        Technologies
      </h1>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg max-w-3xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((technology, i) => (
            <div
              key={i}
              className="group relative flex items-center justify-center w-16 h-16 transform transition-all duration-300 hover:scale-110 hover:z-10"
            >
              <Icon className="w-12 h-12" icon={technology} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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