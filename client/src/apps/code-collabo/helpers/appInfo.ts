import { capitalizeAllFirstLetters, stringToUrlStart } from '@/apps/shared/helpers/transform';

const appName = 'code collabo';

const urlStart = stringToUrlStart(appName);

const page = {
  1: 'overview',
  2: 'projects',
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
  }
};

export {
  appInfo,
  urlStart,
};
