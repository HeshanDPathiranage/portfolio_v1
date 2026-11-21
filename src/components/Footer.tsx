import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile } from "../data";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Freelance CTA Banner (as seen in Reference Mockup) */}
      <section className="cta-section" id="contact">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
          >
            <span className="section-tag">Have Any Project in Mind?</span>
            <h2 className="cta-title">I'm Available for Freelancing</h2>
            <p className="cta-desc">
              Looking for a dedicated software engineer to build your next web
              system or refine your architecture? Let's make something
              exceptional.
            </p>
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              Hire Me!
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Brand column */}
            <div className="footer-brand">
              <a href="#home" className="logo">
                Cod<span className="logo-equal">=</span>r
              </a>
              <p>
                Professional Full-Stack Developer & Software Engineer crafting
                reliable, high-performance web systems and intuitive user
                interfaces.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="footer-title">Navigation</h4>
              <ul className="footer-links">
                <li><a href="#home" className="footer-link">Home</a></li>
                <li><a href="#about" className="footer-link">About Me</a></li>
                <li><a href="#services" className="footer-link">Services</a></li>
                <li><a href="#portfolio" className="footer-link">Portfolio</a></li>
                <li><a href="#contact" className="footer-link">Contact</a></li>
              </ul>
            </div>

            {/* Social / Direct Connect */}
            <div>
              <h4 className="footer-title">Connect</h4>
              <p style={{ marginBottom: "16px", fontSize: "14px" }}>
                Reach out anytime for collaborations or technical discussions.
              </p>
              <div className="footer-socials">
                <a
                  href="https://github.com/HeshanDPathiranage"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/heshan-dilanka-520983348"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="social-icon-btn"
                  aria-label="Send Email"
                >
                  <Mail size={18} />
                </a>
                <button
                  onClick={scrollToTop}
                  className="social-icon-btn"
                  aria-label="Back to Top"
                >
                  <ArrowUp size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Heshan Dilanka. All Rights Reserved.</span>
            <span>Designed with Dark & Orange Aesthetic</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

