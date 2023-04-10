import Link from 'next/link';

interface PropType {
  title: string
}

export default function ProjectCard(props: PropType) {
  return (
    <>
      <div className="proj-card">
        <h3 className="proj-card-title">{props.title}</h3>
        <button className="proj-card-button">APPLY TO PROJECT</button>
      </div>
    </>
  );
}
