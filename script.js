
const C = {
  name:      "MD.IRFAN",
  initials:  "AC",
  tagline:   "Digital",         // highlighted word in hero title
  role:      "Full-Stack Developer & AI Engineer",
  resumeUrl: "#",               // link to your resume/CV

  bio: [
    "I'm MD.IRFAN, a Full-Stack Developer specializing in TypeScript and crafting responsive, user-centric interfaces with React and Next.js.",
    "I build full-stack applications with a focus on performance, scalability, and delightful user experience. Passionate about AI integration, clean architecture, and shipping products people love.",
  ],

  stats: [
    { v: "3+",  l: "Years Experience" },
    { v: "25+", l: "Projects Built"   },
    { v: "12+", l: "Tech Mastered"    },
  ],

  experience: [
    {
      date:    "2024 – Present",
      role:    "Full Stack Developer",
      company: "TechCorp Inc.",
      points: [
        "Built scalable Node.js APIs for AI-driven workflows and automation pipelines.",
        "Designed PostgreSQL schemas for complex multi-tenant data relationships.",
        "Developed Next.js dashboards with real-time data visualization and analytics.",
      ],
    },
    {
      date:    "2023 – 2024",
      role:    "Frontend Developer Intern",
      company: "DigitalAgency Co.",
      points: [
        "Developed feature-rich web apps using Next.js 14 and TypeScript.",
        "Implemented high-performance UI components with Tailwind CSS and Radix UI.",
        "Integrated AI-powered features to enhance user productivity by 40%.",
      ],
    },
    {
      date:    "2022 – Present",
      role:    "Freelance Developer",
      company: "Self-Employed",
      points: [
        "Dedicated 1000+ hours mastering the T3 stack and modern full-stack patterns.",
        "Built multiple production-ready SaaS applications from ideation to launch.",
        "Active contributor to open-source projects and developer communities.",
      ],
    },
  ],

  skills: [
    "TypeScript", "React",      "Next.js",    "Node.js",   "Python",
    "PostgreSQL",  "MongoDB",    "Prisma",     "tRPC",      "Tailwind CSS",
    "Docker",      "AWS",        "GraphQL",    "Redis",     "Figma",
    "Git",         "CI/CD",      "OpenAI API", "LangChain", "Stripe",
  ],

  projects: [
    {
      icon:  "🤖",
      title: "ChatGPT Clone",
      desc:  "An open-source ChatGPT UI clone with multi-model support (GPT-4, Claude, Gemini), streaming responses, conversation branching, plugin system, and file uploads.",
      tags:  ["Next.js", "TypeScript", "OpenAI", "MongoDB", "Tailwind"],
      demo:  "https://librechat.ai",
      src:   "https://github.com/danny-avila/LibreChat",
    },
    {
      icon:  "📊",
      title: "Uptime Monitoring Dashboard",
      desc:  "A self-hosted monitoring tool with real-time status pages, ping/HTTP/DNS checks, beautiful dashboards, notifications via Slack/Telegram/Discord, and multi-language support.",
      tags:  ["Node.js", "Socket.IO", "Vue.js", "Bootstrap", "Docker"],
      demo:  "https://demo.kuma.pet",
      src:   "https://github.com/louislam/uptime-kuma",
    },
    {
      icon:  "🛒",
      title: "Modern E-Commerce Storefront",
      desc:  "A headless e-commerce starter built with Medusa.js — featuring a Next.js storefront, product management, Stripe checkout, inventory tracking, and a powerful admin panel.",
      tags:  ["Next.js", "Medusa.js", "TypeScript", "Stripe", "Tailwind"],
      demo:  "https://next.medusajs.com",
      src:   "https://github.com/medusajs/nextjs-starter-medusa",
    },
    {
      icon:  "📝",
      title: "Notion-Style Editor",
      desc:  "A collaborative, block-based rich-text editor inspired by Notion. Supports slash commands, drag & drop blocks, real-time sync, markdown shortcuts, and custom embeds.",
      tags:  ["React", "TypeScript", "Prosemirror", "Yjs", "Tailwind"],
      demo:  "https://novel.sh",
      src:   "https://github.com/steven-tey/novel",
    },
    {
      icon:  "🔐",
      title: "Auth & User Management",
      desc:  "A complete authentication platform with email/password, OAuth providers, two-factor auth, session management, and a user admin dashboard — all self-hostable.",
      tags:  ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Docker"],
      demo:  "https://demo.hanko.io",
      src:   "https://github.com/nextauthjs/next-auth",
    },
    {
      icon:  "🚀",
      title: "Full-Stack SaaS Starter",
      desc:  "A production-ready SaaS boilerplate with subscription billing, team management, role-based access, email templates, and a beautiful landing page — built on the T3 stack.",
      tags:  ["Next.js", "tRPC", "Prisma", "Stripe", "Tailwind"],
      demo:  "https://taxonomy.vercel.app",
      src:   "https://github.com/shadcn-ui/taxonomy",
    },
  ],

  contact: {
  email:    "jamadarirfan9000@gmail.com",
  phone:    "+918100254867",
  //location: "India,West Bengal",//
  github:   "https://github.com/Phoenix12-del"
},
};
/* ═══════════════════════════════════════════════════════════════ */
let vantaEffect;

