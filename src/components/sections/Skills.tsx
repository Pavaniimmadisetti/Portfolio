import { motion } from 'framer-motion';
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJava, FaJs, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { SiBootstrap, SiMongodb, SiNextdotjs, SiPostgresql, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

interface Skill {
  name: string;
  Icon: React.ComponentType;
  color: string;
}

const skills: Skill[] = [
  { name: "HTML", Icon: FaHtml5, color: "text-[#E34F26]" },
  { name: "CSS", Icon: FaCss3Alt, color: "text-[#1572B6]" },
  { name: "JavaScript", Icon: FaJs, color: "text-[#F7DF1E]" },
  { name: "TypeScript", Icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "React", Icon: FaReact, color: "text-[#61DAFB]" },
  { name: "Next.js", Icon: SiNextdotjs, color: "text-[#000000] dark:text-white" },
  { name: "Node.js", Icon: FaNodeJs, color: "text-[#339933]" },
  { name: "Python", Icon: FaPython, color: "text-[#3776AB]" },
  { name: "Java", Icon: FaJava, color: "text-[#007396]" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Bootstrap", Icon: SiBootstrap, color: "text-[#7952B3]" },
  { name: "Git", Icon: FaGitAlt, color: "text-[#F05032]" },
  { name: "GitHub", Icon: FaGithub, color: "text-[#181717] dark:text-white" },
  { name: "MongoDB", Icon: SiMongodb, color: "text-[#47A248]" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "text-[#4169E1]" },
  { name: "VS Code", Icon: VscCode, color: "text-[#007ACC]" },
];

const Skills = () => {
  return (
    <section id="skills" className="section-container py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-primary-600 dark:text-primary-400">Skills</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-items-center px-4"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: index * 0.1
            }}
            whileHover={{ 
              scale: 1.2,
              transition: { duration: 0.2 }
            }}
            className="group w-20 h-20 flex flex-col items-center justify-center"
            title={skill.name}
          >
            <div className={`text-5xl ${skill.color} transition-transform duration-300 group-hover:scale-110`}>
              <skill.Icon />
            </div>
            <span className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
