import { motion } from 'framer-motion';
import clsx from 'clsx';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  download,
  onClick,
  className = '',
  icon: Icon,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseStyles =
    'btn font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-gradient-primary text-white hover:shadow-lg hover:-translate-y-0.5',
    outline: 'btn-outline',
    ghost: 'hover:bg-primary/10 text-primary',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-full',
    lg: 'px-8 py-4 text-lg rounded-full',
  };

  const classes = clsx(baseStyles, variants[variant], sizes[size], className);

  const ButtonContent = () => (
    <>
      {children}
      {Icon && <Icon size={20} />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        className={classes}
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        {...props}
      >
        <ButtonContent />
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      {...props}
    >
      <ButtonContent />
    </motion.button>
  );
};

export default Button;
