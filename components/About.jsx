export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-wrap reveal">
            <div className="about-img">
              <div className="about-initials">SC</div>
            </div>
            <div className="about-badge">💼 3+ Years Experience</div>
          </div>

          <div className="about-text reveal reveal-delay-2">
            <div className="section-label">About Me</div>
            <div className="sep"></div>
            <h2 className="section-title">
              Crafting <span style={{ background: "var(--grad)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>digital products</span> that scale
            </h2>
            <p>
              I&apos;m a passionate <strong>Full-Stack Developer</strong> with 3+ years of experience designing and developing modern web applications. I specialize in building robust, scalable systems that solve real business problems.
            </p>
            <p>
              My expertise spans <strong>React.js, Next.js, Vue.js, Node.js, MongoDB, MySQL, and AWS</strong>. I love the challenge of turning complex requirements into clean, efficient code and intuitive user experiences.
            </p>
            <p>
              Currently at <strong>Agami Technologies</strong>, building SaaS applications, CRM systems, and workflow automation platforms that power real businesses.
            </p>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-num" data-count="3">0</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-num" data-count="20">0</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-num" data-count="10">0</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-card">
                <div className="stat-num" data-count="100">0</div>
                <div className="stat-label">Client Satisfaction %</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
