import React, { useState } from "react";
import styles from "../styles/modules/Sidebar.module.css";
import Link from "next/link";
import Image from "next/image";
import vectorOne from "../../public/Vectorfour.svg";
import vectortwo from "../../public/Vectortwo.svg";
import vectorthree from "../../public/Vectorthree.svg";
import newVector from "../../public/Vector.png";


interface SideBarProps{
   handleButtonClick: (page: Page) => void;
}

type Page = 'overview' | 'projects' | 'internships';


function SideBar({handleButtonClick}: SideBarProps,  { children }: { children: React.ReactNode }) {
 const  [isClicked, setIsClicked] = useState(false);
 const  [clickedButton, setClickedButton] = useState<string>(''); // 


 const handleClick = () => {
   setIsClicked(true);
 }

  return (
    <div className={styles.container}>
      <nav className={styles.box}>
        <button onClick={() => { handleButtonClick('overview'); setClickedButton('overview')}} style={{ color: clickedButton === 'overview' ? 'white' : '#A1A1A1', backgroundColor: clickedButton === 'overview' ? '#0275D8' : 'white'}} className={styles.item}><Image className={styles.icon} src={newVector} width={0} height={0} alt="Nav image" /> Overview</button>
        <button onClick={() => { handleButtonClick('projects'); setClickedButton('projects')}} style={{ color: clickedButton === 'projects' ? 'white' : '#A1A1A1', backgroundColor: clickedButton === 'projects' ? '#0275D8' : 'white'}} className={styles.item}><Image className={styles.iconbar} src={vectortwo} width={0} height={0} alt="Nav image" /> Projects</button>
        <button onClick={() => { handleButtonClick('internships'); setClickedButton('internships')}} style={{ color: clickedButton === 'internships' ? 'white' : '#A1A1A1', backgroundColor: clickedButton === 'internships' ? '#0275D8' : 'white'}} className={styles.item}><Image className={styles.icontag} src={vectorthree} width={0} height={0} alt="Nav image" /> Internships</button>
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