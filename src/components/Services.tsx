import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Layout, Database, ShieldCheck, Cpu } from "lucide-react";

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Layout size={26} />,
      title: "Frontend Engineering",
      desc: "Responsive, dynamic Single Page Applications built with React, TypeScript, and modern state architectures.",
    },
    {
      icon: <Server size={26} />,
      title: "Spring Boot Backends",
      desc: "Robust REST & GraphQL microservices engineered with Spring Boot, Java, secure JWT auth, and clean layering.",
    },
    {
      icon: <Database size={26} />,
      title: "Database Architecture",
      desc: "High-performance relational and NoSQL schemas using PostgreSQL, Oracle DB, and MongoDB with indexing optimization.",
    },
    {
      icon: <Cpu size={26} />,
      title: "Microservices & APIs",
      desc: "Scalable distributed backends, message brokers, and enterprise API gateways built for high concurrency.",
    },
    {
      icon: <ShieldCheck size={26} />,
      title: "Security & Clean Code",
      desc: "Comprehensive testing, secure coding practices, role-based access control, and modular enterprise patterns.",
    },
    {
      icon: <Code size={26} />,
      title: "Full-Stack Solutions",
      desc: "End-to-end management systems and modern commerce platforms delivered from initial blueprint to cloud deployment.",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header-center">
          <span className="section-tag">What I Offer</span>
          <h2>Our Services</h2>
          <p>
            Specialized in crafting modern web solutions with rock-solid backends
            and engaging user experiences.
          </p>
        </div>

        <div className="services-grid">
          {services.map((item, index) => (
            <motion.div
              key={item.title}
              className="service-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="service-icon">{item.icon}</div>
              <h3 className="service-title">{item.title}</h3>
              <p className="service-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

