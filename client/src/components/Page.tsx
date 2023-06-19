import { ReactNode } from "react";
import { useState } from "react";
import SideBar from "./SideBar";
import NavBar from "./NavHeader";
import styles from "../styles/modules/Page.module.css";
import Overview from "../pages/community/index";
import Projects from "../pages/community/projects";
import InternshipPage from "@/pages/community/Internships";
import { Project } from '../model/project';

type Page = 'overview' | 'projects' | 'internships';

interface PageProps{
  children: ReactNode;
}

export default function Page({ children }: { children: ReactNode}) {
  const [activePage, setActivePage] = useState<Page>('overview');


  const handleButtonClick = (page: Page) => {
    setActivePage(page);
  };

  const renderPageContent = () => {
    switch (activePage) {
      case 'projects':
        return <div><Projects /></div>;
      case 'internships':
        return <div><InternshipPage /></div>;
      default:
        return <div><Overview /></div>;
    }
  };

  
  return (
    <div className={styles.layout}>
      <div><SideBar handleButtonClick={handleButtonClick}  /></div>
      <div>{renderPageContent()}</div>
      
      {/* <div><NavBar children={undefined} /></div> */}
      { children }
    </div>
  );
};