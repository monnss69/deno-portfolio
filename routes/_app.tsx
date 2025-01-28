// routes/_app.tsx
import { type PageProps } from "$fresh/server.ts";
import AppBar from "../islands/AppBar.tsx";
import { Icon } from "@iconify-icon/react";

export default function App({ Component }: PageProps) {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/monnss69",
      icon: "fa-brands:github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ph%E1%BA%A1m-h%E1%BA%A3i-minh-74950829b/",
      icon: "fa-brands:linkedin",
    },
    {
      name: "Email",
      url: "mailto:e1375556@u.nus.edu",
      icon: "fa-regular:envelope",
    }
  ];

  const credentials = {
    name: "Pham Hai Minh",
    title: "Full Stack Developer & Quantitative Analyst",
    email: "e1375556@u.nus.edu",
    location: "Singapore",
  };

  return (
    <html lang="en" data-theme="modern">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{credentials.name} - {credentials.title}</title>
        <meta
          name="description"
          content="Computer Science student at NUS specializing in full-stack development and quantitative analysis. Experience in healthcare tech and financial modeling."
        />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-base-100 to-base-200">
        <header className="sticky top-0 z-50 backdrop-blur-sm bg-base-100/80 border-b border-base-200">
          <AppBar />
        </header>
        
        <main className="flex-1">
          <Component />
        </main>
        
        <footer className="bg-neutral text-neutral-content mt-auto">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold">{credentials.name}</h3>
                <p className="text-sm opacity-75">{credentials.title}</p>
              </div>
              
              <div className="flex items-center gap-6">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <Icon icon={social.icon} className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="mt-8 pt-4 border-t border-neutral-content/20 text-center text-sm opacity-75">
              © {new Date().getFullYear()} {credentials.name}. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}