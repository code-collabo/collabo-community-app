import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { getPage } from '@/apps/shared/helpers/meta';
import { appInfo, urlStart } from '@/apps/code-collabo/helpers/appInfo';

import PageHeadElement from '@/apps/shared/components/PageHeadElement';

import { colors, spacing, types } from '@/apps/code-collabo/styles/app.imports';
import main from '@/apps/code-collabo/styles/app.main';
import  useScreenDimensions  from '../helpers/useScreenDimensions';


export default function PageStructure({ children }: { children: ReactNode }) {
  let { pathname } = useRouter();
  pathname === urlStart ? pathname =  `${urlStart}/overview` : pathname;
  const { thisPage, pageTitle } = getPage(pathname, urlStart, appInfo.name);

  const  { isMobile }  = useScreenDimensions();



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

      { !isMobile ? (
        // Web
        <div className='page-structure'>
          {/* Sidebar */}
          <div className='sidebar'>
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
          <div className='content'>
            <header>
              <h2 className='page-title'>{thisPage}</h2>
            </header>
            <main>
              { children }
            </main>
          </div>
        </div>
      ) : (
        // mobile
        <div className='page-structure-mobile'>
          <header className='header-mobile'>
            <div className='icon-outline'>
              HI
            </div>
            <h2 className='page-title-mobile'>{thisPage}</h2>
            <div className='icon-outline'>
              FI
            </div>
          </header>
          <main>
            { children }
          </main>
        </div>
      )}
    </>
  );
}
