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

function DropdownProj({
	labelName,
	name,
	options,
	placeHolder,
	type,
	required,
	className,
	tabIndex,
}: IDropdownProps ) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen((prevState: any) => !prevState);
    //const [selectedInterest, setSelectedInterest] = useState('');
    //const [selectedSkills, setSelectedSkills] = useState([]);
    
    const [selectedOption, setSelectedOption] = useState('');  

    const handleOptionClick = (option: any) => {
        setSelectedOption('project');
      //  handleClick();  // Call the handleCLick function passed from the parent
    };
    // const handleInterestChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    //   setSelectedInterest(event.target.value);
    // };
  
    // const handleSkillsChange = (event: { target: { value: any; checked: any; }; }) => {
    //   const { value, checked } = event.target;
    //   if (checked) {
    //     setSelectedSkills(prevState => [...prevState, value]);
    //   } else {
    //     setSelectedSkills(prevState => prevState.filter(skill => skill !== value));
    //   }
    // };

    const handleClick = (filter: string) => {
        if(filter === "interest"){
         // setInterestDropdownOpen(true);
        }
        if(filter === "skill"){
         //  setInterestDropdownOpen(false);
         //  setSkillDropdownOpen(true);
        }if(filter === 'projects'){
         // setInterestDropdownOpen(false);
         // setProjectDropdownOpen(true);
        }
     }



  
    // const handleProjectChange = (event: { target: { value: any; checked: any; }; }) => {
    //   const { value, checked } = event.target;
    //   if (checked) {
    //     setSelectedProjects((prevState: any) => [...prevState, value]);
    //   } else {
    //     setSelectedProjects((prevState: any[]) => prevState.filter((project: any) => project !== value));
    //   }
    // };
  
    return (
      <div className={styles.filters}>
        <div className={styles.dropdownContainer}>
          <ul className={styles.dropdownToggle} onClick={toggleDropdown}  style={{ borderColor: isOpen ? '#0275D8' : 'white' }}>  
            Project <Image src={arrowdown} width={0} height={0} alt='down button' />
          </ul>
          {isOpen && (
            <div className={styles.dropdownMenuproj}>
              <div>
                {/* <ul>Interest:</ul> */}
                {List.Project.map((project) => (
                  <label className={styles.projectdrop}>
                   <h3 className={styles.projectlist}>{project}</h3>
                  <input
                    color="#03A203"
                    type="checkbox"
                    id="setColor"
                    name="color"
                    value={project}
                    onClick={() => console.log(project)}
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
  

export default DropdownProj;