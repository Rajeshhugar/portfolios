import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ArrowRightIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

const ProjectsOverview = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">All Projects</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">A comprehensive look at my Machine Learning, GenAI, and Data Science solutions.</p>
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full mt-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <Link key={project.id} to={`/projects/${project.id}`} className="group block bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-700">
              <div className="h-48 overflow-hidden bg-slate-200 dark:bg-slate-700">
                <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'; }} />
              </div>
              <div className="p-6">
                <span className="inline-flex items-center rounded-md border border-transparent bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-2.5 py-0.5 text-xs font-semibold mb-3">{project.category}</span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 line-clamp-2">{project.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">{project.overview}</p>
                <div className="flex items-center text-teal-600 dark:text-teal-400 font-medium group-hover:underline text-sm">
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
