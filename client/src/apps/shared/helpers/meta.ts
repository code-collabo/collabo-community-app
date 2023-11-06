import { appInfo } from '@/apps/code-collabo/helpers/appInfo';
import { capitalizeAllFirstLetters } from './transform';

const toPageTitle = (pageName: string, appName: string) => { //not exported only used in this file for now
    return `${pageName} | ${appName}`;
};

const getPage = (pathname: string, urlStart: string) => {
    const thisPage = capitalizeAllFirstLetters(pathname.replace(`${urlStart}/`, ''))
    const pageTitle = toPageTitle(thisPage, appInfo.name);
    return {
        thisPage,
        pageTitle,
    };
};

export {
    getPage,
};