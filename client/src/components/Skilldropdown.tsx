import { SetStateAction, useState } from "react";
import styles from "../styles/modules/project.module.css";
import Image from "next/image";
import Style from '../../styles/modules/Page.module.css';  
import arrowdown from "../../public/Vectordown.svg";
import Data from '../../../server/src/sampleCreateData.json';
import List from "../filter.json";

export interface IDropdownOption {
	label: string | number;
	labelValue: string | number;
}

interface input{
    key: number
    type: string
    id: string
    name: string
    value: string
    checked: boolean
    onClick: Function
    onChange: Function
}

interface IDropdownProps {
	name?: string;
	options: IDropdownOption[];
	required?: boolean;
	tabIndex?: number;
	className?: string;
	type?: string;
	placeholder?: string;
	labelName?: string;
    handleCHange: Function;
    handleSkillChange: Function;
}

function Dropdown({
	labelName,
	name,
	options,
	placeholder,
	type,
	required,
	className,
	tabIndex,
    handleCHange,
    handleSkillChange
}: IDropdownProps, selectedSkills: [], props: object) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(prevState => !prevState);
    const [selectedOption, setSelectedOption] = useState('');
    // const handleselect = () => {
    //     setSelectedNav(Nav);
    // }
    // const handleOptionClick = (option: any) => {
    //    setSelectedOption('skill');
    //    handleClick(); // Call the handleCLick function passed from the parent
    // }

    //const [selectedInterest, setSelectedInterest] = useState('');
    
    //const [selectedProjects, setSelectedProjects] = useState([]);
  
    // const handleInterestChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    //   setSelectedInterest(event.target.value);
    // };
  
    const handleClick = (filter: string) => {
        if(filter === "Interests"){
         // setInterestDropdownOpen(true);
        }
        if(filter === "Skill"){
          // setInterestDropdownOpen(false);
          // setSkillDropdownOpen(true);
        }else{
         //  setInterestDropdownOpen(false);
        }
     }

     const onhandleSkillChange = (event: Event) => {
        handleSkillChange(event);
        console.log(skill);
     }

     const onhandleChange = (e) => {
       handleCHange(e);
       //console.log(e.target.value);
     }
   
    
  
    // const handleProjectChange = (event: { target: { value: any; checked: any; }; }) => {
    //   const { value, checked } = event.target;
    //   if (checked) {
    //     setSelectedProjects(prevState => [...prevState, value]);
    //   } else {
    //     setSelectedProjects(prevState => prevState.filter(project => project !== value));
    //   }
    // };
  
    return (
      <div className={styles.filters}>
        <div className={styles.dropdownContainer}>  
          <ul className={styles.dropdownToggle} onClick={toggleDropdown} style={{ borderColor: isOpen ? '#0275D8' : 'white' }}>
            Skill Set <Image src={arrowdown} width={0} height={0} alt='down button' />
          </ul>
          {isOpen && (
            <div className={styles.dropdownMenu}>
              <div>
                {/* <ul>Interest:</ul> */}
                {List.skillset.map((skill, index) => (
                  <label key={index}>
                  <h3>{skill}</h3>
                  <input
                    key={index}
                    type="checkbox"
                    id="setColor"
                    name="color"
                    value={skill}
                    //checked={() => onhandleChange ? true : false}
                    //onClick={() => onhandleChange}
                    onChange={(e) => onhandleChange(e)}
                  />
                  
                </label>
                ))}              
              </div>
              </div>
          )}
        </div>
      </div>
    );
  };
  

export default Dropdown; 

