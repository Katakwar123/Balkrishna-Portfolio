import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((value) => (value === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className="portfolio-nav fixed inset-x-0 top-0 z-50 backdrop-blur border-b">
      <nav className="container-custom px-4 md:px-8 lg:px-16 h-16 flex items-center justify-between">
        <a href="#home" className="font-display font-bold text-xl text-text">
          {personalInfo.name.split(' ')[0]}
          <span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="p-2 text-text hover:text-primary transition-colors"
            aria-label="Toggle dark and light theme"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          <button
            type="button"
            className="md:hidden p-2 text-text"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-card border-t border-primary/10 px-4 py-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-text font-medium hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
