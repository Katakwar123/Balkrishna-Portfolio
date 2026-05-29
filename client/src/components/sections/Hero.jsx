import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { heroConfig, personalInfo } from '../../data/portfolioData';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0">
        <img
          src={heroConfig.backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-text/70" />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-8 lg:px-16 text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl md:text-2xl text-accent mb-4 font-medium"
        >
          {heroConfig.greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold mb-5 max-w-4xl"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold mb-4"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white/80 text-lg max-w-2xl mb-8"
        >
          {personalInfo.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center gap-4"
        >
          {heroConfig.ctaButtons.map((button) => (
            <Button
              key={button.text}
              href={button.link}
              download={button.download}
              variant={button.primary ? 'primary' : 'outline'}
              className={!button.primary ? 'border-white text-white hover:bg-white hover:text-text' : ''}
            >
              {button.text}
            </Button>
          ))}
          <a
            href={personalInfo.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <Github />
          </a>
          <a
            href={personalInfo.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <Linkedin />
          </a>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce"
      >
        <ArrowDown />
      </a>
    </section>
  );
};

export default Hero;
