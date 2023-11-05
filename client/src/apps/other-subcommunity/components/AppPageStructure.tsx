import { ReactNode } from 'react';

export default function PageStructure({ children }: { children: ReactNode}) {
  return (
    <>
      <header>
        <nav><b>OTHER SUBCOMMUNITY</b>nav menu (Basic)</nav>
      </header>
      { children }
    </>
  );
};