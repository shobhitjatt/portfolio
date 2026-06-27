const projects = [
  {
    title: "MoserBus",
    industry: "Mortgage CRM Platform",
    desc: "A fully custom CRM platform for the mortgage industry — featuring workflow automation, multi-domain management, lead tracking pipeline, and granular role-based access control.",
    features: ["Workflow Automation", "Lead Tracking", "Domain Management", "Role Management"],
    stack: ["Vue.js", "Node.js", "MongoDB"],
    icon: "🏠",
  },
  {
    title: "Fusion24x7",
    industry: "Project Management Platform",
    desc: "An all-in-one collaboration platform combining CRM management, HR workflows, task tracking, and team reporting — built to replace three separate tools for growing companies.",
    features: ["CRM Management", "HR Module", "Task Tracking", "Reporting"],
    stack: ["React.js", "Node.js", "MongoDB"],
    icon: "🚀",
  },
  {
    title: "Kalnexa",
    industry: "Smart Scheduling Platform",
    desc: "Intelligent meeting scheduling with calendar integration and smart conflict resolution. Automates the back-and-forth of meeting coordination for distributed teams.",
    features: ["Calendar Integration", "Smart Scheduling", "Meeting Automation", "Team Collaboration"],
    stack: ["Next.js", "Node.js", "MongoDB"],
    icon: "📅",
  },
  {
    title: "Nediaz",
    industry: "Online Recruitment, Business Networking",
    desc: "Building networking tools with secure and scalable communication features such as messaging and video conferencing to support professional connections. Database management and optimization with MongoDB for large volumes of user data such as job postings, profiles, and business directories.",
    features: ["Networking Tools", "Messaging", "Video Conferencing", "MongoDB Optimization"],
    stack: ["Alpine.js", "Node.js", "MongoDB"],
    icon: "📝",
  },
  {
    title: "SutraCMS",
    industry: "Content Management System",
    desc: "A multi-tenant CMS with dynamic theme switching, a visual CMS builder, and fine-grained role-based access — designed to power content workflows for agencies and their clients.",
    features: ["Multi-Tenant", "Dynamic Themes", "Role Access", "CMS Builder"],
    stack: ["Next.js", "MongoDB"],
    icon: "📝",
  },
  {
    title: "Bullion Store",
    industry: "E-Commerce Platform",
    desc: "A feature-rich e-commerce platform for buying and selling precious metals with real-time pricing, secure transactions, and inventory management.",
    features: ["Real-Time Pricing", "Secure Transactions", "Inventory Management", "User Reviews"],
    stack: ["Vue.js", "Node.js", "MySql"],
    icon: "�",
  },
  // {
  //   title: "Chat Application",
  //   industry: "Real-Time Communication",
  //   desc: "A real-time messaging application with live presence indicators, push notifications, and instant message delivery using WebSocket technology for zero-latency communication.",
  //   features: ["WebSockets", "Live Presence", "Notifications"],
  //   stack: ["React.js", "Node.js", "Socket.IO", "MongoDB"],
  //   icon: "💬",
  // },
];

export default function Projects() {
  return (
    <section id="projects" style={{ background: "var(--bg2)" }}>
      <div className="container">
        <div className="section-head center reveal">
          <div className="section-label">Portfolio</div>
          <div className="sep center"></div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-sub">Real products, real impact — built end-to-end with modern stacks.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.title} className={`project-card reveal reveal-delay-${index % 3}`}> 
              <div className="proj-icon">{project.icon}</div>
              <div className="proj-industry">{project.industry}</div>
              <div className="proj-title">{project.title}</div>
              <div className="proj-desc">{project.desc}</div>
              <div className="proj-features">
                {project.features.map((feature) => (
                  <span key={feature} className="proj-feat-tag">{feature}</span>
                ))}
              </div>
              <div className="proj-stack">
                {project.stack.map((tag) => (
                  <span key={tag} className="stack-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}