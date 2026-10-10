// All of your personal content lives here. Edit this file and the whole site updates.

export const profile = {
  name: "Hamza Shabbir Rajput",
  short: "Hamza",
  title: "IT undergraduate at University of Gujrat",
  // This is your own GitHub bio. Replace it with a line in your own voice whenever you like.
  tagline:
    "Passionate about practical coding, cybersecurity, and solving real-world tech problems.",
  about: [
    "I'm an Information Technology student at University of Gujrat, currently in my 5th semester, building one small project at a time.",
    // TODO: add one or two sentences in your own words: what got you into IT, what you want to do next.
    "I like practical coding and I'm curious about cybersecurity. I learn best by building things, and my GitHub shows where I am right now.",
    "Beyond code, I’m known for my love of chess, where strategy sharpens my problem‑solving, and public speaking, where I bring clarity and confidence to ideas. Whether it’s designing smooth UIs or tackling algorithms in DSA, I thrive on blending creativity with logic to craft solutions that make an impact."
  ],
  tags: ["5th semester, IT", "University of Gujrat", "Cybersecurity curious"],
};

// Headline block at the top of the page.
export const hero = {
  eyebrow: "Hamza Shabbir Rajput, IT undergraduate",
  headline: "Building useful things for the web.",
  intro:
      "“Strategist at the chessboard, storyteller on stage, and creator through code.”",
    // I'm a 5th-semester IT student at University of Gujrat. Python, C++, JavaScript and React, one small project at a time.
};

// Add a photo at public/portrait.jpg (plain background works best), then change this to "/portrait.jpg".
export const portrait: string | null = "/portrait.jpg";

export const skills = [
  { group: "Languages", items: ["C++", "C#", "Python", "JavaScript", "TypeScript", "HTML5", "CSS3", "SQL", ] },
  { group: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap", "Vite", "Vercel", ] },
  { group: "Tools", items: ["Git & GitHub", "VS Code", "n8n", "Google Cloud", "Anaconda", "Figma", "Canva",] },
];

export const categories = ["Web", "Python", "C++"];

export type Project = {
  name: string;
  description: string;
  language: string;
  category: string;
  github: string;
  demo?: string;
};

// TODO: check each description and rewrite it in one sentence about what it really does.
export const projects: Project[] = [
  {
    name: "Face_Recognition",
    description: "A face recognition project written in Python.",
    language: "Python",
    category: "Python",
    github: "https://github.com/hamzadev92/Face_Recognition",
  },
  {
    name: "Module5-solution",
    description: "Final assignment for a Coursera HTML, CSS, and JavaScript course.",
    language: "JavaScript",
    category: "Web",
    github: "https://github.com/hamzadev92/Module5-solution",
  },
  {
    name: "JavaScriptSolution",
    description: "My solutions for JavaScript coursework.",
    language: "CSS",
    category: "Web",
    github: "https://github.com/hamzadev92/JavaScriptSolution",
  },
  {
    name: "StudentProjects",
    description: "A collection of my C++ student projects.",
    language: "C++",
    category: "C++",
    github: "https://github.com/hamzadev92/StudentProjects",
  },
];

// One small project a day. When a build is finished, set status to "Done" and add its repo link.
export type DailyBuild = {
  status: "Done" | "Next up" | "Planned";
  name: string;
  stack: string;
  repo?: string;
};

export const dailyBuilds: DailyBuild[] = [
  { status: "Next up", name: "CGPA calculator", stack: "HTML, CSS, JavaScript" },
  { status: "Planned", name: "To-do list", stack: "JavaScript, localStorage" },
  { status: "Planned", name: "Password strength checker", stack: "JavaScript, security basics" },
];

export const contact = {
  email: "hamzashabbirrajput@gmail.com",
  whatsapp: "923460019857", // international format, no + or spaces
  whatsappDisplay: "0346 0019857",
  github: "https://github.com/hamzadev92",
  location: "Gujrat, Pakistan",
};
