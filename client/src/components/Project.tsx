import { ArrowUpRight } from "lucide-react";

export type ProjectData = {
  name: string;
  description: string;
  href: string;
  websiteHref?: string;
  thumbnail: string;
  thumbnailAlt: string;
  technologies: string[];
};

type ProjectProps = {
  project: ProjectData;
};

export default function Project({ project }: ProjectProps) {
  return (
    <div className="project-card-shell">
      <a className="project-card-link" href={project.href}>
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
            <span className="project-card-action">
              View Details <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          </div>
        </article>
      </a>
      {project.websiteHref && (
        <a
          className="project-website-link"
          href={project.websiteHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      )}
    </div>
  );
}