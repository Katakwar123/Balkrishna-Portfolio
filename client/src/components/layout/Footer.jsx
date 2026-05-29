import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-text text-white py-10 px-4 md:px-8 lg:px-16">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display font-bold text-xl">{personalInfo.name}</p>
          <p className="text-white/70">{personalInfo.title}</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full bg-white/10 hover:bg-primary transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href={personalInfo.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full bg-white/10 hover:bg-primary transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="p-2 rounded-full bg-white/10 hover:bg-primary transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
