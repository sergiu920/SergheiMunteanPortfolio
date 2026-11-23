import Project from "./Project";
import { projectCategories } from "../data/projects";

const experience = [
  {
    id: "experience-filip-net-srl",
    role: "Full-Stack Developer (PHP)",
    company: "Filip NET SRL",
    period: "Feb 2025 – Apr 2026",
    location: "Remote",
  },
  {
    id: "experience-subscribfy",
    role: "Full-Stack Developer (Laravel, Shopify)",
    company: "Subscribfy",
    period: "Apr 2024 – Dec 2024",
    location: "Timișoara",
  },
  {
    id: "experience-oceano-mercado-srl",
    role: "Full-Stack Developer (PHP, React)",
    company: "OCEANO MERCADO SRL",
    period: "Feb 2023 – Mar 2024",
    location: "Remote",
  },
  {
    id: "experience-ctif",
    role: "Full-Stack Developer (Laravel, Vue.js)",
    company: "CTIF",
    period: "Oct 2018 – Feb 2023",
    location: "Chișinău",
  },
];

const professionalProjects =
  projectCategories.find(
    (category) => category.title === "Professional Experience Projects",
  )?.projects ?? [];

export default function Experience() {
  return (
    <section id="experience" className="experience-section scroll-mt-16" aria-labelledby="experience-title">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        <div className="experience-heading">
          <div>
            <p className="experience-eyebrow">Career</p>
            <h2 id="experience-title" className="mt-3 text-3xl font-bold text-gray-950 md:text-4xl">
              Professional Experience Projects
            </h2>
          </div>
          <p className="experience-intro">
            Eight years building and maintaining web applications across e-commerce,
            enterprise, and public-sector platforms.
          </p>
        </div>

        <div className="experience-list">
          {experience.map((entry) => {
            const companyProjects = professionalProjects.filter(
              (project) => project.company?.name === entry.company,
            );

            return (
              <article className="experience-entry" id={entry.id} key={entry.company}>
                <div className="experience-entry-heading">
                  <div>
                    <h3>{entry.company}</h3>
                    <p className="experience-company">{entry.role}</p>
                  </div>
                  <div className="experience-meta">
                    <p className="experience-period">{entry.period}</p>
                    <p className="experience-location">{entry.location}</p>
                  </div>
                </div>

                {companyProjects.length > 0 && (
                  <div className="projects-grid experience-projects-grid">
                    {companyProjects.map((project) => (
                      <Project
                        key={project.name}
                        project={project}
                        actionLabel="View My Contributions"
                        showContributionDialog
                        hideCompany
                      />
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}