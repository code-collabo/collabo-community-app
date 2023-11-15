import { capitalizeAllFirstLetters, stringToUrlStart } from '@/apps/shared/helpers/transform';

const appName = 'collabo community';

const urlStart = stringToUrlStart(appName.replace('collabo ', ''));

const page = {
  1: 'home',
  2: '404',
};

const appInfo: any = {
  id: 1,
  name: capitalizeAllFirstLetters(appName),
  pages: {
    1: {
      name: page[1],
      route: `${urlStart}/${page[1]}`,
    },
    2: {
      name: page[2],
      route: `${urlStart}/${page[2]}`,
    },
  },
};

export {
  appInfo,
  urlStart,
};
