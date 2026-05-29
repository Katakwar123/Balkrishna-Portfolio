import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experience, certifications } from '../../data/portfolioData';
import SectionTitle from '../ui/SectionTitle';
import FadeIn from '../animations/FadeIn';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-custom">
        <SectionTitle
          title="Experience & Certifications"
          subtitle="My professional journey and continuous learning"
        />

        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text mb-8 text-center">
            Work Experience
          </h3>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <FadeIn key={exp.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="card bg-white relative pl-8 border-l-4 border-primary"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-3 top-6 w-6 h-6 bg-primary rounded-full border-4 border-background" />

                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-text mb-2">
                        {exp.title}
                      </h4>
                      <p className="text-primary font-semibold text-lg">
                        {exp.company}
                      </p>
                    </div>
                    <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-lightText mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>
                        {exp.startDate} - {exp.endDate} ({exp.duration})
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-lightText mb-4">{exp.description}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-lightText"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-accent/20 text-text rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-text mb-8 text-center">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <FadeIn key={cert.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="card bg-white text-center"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="text-white" size={28} />
                  </div>
                  <h4 className="font-bold text-text mb-2">{cert.name}</h4>
                  <p className="text-primary text-sm font-medium mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-lightText text-sm">{cert.date}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
