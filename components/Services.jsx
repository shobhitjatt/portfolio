const services = [
  { title: "Web Development", desc: "Modern, responsive web applications built with React, Next.js, and Node.js — performant and pixel-perfect.", icon: "🌐", color: "#6c63ff22" },
  { title: "SaaS Development", desc: "End-to-end SaaS product development — from architecture design to deployment, built to scale with your user base.", icon: "☁️", color: "#38bdf822" },
  { title: "API Development", desc: "Secure, documented, high-performance REST APIs that power your frontend and integrate with third-party services.", icon: "⚡", color: "#34d39922" },
  { title: "CRM Development", desc: "Custom CRM solutions built around your sales workflow — lead management, pipelines, reporting, and automation.", icon: "📊", color: "#f472b622" },
  { title: "Workflow Automation", desc: "Automate repetitive business processes and integrate your tools — saving your team hours every single week.", icon: "🤖", color: "#fbbf2422" },
];

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-head center reveal">
          <div className="section-label">What I Offer</div>
          <div className="sep center"></div>
          <h2 className="section-title">Services</h2>
          <p className="section-sub">From idea to production — I cover the full stack.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={service.title} className={`service-card reveal reveal-delay-${index + 1}`}> 
              <div className="svc-icon" style={{ background: service.color }}>{service.icon}</div>
              <div className="svc-title">{service.title}</div>
              <div className="svc-desc">{service.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
