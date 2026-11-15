import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projectCategories } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectCategories
    .flatMap((category) => category.projects)
    .find((item) => item.slug === slug);
  const category = projectCategories.find((item) =>
    item.projects.some((projectItem) => projectItem.slug === slug),
  );

  if (!project) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-20">
        <p className="text-sm font-semibold text-indigo-600">404</p>
        <h1 className="mt-3 text-3xl font-bold text-gray-950">Project not found</h1>
        <Link className="mt-6 inline-block text-indigo-600 underline" to="/#projects">
          Back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-slate-50">
      <article className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <Link
          className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 hover:text-indigo-900"
          to="/#projects"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to projects
        </Link>

        <header className="mt-10">
          <p className="text-sm font-semibold text-indigo-600">
            {category?.title ?? "Project"}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 md:text-5xl">
            {project.name}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            {project.description}
          </p>
          {project.websiteHref && (
            <a
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
              href={project.websiteHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
        </header>

        <img
          className="mt-10 aspect-[16/10] w-full rounded-lg border border-gray-200 object-cover shadow-sm"
          src={project.thumbnail}
          alt={project.thumbnailAlt}
        />

        <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(220px,1fr)]">
          <section>
            <h2 className="text-xl font-bold text-gray-950">Overview</h2>
            <p className="mt-3 leading-7 text-gray-600">{project.description}</p>
            {project.company && (
              <p className="mt-4 text-sm text-gray-600">
                Company: {project.company.name}
              </p>
            )}
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-950">Technologies</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <li
                  className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700"
                  key={technology}
                >
                  {technology}
                </li>
              ))}
            </ul>
          </section>

          {project.contributions && (
            <section className="md:col-span-2">
              <h2 className="text-xl font-bold text-gray-950">My Contribution</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-gray-600">
                {project.contributions.map((contribution) => (
                  <li key={contribution}>{contribution}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {project.screenshots && project.screenshots.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-950">Admin Panel Screenshots</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {project.screenshots.map((screenshot) => (
                <figure
                  className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
                  key={screenshot.src}
                >
                  <img
                    className="block h-auto w-full"
                    src={screenshot.src}
                    alt={screenshot.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="border-t border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">
                    {screenshot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
