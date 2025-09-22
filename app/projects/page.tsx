import ProjectCard from "@/components/project-card";
import { projectsData } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of innovative solutions and creative works that
            demonstrate my expertise and passion for technology.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Empty State */}
        {projectsData.length <= 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-600 text-6xl mb-4">
              📁
            </div>
            <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-400 mb-2">
              No projects yet
            </h3>
            <p className="text-gray-400 dark:text-gray-500">
              Projects will be displayed here once they are added.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export const metadata = {
  title: "Projects - My Portfolio",
  description:
    "Explore my portfolio of innovative projects and creative solutions.",
};
