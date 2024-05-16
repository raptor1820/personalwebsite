import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  astro,
  firebase,
  mongoDb,
  pnpm,
  react,
  tailwindCss,
  typescript,
  svelte,
  javascript,
  express,
  python,
  node,
  rust,
  aws,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        javascript({ level: 4 }),
        node({ level: 4 }),
        python({ level: 4 }),
        express({ level: 4 }),
        astro({ level: 4 }),
        svelte({ level: 3 }),
        mongoDb({ level: 3 }),
        tailwindCss({ level: 2 }),
        react({ level: 2 }),
        firebase({ level: 2 }),
        pnpm({ level: 3 }),
      ],
    },
    {
      title: 'I am learning',
      skills: [rust(), typescript(), aws()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:us', name: 'English' },
        { icon: 'circle-flags:in', name: 'Hindi' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
