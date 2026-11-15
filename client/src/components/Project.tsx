import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export type ProjectData = {
  name: string;
  description: string;
  href: string;
  slug?: string;
  websiteHref?: string;
  company?: {
    name: string;
    experienceId: string;
  };
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
      <article className="project-card">
        <Link
          className="project-card-link"
          to={project.href}
          aria-label={`View details for ${project.name}`}
        />
        <div className="project-card-body">
          <div className="project-preview">
            <img src={project.thumbnail} alt={project.thumbnailAlt} />
          </div>
          <div className="project-card-content">
            <h3>{project.name}</h3>
            <p className="project-description">{project.description}</p>
            {project.company && (
              <p className="project-company">
                Company:{" "}
                <a href={`#${project.company.experienceId}`}>
                  {project.company.name}
                </a>
              </p>
            )}
            <ul className="project-technologies" aria-label={`${project.name} technologies`}>
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
            <span className="project-card-action">
              View Details <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          </div>
        </div>
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
      </article>
    </div>
  );
}