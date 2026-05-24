"use client";

import { motion } from "framer-motion";
import { Terminal, Code2 } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const codeSnippet = [
    { text: "const developer = {", color: "text-[#7C9A7E]" },
    { text: "  name: 'Shihab',", color: "text-[#F0EDE4]" },
    { text: "  role: 'Full Stack Developer',", color: "text-[#F0EDE4]" },
    {
      text: "  passion: 'Building scalable web apps',",
      color: "text-[#F0EDE4]",
    },
    {
      text: "  skills: ['React', 'Next.js', 'Node.js'],",
      color: "text-[#F0EDE4]",
    },
    { text: "  coffeeIntake: 'High',", color: "text-[#F0EDE4]" },
    { text: "  isAvailable: true,", color: "text-[#7C9A7E]" },
    { text: "};", color: "text-[#7C9A7E]" },
    { text: "", color: "" },
    { text: "developer.buildAwesomeThings();", color: "text-[#9A9A8A]" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Side: Text */}
          <div className="flex flex-col gap-6">
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                / About Me
              </span>
              <div className="h-px w-12 bg-accent/50" />
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="font-display text-4xl md:text-5xl text-foreground leading-tight"
            >
              Crafting digital experiences with purpose.
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="space-y-4 text-secondary-text text-lg"
            >
              <p>
                I&apos;m a full-stack developer who loves bridging the gap
                between elegant user interfaces and robust backend
                architectures. With a strong foundation in modern web
                technologies, I build scalable applications that solve
                real-world problems.
              </p>
              <p>
                Whether it&apos;s creating responsive layouts with Tailwind CSS,
                building interactive UIs with Framer Motion, or architecting
                APIs with Node.js, I thrive on the challenge of turning complex
                requirements into seamless digital experiences.
              </p>
            </motion.div>

            {/* Stats */}
            {/* <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6"
            >
              {[
                { label: "Years Exp", value: "3+" },
                { label: "Projects", value: "20+" },
                { label: "Happy Clients", value: "10+" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-card border border-border-color hover:border-accent/50 transition-colors"
                >
                  <div className="text-3xl font-display text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-secondary-text font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div> */}
          </div>

          {/* Right Side: Visual */}
          <motion.div
            variants={itemVariants}
            className="relative h-full min-h-100 w-full lg:ml-auto max-w-lg mt-10 lg:mt-0"
          >
            <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-transparent rounded-3xl transform rotate-3 scale-105" />
            <div className="relative h-full w-full bg-[#1A2420] border border-border-color rounded-3xl overflow-hidden flex flex-col shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0F1512] border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-2 text-white/40 text-xs font-mono">
                  <Terminal size={14} />
                  <span>developer.js</span>
                </div>
                <Code2 size={14} className="text-white/40" />
              </div>

              {/* Code Content */}
              <div className="p-6 overflow-x-auto overflow-y-hidden flex-1 font-mono text-sm leading-relaxed">
                {codeSnippet.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                    className="flex gap-4"
                  >
                    <span className="text-white/20 select-none w-4 text-right">
                      {i + 1}
                    </span>
                    <span className={`whitespace-pre ${line.color}`}>
                      {line.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
