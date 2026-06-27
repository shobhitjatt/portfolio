"use client";

import { useEffect } from "react";

export default function PortfolioClient() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");
    const spotlight = document.getElementById("spotlight");

    if (!cursor || !ring || !spotlight) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = `${mx}px`;
      cursor.style.top = `${my}px`;
      spotlight.style.left = `${mx}px`;
      spotlight.style.top = `${my}px`;
    };

    document.addEventListener("mousemove", onMove);

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      requestAnimationFrame(animRing);
    };

    animRing();

    const hoverables = document.querySelectorAll("a, button, .skill-tag, .project-card, .service-card, .testi-card");
    const enter = () => {
      cursor.style.width = "20px";
      cursor.style.height = "20px";
      ring.style.width = "50px";
      ring.style.height = "50px";
    };
    const leave = () => {
      cursor.style.width = "12px";
      cursor.style.height = "12px";
      ring.style.width = "36px";
      ring.style.height = "36px";
    };

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    const roles = ["Full Stack Developer", "React Developer", "Node.js Developer", "SaaS Builder", "Problem Solver"];
    let ri = 0;
    let ci = 0;
    let del = false;
    const typEl = document.getElementById("typing-text");

    const type = () => {
      const cur = roles[ri];
      if (!typEl) return;
      if (!del) {
        typEl.textContent = cur.slice(0, ++ci);
        if (ci === cur.length) {
          del = true;
          setTimeout(type, 1800);
          return;
        }
      } else {
        typEl.textContent = cur.slice(0, --ci);
        if (ci === 0) {
          del = false;
          ri = (ri + 1) % roles.length;
          setTimeout(type, 400);
          return;
        }
      }
      setTimeout(type, del ? 50 : 80);
    };

    type();

    const cursorBlink = setInterval(() => {
      const c = document.querySelector(".type-cursor");
      if (c) c.style.opacity = c.style.opacity === "0" ? "1" : "0";
    }, 530);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));

    const cobs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll("[data-count]");
            els.forEach((num) => {
              const target = Number(num.dataset.count);
              const dur = 1600;
              const start = Date.now();
              const tick = () => {
                const p = Math.min((Date.now() - start) / dur, 1);
                const val = Math.round(p * p * (3 - 2 * p) * target);
                num.textContent = val + (target === 100 ? "%" : target >= 3 && target < 10 ? "+" : target === 20 ? "+" : "");
                if (p < 1) requestAnimationFrame(tick);
              };
              tick();
            });
            cobs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    const statsSection = document.querySelector(".stats-grid");
    if (statsSection) cobs.observe(statsSection);

    const ham = document.getElementById("hamburger");
    const mob = document.getElementById("mobMenu");
    const closeMob = () => {
      if (mob) mob.classList.remove("open");
    };

    ham?.addEventListener("click", () => mob?.classList.toggle("open"));
    document.querySelectorAll("#mobMenu a").forEach((link) => link.addEventListener("click", closeMob));

    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("navbar");
      if (!navbar) return;
      navbar.style.padding = window.scrollY > 60 ? "12px 48px" : "18px 48px";
      if (window.innerWidth < 900) navbar.style.padding = window.scrollY > 60 ? "12px 24px" : "16px 24px";
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      clearInterval(cursorBlink);
      obs.disconnect();
      cobs.disconnect();
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return null;
}
