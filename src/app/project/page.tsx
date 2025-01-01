import { ProjectCard } from '@/components/project-card';
import projects, { ProjectInterface } from '@/data/projects';

export default function Project() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-gray-700 dark:text-gray-300 text-3xl font-bold mb-8">
        My Projects
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project: ProjectInterface) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}