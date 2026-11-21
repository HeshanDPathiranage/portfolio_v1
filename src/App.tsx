import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="page-wrapper">
      {/* Signature Orange Geometric Framing Accents (Reference Mockup) */}
      <div className="brand-frame-top-left" aria-hidden="true" />
      <div className="brand-frame-right" aria-hidden="true" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Highlighted Stats Counter Row */}
        <Stats />

        {/* About & Skills Progress Bar Section */}
        <About />

        {/* Services Grid */}
        <Services />

        {/* Portfolio Projects Section */}
        <Projects />
      </main>

      {/* Footer with CTA Banner */}
      <Footer />
    </div>
  );
}

export default App;
