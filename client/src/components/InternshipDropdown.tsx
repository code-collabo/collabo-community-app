// import { SetStateAction, useState } from "react";
// import styles from "../styles/modules/project.module.css";
// import Image from "next/image";
// import Style from '../../styles/modules/Page.module.css';  
// import arrowdown from "../../../public/Vectordown.svg";
// import Data from '../../../server/src/sampleCreateData.json';
// import List from "../filter.json";


// export interface IDropdownOption {
// 	label: string | number;
// 	labelValue: string | number;
// }

// interface IDropdownProps {
// 	name?: string;
// 	options: IDropdownOption[];
// 	required?: boolean;
// 	tabIndex?: number;
// 	className?: string;
// 	type?: string;
// 	placeHolder?: string;
// 	labelName?: string;
// }

// function Dropdown({
// 	labelName,
// 	name,
// 	options,
// 	placeHolder,
// 	type,
// 	required,
// 	className,
// 	tabIndex,
// }: IDropdownProps)  {
//     const [isOpen, setIsOpen] = useState(false);
//     const toggleDropdown = () => setIsOpen(prevState => !prevState);
//     const [selectedInterest, setSelectedInterest] = useState(List);
//     const [selectedSkills, setSelectedSkills] = useState(List);
//     const [selectedProjects, setSelectedProjects] = useState(List);
  
//     const handleInterestChange = (event: { target: { value: SetStateAction<string>; }; }) => {
//       setSelectedInterest(event.target.value);
//     };
  
//     const handleSkillsChange = (event: { target: { value: any; checked: any; }; }) => {
//       const { value, checked } = event.target;
//       if (checked) {
//         setSelectedSkills(prevState => [...prevState, value]);
//       } else {
//         setSelectedSkills(prevState => prevState.filter(skill => skill !== value));
//       }
//     };
  
//     const handleProjectChange = (event: { target: { value: any; checked: any; }; }) => {
//       const { value, checked } = event.target;
//       if (checked) {
//         setSelectedProjects(prevState => [...prevState, value]);
//       } else {
//         setSelectedProjects(prevState => prevState.filter(project => project !== value));
//       }
//     };
  
//     return (
//       <div className={styles.filters}>
//         <h3>Filter by:</h3>
//         <div>
//           <ul className={styles.dropdownToggle} onClick={toggleDropdown}>
//             Interest <Image src={arrowdown} width={0} height={0} alt='down button' />
//           </ul>
//           {isOpen && (
//             <div className={styles.dropdownMenu}>
//               <div>
//                 <ul>Interest:</ul>
//                 {List.interests.map((interest))}
//                 <label>
//                   <input
//                     type="radio"
//                     value="All"
//                     checked={selectedInterest ==}
//                     onChange={handleInterestChange}
//                   />
//                   All
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     value="Coding"
//                     checked={selectedInterest == }
//                     onChange={handleInterestChange}
//                   />
//                   Coding
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     value="UI/UX Design"
//                     checked={selectedInterest == }
//                     onChange={handleInterestChange}
//                   />
//                   UI/UX Design
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     value="Technical Writing"
//                     checked={selectedInterest == }
//                     onChange={handleInterestChange}
//                   />
//                    Technical Writing
//                 </label>
//               </div>
//               <div>
//                 <ul>Skill Set:</ul>
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="Github"
//                     checked={selectedSkills.includes('Github')}
//                     onChange={handleSkillsChange}
//                   />
//                   Github
//                 </label>
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="Gitbook"
//                     checked={selectedSkills.includes('Gitbook')}
//                     onChange={handleSkillsChange}
//                   />
//                   Gitbook
//                 </label>
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="Figma"
//                     checked={selectedSkills.includes('Figma')}
//                     onChange={handleSkillsChange}
//                   />
//                   Figma
//                 </label>
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="Javascript"
//                     checked={selectedSkills.includes('Javascript')}
//                     onChange={handleSkillsChange}
//                   />
//                   Javascript
//                 </label>
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="Typescript"
//                     checked={selectedSkills.includes('Typescript')}
//                     onChange={handleSkillsChange}
//                   />
//                   Typescript
//                 </label>
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="ReactNextjs"
//                     checked={selectedSkills.includes('ReactNextjs')}
//                     onChange={handleSkillsChange}
//                   />
//                   ReactNextjs
//                 </label>
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="MongoDB"
//                     checked={selectedSkills.includes('MongoDB')}
//                     onChange={handleSkillsChange}
//                   />
//                   MongoDB
//                 </label>
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="Nodejs"
//                     checked={selectedSkills.includes('Nodejs')}
//                     onChange={handleSkillsChange}
//                   />
//                   Nodejs
//                 </label>
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="Angular"
//                     checked={selectedSkills.includes('Angular')}
//                     onChange={handleSkillsChange}
//                   />
//                    Angular
//                 </label>
//               </div>
//               <div>
//                 <ul>Project:</ul>
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="All"
//                     checked={selectedProjects.includes('All')}
//                     onChange={handleProjectChange}
//                   />
//                   All
//                 </label>
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="Multiple Projects Involved"
//                     checked={selectedProjects.includes('Multiple Projects Involved')}
//                     onChange={handleProjectChange}
//                   />
//                   Multiple Projects Involved
//                 </label>
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="Blog"
//                     checked={selectedProjects.includes('Blog')}
//                     onChange={handleProjectChange}
//                   />
//                   Blog
//                 </label>
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="CSS"
//                     checked={selectedProjects.includes('CSS')}
//                     onChange={handleProjectChange}
//                   />
//                   CSS
//                 </label>
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="Docs"
//                     checked={selectedProjects.includes('Docs')}
//                     onChange={handleProjectChange}
//                   />
//                   Docs
//                 </label>
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="Blog"
//                     checked={selectedProjects.includes('Blog')}
//                     onChange={handleProjectChange}
//                   />
//                   Git and Github Collabo
//                 </label>
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="Node Mongo"
//                     checked={selectedProjects.includes('Node Mongo')}
//                     onChange={handleProjectChange}
//                   />
//                   Node Mongo
//                 </label>
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="Web App"
//                     checked={selectedProjects.includes('Web App')}
//                     onChange={handleProjectChange}
//                   />
//                   Web App
//                 </label>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };
  

// export default Dropdown;  