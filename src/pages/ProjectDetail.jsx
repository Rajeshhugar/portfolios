import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);

const fallbackProjectImage = `${import.meta.env.BASE_URL}assets/overview.png`;

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((entry) => entry.id === Number.parseInt(id, 10));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="mt-16 flex min-h-[60vh] flex-col items-center justify-center">
        <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">Project not found</h2>
        <Link to="/projects" className="flex items-center gap-2 text-teal-600 hover:underline">
          <ArrowLeftIcon /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="mt-16 bg-white py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 flex items-center text-sm text-slate-500 dark:text-slate-400">
          <Link to="/" className="transition-colors hover:text-teal-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/projects" className="transition-colors hover:text-teal-600">Projects</Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-slate-900 dark:text-white">{project.title}</span>
        </nav>

        <div className="relative mb-12 overflow-hidden rounded-2xl shadow-xl">
          <div className="h-64 bg-slate-200 dark:bg-slate-800 sm:h-96">
            <img
              src={project.heroImage}
              alt={project.title}
              className="h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.src = fallbackProjectImage;
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <span className="mb-3 inline-flex items-center rounded-md bg-teal-600 px-3 py-1 text-xs font-semibold text-white">{project.category}</span>
            <h1 className="text-3xl font-bold text-white sm:text-5xl">{project.title}</h1>
            <p className="mt-2 max-w-2xl text-lg text-slate-300">{project.subtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-lg dark:border-slate-700 dark:bg-slate-800">
              <h2 className="mb-4 flex items-center text-2xl font-bold text-slate-900 dark:text-white"><span className="mr-3 h-8 w-2 rounded-full bg-teal-600" />Project Overview</h2>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">{project.overview}</p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-lg dark:border-slate-700 dark:bg-slate-800">
              <h2 className="mb-4 flex items-center text-2xl font-bold text-slate-900 dark:text-white"><span className="mr-3 h-8 w-2 rounded-full bg-teal-600" />The Challenge</h2>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">{project.problem}</p>
            </div>

            {(project.systemArchitecture || project.systemArchitectureImage) && (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-lg dark:border-slate-700 dark:bg-slate-800">
                <h2 className="mb-6 flex items-center text-2xl font-bold text-slate-900 dark:text-white"><span className="mr-3 h-8 w-2 rounded-full bg-teal-600" />System Architecture</h2>
                {project.systemArchitectureImage ? (
                  <img src={project.systemArchitectureImage} alt="Architecture" className="w-full rounded-xl" />
                ) : (
                  <div className="flex flex-col items-center justify-between gap-4 overflow-x-auto md:flex-row">
                    {project.systemArchitecture.map((step, index) => (
                      <React.Fragment key={step.id}>
                        <div className="min-w-[120px] flex-1 rounded-xl border border-teal-200 bg-teal-100 p-4 text-center dark:border-teal-600 dark:bg-teal-900/30">
                          <p className="text-sm font-bold text-slate-900 dark:text-white">{step.title}</p>
                          <p className="mt-1 text-xs text-teal-700 dark:text-teal-300">{step.subtitle}</p>
                        </div>
                        {index < project.systemArchitecture.length - 1 && <div className="hidden text-teal-500 md:block"><ArrowRightIcon /></div>}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-lg dark:border-slate-700 dark:bg-slate-800">
              <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">Key Outcomes</h3>
              <div className="grid grid-cols-1 gap-6">
                {project.keyAchievements.map((achievement) => (
                  <div key={`${achievement.value}-${achievement.label}`} className="border-b border-slate-200 pb-4 text-center last:border-0 last:pb-0 dark:border-slate-700">
                    <p className="text-3xl font-bold text-teal-600 dark:text-teal-400">{achievement.value}</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{achievement.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-lg dark:border-slate-700 dark:bg-slate-800">
              <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="inline-flex items-center rounded-md border border-teal-200 bg-teal-100 px-3 py-1 text-sm font-medium text-teal-700 dark:border-teal-600 dark:bg-teal-900/30 dark:text-teal-300">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
