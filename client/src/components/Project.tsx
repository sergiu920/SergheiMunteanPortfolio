export type ProjectData = {
  name: string;
  description: string;
  thumbnail: string;
  thumbnailAlt: string;
  technologies: string[];
};

type ProjectProps = {
  project: ProjectData;
};

export default function Project({ project }: ProjectProps) {
  return (
    <article className="project-card">
      <div className="project-preview">
        <img src={project.thumbnail} alt={project.thumbnailAlt} />
      </div>
      <div className="project-card-content">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="project-technologies" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}