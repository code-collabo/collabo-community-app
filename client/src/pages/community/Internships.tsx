import { app } from '@/helpers/common';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/modules/project.module.css';
import image from '../../../public/Character.svg';
import Textone from '../../../public/Textone.svg';
import Texttwo from '../../../public/Texttwo.svg';
import Style from '../../styles/modules/Page.module.css';  
import arrowdown from "../../../public/Vectordown.svg";

export default function InternshipPage() {
  const title = `${app.name} | Internships `;
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
         <ul>Interest <Image src={arrowdown} width={0} height={0} alt='down button' /> </ul>
         <ul>Skill Set <Image src={arrowdown} width={0} height={0} alt='down button' /> </ul>
         <ul>Project <Image src={arrowdown} width={0} height={0} alt='down button' /> </ul>
        </div>
        </div>

        <div className={Style.backgroundImage}>
          <Image className={Style.image} src={image} width={0} height={0} alt='frame of picture' />
           <Image className={Style.BgText} src={Texttwo} width={0} height={0} alt='sub text' />
           <Image className={Style.smtext} src={Textone} width={0} height={0} alt='main text' />
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