"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const SkillGroup = ({ title, items }) => (
    <motion.div variants={itemVariants} className="flex flex-col gap-5">
      <h3 className="text-xl font-medium text-foreground">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border-color rounded-full cursor-default transition-all duration-300 hover:border-accent hover:scale-105 hover:shadow-[0_0_20px_rgba(124,154,126,0.3)]"
          >
            <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />
            <span className="text-sm font-semibold text-secondary-text">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-16 max-w-5xl mx-auto"
        >
          <div className="flex flex-col gap-4 text-center items-center">
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="h-[1px] w-12 bg-accent/50" />
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">/ Skills & Tools</span>
              <div className="h-[1px] w-12 bg-accent/50" />
            </motion.div>
            <motion.h2 variants={itemVariants} className="font-display text-4xl md:text-5xl text-foreground">
              The tools I work with.
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <SkillGroup title="Frontend" items={skills.frontend} />
            <SkillGroup title="Backend" items={skills.backend} />
            <SkillGroup title="Tools & Others" items={skills.tools} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
