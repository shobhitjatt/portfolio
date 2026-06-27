"use client";

import { useRef, useState } from "react";

export default function Contact() {
  const scriptURL = "https://script.google.com/macros/s/AKfycbx-jDXEJThPGiMOjkuTth_mIt-iZYZ6nmdHMmdwTy3HUjcHfgMOUnRkkDggW5GXwxsEYw/exec";
  const formRef = useRef(null);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatus("Sending your message...");

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(formRef.current),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      formRef.current.reset();
      setStatus("Message sent successfully! I’ll get back to you soon.");
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please email me directly at shobhitchaudhary136@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-label">Get In Touch</div>
          <div className="sep"></div>
          <h2 className="section-title">
            Let&apos;s build something <span style={{ background: "var(--grad)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>great</span>
          </h2>
        </div>
        <div className="contact-wrapper">
          <div className="contact-info reveal">
            <h3>Open for work</h3>
            <p>I&apos;m currently available for freelance projects, full-time roles, and consulting. Let&apos;s discuss how I can help your team ship faster.</p>
            <a href="mailto:shobhitchaudhary136@gmail.com" className="contact-link">
              <div className="contact-link-icon" style={{ background: "#6c63ff22" }}>📧</div>
              <div><div style={{ fontWeight: 600, fontSize: 14 }}>Email Me</div><div style={{ fontSize: 12, color: "var(--muted)" }}>shobhitchaudhary136@gmail.com</div></div>
            </a>
            <a href="https://github.com/shobhitjatt" target="_blank" className="contact-link">
              <div className="contact-link-icon" style={{ background: "#33333388" }}>⌨️</div>
              <div><div style={{ fontWeight: 600, fontSize: 14 }}>GitHub</div><div style={{ fontSize: 12, color: "var(--muted)" }}>github.com/shobhitjatt</div></div>
            </a>
            <a href="https://linkedin.com/in/ishobhitjaat" target="_blank" className="contact-link">
              <div className="contact-link-icon" style={{ background: "#0a66c222" }}>💼</div>
              <div><div style={{ fontWeight: 600, fontSize: 14 }}>LinkedIn</div><div style={{ fontSize: 12, color: "var(--muted)" }}>linkedin.com/in/ishobhitjaat</div></div>
            </a>
            <a href="#" className="contact-link">
              <div className="contact-link-icon" style={{ background: "#34d39922" }}>📅</div>
              <div><div style={{ fontWeight: 600, fontSize: 14 }}>Schedule a Call</div><div style={{ fontSize: 12, color: "var(--muted)" }}>Book a 30-min intro</div></div>
            </a>
          </div>

          <div className="contact-form reveal reveal-delay-2">
            <div id="form-success" style={{ display: status ? "block" : "none", textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
              <h3 style={{ fontSize: 20, marginBottom: 8 }}>{status ? "Message sent!" : "Message sent!"}</h3>
              <p style={{ color: "var(--muted)" }}>{status || "I&apos;ll get back to you within 24 hours."}</p>
            </div>
            <form ref={formRef} id="contactForm" onSubmit={handleSubmit}>
              <div id="form-body">
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" id="email" name="email" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="text" id="phone" name="phone" placeholder="Phone number" />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="Project inquiry, collaboration..." />
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Tell me about your project or opportunity..."></textarea>
                </div>
                <div className="form-btns">
                  <button type="submit" className="btn-primary" style={{ flex: 1, justifyContent: "center" }} disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message ✈️"}
                  </button>
                  <a href="#" className="btn-outline" onClick={(e) => { e.preventDefault(); alert("Calendly integration coming soon!"); }}>Schedule Call 📅</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
