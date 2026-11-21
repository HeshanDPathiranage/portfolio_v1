import React, { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onHireClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onHireClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "About Me", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact Us", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        {/* Left: Brand Logo */}
        <a href="#home" className="logo">
          Cod<span className="logo-equal">=</span>r
        </a>

        {/* Center: Navigation Links */}
        <nav>
          <ul className={`nav-links ${mobileOpen ? "nav-open" : ""}`}>
            {navItems.map((item, index) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`nav-link ${index === 0 ? "active" : ""}`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Solid Orange Hire Me! Button & Mobile Toggle */}
        <div className="nav-actions">
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={onHireClick}
          >
            Hire Me!
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
