import type { PortfolioSection } from "@/types/sections/portfolio-section.types";
import type { ReadonlyDeep } from "type-fest";
import { demo, github, mockups, website } from "../helpers/links";
import {
    react,
    tailwindCss,
    flask,
    html,
    css,
    javascript,
    express,
    mongoDb,
    node,
    openai,
    astro,
    llm,
    typescript,
} from "../helpers/skills";

const portfolioSectionData = {
    config: {
        title: "Projects",
        slug: "projects",
        icon: "fa6-solid:rocket",
        visible: true,
        screenshots: {
            title: "Screenshots",
            icon: "fa6-solid:images",
        },
    },
    projects: [
        {
            name: "ValuAI",
            dates: [new Date("2025-02"), new Date("2025-02")],
            details: [
                { label: "My role", value: ["Full-stack Developer"] },
                { label: "Category", value: ["Web app"] },
            ],
            description: `
        - Built a React + TypeScript + Tailwind frontend integrated with a Flask backend for real-time claim validation.
        - Developed multimodal AI verification using Gemini Flash 2.0 & Llama 3 for fraud detection in insurance claims.
        - Ensured seamless UI/UX for insurers & homeowners, reducing claim verification time significantly.`,
            tagsList: {
                title: "Technologies",
                tags: [react(), typescript(), tailwindCss(), flask()],
            },
            links: [
                github({ url: "https://github.com/adityasht/hacklytics25" }),
                website({ url: "https://devpost.com/software/valuai" }),
            ],
        },
        {
            name: "MedEase: AI-Assisted Diagnostic Workflow",
            dates: [new Date("2024-09"), new Date("2024-09")],
            details: [
                { label: "My role", value: ["Team member"] },
                { label: "Category", value: ["Web app"] },
            ],
            description: `
        - Developed a web app designed to streamline the documentation process for doctors and nurses, letting them focus more on patient care.
        - Used RAG LLMs to generate summaries of patient reports and suggest diagnoses.
        - Stored vector embeddings for the RAG LLMs in a MongoDB database.
        - Won 'Best Overall Implementation of MongoDB at HackGT 11.`,
            tagsList: {
                title: "Technologies",
                tags: [
                    mongoDb(),
                    flask(),
                    astro(),
                    openai(),
                    llm(),
                    tailwindCss(),
                ],
            },
            links: [
                github({
                    url: "https://github.com/1129Chengyuan/EMR-Automatic/",
                }),
                website({
                    url: "https://devpost.com/software/medease-ai-assisted-diagnostic-workflow",
                }),
            ],
        },
        {
            name: "Bubble Burst!",
            image: import("@/assets/portfolio/bubblelogo.png"),
            dates: [new Date("2020-05"), null],
            details: [
                { label: "My role", value: ["Sole developer"] },
                { label: "Category", value: ["Website, Chrome Extension"] },
            ],
            screenshots: [
                {
                    src: import("@/assets/portfolio/bubblescreenshot1.png"),
                    alt: "First screenshot",
                },
                {
                    src: import("@/assets/portfolio/bubblescreenshot2.png"),
                    alt: "Second screenshot",
                },
                {
                    src: import("@/assets/portfolio/toi.jpg"),
                    alt: "Third screenshot",
                },
            ],
            description: `
        - Built a REST API to recommend news articles having an opposing viewpoint on the same topic as the current article. 
        - Implemented on the frontend in the form of a Chrome extension and a website.
        - Featured in the Times of India. `,
            tagsList: {
                title: "Technologies",
                tags: [flask(), html(), css(), javascript()],
            },
            links: [
                github({ url: "https://github.com/raptor1820/Bubble-Burst" }),
                website({ url: "https://bubbleburst.ritwic.com" }),
                website({
                    url: "https://chromewebstore.google.com/detail/bubble-burst/gkhmlcaflnhgpdbjoancilhdngflcidn",
                }),
            ],
        },
        {
            name: "CortX",
            image: import("@/assets/portfolio/cortxlogo.png"),
            dates: [new Date("2022-08"), null],
            details: [
                { label: "Team size", value: "5 people" },
                { label: "My role", value: ["Back-end Developer"] },
                { label: "Category", value: ["Web app"] },
            ],
            description: `
      - Developed a web app that helps users track medical reports and extracts actionable insights using OCR.
      - Won First place at ShriTeq 2022 Hackathon.
      - Invited by Tata1Mg to present the project to their team.
      - Recognized as Young Changemakers at the Global Bio India Summit 2023, hosted by the Dept. of Biotechnology, Govt. of India.`,
            tagsList: {
                title: "Technologies",
                tags: [react(), tailwindCss(), express(), mongoDb(), node()],
            },
            links: [github({ url: "https://github.com/tsrsmict/CortX" })],
        },
        {
            name: "Email.ext",
            image: import("@/assets/portfolio/emailext.png"),
            dates: [new Date("2023-01"), new Date("2023-01")],
            details: [
                { label: "Team size", value: "3 people" },
                { label: "My role", value: ["Back-end Developer", "Designer"] },
                { label: "Category", value: ["Chrome extension"] },
            ],
            description:
                "Developed a Chrome extension that uses NLP to summarize emails and suggest replies.",
            tagsList: {
                title: "Technologies",
                tags: [flask(), react(), openai()],
            },
            links: [github({ url: "https://github.com/tsrsmict/email.ext" })],
        },
    ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
