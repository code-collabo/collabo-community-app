import { capitalizeAllFirstLetters, stringToUrlStart } from '@/apps/shared/helpers/transform';

const appName = 'other subcommunity';

const urlStart = stringToUrlStart(appName);

const page = {
  1: 'overview',
};

const appInfo: any = {
  id: 1,
  name: capitalizeAllFirstLetters(appName),
  pages: {
    1: {
      name: page[1],
      route: `${urlStart}/${page[1]}`,
    },
  }
};

export {
  appInfo,
  urlStart,
};
