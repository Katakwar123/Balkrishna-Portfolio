import { projects } from '../../data/portfolioData';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of projects showcasing my skills and creativity"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
