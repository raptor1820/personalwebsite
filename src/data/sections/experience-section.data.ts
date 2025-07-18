import type { ExperienceSection } from "@/types/sections/experience-section.types";
import type { ReadonlyDeep } from "type-fest";
import {
    facebook,
    github,
    instagram,
    linkedin,
    twitter,
    website,
} from "../helpers/links";
import {
    firebase,
    tailwindCss,
    astro,
    vercel,
    netlify,
    heroku,
    flask,
    express,
    mongoDb,
    squarespaceAPI,
    ejs,
} from "../helpers/skills";

const experienceSectionData = {
    config: {
        title: "Experience",
        slug: "experience",
        icon: "fa6-solid:suitcase",
        visible: true,
    },
    jobs: [
        {
            role: "Undergraduate Teaching Assistant: CS 2050 - Intro to Discete Mathematics",
            company: "Georgia Institute of Technology",
            image: import("@/assets/logos/gatec.png"),
            dates: [new Date("2025-05")],
            description: `
        - Supported students in mastering foundational topics like logic, proofs, set theory and number theory
        - Held weekly office hours to improve student performance and engagement
        - Collaborated with professors and TAs to grade assignments and exams with speed and consistency
      `,
            links: [],
            tagsList: {
                title: "",
                tags: [],
            },
        },
        {
            role: "Tech Lead",
            company: "Amarii",
            image: import("@/assets/logos/amarii.png"),
            dates: [new Date("2022-06"), new Date("2023-10")],
            description: `
        - Developed an inventory management portal that interacted with the Squarespace API to directly push products to the storefront. 
        - Value of artwork processed: ~10k USD
      `,
            tagsList: {
                title: "Technologies",
                tags: [express(), mongoDb(), heroku(), ejs(), squarespaceAPI()],
            },
            links: [github({ url: "https://github.com/raptor1820/Amarii" })],
        },
        {
            role: "Head of ICT, Student Council",
            company: "TSRS",
            image: import("@/assets/logos/tsrs.png"),
            dates: [new Date("2022-12"), new Date("2024-01")],
            description: `
        - <strong>ShriTeq</strong>: led a team to organize the school's tech symposum with 1000+ participants and 10 events. Coded a website for the event which got 15k+ views.
        - co-organized the school's first-ever AI Week in 2023. Built 10+ installations to enable students to engage constructively with emerging AI technologies (such as voice cloning)
        - co-designed and co-developed the website for the Megabyte Society (tsrsmegabyte.com) using Astro + Tailwind
        - selected and mentored teams for 15+ inter-school, national, and international tech competitions
      `,
            tagsList: {
                title: "Technologies",
                tags: [
                    astro(),
                    tailwindCss(),
                    flask(),
                    firebase(),
                    vercel(),
                    netlify(),
                ],
            },
            links: [
                website({ url: "https://shriteq.org" }),
                website({ url: "https://tsrsmegabyte.com" }),
                github({ url: "https://github.com/tsrsmict" }),
            ],
        },
    ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
