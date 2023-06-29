import { app } from '@/helpers/common';
import { SetStateAction, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/modules/project.module.css';
import image from '../../../public/Character.svg';
import Textone from '../../../public/Textone.svg';
import Texttwo from '../../../public/Texttwo.svg';
import Style from '../../styles/modules/Page.module.css';  
import arrowdown from "../../../public/Vectordown.svg";
//import Dropdown from '@/components/InternshipDropdown';
import DropdownProj from '@/components/Projectdropdown';
import DropdownIn from '@/components/Interestsdropdown';
import Dropdown from '@/components/Skilldropdown';
import { Project } from '@/model/project';


export default function InternshipPage() {
  const title = `${app.name} | Internships `;

   const [isOpen, setIsOpen] = useState(false);
   const toggleDropdown = () => setIsOpen(prevState => !prevState); 
   const [selectedFilters, setSelectedFilters] = useState({});
   const [isInterestDropdownOpen, setInterestDropdownOpen] = useState(true);
   const [isSkillDropdownOpen, setSkillDropdownOpen] = useState(false);
   const [isProjectDropdownOpen, setProjectDropdownOpen] = useState(false);

    

    
  const handleInterestDropdownClick = () => {
    setInterestDropdownOpen(false);
    setSkillDropdownOpen(true);
    setProjectDropdownOpen(true);
  };

  const handleSkillDropdownClick = () => {
    setInterestDropdownOpen(false);
    setSkillDropdownOpen(true);
    setProjectDropdownOpen(true);
  };

  const handleProjectDropdownClick = () => {
    setInterestDropdownOpen(true);
    setSkillDropdownOpen(true);
    setProjectDropdownOpen(true);
  };


  const handleClick = (filter: string) => {
    if(filter === "interest"){
      setInterestDropdownOpen(true);
    }
    if(filter === "skill"){
       setInterestDropdownOpen(false);
       setSkillDropdownOpen(true);
    }if(filter === 'projects'){
     setInterestDropdownOpen(false);
     setProjectDropdownOpen(true);
    }
 }

    
  const handleFilterSelection = (filterName: any, filterValue: any) => {
    setSelectedFilters(prevFilters => ({
      ...prevFilters, 
      [filterName]: filterValue
    }));
  };

  // const filteredProjects = projects.filter(project => {

  // })


  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.projectContainer}>
        <h1 className={styles.header}>Internships</h1>
        <div className={styles.options}>
         <div className={styles.btns}>
        
        </div>
        <div className={styles.filters}>
         <h3>Filter by:</h3> 
         {/* <ul>Interest <Image src={arrowdown} width={0} height={0} alt='down button' /> </ul> */}
         <DropdownIn options={[]} isOpen={isOpen} toggleDropdown={toggleDropdown} />
         {/* <ul>Skill Set <Image src={arrowdown} width={0} height={0} alt='down button' /> </ul> */}
         <Dropdown options={[]} isOpen={isOpen} toggleDropdown={toggleDropdown} />
         {/* <ul>Project <Image src={arrowdown} width={0} height={0} alt='down button' /> </ul> */}
         <DropdownProj options={[]} isOpen={isOpen} toggleDropdown={toggleDropdown} />
        </div>
        </div>

        <div className={Style.backgroundImage}>
          <Image className={Style.image} src={image} width={0} height={0} alt='frame of picture' />
           <Image className={Style.BgText} src={Textone} width={0} height={0} alt='sub text' />
           <Image className={Style.smtext} src={Texttwo} width={0} height={0} alt='main text' />
        </div>

        <div className={styles.Cards}>
      
        </div>
        </div>
    </>
  );
};