"use client";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="grid-bg"></div>
      <div className="orb" style={{ width: 400, height: 400, background: "#6c63ff", opacity: 0.06, top: "10%", left: "60%", ["--od"]: "12s", ["--ox"]: "-30px", ["--oy"]: "40px" }}></div>
      <div className="orb" style={{ width: 300, height: 300, background: "#38bdf8", opacity: 0.06, top: "60%", left: "10%", ["--od"]: "9s", ["--ox"]: "20px", ["--oy"]: "-30px" }}></div>
      <div className="orb" style={{ width: 250, height: 250, background: "#f472b6", opacity: 0.05, bottom: "10%", right: "20%", ["--od"]: "14s", ["--ox"]: "-20px", ["--oy"]: "20px" }}></div>

      <div className="float-code fc1">const app = express()</div>
      <div className="float-code fc2">React.useState([])</div>
      <div className="float-code fc3">db.collection.find({})</div>
      <div className="float-code fc4">npm run build</div>
      <div className="float-code fc5">SELECT * FROM users</div>

      <div className="hero-content">
        <div className="hero-badge"><span className="badge-dot"></span>Open to opportunities</div>
        <h1 className="hero-name">Hi, I&apos;m <span>Shobhit<br />Chaudhary</span></h1>
        <div className="hero-typing-wrapper">
          <span id="typing-text"></span><span className="type-cursor">|</span>
        </div>
        <p className="hero-desc">Full-Stack Developer with 3+ years of experience building scalable web applications, CRM platforms, workflow automation systems, and SaaS products.</p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">View Projects ↗</a>
          <a href="#contact" className="btn-outline">Let&apos;s Talk →</a>
          <a href="#" className="btn-outline" onClick={(e) => { e.preventDefault(); alert("Resume download coming soon!"); }}>Download Resume ↓</a>
        </div>
      </div>
    </section>
  );
}