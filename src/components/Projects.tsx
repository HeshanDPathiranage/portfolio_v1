import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterTabs = ["All", "Full-Stack", "E-Commerce", "UI/UX"];

  // Mapping projects with thumbnails and categorized tags
  const portfolioItems = [
    {
      id: "01",
      title: "Theekshana Motors",
      category: "Full-Stack",
      tagCategory: "Management System",
      description:
        "Full-stack Garage Operations Management System with automated vehicle service tracking and digital job cards.",
      tags: ["React", "Spring Boot", "Java", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=800&q=80",
      link: "#",
      featured: true,
    },
    {
      id: "02",
      title: "BSTORE E-Commerce",
      category: "E-Commerce",
      tagCategory: "Retail Platform",
      description:
        "A responsive full-stack e-commerce platform built for a textile business, focused on smooth checkout flows and inventory syncing.",
      tags: ["React", "Spring Boot", "Stripe", "REST"],
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
      link: "#",
      featured: false,
    },
    {
      id: "03",
      title: "Avanzio Labs",
      category: "UI/UX",
      tagCategory: "Corporate Identity",
      description:
        "Corporate website and brand identity development featuring a modern, minimalist flat-design style and responsive UX.",
      tags: ["Full-stack", "UI/UX", "Modern Web"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      link: "https://www.avanziolabs.com/",
      featured: false,
    },
    {
      id: "04",
      title: "Distributed Microservices Hub",
      category: "Full-Stack",
      tagCategory: "Backend Architecture",
      description:
        "High-throughput microservices architecture with Spring Cloud, Docker orchestration, and reactive event streaming.",
      tags: ["Java", "Spring Cloud", "Kafka", "Docker"],
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      link: "https://github.com/HeshanDPathiranage",
      featured: false,
    },
    {
      id: "05",
      title: "Cloud Analytics Dashboard",
      category: "Full-Stack",
      tagCategory: "Data Visualization",
      description:
        "Interactive metrics console with real-time websocket charting, JWT authorization, and role management.",
      tags: ["React", "TypeScript", "Node.js", "Chart.js"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      link: "#",
      featured: false,
    },
    {
      id: "06",
      title: "Minimal Design System",
      category: "UI/UX",
      tagCategory: "Component Library",
      description:
        "Reusable, accessible component kit crafted for fintech dashboards with custom dark/light theme tokens.",
      tags: ["Figma", "CSS3", "Design Systems"],
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      link: "#",
      featured: false,
    },
  ];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <div className="section-header-center">
          <span className="section-tag">Case Studies</span>
          <h2>Our Portfolio</h2>
          <p>
            Explore recent projects, client platforms, and software architecture
            experiments.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="portfolio-filter-tabs">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              className={`filter-tab ${activeFilter === tab ? "active" : ""}`}
              onClick={() => setActiveFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dark Card Grid with Orange Accents on Hover */}
        <motion.div layout className="portfolio-grid">
          <AnimatePresence>
            {filteredItems.map((project) => (
              <motion.article
                layout
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <div className="project-thumbnail">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                    loading="lazy"
                  />
                  <div className="project-overlay">
                    <a
                      href={project.link}
                      target={project.link.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="btn btn-primary"
                      style={{ padding: "8px 14px", fontSize: "12px" }}
                    >
                      View Live <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

                <div className="project-body">
                  <span className="project-category">{project.tagCategory}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-summary">{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
