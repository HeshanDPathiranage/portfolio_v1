import React from "react";
import { motion } from "framer-motion";

export interface SkillItem {
  name: string;
  percentage: number;
}

interface SkillBarProps {
  skills?: SkillItem[];
}

export const defaultSkills: SkillItem[] = [
  { name: "React", percentage: 90 },
  { name: "Spring Boot", percentage: 88 },
  { name: "Golang", percentage: 75 },
  { name: "Oracle DB", percentage: 82 },
];

export const SkillBar: React.FC<SkillBarProps> = ({ skills = defaultSkills }) => {
  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div className="skill-bar-item" key={skill.name}>
          <div className="skill-bar-header">
            <span className="skill-bar-title">{skill.name}</span>
            <span className="skill-bar-percentage">{skill.percentage}%</span>
          </div>

          <div className="skill-track">
            <motion.div
              className="skill-fill"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.percentage}%` }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1.1,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillBar;

