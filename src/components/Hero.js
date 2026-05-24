"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const ROLES = [
  "Full Stack Developer",
  "React Specialist",
  "Next JS Expert",
  "Finest Backend",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentRole = ROLES[roleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else {
        setCurrentText(
          currentRole.substring(0, currentText.length + (isDeleting ? -1 : 1)),
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, roleIndex]);

  const name = "SHIHAB";
  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg pt-20"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-border-color bg-background/60 backdrop-blur-md mb-8 shadow-sm"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
          </span>
          <span className="text-sm font-semibold text-secondary-text">
            👋 Available for work
          </span>
        </motion.div>

        <motion.h1
          variants={nameVariants}
          initial="hidden"
          animate="visible"
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight mb-6 text-foreground leading-[1.1] max-w-full overflow-hidden whitespace-nowrap text-ellipsis px-2 sm:px-0"
        >
          {name.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="h-10 md:h-12 mb-8"
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl text-secondary-text font-medium flex items-center justify-center">
            {currentText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-0.75 h-7 md:h-9 bg-accent ml-2"
            />
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-lg md:text-xl text-secondary-text max-w-2xl mb-12 leading-relaxed"
        >
          I craft clean, fast, and scalable web experiences that users love.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-accent text-white dark:text-background font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-accent/20 flex items-center justify-center"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-white dark:hover:text-background transition-colors flex items-center justify-center"
          >
            Let&apos;s Talk
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="p-4 rounded-full border border-border-color bg-background/50 backdrop-blur-md text-secondary-text hover:text-accent transition-colors block"
        >
          <ArrowDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
}
