import { GraduationCap, MapPin, UserRound } from 'lucide-react';
import { education, personalInfo } from '../../data/portfolioData';
import FadeIn from '../animations/FadeIn';
import SectionTitle from '../ui/SectionTitle';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          title="About Me"
          subtitle="A quick look at my background and goals"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <FadeIn className="lg:col-span-2 card bg-background">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-xl bg-gradient-primary text-white">
                <UserRound size={24} />
              </div>
              <h3 className="text-2xl font-bold text-text">Profile</h3>
            </div>
            <p className="text-lightText text-lg leading-relaxed">
              {personalInfo.bio}
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="card bg-background">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-xl bg-gradient-primary text-white">
                <MapPin size={24} />
              </div>
              <h3 className="text-2xl font-bold text-text">Location</h3>
            </div>
            <p className="text-lightText">{personalInfo.location}</p>
            <p className="text-lightText mt-4">
              Open to frontend internships and entry-level developer roles.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:col-span-3 card bg-background">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-xl bg-gradient-primary text-white">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-text">Education</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-lightText">Degree</p>
                <p className="font-semibold text-text">{education.degree}</p>
              </div>
              <div>
                <p className="text-sm text-lightText">Field</p>
                <p className="font-semibold text-text">{education.field}</p>
              </div>
              <div>
                <p className="text-sm text-lightText">University</p>
                <p className="font-semibold text-text">{education.university}</p>
              </div>
              <div>
                <p className="text-sm text-lightText">Status</p>
                <p className="font-semibold text-text">{education.status}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
