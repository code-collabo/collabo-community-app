import React, { useState } from "react";
import styles from "../styles/modules/Sidebar.module.css";
import Link from "next/link";
import Image from "next/image";
import vectorOne from "../../public/Vectorfour.svg";
import vectortwo from "../../public/Vectorfive.svg";
import vectorthree from "../../public/Vectorsix.svg";
import block from "../../public/Vectorblock.png"


interface SideBarProps{
   handleButtonClick: (page: Page) => void;
}

type Page = 'overview' | 'projects' | 'internships';


function SideBar({handleButtonClick}: SideBarProps,  { children }: { children: React.ReactNode }) {
 

  return (
    <div className={styles.container}>
      <nav className={styles.box}>
        <button onClick={() => handleButtonClick('overview')} className={styles.item}><Image className={styles.icon} src={vectorOne} width={0} height={0} alt="Nav image" /> Overview</button>
        <button onClick={() => handleButtonClick('projects')} className={styles.item}><Image className={styles.iconbar} src={block} width={0} height={0} alt="Nav image" /> <p>Projects</p>  </button>
        <button onClick={() => handleButtonClick('internships')} className={styles.item}><Image className={styles.icontag} src={vectorthree} width={0} height={0} alt="Nav image" /> Internships</button>
      </nav>
    
    <Link className={styles.login} href="/login">Sign in as Admin</Link>
    </div>
  );
}

export default SideBar;




// <Image
// src="/profile.png"
// width={500}
// height={500}
// alt="Picture of the author"
// />