const categories = [
  { title: "🎨 Frontend", skills: ["React.js", "Next.js", "Vue.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5 / CSS3"] },
  { title: "⚙️ Backend", skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "JWT", "Socket.IO"] },
  { title: "🗄️ Database", skills: ["MongoDB", "MySQL", "Mongoose", "Sequelize"] },
  { title: "☁️ DevOps & Cloud", skills: ["AWS", "Docker", "PM2", "Nginx", "CI/CD", "Ubuntu"] },
  { title: "🛠 Tools", skills: ["Git", "Postman", "Selenium", "VS Code", "Figma"] },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: "var(--bg2)" }}>
      <div className="container">
        <div className="section-head center reveal">
          <div className="section-label">What I Work With</div>
          <div className="sep center"></div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-sub">A curated set of tools I use to build fast, reliable, and beautiful products.</p>
        </div>
        <div className="skills-wrapper">
          {categories.map((category) => (
            <div key={category.title} className="glass" style={{ padding: 28 }}>
              <div className="skill-cat">
                <h3>{category.title}</h3>
                <div className="skill-list">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}