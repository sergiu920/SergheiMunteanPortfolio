import { useId, useRef, type RefObject } from "react";
import { ArrowUpRight, X } from "lucide-react";
import type { ProjectData } from "./Project";

type ProjectContributionsDialogProps = {
  project: ProjectData;
  dialogRef?: RefObject<HTMLDialogElement | null>;
  showButton?: boolean;
};

export default function ProjectContributionsDialog({
  project,
  dialogRef: externalDialogRef,
  showButton = true,
}: ProjectContributionsDialogProps) {
  const internalDialogRef = useRef<HTMLDialogElement>(null);
  const dialogRef = externalDialogRef ?? internalDialogRef;
  const titleId = useId();

  return (
    <>
      {showButton && (
        <button
          className="project-card-action project-card-action--button"
          type="button"
          aria-haspopup="dialog"
          aria-label={`View my contributions to ${project.name}`}
          onClick={() => dialogRef.current?.showModal()}
        >
          View My Contributions <ArrowUpRight size={16} aria-hidden="true" />
        </button>
      )}

      <dialog
        ref={dialogRef}
        className="fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100vw-2rem)] max-w-3xl overflow-y-auto overscroll-contain rounded-xl border-0 bg-white p-0 text-gray-900 shadow-2xl backdrop:bg-gray-950/60"
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            event.currentTarget.close();
          }
        }}
      >
        <div className="p-6 sm:p-8">
          <header className="flex items-start justify-between gap-6">
            <div>
              {project.company && (
                <p className="text-sm font-semibold text-indigo-600">
                  {project.company.name}
                </p>
              )}
              <h2 id={titleId} className="mt-2 text-2xl font-bold text-gray-950">
                {project.name}
              </h2>
            </div>
            <button
              className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-2 focus-visible:outline-indigo-600"
              type="button"
              aria-label={`Close ${project.name} contributions`}
              onClick={() => dialogRef.current?.close()}
            >
              <X size={20} aria-hidden="true" />
            </button>
          </header>

          <div className="mt-8 space-y-8">
            <section>
              <p className="mt-3 leading-7 text-gray-600">{project.description}</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-950">My Contributions</h3>
              {project.contributions?.length ? (
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-gray-600">
                  {project.contributions.map((contribution) => (
                    <li key={contribution}>{contribution}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 leading-7 text-gray-600">
                  Contribution details have not been added yet.
                </p>
              )}
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-950">Technical Stack</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <li
                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm text-gray-700"
                    key={technology}
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </dialog>
    </>
  );
}
