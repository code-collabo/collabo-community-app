import React from "react";
import styles from "../styles/modules/NavHeader.module.css"


function NavBar({ children }: { children: React.ReactNode }){
  return (
    <div>
        <nav className={styles.header}>
          <ul className={styles.projects}>
          <li>Parent Projects</li>
          <li>Child Projects</li>
          </ul>
           
          <ul className={styles.filter}> 
          <li>Filter By:</li>
          <li>Interest</li>
          <li>Skill set</li>
          </ul>
        </nav>
        {children}
    </div>
  );  
}

export default NavBar;