import Link from 'next/link';
import ProjectCard from './project-card';


const projTitles: string[] = [
  'code collabo project 1',
  'code collabo project 2',
  'code collabo project 3',
  'code collabo project 4',
];

const projCard = projTitles.map((projTitle: string) => {
  return <ProjectCard title={projTitle} />;
})

interface PropType {
  title: string;
}
export default function QuaterCard(props: PropType) {
  return (
    <>
      <div className="quater-section">
        <h3 className="quater-section-title">{props.title}</h3>
        {projCard}
      </div>
    </>
  );
}
