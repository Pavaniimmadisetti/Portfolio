import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import DateTimeDisplay from '../ui/DateTimeDisplay';

interface HeaderProps {
  setCurrentSection: (section: string) => void;
  currentSection: string;
}

const Header: React.FC<HeaderProps> = ({ setCurrentSection, currentSection }) => {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { title: 'Home', id: 'home' },
    { title: 'About', id: 'about' },
    { title: 'Projects', id: 'projects' },
    { title: 'Skills', id: 'skills' },
    { title: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm" role="banner">
      <nav className="container mx-auto px-6 py-4" aria-label="Main navigation">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-8 order-1">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold whitespace-nowrap"
              onClick={() => setCurrentSection('home')}
              aria-label="Go to home section"
            >
              <span className="text-gray-900 dark:text-white">Pavani's <span className="text-blue-500 dark:text-blue-400">Portfolio</span></span>
            </motion.button>

            <ul className="hidden md:flex space-x-6" role="menubar">
              {navItems.map((item) => (
                <li key={item.id} role="none">
                  <button
                    className={`py-2 relative whitespace-nowrap ${
                      currentSection === item.id
                        ? 'text-primary'
                        : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                    }`}
                    onClick={() => setCurrentSection(item.id)}
                    role="menuitem"
                    aria-current={currentSection === item.id ? 'page' : undefined}
                    aria-label={`Go to ${item.title} section`}
                  >
                    {item.title}
                    {currentSection === item.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        layoutId="underline"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4 order-2">
            <DateTimeDisplay />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 shrink-0"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
          </div>

          <div className="w-full md:hidden order-3">
            <ul className="flex flex-wrap justify-center gap-4" role="menubar">
              {navItems.map((item) => (
                <li key={item.id} role="none">
                  <button
                    className={`py-2 relative ${
                      currentSection === item.id
                        ? 'text-primary'
                        : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                    }`}
                    onClick={() => setCurrentSection(item.id)}
                    role="menuitem"
                    aria-current={currentSection === item.id ? 'page' : undefined}
                    aria-label={`Go to ${item.title} section`}
                  >
                    {item.title}
                    {currentSection === item.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        layoutId="underline-mobile"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
