import Project from "./Project";
import { projectCategories } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="projects-section scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        <div className="projects-heading">
          <div>
            <p className="text-sm font-semibold text-indigo-600">Projects I've Worked On</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-950 md:text-4xl">Projects</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
              Explore projects across freelance work, personal experiments, and professional experience.
            </p>
          </div>
        </div>

        <div className="projects-categories">
          {projectCategories.map((category) => (
            <section className={`projects-category projects-category--${category.color}`} key={category.title}>
              <div className="projects-category-header">
                <h3 className="projects-category-heading">{category.title}</h3>
                <span className="projects-category-label">{category.label}</span>
              </div>
              {category.description && (
                <p className="projects-category-description">{category.description}</p>
              )}
              <div className="projects-grid">
                {category.projects.map((project) => (
                  <Project
                    key={project.name}
                    project={project}
                    actionLabel={
                      category.title === "Professional Experience Projects"
                        ? "View My Contributions"
                        : "View Details"
                    }
                    showContributionDialog={
                      category.title === "Professional Experience Projects"
                    }
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
