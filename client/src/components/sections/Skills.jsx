import { skills } from '../../data/portfolioData';
import SectionTitle from '../ui/SectionTitle';
import SkillCard from '../ui/Skillcard';

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container-custom">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="Technologies and tools I work with to bring ideas to life"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
