import type { MainSection } from "@/types/sections/main-section.types";
import type { ReadonlyDeep } from "type-fest";
import { github, linkedin } from "../helpers/links";

const mainSectionData = {
    config: {
        icon: "fa6-solid:user",
        title: "Profile",
        slug: "profile",
        visible: true,
    },
    image: import("@/assets/ritwicportrait.png"),
    fullName: "Ritwic Verma",
    role: "Computer Science Student",
    details: [
        {
            label: "Email",
            value: "ritwicverma@gmail.com",
            url: "mailto:ritwicverma@gmail.com",
        },
        { label: "From", value: "New Delhi, India" },
        // {
        //   label: 'Currently Listennig to:',
        //   value: 'The Weeknd',
        //   url: 'https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ?si=5e7b1b1b3b7b4b1b',
        // },
    ],
    pdfDetails: [
        { label: "Email", value: "ritwicverma@gmail.com" },
        {
            label: "LinkedIn",
            value: "ritwicverma",
            url: "https://linkedin.com/in/ritwicverma",
        },
        {
            label: "GitHub",
            value: "raptor1820",
            url: "https://github.com/raptor1820",
        },
        {
            label: "Website",
            value: "ritwic.com",
            url: "https://ritwic.com",
            fullRow: true,
        },
    ],
    description: `Hi! I am Ritwic, a Computer Science major at Georgia Tech. I love to build things and learn new technologies. I am always looking for opportunities to grow and learn. I love watching football (soccer), playing video games and reading books. Feel free to reach out to me!`,
    tags: [],
    // action: {
    //   label: 'Download CV',
    //   url: '/cv.pdf',
    //   downloadedFileName: 'CV-Ritwic_Verma.pdf',
    // },

    links: [
        github({ url: "https://github.com/raptor1820" }),
        linkedin({ url: "https://linkedin.com/in/ritwicverma" }),
    ],
} as const satisfies ReadonlyDeep<MainSection>;
export default mainSectionData;
