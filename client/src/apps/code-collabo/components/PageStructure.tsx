import { ReactNode } from 'react';

export default function PageStructure({ children }: { children: ReactNode}) {
  return (
    <>
      <div>
        <div>CODE COLLABO SUBCOMMUNITY Sidebar Logo goes here</div>
        <nav>
          <button>Overview</button>
          <button>Projects</button>
          <button>Careers</button>
          <button>Donate</button>
        </nav>
      </div>
      <div>
        <header>
            <h1>(Dynamic) Page Name/Title goes here</h1>
        </header>
        <main>
          { children }
        </main>
      </div>
    </>
  );
};