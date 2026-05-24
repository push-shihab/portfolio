"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import { Github } from "./Icons";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              / Featured Work
            </span>
            <div className="h-px w-12 bg-accent/50" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-foreground"
          >
            Things I&apos;ve built.
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative flex flex-col p-8 rounded-3xl bg-card border border-border-color hover:border-accent transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-4xl font-display text-accent/50 group-hover:text-accent transition-colors">
                  {project.id}
                </span>
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    aria-label="GitHub Link"
                    className="text-secondary-text hover:text-foreground transition-colors p-2 rounded-full hover:bg-background"
                  >
                    <Github size={22} />
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    aria-label="Live Demo Link"
                    className="text-secondary-text hover:text-foreground transition-colors p-2 rounded-full hover:bg-background"
                  >
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>

              <h3 className="text-3xl font-display text-foreground mb-4">
                {project.title}
              </h3>
              <p className="text-secondary-text leading-relaxed mb-8 flex-1 text-lg line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border-color/50">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1.5 bg-background border border-border-color rounded-full text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
