"use client";

import { projectsData } from "@/lib/data";
import clsx from "clsx";
import Image from "next/image";

interface ProjectCardProps {
  project: (typeof projectsData)[number];
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a target="_blank" href={project.link}>
      <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Privacy Overlay for Private Projects */}
          {!project.link && (
            <>
              <div className="absolute inset-0 bg-gray-900 bg-opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-3xl mb-2">🔒</div>
                  <p className="text-sm font-medium">Private Project</p>
                  <p className="text-xs opacity-80 mt-1">Confidential</p>
                </div>
              </div>
            </>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />

          {/* Category Badge */}
          {/* <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full backdrop-blur-sm">
              {project.category}
            </span>
          </div> */}

          {/* View Project Button */}
          <div
            className={clsx(
              "absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300",
              !project.link && "hidden"
            )}
          >
            <button className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full font-medium text-sm shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              View Project →
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>
    </a>
  );
}
