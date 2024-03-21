import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useScreenDimensions from '../hooks/useScreenDimensions';

export default function SideBarComponent({ toggleSidebar }: { toggleSidebar?: () => void }) {
  const { isMobile, isDesktop }  = useScreenDimensions();
  return (
    <>
      {/* Sidebar for DESKTOP & left side menu for MOBILE */}
      {isMobile && <div className='app__menubar-overlay' onClick={toggleSidebar}></div>}
      <div className='app__menubar__nav'>
        {isMobile && <button className='app__menubar__toggle__close' onClick={toggleSidebar}>{'<'}</button>}
        <Link className='app__logo' href='/code-collabo'>
          <Image src='/code-collabo/logo.png' alt='logo' width={isDesktop ? 207 : 172} height={isDesktop ? 55 : 40} />
        </Link>
        <nav className='app__menubar__nav__items lib__flex-space-btw-col'>
          <Link className='app__menubar__nav__link lib__flex-center' onClick={toggleSidebar} href='/code-collabo'>
            <Image src='/code-collabo/dashboard.png' alt='donate-icon' width='17' height='15' />
            Overview
          </Link>
          <Link className='app__menubar__nav__link lib__flex-center' onClick={toggleSidebar} href='/code-collabo/projects'>
            <Image src='/code-collabo/project-icon.png' alt='project-icon' width='17' height='15' />
            Projects
          </Link>
          <Link className='app__menubar__nav__link lib__flex-center' onClick={toggleSidebar} href='/code-collabo/careers'>
            <Image src='/code-collabo/career-icon.png' alt='career-icon' width='17' height='15' />
            Careers
          </Link>
          <Link className='app__menubar__nav__link lib__flex-center' onClick={toggleSidebar} href='/code-collabo/donate'>
            <Image src='/code-collabo/donate.png' alt='donate-icon' width='17' height='15' />
            Donate
          </Link>
        </nav>
      </div>
    </>
  );
}
