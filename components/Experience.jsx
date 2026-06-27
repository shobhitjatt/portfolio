export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-label">Career</div>
          <div className="sep"></div>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-sub">Building production-grade systems and shipping features that matter.</p>
        </div>
        <div className="timeline reveal reveal-delay-2">
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-date">OCT 2022 — PRESENT</div>
            <div className="tl-role">Software Developer</div>
            <div className="tl-company">Agami Technologies</div>
            <ul className="tl-ach">
              <li>Developed and shipped scalable SaaS applications used by multiple enterprise clients</li>
              <li>Built custom CRM and workflow automation platforms that reduced client operational time by 40%</li>
              <li>Optimized API performance — reduced average response times by 60% through caching and query optimization</li>
              <li>Resolved critical security vulnerabilities and implemented best practices across all codebases</li>
              <li>Implemented CI/CD pipelines with automated testing, cutting deployment time in half</li>
              <li>Designed and built responsive, accessible UIs across 5+ production applications</li>
              <li>Collaborated directly with clients to gather requirements and iterate on product features</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}