import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const SkillCard = ({ category, items, icon, index }) => {
  const IconComponent = Icons[icon] || Icons.Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="card card-hover bg-card group"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-gradient-primary rounded-xl group-hover:scale-110 transition-transform">
          <IconComponent className="text-white" size={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-3 text-text">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {items.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-accent/20 text-text rounded-full text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
