import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { getPage } from '@/apps/shared/helpers/meta';
import { appInfo, urlStart } from '@/apps/community/helpers/appInfo';

import PageHeadElement from '@/apps/shared/components/PageHeadElement';

export default function PageStructure({ children }: { children: ReactNode}) {
  let { pathname } = useRouter();
  pathname === '/' || pathname === urlStart ? pathname = `${urlStart}/home` : pathname;
  let { thisPage, pageTitle } = getPage(pathname, urlStart, appInfo.name);
  return (
    <>
      <PageHeadElement
        pageTitle={pageTitle}
        faviconUrl=''
      />

      <header>
        <nav>
          <span>{appInfo.name} App [{thisPage}]</span>
        </nav>
      </header>
      { children }
    </>
  );
};