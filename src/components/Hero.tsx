import React from "react";
import { motion } from "framer-motion";
import { Download, Briefcase } from "lucide-react";
import heshanProfile from "../assets/heshan-profile.jpg";

export const Hero: React.FC = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        {/* Left Column: Bio & Action Buttons */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Orange Rounded Badge */}
          <span className="badge-pill">Hello, I am</span>

          {/* Main Name Heading */}
          <h1 className="hero-title">Heshan Dilanka</h1>

          {/* Subtitle */}
          <h2 className="hero-subtitle">
            A Professional Full-Stack Developer & Software Engineer
          </h2>

          <p className="hero-bio">
            I build scalable web applications with clean layered architecture.
            From robust Spring Boot backends to responsive React frontends, I
            turn thoughtful ideas into production-ready digital products.
          </p>

          {/* Two Buttons Side-by-Side */}
          <div className="hero-buttons">
            <a
              href="Heshan_Dilanka_CV.pdf"
              download
              className="btn btn-primary"
            >
              Download CV <Download size={16} />
            </a>

            <a href="#portfolio" className="btn btn-outline">
              My Work <Briefcase size={16} />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Real Portrait Image */}
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="portrait-container">
            {/* Dark Radial Card Backdrop */}
            <div className="portrait-backdrop">
              <img
                src={heshanProfile}
                alt="Heshan Dilanka - Professional Full-Stack Developer & Software Engineer"
                className="portrait-photo"
                loading="eager"
              />
            </div>

            {/* Minimal Scroll Indicator */}
            <div className="scroll-indicator">
              <div className="scroll-mouse">
                <div className="scroll-wheel" />
              </div>
              <span>Scroll</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
