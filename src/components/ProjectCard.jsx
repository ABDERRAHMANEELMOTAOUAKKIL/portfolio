import React from 'react';

const ProjectCard = ({ name, description, link, imgSrc, tools = [] }) => {
  return (
    <li className="group relative flex flex-col items-start">
    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-zinc-900/5 dark:bg-zinc-800">
      <img alt={name} className="h-8 w-8" src={imgSrc} />
    </div>
    <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50"></div>
      <a href={link}>
        <span className="relative z-10">{name}</span>
      </a>
    </h2>
    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        <strong>Tools:</strong> {tools.join(', ')}
      </p>
    <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none">
        <path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" fill="currentColor"></path>
      </svg>
      <a href={link}  className="ml-2 cursor-pointer" target="_blank"  rel="noreferrer" >Visit site</a>
    </p>
  </li>

  );
};

export default ProjectCard;
