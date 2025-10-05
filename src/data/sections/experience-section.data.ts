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
    react,
    typescript,
    gcp,
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
            role: "Developer",
            company: "Bits of Good",
            image: import("@/assets/logos/bog.jpeg"),
            dates: [new Date("2025-09")],
            description: `
        - Shipping features and maintaining GT Scheduler, a course planning app used by 30,000+ students for class scheduling.
        - Contributed to the React + TypeScript frontend, and resolved critical UI bugs impacting 1,000+ users.
        - Enhanced course data accuracy with a TypeScript + ANTLR web crawler, reducing user-reported issues by 20%.
        - Collaborated in an agile team with code reviews, sprint planning, and feature rollouts.
      `,
            links: [],
            tagsList: {
                title: "",
                tags: [react(), firebase(), typescript()],
            },
        },
        {
            role: "Undergraduate Teaching Assistant: CS 2050 - Intro to Discete Mathematics",
            company: "Georgia Institute of Technology",
            image: import("@/assets/logos/gatec.png"),
            dates: [new Date("2025-06")],
            description: `
        - Supporting a 500+ student course covering logic, proofs, set theory, and number theory.
        - Designed and administered weekly quizzes and collaborated with faculty and TAs to develop and refine grading rubrics, ensuring consistent and fair grading across 500+ assignments and exams per week
        - Mentored 100+ students through office hours, exam review sessions, and 1:1 guidance, leading to a 10~15% improvement in average grades.`,
            links: [],
            tagsList: {
                title: "",
                tags: [],
            },
        },
        {
            role: "Software Engineer Intern",
            company: "Amarii",
            image: import("@/assets/logos/amarii.png"),
            dates: [new Date("2022-06"), new Date("2023-10")],
            description: `
        - Developed and deployed a full-stack inventory management platform used by 50+ artists, integrating with the Squarespace API to streamline artwork submissions by cutting upload time by 70%
        - Built a backend using Express.js + MongoDB, and a responsive frontend with React, deploying on Google Cloud App Engine for scalability.
        - Facilitated the sale of $10,000+ worth of artwork, through this platform, directly contributing to Amarii’s mission of creating economic opportunities for underrepresented artists
        - Collaborated with non-profit leadership to gather requirements and implement features, working in an agile environment with end-to-end ownership of deliverables.
    `,
            tagsList: {
                title: "Technologies",
                tags: [
                    express(),
                    mongoDb(),
                    heroku(),
                    ejs(),
                    squarespaceAPI(),
                    gcp(),
                ],
            },
            links: [github({ url: "https://github.com/raptor1820/Amarii" })],
        },
        //     {
        //         role: "Head of ICT, Student Council",
        //         company: "TSRS",
        //         image: import("@/assets/logos/tsrs.png"),
        //         dates: [new Date("2022-12"), new Date("2024-01")],
        //         description: `
        //     - <strong>ShriTeq</strong>: led a team to organize the school's tech symposum with 1000+ participants and 10 events. Coded a website for the event which got 15k+ views.
        //     - co-organized the school's first-ever AI Week in 2023. Built 10+ installations to enable students to engage constructively with emerging AI technologies (such as voice cloning)
        //     - co-designed and co-developed the website for the Megabyte Society (tsrsmegabyte.com) using Astro + Tailwind
        //     - selected and mentored teams for 15+ inter-school, national, and international tech competitions
        //   `,
        //         tagsList: {
        //             title: "Technologies",
        //             tags: [
        //                 astro(),
        //                 tailwindCss(),
        //                 flask(),
        //                 firebase(),
        //                 vercel(),
        //                 netlify(),
        //             ],
        //         },
        //         links: [
        //             website({ url: "https://shriteq.org" }),
        //             website({ url: "https://tsrsmegabyte.com" }),
        //             github({ url: "https://github.com/tsrsmict" }),
        //         ],
        //     },
    ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
