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

interface IDropdownProps {
	name?: string;
	options: IDropdownOption[];
	required?: boolean;
	tabIndex?: number;
	className?: string;
	type?: string;
	placeHolder?: string;
	labelName?: string;
  handleChange: Function;
}

function DropdownIn({
	labelName,
	name,
	options,
	placeHolder,
	type,
	required,
	className,
	tabIndex,
  handleChange
}: IDropdownProps, selectedInterest: string, props: Function)   {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(prevState => !prevState);
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedinterest, setSelectedInterest] = useState('All');
    //const [selectedSkills, setSelectedSkills] = useState([]);
    //const [selectedProjects, setSelectedProjects] = useState([]);
  
     const handleOptionClick = (option: any) => {
       setSelectedOption('interests');
   //    handleClick(filter);
     }

    const handleClick = (filter: string) => {
      if(filter === "interest"){
       // setInterestDropdownOpen(true);
      }
      if(filter === "skill"){
        // setInterestDropdownOpen(false);
        // setSkillDropdownOpen(true);
      }if(filter === 'projects'){
      // setInterestDropdownOpen(false);
      // setProjectDropdownOpen(true);
      }  
    }

    const onhandleChange = (interest: string) => {
        handleChange(interest);
       console.log(interest);
    }

    
 function onFilterValueChanged(event: any){
  console.log(event.target.value);
  filterValueSelected(event.target.value);
}

  
    // const handleSkillsChange = (event: { target: { value: any; checked: any; }; }) => {
    //   const { value, checked } = event.target;
    //   if (checked) {
    //     setSelectedSkills(prevState => [...prevState, value]);
    //   } else {
    //     setSelectedSkills(prevState => prevState.filter(skill => skill !== value));
    //   }
    // };
  
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
          <ul className={styles.dropdownToggle} onClick={toggleDropdown} onChange={onFilterValueChanged} style={{ borderColor: isOpen ? '#0275D8' : 'white' }}>
            Interest <Image src={arrowdown} width={0} height={0} alt='down button' />
          </ul>
          {isOpen && (
            <div className={styles.dropdownMenu}>
              <div>
                {List.interests.map((interest, index) => (
                  <label key={index}>
                   <h3>{interest}</h3>
                  <input
                    key={index}
                    type="radio"
                    id="setColor"
                    name="color"
                    value={interest}
                    //checked={selectedInterest === interest}
                    onClick={() => onhandleChange(interest)}
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
  

export default DropdownIn; 


function filterValueSelected(value: any) {
  throw new Error("Function not implemented.");
}

