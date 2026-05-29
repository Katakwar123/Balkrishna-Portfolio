import FadeIn from '../animations/FadeIn';

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <FadeIn className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="heading-secondary gradient-text mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lightText text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </FadeIn>
  );
};

export default SectionTitle;
