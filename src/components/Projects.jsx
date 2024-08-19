// src/components/Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

const Projects = () => {
  return (
    <main className="dark:bg-black flex-auto">
    <div className="sm:px-8 mt-16 sm:mt-32">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <header className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                Things I’ve made trying to put my dent in the universe.
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I’ve worked on many projects as a developer for <strong>Yanvision</strong> , some of which I developed entirely from scratch using Wagtail CMS and Django, while others I contributed significantly to as a full-stack developer. These are the ones I’m most proud of, showcasing my ability to create and enhance complex web applications.
              </p>
            </header>
            <div className="mt-16 sm:mt-20">
              <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  );
};

export default Projects;
