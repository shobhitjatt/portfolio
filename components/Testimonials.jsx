const testimonials = [
  {
    quote: "Shobhit consistently delivered high-quality solutions with exceptional attention to detail.",
    author: "Arjun Kumar",
    title: "CTO, Agami Technologies",
    initials: "AK",
    gradient: "linear-gradient(135deg, #6c63ff, #a78bfa)",
  },
  {
    quote: "The CRM system Shobhit built transformed our sales operations and saved us hours every week.",
    author: "Sarah Mitchell",
    title: "Operations Director, MoserBus",
    initials: "SM",
    gradient: "linear-gradient(135deg, #38bdf8, #6c63ff)",
  },
  {
    quote: "Exceptional developer — highly skilled, communicative, and deadline-driven.",
    author: "Ravi Desai",
    title: "Product Manager, Fusion24x7",
    initials: "RD",
    gradient: "linear-gradient(135deg, #f472b6, #a78bfa)",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: "var(--bg2)" }}>
      <div className="container">
        <div className="section-head center reveal">
          <div className="section-label">Social Proof</div>
          <div className="sep center"></div>
          <h2 className="section-title">What Clients Say</h2>
        </div>
        <div className="testi-grid">
          {testimonials.map((item, index) => (
            <div key={item.author} className={`testi-card reveal reveal-delay-${index + 1}`}>
              <div className="quote-mark">"</div>
              <p className="testi-text">{item.quote}</p>
              <div className="testi-author">
                <div className="testi-avatar" style={{ background: item.gradient }}>{item.initials}</div>
                <div>
                  <div className="testi-name">{item.author}</div>
                  <div className="testi-title">{item.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
