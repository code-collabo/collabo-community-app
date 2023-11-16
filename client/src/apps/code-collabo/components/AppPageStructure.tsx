import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { getPage } from '@/apps/shared/helpers/meta';
import { appInfo, urlStart } from '@/apps/code-collabo/helpers/appInfo';

import PageHeadElement from '@/apps/shared/components/PageHeadElement';

import { colors, spacing, types } from '@/apps/code-collabo/styles/app.imports';
import main from '@/apps/code-collabo/styles/app.main';


export default function PageStructure({ children }: { children: ReactNode }) {
  let { pathname } = useRouter();
  pathname === urlStart ? pathname =  `${urlStart}/overview` : pathname;
  let { thisPage, pageTitle } = getPage(pathname, urlStart, appInfo.name);
  console.log(appInfo)

  return (
    <>
      <PageHeadElement
        pageTitle={pageTitle}
        faviconUrl='/code-collabo/favicon.ico'
      />

      {/* Global JSX styles for Code Collabo sub-community only */}
      <style jsx global>{ colors }</style>
      <style jsx global>{ spacing }</style>
      <style jsx global>{ types }</style>
      <style jsx global>{ main }</style>

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
            <h2 className='page-title'>{thisPage}</h2>
        </header>
        <main>
          { children }
        </main>
      </div>
    </>
  );
};
