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
            { name: "React", level: 90, icon: "logos:react" },
            { name: "TypeScript", level: 85, icon: "logos:typescript-icon" },
            { name: "Tailwind CSS", level: 90, icon: "logos:tailwindcss-icon" },
            { name: "Framer Motion", level: 80, icon: "logos:framer" }
          ]
        },
        {
          name: "Backend",
          items: [
            { name: "Go", level: 85, icon: "logos:go" },
            { name: "Express.js", level: 85, icon: "logos:express" },
            { name: "PostgreSQL", level: 80, icon: "logos:postgresql" },
            { name: "Node.js", level: 85, icon: "logos:nodejs" }
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
            { name: "Python", level: 90, icon: "logos:python" },
            { name: "Pandas", level: 85, icon: "logos:pandas" },
            { name: "NumPy", level: 80, icon: "logos:numpy" },
            { name: "Jupyter", level: 85, icon: "logos:jupyter" }
          ]
        },
        {
          name: "Financial",
          items: [
            { name: "WorldQuant", level: 85, icon: "carbon:chart-line" },
            { name: "Quantitative", level: 80, icon: "carbon:model" },
            { name: "Risk Analysis", level: 75, icon: "carbon:analytics" },
            { name: "Financial Modeling", level: 80, icon: "carbon:finance" }
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
            { name: "Playwright", level: 85, icon: "logos:playwright" },
            { name: "Git", level: 90, icon: "logos:git" },
            { name: "Docker", level: 75, icon: "logos:docker" },
            { name: "CI/CD", level: 80, icon: "logos:github-actions" }
          ]
        },
        {
          name: "Development",
          items: [
            { name: "VS Code", level: 90, icon: "logos:visual-studio-code" },
            { name: "Vercel", level: 85, icon: "logos:vercel" },
            { name: "Postman", level: 80, icon: "logos:postman" },
            { name: "Figma", level: 75, icon: "logos:figma" }
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
              <div className="space-y-4">
                {skillGroup.items.map((skill, j) => (
                  <div key={j} className="bg-base-200 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon icon={skill.icon} className="w-6 h-6" />
                      <span className="text-gray-200 font-medium">
                        {skill.name}
                      </span>
                      <span className="ml-auto text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-base-300 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
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