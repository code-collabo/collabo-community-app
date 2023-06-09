import { Card, Button } from "react-bootstrap";
import { Project as ProjectModel } from "../model/project";
import styles from "../styles/modules/project.module.css";
import picOne from "../images/pictureone.png"
import Image from "next/image";


interface ProjectProps {
  project: ProjectModel;
}

const ProjectCard = ({ project }: ProjectProps) => {
  const { title, type, url } = project;

  return (
    <Card className={styles.ProjectCard}>
      {/* <Card.Img variant="top" className={styles.img} src={picOne} alt={title} />  */}
      <Image className={styles.img} src="/Img.svg" width={100} height={200} alt="A picture from undraw" />
      <Card.Body className={styles.text}>
        <div>
        <Card.Title className={styles.userTitle}>{title}</Card.Title>
        <Card.Text className={styles.userText}>{type}</Card.Text>
         </div>
        <Card.Link className={styles.link} href={url}>Go to Github </Card.Link>
        <div className={styles.Button}>
        {/* <Button className={styles.btn} variant="primary"><Image src="Vector.svg" alt="arrow icon" width={0} height={0} className={styles.arrow} /></Button> */}
        <Button className={styles.issues} href={url}>Issues</Button>
        <Button className={styles.readme} href={url}>Repo readme</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
