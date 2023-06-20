import React, { useEffect, useState } from 'react';
import { app } from '@/helpers/common';
import Head from 'next/head';
import { Project } from './../../model/project';
import ProjectCard from "../../components/ProjectCard";
import styles from "../../styles/modules/project.module.css";

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
         <h3>Filter By:</h3> 
         <ul>Interest</ul>
         <ul>Skill Set</ul>
        </div>
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



