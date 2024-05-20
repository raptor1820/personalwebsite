import type { EducationSection } from "@/types/sections/education-section.types";
import type { ReadonlyDeep } from "type-fest";
import { website } from "../helpers/links";

const educationSectionData = {
    config: {
        title: "Education",
        slug: "education",
        icon: "fa6-solid:graduation-cap",
        visible: true,
    },
    diplomas: [
        {
            title: "BS in Computer Science",
            institution: "Georgia Institute of Technology",
            image: import("@/assets/logos/gatech.png"),
            dates: [new Date("2024.8"), new Date("2028.08")],
            description: "",
            links: [],
        },
        {
            title: "ICSE and ISC",
            institution: "The Shri Ram School, Moulsari",
            image: import("@/assets/logos/tsrs.png"),
            dates: [new Date("2019.4"), new Date("2024.03")],
            description:
                "ICSE: 99%, ISC: 98.25%, awarded Scholar of the Year for 4 consecutive years.",
            links: [
                website({
                    name: "Scores",
                    url: "https://https://drive.google.com/drive/folders/1fHQ0E7KBysXyoVibBVq_CAyFzyHS7JoV?usp=sharing",
                }),
            ],
        },
    ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
