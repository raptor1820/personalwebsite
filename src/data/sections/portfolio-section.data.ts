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
      - Recognized as Young Changemakers at the Global Bio India summit 2023, hosted by the Dept. of Biotechnology, Govt. of India.`,
            tagsList: {
                title: "Technologies",
                tags: [react(), tailwindCss(), express(), mongoDb(), node()],
            },
            links: [github({ url: "https://github.com/tsrsmict/CortX" })],
        },
        {
            name: "Email.ext",
            image: import("@/assets/portfolio/emailext.png"),
            dates: [new Date("2018-01"), new Date("2020-12")],
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