function initVanta(theme) {
  if (vantaEffect) vantaEffect.destroy();

  let config = {};

  switch (theme) {
    case "cyber":
      config = {
        color: 0x00d4aa,
        backgroundColor: 0x060810
      };
      break;

    case "violet":
      config = {
        color: 0xa855f7,
        backgroundColor: 0x0b0615
      };
      break;

    case "solar":
      config = {
        color: 0xf59e0b,
        backgroundColor: 0x1a1200
      };
      break;

    case "arctic":
      config = {
        color: 0x0ea5e9,
        backgroundColor: 0xf0f6ff
      };
      break;

    case "rose":
      config = {
        color: 0xf43f5e,
        backgroundColor: 0x1a060a
      };
      break;

    default:
      config = {
        color: 0x00d4aa,
        backgroundColor: 0x060810
      };
  }

  vantaEffect = VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,

    color: config.color,
    backgroundColor: config.backgroundColor,

    points: 7,
    maxDistance: 18,
    spacing: 20
  });
}

/* ─────────────────────────────────────────
   RENDER — Injects all config data into DOM
───────────────────────────────────────── */
function render() {
  document.title = C.name + " | Portfolio";

  // Nav & footer
  document.getElementById("nav-logo").textContent = C.initials;
  document.getElementById("ft-name").textContent  = C.name;
  document.getElementById("ft-year").textContent  =
    `© ${new Date().getFullYear()} ${C.name}. All rights reserved.`;

  // Hero
  document.getElementById("hero-name").textContent  = C.name;
  document.getElementById("hero-role").textContent  = C.role;
  document.getElementById("hero-hl").textContent    = C.tagline;
  document.getElementById("resume-link").href       = C.resumeUrl;

  // Code card
  document.getElementById("code-body").innerHTML = `
    <div class="cl"><span class="ln">01</span><span><span class="kw">const</span> <span class="prop">developer</span> = {</span></div>
    <div class="cl"><span class="ln">02</span><span>&nbsp;&nbsp;<span class="prop">name</span>: <span class="str">'${C.name}'</span>,</span></div>
    <div class="cl"><span class="ln">03</span><span>&nbsp;&nbsp;<span class="prop">focus</span>: <span class="str">'${C.role.split("&")[0].trim()}'</span>,</span></div>
    <div class="cl"><span class="ln">04</span><span>&nbsp;&nbsp;<span class="prop">skills</span>: [<span class="str">'${C.skills[0]}'</span>, <span class="str">'${C.skills[2]}'</span>, <span class="str">'AI'</span>],</span></div>
    <div class="cl"><span class="ln">05</span><span>&nbsp;&nbsp;<span class="prop">available</span>: <span class="val">true</span>,</span></div>
    <div class="cl"><span class="ln">06</span><span>&nbsp;&nbsp;<span class="prop">motto</span>: <span class="str">"Build with Purpose"</span></span></div>
    <div class="cl"><span class="ln">07</span><span>};</span></div>
    <div class="cl"><span class="ln">08</span><span><span class="fn">developer</span>.<span class="fn">showcase</span>();</span></div>
  `;

  // About
  document.getElementById("about-bio").innerHTML =
    C.bio.map(p => `<p>${p}</p>`).join("");

  document.getElementById("about-stats").innerHTML =
    C.stats.map(s => `
      <div class="stat">
        <div class="sv">${s.v}</div>
        <div class="sl">${s.l}</div>
      </div>`).join("");

  // Experience timeline
  document.getElementById("timeline").innerHTML =
    C.experience.map(e => `
      <div class="t-item">
        <div class="t-dot"></div>
        <div class="t-date">${e.date}</div>
        <div class="t-role">${e.role}</div>
        <div class="t-co">${e.company}</div>
        <ul class="t-pts">
          ${e.points.map(p => `<li>${p}</li>`).join("")}
        </ul>
      </div>`).join("");

  // Skills
  document.getElementById("sk-grid").innerHTML =
    C.skills.map(s => `
      <div class="sk">
        <span class="sk-dot"></span>${s}
      </div>`).join("");

  // Projects
  document.getElementById("proj-g").innerHTML =
    C.projects.map(p => `
      <div class="proj">
        <div class="proj-thumb">${p.icon}</div>
        <div class="proj-body">
          <div class="proj-ttl">${p.title}</div>
          <div class="proj-desc">${p.desc}</div>
          <div class="proj-tags">
            ${p.tags.map(t => `<span class="ptag">${t}</span>`).join("")}
          </div>
          <div class="proj-lnks">
            <a href="${p.demo}" class="plnk prim">Live Demo</a>
            <a href="${p.src}"  class="plnk">Source</a>
          </div>
        </div>
      </div>`).join("");

  // Contact details
  // Contact details (ICON ONLY)
document.getElementById("cnt-details").innerHTML = `
  <div class="social-bar">
    
    <a href="mailto:${C.contact.email}" target="_blank" class="social-icon">
      <i class="fas fa-envelope"></i>
    </a>

    <a href="tel:${C.contact.phone}" target="_blank" class="social-icon">
      <i class="fas fa-phone"></i>
    </a>

    <a href="${C.contact.github}" target="_blank" class="social-icon">
      <i class="fab fa-github"></i>
    </a>

  </div>
`;
}


