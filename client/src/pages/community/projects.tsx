import React, { useEffect, useState } from 'react';
import { app } from '@/helpers/common';
import Head from 'next/head';
import { Project } from './../../model/project';
import ProjectCard from "../../components/ProjectCard";
import styles from "../../styles/modules/project.module.css";
import Image from 'next/image';
import Imageframe from "../../../public/Frame.svg";
import arrowdown from "../../../public/Vectordown.svg";
import DropdownIn from '@/components/Interestsdropdown';
import Dropdown from '@/components/Skilldropdown';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const title = `${app.name} | Projects `;


const getProjects = async () => {
  try{
     const response = await fetch("http://localhost:8000/projects/");
     const jsonData = await response.json();
     setProjects(jsonData.projects);
     console.log(jsonData);
  }catch (err: any){
     console.log(err.message);
  }
}


useEffect(() => {
  getProjects();
}, []);





  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div className={styles.projectContainer}>
        <h1 className={styles.header}>Projects</h1>
        <div className={styles.options}>
         <div className={styles.btns}>
        
        </div>
        <div className={styles.filters}>
         <h3>Filter by:</h3>
          <DropdownIn options={[]} />
          <Dropdown options={[]} />
         {/* <ul>Interest <Image src={arrowdown} width={0} height={0} alt='down button' />   </ul>
         <ul>Skill Set <Image src={arrowdown} width={0} height={0} alt='down button' />  </ul> */}
        </div>
        </div>

        <div className={styles.backgroundImage}>
          <Image className={styles.image} src={Imageframe} width={400} height={100} alt='frame of picture' />
        </div>

        <div className={styles.Cards}>
        {/* {projects.map((project) => ( 
        <ProjectCard  project={project} key={project._id}  />
        ))} */}
        </div>
        </div>
        </>
  );
};



