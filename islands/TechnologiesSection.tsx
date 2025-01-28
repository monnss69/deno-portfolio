// islands/TechnologiesSection.tsx
import { useState } from "preact/hooks";
import { Icon } from "@iconify-icon/react";

export default function TechnologiesSection() {
  const [activeTab, setActiveTab] = useState('development');

  const skillCategories = {
    development: {
      title: "Development",
      description: "Full-stack development technologies and frameworks",
      skills: [
        {
          name: "Frontend",
          items: [
            { name: "React", icon: "logos:react" },
            { name: "TypeScript", icon: "logos:typescript-icon" },
            { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
            { name: "Framer Motion", icon: "logos:framer" }
          ]
        },
        {
          name: "Backend",
          items: [
            { name: "Go", icon: "logos:go" },
            { name: "Express.js", icon: "logos:express" },
            { name: "PostgreSQL", icon: "logos:postgresql" },
            { name: "Node.js", icon: "logos:nodejs" }
          ]
        }
      ]
    },
    analysis: {
      title: "Analysis & Research",
      description: "Quantitative analysis and research tools",
      skills: [
        {
          name: "Data Analysis",
          items: [
            { name: "Python", icon: "logos:python" },
            { name: "Pandas", icon: "logos:pandas" },
            { name: "NumPy", icon: "logos:numpy" },
            { name: "Jupyter", icon: "logos:jupyter" }
          ]
        },
        {
          name: "Financial",
          items: [
            { name: "WorldQuant", icon: "carbon:chart-line" },
            { name: "Quantitative", icon: "carbon:model" },
            { name: "Risk Analysis", icon: "carbon:analytics" },
            { name: "Financial Modeling", icon: "carbon:finance" }
          ]
        }
      ]
    },
    tools: {
      title: "Tools & Practices",
      description: "Development tools and methodologies",
      skills: [
        {
          name: "Testing & DevOps",
          items: [
            { name: "Playwright", icon: "logos:playwright" },
            { name: "Git", icon: "logos:git" },
            { name: "Docker", icon: "logos:docker" },
            { name: "CI/CD", icon: "logos:github-actions" }
          ]
        },
        {
          name: "Development",
          items: [
            { name: "VS Code", icon: "logos:visual-studio-code" },
            { name: "Vercel", icon: "logos:vercel" },
            { name: "Postman", icon: "logos:postman" },
            { name: "Figma", icon: "logos:figma" }
          ]
        }
      ]
    }
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-primary text-center mb-12">
        Skills & Technologies
      </h2>

      {/* Category Tabs */}
      <div className="flex justify-center gap-4 mb-12">
        {Object.entries(skillCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300
              ${activeTab === key 
                ? 'bg-primary text-white shadow-lg' 
                : 'bg-base-200 text-gray-400 hover:bg-base-300'}`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Active Category Content */}
      <div className="max-w-5xl mx-auto">
        <p className="text-gray-300 text-center mb-8">
          {skillCategories[activeTab].description}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories[activeTab].skills.map((skillGroup, i) => (
            <div key={i} className="space-y-6">
              <h3 className="text-xl font-bold text-gray-200 mb-4">
                {skillGroup.name}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skillGroup.items.map((skill, j) => (
                  <div 
                    key={j} 
                    className="bg-base-200 p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-base-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-base-300 rounded-lg">
                        <Icon icon={skill.icon} className="w-6 h-6" />
                      </div>
                      <span className="text-gray-200 font-medium">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}