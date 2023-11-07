import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { getPage } from '@/apps/shared/helpers/meta';
import { appInfo, urlStart } from '@/apps/code-collabo/helpers/appInfo';

import PageHeadElement from '@/apps/shared/components/PageHeadElement';

export default function PageStructure({ children }: { children: ReactNode }) {
  let { pathname } = useRouter();
  pathname === urlStart ? pathname =  `${urlStart}/overview` : pathname;
  let { thisPage, pageTitle } = getPage(pathname, urlStart, appInfo.name);

  return (
    <>
      <PageHeadElement
        pageTitle={pageTitle}
        faviconUrl='/code-collabo/favicon.ico'
      />

      {/* Sidebar */}
      <div>
        <div><b>CODE COLLABO Sidebar Logo</b> goes here</div>
        <nav>
          <span><b>Sidebar Nav Menu</b> goes here: </span>
          <button>Overview</button>
          <button>Projects</button>
          <button>Careers</button>
          <button>Donate</button>
        </nav>
      </div>

      {/* Page Content */}
      <div>
        <header>
            <h2>{thisPage}</h2>
        </header>
        <main>
          { children }
        </main>
      </div>
    </>
  );
};
