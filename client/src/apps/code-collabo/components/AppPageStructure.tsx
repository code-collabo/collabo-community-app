import { ReactNode } from 'react';

export default function PageStructure({ children }: { children: ReactNode}) {
  return (
    <>
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
            <span><b>Page Title:</b> (Dynamic) Page Name/Title goes here</span>
        </header>
        <main>
          { children }
        </main>
      </div>
    </>
  );
};