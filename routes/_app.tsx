import { type PageProps } from "$fresh/server.ts";
import AppBar from "../islands/AppBar.tsx";
import { Icon } from "@iconify-icon/react";

function MetaTags(
  { credentials, url }: { credentials: { name: string }; url: string },
) {
  return (
    <>
      {/* Primary Meta Tags */}
      <title>
        ${credentials.name} - Developer's Codefolio
      </title>
      <meta
        name="title"
        content={`${credentials.name} - Developer's Codefolio`}
      />
      <meta
        name="description"
        content={`My name is Pham Hai Minh. Explore my portfolio showcasing a diverse range of web development projects. Specializing in full-stack development with expertise in JavaScript, React, Node.js, and more. Discover how I can bring your web vision to life.`}
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${url}`} />
      <meta
        property="og:title"
        content={`${credentials.name} - Developer's Codefolio`}
      />
      <meta
        property="og:description"
        content={`My name is Pham Hai Minh. Explore my portfolio showcasing a diverse range of web development projects. Specializing in full-stack development with expertise in JavaScript, React, Node.js, and more. Discover how I can bring your web vision to life.`}
      />
      <meta
        property="og:image"
        content={`${url}meta-image.webp`}
      />
    </>
  );
}

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
  ];

  const credentials = {
    name: "Pham Hai Minh",
  };

  const url = "https://opensource-portfolio.deno.dev/";

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <MetaTags credentials={credentials} url={url} />
        <title>Developer Portfolio | {credentials.name}</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="min-h-screen flex flex-col max-w-screen-xl mx-auto">
        <header>
          <AppBar />
        </header>
        <main>
          <Component />
        </main>
        <footer class="mt-auto footer w-auto m-2 p-4 bg-neutral text-neutral-content rounded-lg">
          <p class="text-center">
            Redesigned by {credentials.name}
          </p>
          <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            {socials.map((social) => (
              <a
                href={social.url}
                target="_blank"
                aria-label={social.name}
              >
                <Icon icon={social.icon} width="24" height="24" />
              </a>
            ))}
          </nav>
        </footer>
      </body>
    </html>
  );
}
