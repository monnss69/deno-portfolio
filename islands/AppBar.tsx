import { Icon, loadIcon } from "@iconify-icon/react";
import axios from "axios";
import { useEffect, useState } from "preact/hooks";

// preload icons
loadIcon("fa6-brands:dev");
loadIcon("ri:dice-line");

function toggleTheme() {
  const html = document.querySelector("html");
  const theme = html?.getAttribute("data-theme");
  const newTheme = theme === "modern" ? "light" : "modern";
  html?.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}
export default function AppBar() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "modern";
    document.querySelector("html")?.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <nav class="flex justify-between items-center p-2">
      <a href="/" class="text-xl font-bold flex items-center">
        <Icon
          icon="fa6-brands:dev"
          width="none"
          height="none"
        />
        Portfolio
      </a>
      <ul class="flex gap-2">
        <li>
          <a
            class="btn btn-primary text-base-100"
            href="/cv.pdf"
            download
          >
            Download CV
          </a>
        </li>
        <li>
          <button
            class="btn"
            aria-label="change Theme"
            onClick={toggleTheme}
          >
            <Icon
              class="active:animate-spin"
              icon="ri:dice-line"
              width="none"
              height="none"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
}
