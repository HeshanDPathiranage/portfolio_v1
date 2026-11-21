import React from "react";
import { motion } from "framer-motion";
import { SkillBar } from "./SkillBar";

export const About: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="container about-grid">
        {/* Left Side: Developer Workspace / Coding Setup Image */}
        <motion.div
          className="about-media"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about-image-frame">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80"
              alt="Developer coding setup with multi-monitors"
              className="about-photo"
              loading="lazy"
            />
          </div>

          {/* Floating Experience Badge (from Reference Design) */}
          <div className="experience-badge">
            <div className="experience-stripes">
              <span className="stripe" />
              <span className="stripe" />
              <span className="stripe" />
              <span className="stripe" />
              <span className="stripe" />
            </div>
            <span className="experience-number">03+</span>
            <span className="experience-label">Years of Experience</span>
          </div>
        </motion.div>

        {/* Right Side: Life Struggle Story Bio & Skill Progress Bars */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-tag">About Me</span>
          <h2 className="about-title">Read About My Life Struggle Story!</h2>

          <p className="about-description">
            I am a Full-stack developer with hands-on experience building
            scalable web applications with Java Spring Boot, React, and modern
            cloud architectures. I design and deliver production-ready management
            systems and high-converting e-commerce platforms for real clients.
            Currently completing a BSc (Hons) in Information Technology at SLIIT,
            I am relentless about clean architecture and human-centric design.
          </p>

          {/* Stack Progress Bars */}
          <SkillBar />

          {/* Call-to-Action Buttons */}
          <div className="about-actions">
            <a href="#contact" className="btn btn-primary">
              Hire Me!
            </a>
            <a href="#portfolio" className="btn btn-dark">
              About Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

