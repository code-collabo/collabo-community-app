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
}

function Dropdown({
	labelName,
	name,
	options,
	placeHolder,
	type,
	required,
	className,
	tabIndex,
}: IDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(prevState => !prevState);
    //const [selectedInterest, setSelectedInterest] = useState('');
    const [selectedSkills, setSelectedSkills] = useState([]);
    //const [selectedProjects, setSelectedProjects] = useState([]);
  
    // const handleInterestChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    //   setSelectedInterest(event.target.value);
    // };
  
    const handleSkillsChange = (event: { target: { value: any; checked: any; }; }) => {
      const { value, checked } = event.target;
      if (checked) {
        setSelectedSkills(prevState => [...prevState, value]);
      } else {
        setSelectedSkills(prevState => prevState.filter(skill => skill !== value));
      }
    };
  
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
          <ul className={styles.dropdownToggle} onClick={toggleDropdown}>
            Skill Set <Image src={arrowdown} width={0} height={0} alt='down button' />
          </ul>
          {isOpen && (
            <div className={styles.dropdownMenu}>
              <div>
                {/* <ul>Interest:</ul> */}
                {List.skillset.map((skill) => (
                  <label>
                  <h3>{skill}</h3>
                  <input
                    type="checkbox"
                    id="setColor"
                    name="color"
                    value={skill}
                    checked={selectedSkills.includes(skill)}
                    onChange={handleSkillsChange}
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

