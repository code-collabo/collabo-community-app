import { appInfo, urlStart } from '@/apps/other-subcommunity/helpers/appInfo';
import PageHeadElement from '@/apps/shared/components/PageHeadElement';
import { getPage } from '@/apps/shared/helpers/meta';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

export default function PageStructure({ children }: { children: ReactNode}) {
  let { pathname } = useRouter();
  pathname === urlStart ? pathname =  `${urlStart}/overview` : pathname;
  let { thisPage, pageTitle } = getPage(pathname, urlStart, appInfo.name);
  return (
    <>
      <PageHeadElement
        pageTitle={pageTitle}
        faviconUrl=''
      />

      <header>
        <nav>{appInfo.name} [{thisPage}]</nav>
      </header>
      { children }
    </>
  );
};