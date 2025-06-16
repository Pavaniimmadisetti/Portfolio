import { motion } from 'framer-motion';

interface AboutProps {
  setCurrentSection: (section: string) => void;
}

const About: React.FC<AboutProps> = ({ setCurrentSection }) => {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary-600 dark:text-primary-400">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Motivated frontend developer with a solid foundation in HTML, CSS, JavaScript, and React.js, Bootstrap. Skilled in building responsive, user-friendly interfaces with a focus on accessibility and performance. Eager to contribute to collaborative development teams and grow within a dynamic frontend environment.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Currently pursuing my B.Tech in Information Technology at Bapatla Engineering College, I combine my academic knowledge with practical development experience to create impactful web solutions.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setCurrentSection('projects')}
                className="btn-primary inline-flex items-center justify-center"
              >
                View my work
              </button>
              <a 
                href="/Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="card">
              <h4 className="text-lg font-semibold mb-2">Experience & Education</h4>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <div className="border-l-2 border-primary-600 dark:border-primary-400 pl-4">
                  <p className="mb-2">
                    <strong className="text-primary-600 dark:text-primary-400">Web Development Intern</strong><br />
                    Externs Club (Virtual)<br />
                    April 2024 – May 2024
                  </p>
                  <ul className="list-disc list-inside ml-2 text-sm">
                    <li>Developed responsive web applications using React.js</li>
                    <li>Collaborated with team members in a virtual environment</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-primary-600 dark:border-primary-400 pl-4">
                  <p>
                    <strong className="text-primary-600 dark:text-primary-400">B.Tech in Information Technology</strong><br />
                    Bapatla Engineering College<br />
                    2022–2026 • CGPA: 8.6/10 (Pursuing)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
      
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
