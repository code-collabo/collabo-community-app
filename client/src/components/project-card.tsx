import Link from 'next/link';

interface ProjCardPropType {
  key?: number;
  title: string
}
export default function ProjectCard(props: ProjCardPropType) {
  return (
    <>
      <div className="proj-card">
        <h3 className="proj-card-title">{props.title}</h3>
        <button className="proj-card-button">APPLY TO PROJECT</button>
      </div>
    </>
  );
}
