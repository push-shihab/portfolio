"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { Linkedin, Github } from "./Icons";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      e.target.reset();
      setTimeout(() => setFormStatus("idle"), 5000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-24 bg-card/30 border-t border-border-color">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-6 mb-16 text-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="h-[1px] w-12 bg-accent/50" />
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">/ Contact</span>
            <div className="h-[1px] w-12 bg-accent/50" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl text-foreground"
          >
            Let's work together.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-secondary-text text-lg max-w-2xl mx-auto"
          >
            Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you within 24 hours.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-5 gap-12 lg:gap-8 max-w-5xl mx-auto"
        >
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <motion.a
              variants={itemVariants}
              href="mailto:shihabfamily539@gmail.com"
              className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-3xl bg-card border border-border-color hover:border-accent transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-background border border-border-color flex items-center justify-center text-accent group-hover:scale-110 transition-transform shadow-sm">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-sm text-secondary-text mb-1">Email</div>
                <div className="text-foreground font-medium break-all sm:break-normal">shihabfamily539@gmail.com</div>
              </div>
            </motion.a>

            <motion.a
              variants={itemVariants}
              href="#"
              className="flex items-center gap-6 p-6 rounded-3xl bg-card border border-border-color hover:border-accent transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-background border border-border-color flex items-center justify-center text-accent group-hover:scale-110 transition-transform shadow-sm">
                <Linkedin size={24} />
              </div>
              <div>
                <div className="text-sm text-secondary-text mb-1">LinkedIn</div>
                <div className="text-foreground font-medium">Connect with me</div>
              </div>
            </motion.a>

            <motion.a
              variants={itemVariants}
              href="#"
              className="flex items-center gap-6 p-6 rounded-3xl bg-card border border-border-color hover:border-accent transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-background border border-border-color flex items-center justify-center text-accent group-hover:scale-110 transition-transform shadow-sm">
                <Github size={24} />
              </div>
              <div>
                <div className="text-sm text-secondary-text mb-1">GitHub</div>
                <div className="text-foreground font-medium">Follow my work</div>
              </div>
            </motion.a>
          </div>

          {/* Form */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-8 rounded-3xl bg-card border border-border-color shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground">Name</label>
                  <input required id="name" type="text" placeholder="John Doe" className="px-4 py-3.5 rounded-xl bg-background border border-border-color focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-foreground transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">Email</label>
                  <input required id="email" type="email" placeholder="john@example.com" className="px-4 py-3.5 rounded-xl bg-background border border-border-color focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-foreground transition-all" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-semibold text-foreground">Subject</label>
                <input required id="subject" type="text" placeholder="Project Inquiry" className="px-4 py-3.5 rounded-xl bg-background border border-border-color focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-foreground transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">Message</label>
                <textarea required id="message" rows="5" placeholder="Tell me about your project..." className="px-4 py-3.5 rounded-xl bg-background border border-border-color focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-foreground resize-none transition-all"></textarea>
              </div>
              
              <button
                type="submit"
                disabled={formStatus !== "idle"}
                className="mt-2 px-8 py-4 rounded-xl bg-accent text-white dark:text-background font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 shadow-md shadow-accent/20"
              >
                {formStatus === "idle" && (
                  <>Send Message <Send size={18} /></>
                )}
                {formStatus === "submitting" && "Sending..."}
                {formStatus === "success" && (
                  <><CheckCircle2 size={18} /> Message Sent!</>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
