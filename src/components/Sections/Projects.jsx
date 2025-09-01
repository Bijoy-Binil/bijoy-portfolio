import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Stock Prediction Portal */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Stock Prediction Portal</h3>
            <p className="text-gray-400 mb-4">
              Developed a stock prediction web app with backend API for ML-based forecasts,
              real-time data updates, visualization, and historical insights.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Python", "Django", "REST API", "PostgreSQL", "Chart.js"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
              View Project →
            </a>
          </div>

          {/* Multi-Vendor E-Commerce */}
          <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">Multi-Vendor E-Commerce System</h3>
            <p className="text-gray-400 mb-4">
              Full-featured e-commerce app with role-based access, PayPal integration, and RESTful backend.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Django", "DRF", "React.js", "PayPal API", "PostgreSQL"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
              View Project →
            </a>
          </div>

          {/* Hospital Management Web App */}
          <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">Hospital Management Web App</h3>
            <p className="text-gray-400 mb-4">
              Built a system for managing patient registration, appointments, and reporting modules.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Django", "HTML5", "CSS3", "SQLite"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
              View Project →
            </a>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
