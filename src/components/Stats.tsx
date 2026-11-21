import React from "react";
import { motion } from "framer-motion";

export const Stats: React.FC = () => {
  const stats = [
    { number: "25+", label: "Happy Clients", highlighted: false },
    { number: "88", label: "Projects Completed", highlighted: true }, // Orange box as in reference
    { number: "15+", label: "Design Awards", highlighted: false },
    { number: "03+", label: "Years Experience", highlighted: false },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`stat-card ${stat.highlighted ? "highlighted" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

