import { ReactNode } from 'react';

export default function PageStructure({ children }: { children: ReactNode}) {
  return (
    <>
      <header>
        <nav>
          <span>COLLABO COMMUNITY nav menu (Basic)</span>
        </nav>
      </header>
      { children }
    </>
  );
};