import type { FavoritesSection } from '@/types/sections/favorites-section.types';
import type { ReadonlyDeep } from 'type-fest';

const favoritesSectionData = {
  config: {
    title: 'My favorites',
    slug: 'favorites',
    icon: 'fa6-solid:star',
    visible: true,
  },
  medias: {
    title: 'Media I follow',
    data: [
      // {
      //   image: import('@/assets/favorites/media/media-1.jpeg'),
      //   title: 'Fireship.io',
      //   type: 'YouTube channel',
      //   url: 'https://www.youtube.com/c/Fireship',
      // },
    ],
  },
} as const satisfies ReadonlyDeep<FavoritesSection>;

export default favoritesSectionData;
