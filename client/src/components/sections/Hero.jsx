import { motion } from 'framer-motion';
import { ArrowDown, Github, Instagram, Linkedin } from 'lucide-react';
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
          className="w-full h-full object-cover object-[72%_42%] md:object-[68%_42%]"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="hero-scrim absolute inset-0" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-14 text-white">
        <div className="min-h-[calc(100vh-4rem)] flex items-center py-16">
          <div className="w-full max-w-xl lg:max-w-lg">
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
              className="text-4xl md:text-6xl font-display font-bold mb-5"
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
                  className={
                    !button.primary
                      ? 'border-white text-white hover:bg-white hover:text-text'
                      : ''
                  }
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
              <a
                href={personalInfo.links.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Instagram />
              </a>
            </motion.div>
          </div>
        </div>
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
