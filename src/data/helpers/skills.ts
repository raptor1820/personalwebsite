import createSkillFactory from "@/data/_internals/create-skill-factory";

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const apolloGraphql = createSkillFactory({
    name: "Apollo GraphQL",
    icon: "simple-icons:apollographql",
    iconColor: "#311C87",
    url: "https://www.apollographql.com/",
});

export const astro = createSkillFactory({
    name: "Astro",
    icon: "simple-icons:astro",
    iconColor: "#FF5D01",
    url: "https://astro.build/",
});

export const chakraUi = createSkillFactory({
    name: "Chakra UI",
    icon: "simple-icons:chakraui",
    iconColor: "#319795",
    url: "https://chakra-ui.com/",
});

export const cypress = createSkillFactory({
    name: "Cypress",
    icon: "simple-icons:cypress",
    iconColor: "#17202C",
    url: "https://www.cypress.io/",
});

export const eslint = createSkillFactory({
    name: "ESLint",
    icon: "simple-icons:eslint",
    iconColor: "#4B32C3",
    url: "https://eslint.org/",
});

export const firebase = createSkillFactory({
    name: "Firebase",
    icon: "simple-icons:firebase",
    iconColor: "#FFCA28",
    url: "https://firebase.google.com/",
});

export const jest = createSkillFactory({
    name: "Jest",
    icon: "simple-icons:jest",
    iconColor: "#C21325",
    url: "https://jestjs.io/",
});

export const mongoDb = createSkillFactory({
    name: "MongoDB",
    icon: "simple-icons:mongodb",
    iconColor: "#47A248",
    url: "https://www.mongodb.com/",
});

export const nestJs = createSkillFactory({
    name: "NestJS",
    icon: "simple-icons:nestjs",
    iconColor: "#E0234E",
    url: "https://nestjs.com/",
});

export const nextJs = createSkillFactory({
    name: "Next.js",
    icon: "simple-icons:nextdotjs",
    iconColor: "#000000",
    url: "https://nextjs.org/",
});

export const nx = createSkillFactory({
    name: "Nx",
    icon: "simple-icons:nx",
    iconColor: "#143055",
    url: "https://nx.dev/",
});

export const pnpm = createSkillFactory({
    name: "pnpm",
    icon: "simple-icons:pnpm",
    iconColor: "#F69220",
    url: "https://pnpm.io/",
});

export const postgreSql = createSkillFactory({
    name: "PostgreSQL",
    icon: "simple-icons:postgresql",
    iconColor: "#4169E1",
    url: "https://www.postgresql.org/",
});

export const prettier = createSkillFactory({
    name: "Prettier",
    icon: "simple-icons:prettier",
    iconColor: "#F7B93E",
    url: "https://prettier.io/",
});

export const react = createSkillFactory({
    name: "React.js",
    icon: "simple-icons:react",
    iconColor: "#61DAFB",
    url: "https://reactjs.org/",
});

export const reactQuery = createSkillFactory({
    name: "React Query",
    icon: "simple-icons:reactquery",
    iconColor: "#FF4154",
    url: "https://tanstack.com/query",
});

export const sass = createSkillFactory({
    name: "SASS",
    icon: "simple-icons:sass",
    iconColor: "#CC6699",
    url: "https://sass-lang.com/",
});

export const supabase = createSkillFactory({
    name: "Supabase",
    icon: "simple-icons:supabase",
    iconColor: "#3ECF8E",
    url: "https://supabase.io/",
});

export const tailwindCss = createSkillFactory({
    name: "Tailwind CSS",
    icon: "simple-icons:tailwindcss",
    iconColor: "#06B6D4",
    url: "https://tailwindcss.com/",
});

export const typescript = createSkillFactory({
    name: "TypeScript",
    icon: "simple-icons:typescript",
    iconColor: "#3178C6",
    url: "https://www.typescriptlang.org/",
});

export const vue = createSkillFactory({
    name: "Vue.js",
    icon: "simple-icons:vuedotjs",
    iconColor: "#4FC08D",
    url: "https://vuejs.org/",
});

export const svelte = createSkillFactory({
    name: "Svelte",
    icon: "simple-icons:svelte",
    iconColor: "#FF3E00",
    url: "https://svelte.dev/",
});
export const javascript = createSkillFactory({
    name: "JavaScript",
    icon: "simple-icons:javascript",
    iconColor: "#F7DF1E",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
});
export const express = createSkillFactory({
    name: "Express.js",
    icon: "simple-icons:express",
    iconColor: "#000000",
    url: "https://expressjs.com/",
});
export const python = createSkillFactory({
    name: "Python",
    icon: "simple-icons:python",
    iconColor: "#3776AB",
    url: "https://www.python.org/",
});
export const node = createSkillFactory({
    name: "Node.js",
    icon: "simple-icons:nodedotjs",
    iconColor: "#339933",
    url: "https://nodejs.org/",
});
export const rust = createSkillFactory({
    name: "Rust",
    icon: "simple-icons:rust",
    iconColor: "#000000",
    url: "https://www.rust-lang.org/",
});
export const aws = createSkillFactory({
    name: "Amazon Web Services",
    icon: "simple-icons:amazonaws",
    iconColor: "#232F3E",
    url: "https://aws.amazon.com/",
});
export const vercel = createSkillFactory({
    name: "Vercel",
    icon: "simple-icons:vercel",
    iconColor: "#000000",
    url: "https://vercel.com/",
});
export const heroku = createSkillFactory({
    name: "Heroku",
    icon: "simple-icons:heroku",
    iconColor: "#430098",
    url: "https://www.heroku.com/",
});
export const netlify = createSkillFactory({
    name: "Netlify",
    icon: "simple-icons:netlify",
    iconColor: "#00C7B7",
    url: "https://www.netlify.com/",
});
export const flask = createSkillFactory({
    name: "Flask",
    icon: "simple-icons:flask",
    iconColor: "#000000",
    url: "https://flask.palletsprojects.com/",
});
export const squarespaceAPI = createSkillFactory({
    name: "Squarespace API",
    icon: "simple-icons:squarespace",
    iconColor: "#000000",
    url: "https://developers.squarespace.com/",
});
export const ejs = createSkillFactory({
    name: "EJS",
    icon: "simple-icons:html5",
    iconColor: "#000000",
    url: "https://ejs.co/",
});
export const html = createSkillFactory({
    name: "HTML",
    icon: "simple-icons:html5",
    iconColor: "#E34F26",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
});
export const css = createSkillFactory({
    name: "CSS",
    icon: "simple-icons:css3",
    iconColor: "#1572B6",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
});
export const openai = createSkillFactory({
    name: "OpenAI API",
    icon: "simple-icons:openai",
    iconColor: "#000000",
    url: "https://openai.com/",
});
export const llm = createSkillFactory({
    name: "LLMs",
    icon: "simple-icons:openai",
    iconColor: "#000000",
    url: "https://openai.com/",
});
