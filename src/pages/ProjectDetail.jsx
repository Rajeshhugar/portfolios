import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
);
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);
const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
);

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] mt-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Project not found</h2>
        <Link to="/projects" className="text-teal-600 hover:underline flex items-center gap-2"><ArrowLeftIcon /> Back to Projects</Link>
      </div>
    );
  }

  return (
    <section className="py-20 bg-white dark:bg-slate-900 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8 flex items-center text-slate-500 dark:text-slate-400">
          <Link to="/" className="hover:text-teal-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/projects" className="hover:text-teal-600 transition-colors">Projects</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 dark:text-white font-medium">{project.title}</span>
        </nav>

        {/* Hero */}
        <div className="relative rounded-2xl overflow-hidden mb-12 shadow-xl">
          <div className="h-64 sm:h-96 bg-slate-200 dark:bg-slate-800">
            <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop'; }} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <span className="inline-flex items-center rounded-md bg-teal-600 text-white px-3 py-1 text-xs font-semibold mb-3">{project.category}</span>
            <h1 className="text-3xl sm:text-5xl font-bold text-white">{project.title}</h1>
            <p className="text-lg text-slate-300 mt-2 max-w-2xl">{project.subtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center"><span className="w-2 h-8 bg-teal-600 rounded-full mr-3"></span>Project Overview</h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">{project.overview}</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center"><span className="w-2 h-8 bg-teal-600 rounded-full mr-3"></span>The Challenge</h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">{project.problem}</p>
            </div>

            {/* System Architecture */}
            {(project.systemArchitecture || project.systemArchitectureImage) && (
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center"><span className="w-2 h-8 bg-teal-600 rounded-full mr-3"></span>System Architecture</h2>
                {project.systemArchitectureImage ? (
                  <img src={project.systemArchitectureImage} alt="Architecture" className="rounded-xl w-full" />
                ) : (
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 overflow-x-auto">
                    {project.systemArchitecture.map((step, idx) => (
                      <React.Fragment key={step.id}>
                        <div className="flex-1 min-w-[120px] bg-teal-100 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-600 p-4 rounded-xl text-center">
                          <p className="font-bold text-slate-900 dark:text-white text-sm">{step.title}</p>
                          <p className="text-teal-700 dark:text-teal-300 text-xs mt-1">{step.subtitle}</p>
                        </div>
                        {idx < project.systemArchitecture.length - 1 && <div className="text-teal-500 hidden md:block"><ArrowRightIcon /></div>}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Key Outcomes */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Key Outcomes</h3>
              <div className="grid grid-cols-1 gap-6">
                {project.keyAchievements.map((a, idx) => (
                  <div key={idx} className="text-center border-b border-slate-200 dark:border-slate-700 pb-4 last:border-0 last:pb-0">
                    <p className="text-3xl font-bold text-teal-600 dark:text-teal-400">{a.value}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{a.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span key={tech} className="inline-flex items-center rounded-md bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-600 px-3 py-1 text-sm font-medium">{tech}</span>
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
