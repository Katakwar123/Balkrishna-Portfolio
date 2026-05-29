import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Button from './Button';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="card card-hover overflow-hidden group"
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden rounded-xl mb-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={e => {
            e.target.src =
              'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category Badge */}
        <span className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-sm font-semibold rounded-full">
          {project.category}
        </span>
      </div>

      {/* Project Info */}
      <div>
        <h3 className="text-2xl font-bold mb-3 text-text group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-lightText mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-background text-text text-sm rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.github && (
            <Button
              variant="outline"
              size="sm"
              href={project.github}
              icon={Github}
              className="flex-1"
            >
              Code
            </Button>
          )}
          {project.demo && (
            <Button
              variant="primary"
              size="sm"
              href={project.demo}
              icon={ExternalLink}
              className="flex-1"
            >
              Demo
            </Button>
          )}
          {!project.demo && !project.github && (
            <Button variant="ghost" size="sm" disabled className="flex-1">
              Coming Soon
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
