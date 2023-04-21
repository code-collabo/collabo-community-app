import { ReactNode } from "react";

export default function Page({ children }: { children: ReactNode}) {
  return (
    <>
      <div>SideBar Component (basic)</div>
      <div>NavHeader Component (basic)</div>
      { children }
    </>
  );
};