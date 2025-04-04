
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { use } from "react"; // Import de use
import projectBox from "@/helper/projectBox";

const ProjectDetails = ({ params }) => {
  const router = useRouter();
  // Utilisation de use() pour unwrap les params
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;

  // Convertir l'ID en nombre
  const projectId = parseInt(id);

  // Trouver le projet correspondant dans le tableau
  const project = projectBox.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 pt-[10rem] pb-[5rem] flex items-center justify-center">
        <p className="text-white text-xl">Project not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 pt-[10rem] pb-[5rem]">
      <h1 className="text-white text-4xl font-extrabold text-center pb-20 ">Project Description</h1>
      <div className="container mx-auto px-4">

        <div className="max-w-4xl mx-auto bg-slate-800 shadow-xl rounded-xl overflow-hidden">
          {/* Image header with overlay */}
          <div className="relative h-64 w-full">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {project.name}
                </h1>
              </div>
            </div>
          </div>

          {/* Project content */}
          <div className="p-6 md:p-8 space-y-6">
            {/* Industry & Project Type */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-sm font-semibold text-amber-400 uppercase tracking-wider">
                  Industry
                </h2>
                <p className="mt-1 text-white">{project.industry}</p>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-amber-400 uppercase tracking-wider">
                  Project Type
                </h2>
                <p className="mt-1 text-white">{project.projet}</p>
              </div>
            </div>

            {/* Problem Section */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-3 border-b border-slate-700 pb-2">
                The Problem
              </h2>
              <p className="text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Solution Section */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-3 border-b border-slate-700 pb-2">
                The Solution
              </h2>
              <p className="text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* My Role */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-3 border-b border-slate-700 pb-2">
                My Role
              </h2>
              <p className="text-slate-300 leading-relaxed">
                {project.role}
              </p>
            </div>

            {/* Links */}
            {(project.github || project.link) && (
              <div>
                <h2 className="text-xl font-semibold text-white mb-3 border-b border-slate-700 pb-2">
                  Links
                </h2>
                <div className="flex flex-wrap gap-4">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-red-700 hover:bg-slate-600 text-white rounded-md transition-colors flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      View on GitHub
                    </Link>
                  )}
                  {project.link && (
                    <Link
                      href={`https://${project.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-md transition-colors flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                      </svg>
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            )}

            {/* Back button */}
            <button
              onClick={() => router.back()}
              className="mt-6 px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-md transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;