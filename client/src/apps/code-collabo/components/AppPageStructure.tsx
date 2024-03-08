import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { getPage } from '@/apps/shared/helpers/meta';
import { appInfo, urlStart } from '@/apps/code-collabo/helpers/appInfo';

import PageHeadElement from '@/apps/shared/components/PageHeadElement';

import { colors, spacing, types } from '@/apps/code-collabo/styles/app.imports';
import main from '@/apps/code-collabo/styles/app.main';
import  useScreenDimensions  from '../helpers/useScreenDimensions';
import Image from 'next/image';
import Link from 'next/link';


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

      {/* Sidebar */}
      <div className='page__menubar__nav'>
        <div><b>LOGO HERE</b></div>
        <nav>
          <Link href='/code-collabo'>Overview</Link>
          <Link href='/code-collabo/projects'>Projects</Link>
          <Link href='/code-collabo/careers'>Careers</Link>
          <Link href='/code-collabo/donate'>Donate</Link>
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

      {/* TODO: Make a filters component - inject one here, and one inside projects page */}
      
    </>
  );
}
