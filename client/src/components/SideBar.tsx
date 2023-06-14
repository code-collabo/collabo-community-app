




// import React, { useState } from "react";
// import styles from "../styles/modules/Sidebar.module.css";
// import Link from "next/link";


// interface SideBarProps{
//    handleButtonClick: (page: Page) => void;
// }

// type Page = 'overview' | 'projects' | 'internships';


// function SideBar({handleButtonClick}: SideBarProps,  { children }: { children: React.ReactNode }) {
 

//   return (
//     <div className={styles.container}>
//       <nav className={styles.box}>
//         <button onClick={() => handleButtonClick('overview')} className={styles.item}>Overview</button>
//         <button onClick={() => handleButtonClick('projects')} className={styles.item}>Projects</button>
//         <button onClick={() => handleButtonClick('internships')} className={styles.item}>Internships</button>
//       </nav>
    
//     <Link className={styles.login} href="/login">Sign in as Admin</Link>
//     </div>
//   );
// }

// export default SideBar;