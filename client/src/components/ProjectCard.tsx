import { Project as ProjectModel } from "../model/project";
import styles from "../styles/modules/project.module.css";
import Image from "next/image";
import Cardimage from "../../public/Img.svg";
import cssimage from "../../public/CSSimg.svg"
import Link from "next/link";

interface ProjectProps {
  project: ProjectModel;
}

const ProjectCard = ({ project }: ProjectProps) => {
  const { title, url, issue, img, interest, skills} = project;

  return (
     <div className={styles.ProjectCard}>
       <Image src={cssimage} width={0} height={0} alt={"card image"}  />
       <ul>
        <li>{title}</li>
        <li>{url}</li>

        <Link href="/">Issues</Link>
        <Link href="/">Repo readme</Link>
       </ul>
     </div>
  );
};

export default ProjectCard;
