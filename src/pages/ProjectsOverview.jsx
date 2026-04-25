import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ArrowRightIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);

const fallbackProjectImage = `${import.meta.env.BASE_URL}assets/overview.png`;

const ProjectsOverview = () => {
  return (
    <section className="mt-16 bg-white py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">All Projects</h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">A comprehensive look at my Machine Learning, GenAI, and Data Science solutions.</p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-teal-600" />
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`} className="group block overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800">
              <div className="h-48 overflow-hidden bg-slate-200 dark:bg-slate-700">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(event) => {
                    event.currentTarget.src = fallbackProjectImage;
                  }}
                />
              </div>
              <div className="p-6">
                <span className="mb-3 inline-flex items-center rounded-md border border-transparent bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-700 dark:bg-teal-900/30 dark:text-teal-300">{project.category}</span>
                <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="mb-4 line-clamp-3 text-sm text-slate-600 dark:text-slate-400">{project.overview}</p>
                <div className="flex items-center text-sm font-medium text-teal-600 group-hover:underline dark:text-teal-400">
                  View Project Details <ArrowRightIcon className="ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsOverview;
