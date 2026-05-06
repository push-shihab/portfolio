import { Github, Linkedin, Twitter } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-border-color">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center gap-6">
        <a href="#" className="font-display text-4xl font-bold text-accent">
          YN.
        </a>
        
        <div className="flex gap-6">
          <a href="#" className="text-secondary-text hover:text-accent transition-colors p-2">
            <Github size={24} />
          </a>
          <a href="#" className="text-secondary-text hover:text-accent transition-colors p-2">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-secondary-text hover:text-accent transition-colors p-2">
            <Twitter size={24} />
          </a>
        </div>
        
        <p className="text-secondary-text text-sm">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        
        <p className="text-xs text-secondary-text/70 mt-2">
          Built with ❤️ using Next.js & Framer Motion
        </p>
      </div>
    </footer>
  );
}
