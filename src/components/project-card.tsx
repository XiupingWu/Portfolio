import { ProjectInterface } from '@/data/projects';
import Image from 'next/image';

export const ProjectCard = ({ project }: { project: ProjectInterface }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-52">
        {
          project.imageUrl && (
            <Image 
              src={project.imageUrl} 
              alt={project.title} 
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            />
          )
        }
      </div>
      <div className="p-6">
        <h3 className="text-gray-700 dark:text-gray-300 text-xl font-bold mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          {project.demoUrl && (
            <a 
              href={project.demoUrl}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
          {project.siteUrl && (
            <a 
              href={project.siteUrl}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
};