/* ─────────────────────────────────────────
   SCROLL ANIMATIONS
   Reveals .t-item, .sk, .proj on viewport entry
───────────────────────────────────────── */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("vis"), i * 75);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".t-item, .sk, .proj")
          .forEach(el => observer.observe(el));
}


/* ─────────────────────────────────────────
   THEME SWITCHER
───────────────────────────────────────── */
function initTheme() {
  const btn   = document.getElementById("tsw-btn");
  const panel = document.getElementById("tsw-panel");

  // Toggle panel open/close
  btn.addEventListener("click", () => panel.classList.toggle("open"));

  // Close panel when clicking outside
  document.addEventListener("click", (e) => {
    if (!btn.contains(e.target) && !panel.contains(e.target)) {
      panel.classList.remove("open");
    }
  });

  // Switch theme on swatch click
  document.querySelectorAll(".tsw").forEach(sw => {
  sw.addEventListener("click", () => {
    const theme = sw.dataset.t;
    const fade = document.getElementById("theme-fade");

    // 🔥 start fade
    fade.classList.add("active");

    setTimeout(() => {
      // apply theme
      document.documentElement.setAttribute("data-theme", theme);

      // update vanta
      initVanta(theme);

      // highlight selected
      document.querySelectorAll(".tsw")
        .forEach(s => s.classList.toggle("on", s.dataset.t === theme));

      // save theme
      try { localStorage.setItem("pf-theme", theme); } catch(e){}

      // 🔥 end fade
      setTimeout(() => {
        fade.classList.remove("active");
      }, 100);

    }, 300);
  });
});

  // Restore saved theme
  try {
    const saved = localStorage.getItem("pf-theme");
    if (saved) {
      document.documentElement.setAttribute("data-theme", saved);
      document.querySelectorAll(".tsw")
              .forEach(s => s.classList.toggle("on", s.dataset.t === saved));
    }
  } catch (e) { /* ignore */ }
}


/* ─────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────── */
function handleForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector(".fsub");
  const original = btn.textContent;

  btn.textContent = "✓ Sent!";
  btn.style.background = "#22c55e";

  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = "";
    e.target.reset();
  }, 3000);
}


/* ─────────────────────────────────────────
   INIT
───────────────────────────────────────── */
window.addEventListener("DOMContentLoaded", () => {
  render();
  initScrollAnimations();
  initTheme();
});

window.addEventListener("load", () => {
  const currentTheme = document.documentElement.dataset.theme;
  initVanta(currentTheme);
});

const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.querySelectorAll(".btn-p, .btn-s, .social-icon").forEach(el => {
  el.addEventListener("mousemove", (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  el.addEventListener("mouseleave", () => {
    el.style.transform = "translate(0,0)";
  });
});

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  document.querySelectorAll(".hero-inner, .about-vis").forEach(el => {
    el.style.transform = `translate(${x}px, ${y}px)`;
  });
});




/* 🔥 FIX: Ensure Vanta loads AFTER DOM + scripts 
window.addEventListener("load", () => {
  if (typeof VANTA !== "undefined") {
    VANTA.NET({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,

      color: 0x00d4aa,
      backgroundColor: 0x060810,

      points: 7,
      maxDistance: 18,
      spacing: 20,

      showDots: true
    });
  } else {
    console.error("VANTA not loaded");
  }
});*/
