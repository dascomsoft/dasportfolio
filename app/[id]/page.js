"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { use } from "react";
import projectBox from "@/helper/projectBox";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectDetails({ params }) {
  const router = useRouter();
  const { id } = use(params);

  const project = projectBox.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <p className="text-white">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 pt-28 pb-24 max-w-5xl">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative h-[500px] rounded-3xl overflow-hidden border border-slate-800"
        >
          <Image
            src={project.image}
            fill
            className="object-cover"
            alt={project.name}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                {project.name}
              </h1>
              <p className="text-slate-300 mt-2">
                {project.projet} • {project.industry}
              </p>
            </div>
          </div>
        </motion.div>

        {/* CONTENT */}
        <div className="mt-14 space-y-14">

          {/* PROBLEM */}
          <Section title="Problem" content={project.problem} />

          {/* SOLUTION */}
          <Section title="Solution" content={project.solution} />

          {/* ROLE */}
          <Section title="My Role" content={project.role} />

          {/* IMPACT 🔥 (NEW IMPORTANT) */}
          {project.impact && (
            <Section title="Impact" content={project.impact} highlight />
          )}

          {/* TECH STACK 🔥 */}
          {project.tech && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-cyan-400 text-xs uppercase tracking-[0.3em] mb-4">
                Tech Stack
              </h2>

              <div className="flex flex-wrap gap-3">
                {project.tech.split(" ").map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* ACTION BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 pt-6"
          >

            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className="px-5 py-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500 transition"
              >
                View Code
              </Link>
            )}

            {project.link && (
              <Link
                href={`https://${project.link}`}
                target="_blank"
                className="px-5 py-3 bg-cyan-500 rounded-xl shadow-lg shadow-cyan-500/30 hover:scale-105 transition"
              >
                Live Demo
              </Link>
            )}

          </motion.div>

          {/* BACK */}
          <motion.button
            onClick={() => router.back()}
            whileHover={{ x: -5 }}
            className="text-slate-400 hover:text-white mt-10 transition"
          >
            ← Back to projects
          </motion.button>

        </div>
      </div>
    </div>
  );
}

/* 🔥 REUSABLE SECTION COMPONENT */
function Section({ title, content, highlight }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-cyan-400 text-xs uppercase tracking-[0.3em]">
        {title}
      </h2>

      <p
        className={`mt-3 leading-relaxed ${
          highlight ? "text-white font-medium" : "text-slate-300"
        }`}
      >
        {content}
      </p>
    </motion.div>
  );
}