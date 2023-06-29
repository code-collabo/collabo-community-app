import React, { SetStateAction, useEffect, useState } from 'react';
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
import { ValueOf } from 'next/dist/shared/lib/constants';
import { EventEmitter } from 'stream';
import { on } from 'events';

export default function ProjectsPage(props: { filterValueSelected: () => void; }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedFilters, setSelectedFilters] = useState('Interests');
  const title = `${app.name} | Projects `;
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedInterest, setSelectedInterest] = useState('All');
  const [selectedProject, setSelectedProject] = useState([]);
 // const [selectedNav, setSelectedNav] = useState(false);
  const [interestDropdownOpen, setInterestDropdownOpen] = useState(false);
  const [skillDropdownOpen, setSkillDropdownOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
   
  
  // const toggleDropdown = () => setIsOpen(prevState => !prevState);
  // const [filterCardValue, setFilterCardValue] = useState('all');
   
  const handleInterestChange = (event: { target: { value: SetStateAction<string>; }; }) => {
   // setSelectedInterest(event.target.value);
  };
     
  const handleInterestDropdownClick = () => {
    setInterestDropdownOpen(true);
    setSkillDropdownOpen(false);
    //setProjectDropdownOpen(false);
  };

  const handleSkillDropdownClick = () => {
    setInterestDropdownOpen(false);
    setSkillDropdownOpen(true);
    //setProjectDropdownOpen(false);
  };

  const handleSkillChange = (value: string) => {
    setSelectedSkills(prevSkills => prevSkills.filter(skill => skill !== value));
    console.log(selectedSkills)
  };
  
  const handleCHange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, checked } = e.target;
    console.log(e.target.value);
    console.log(e.target.checked);
    if (value && checked) {
      setSelectedSkills(prevState => [...prevState, value]);
    } else {
      setSelectedSkills(prevState => prevState.filter(skill => skill !== value));
    }
  };
  

  const changeFilter = (filter: string) => {
     if(filter === "Interests"){
       setInterestDropdownOpen(true);
     }
     if(filter === "Skill"){
        setInterestDropdownOpen(false);
        setSkillDropdownOpen(true);
     }else{
      setInterestDropdownOpen(false);
     }
  }

  const handleChange = (interest: string) => {
    setSelectedInterest(interest);
    console.log(interest);
  }


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

// const handleFilterSelection = (filterName, filterValue) => {
//   setSelectedFilters(prevFilters => ({
//     ...prevFilters,
//     [filterName]: filterValue
//   }));
// };

  
    function onFilterValueSelected(filterValue: any){
      //  console.log(event.target.value);
       console.log(filterValue);
    }


  

  const filteredProjects = projects.filter((project) => {
  const hasInterest = selectedInterest === 'All' ? projects : project.interest.includes(selectedInterest);
  const hasSkillset = selectedSkills.every((skill) => project.skills.includes(skill)); 
  //const hasProjectset = selectedProject.every((project) => project.project.includes(project));  
   console.log(hasInterest);
   console.log(hasSkillset);
   //console.log(selectedSkills)
   return hasInterest && hasSkillset; 

   
});

  // const handleButtonNav = () => {
  //   setSelectedNav(true);
  // }

   if(projects){
    return(
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
          <DropdownIn options={[]} selectedInterest={selectedInterest} setselectedInterest={setSelectedInterest} handleInterestChange={handleInterestChange} isOpen={isOpen} handleChange={handleChange} filterValueSelected={onFilterValueSelected} />
          <Dropdown options={[]} selectedSkills={selectedSkills}  isOpen={isOpen} handleCHange={handleCHange} handleSkillChange={handleSkillChange}  />
         {/* <ul>Interest <Image src={arrowdown} width={0} height={0} alt='down button' />   </ul>
         <ul>Skill Set <Image src={arrowdown} width={0} height={0} alt='down button' />  </ul> */}
        </div>
        </div>
         
        <div className={styles.Cards}>
      {filteredProjects.map((project) => ( 
      <ProjectCard  project={project} key={project._id}  />
      ))}
      </div>
           
       </div>
        </>
      
    )
  }


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
          <DropdownIn options={[]} selectedInterest={selectedInterest} handleInterestChange={handleInterestChange} filterValueSelected={onFilterValueSelected} />
          <Dropdown options={[]} selectedSkills={selectedSkills} handleCHange={handleCHange} />
         {/* <ul>Interest <Image src={arrowdown} width={0} height={0} alt='down button' />   </ul>
         <ul>Skill Set <Image src={arrowdown} width={0} height={0} alt='down button' />  </ul> */}
        </div>
        </div>
         
        <div className={styles.backgroundImage}>
          <Image className={styles.image} src={Imageframe} width={400} height={100} alt='frame of picture' />
        </div>
           
       </div>
        </>
  );
};



