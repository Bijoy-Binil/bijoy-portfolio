import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = [
    "React.js",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
  ];

  const backendSkills = [
    "Python",
    "Django",
    "Django REST Framework (DRF)",
    "PostgreSQL",
    "SQLite",
  ];

  const toolsVersion = [
    "Git",
    "GitHub",
    "Docker (basic)",
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Full-Stack Python Developer with expertise in building scalable web applications using
            <strong> Django REST Framework</strong> and <strong>React.js</strong>. Skilled in developing
            robust backend APIs, responsive frontend interfaces, and integrating third-party services like
            PayPal. Passionate about building user-centric applications and solving real-world problems
            through clean code and modern web technologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Version Control */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Tools & Version Control</h3>
              <div className="flex flex-wrap gap-2">
                {toolsVersion.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Education */}
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>B.A. English Literature</strong> – Emmanuel College, Vazhichal (2020 – 2023)
              </li>
              <li>
                <strong>Python Full-Stack Trainee</strong> – CB Tech, Kadavanthra (Nov 2024 – May 2025)
              </li>
              <li>
                <strong>Certificate</strong> in Stock Prediction Portal – Udemy (2025)
              </li>
            </ul>
          </div>

          {/* Experience */}
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">💼 Internship</h3>
            <div className="text-gray-300 space-y-3">
              <div>
                <h4 className="font-semibold">
                  Python Full-Stack Trainee – CB Tech (Nov 2024 – May 2025)
                </h4>
                <ul className="list-disc list-inside text-gray-300 ml-4">
                  <li>Built REST APIs with Django DRF and responsive UIs using React.js</li>
                  <li>Integrated PayPal payments and used PostgreSQL/SQLite for database handling</li>
                  <li>Version control with Git & GitHub; worked on real-time mini projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
