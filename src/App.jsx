import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Lenis from 'lenis';

const projectsData = [
  {
    id: 1,
    title: "Weather App",
    description: "Real-time weather app using OpenWeather API.",
    image: "https://i.postimg.cc/qv6brm9W/weather-app.png",
    tech: ["JavaScript", "API"],
    liveUrl: "https://farhan0999.github.io/Weather-app/"
  },
  {
    id: 2,
    title: "To-Do List",
    description: "Task manager with local storage.",
    image: "https://i.postimg.cc/02DnH6DQ/todo-list.png",
    tech: ["JavaScript", "React"],
    liveUrl: "https://farhan0999.github.io/To-Do-List/"
  },
  {
    id: 3,
    title: "Portfolio",
    description: "First responsive portfolio.",
    image: "https://i.postimg.cc/ZRWFP04M/portfolio.png",
    tech: ["HTML", "CSS", "Javascript", "React"],
    liveUrl: "#"
  },
  {
    id: 4,
    title: "E-commerce Demo",
    description: "Product listing with cart (Coming Soon).",
    image: "https://i.postimg.cc/0yZpL7N0/ecommerce.jpg",
    tech: ["React", "CSS"],
    liveUrl: "#"
  },
  {
    id: 5,
    title: "Login App",
    description: "Using C#.net real time data stores in (SSMS).",
    image: "/images/login-app.png",
    tech: ["C#.net", "SQL Server"],
    liveUrl: "https://farhan0999.github.io/Login-App/"
  },
  {
    id: 6,
    title: "Employee Management System",
    description: "Using React, Python & SQL Server.",
    image: "/images/employee management system.png",
    tech: ["Python, React, SQL Server"],
    liveUrl: "https://farhan0999.github.io/System/"
  }
];

const skillsList = [
  {
    name: "HTML5",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <path d="M4.136 3.012L5.672 20.24l6.324 1.752 6.33-1.753 1.538-17.227H4.136z" fill="#E34F26"/>
        <path d="M12 4.606v15.698l4.89-1.354 1.258-14.344H12z" fill="#EF652A"/>
        <path d="M7.433 7.647h9.134l-.246 2.76H9.933l.258 2.87h6.075l-.578 6.473-3.688 1.025-3.682-1.025-.25-2.793h1.83l.128 1.408 1.974.533 1.98-.533.27-3.033H7.728l-.295-7.778z" fill="#ffffff"/>
      </svg>
    )
  },
  {
    name: "CSS3",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <path d="M4.136 3.012L5.672 20.24l6.324 1.752 6.33-1.753 1.538-17.227H4.136z" fill="#1572B6"/>
        <path d="M12 4.606v15.698l4.89-1.354 1.258-14.344H12z" fill="#33A9DC"/>
        <path d="M16.567 7.647H7.433l.295 3.32h5.71l-.32 3.585-1.118.3-1.118-.3-.075-.826H8.97l.156 1.74 2.874.798 2.874-.798.59-6.619H9.497l-.147-1.4h7.217z" fill="#ffffff"/>
      </svg>
    )
  },
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28">
        <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
        <path d="M7.5 17.5c.5.8 1.2 1.3 2.2 1.3 1.2 0 1.9-.6 1.9-1.8v-6.5h-1.8v6.4c0 .5-.2.8-.7.8-.5 0-.8-.3-1.1-.7l-.5.5zm6.8 0c.6.9 1.5 1.4 2.7 1.4 1.7 0 2.8-.9 2.8-2.3 0-1.4-.9-2-2.3-2.5l-.6-.3c-.8-.3-1.2-.6-1.2-1.2 0-.6.5-1.1 1.3-1.1.7 0 1.2.3 1.6.8l.6-.5c-.5-.7-1.3-1.1-2.2-1.1-1.5 0-2.5.9-2.5 2.1 0 1.2.7 1.8 2 2.3l.6.3c.9.4 1.5.7 1.5 1.4 0 .7-.6 1.3-1.6 1.3-.9 0-1.6-.4-2.1-1.1l-.6.5z" fill="#000000"/>
      </svg>
    )
  },
  {
    name: "Basic React",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(30 12 12)"/>
        <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(90 12 12)"/>
        <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(150 12 12)"/>
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB"/>
      </svg>
    )
  },
  {
    name: "C++",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <path d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2z" fill="#00599C"/>
        <path d="M11 9.5a3.5 3.5 0 1 0 0 5h1.5a1 1 0 0 1 0 2H11a5.5 5.5 0 1 1 0-9h1.5a1 1 0 0 1 0 2H11z" fill="#ffffff"/>
        <path d="M14.5 11h1v-1h1v1h1v1h-1v1h-1v-1h-1v-1zm4.5 0h1v-1h1v1h1v1h-1v1h-1v-1h-1v-1z" fill="#ffffff"/>
      </svg>
    )
  },
  {
    name: "C#.net",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <path d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2z" fill="#512BD4"/>
        <path d="M10.5 9.5a3.5 3.5 0 1 0 0 5H12a1 1 0 0 1 0 2h-1.5a5.5 5.5 0 1 1 0-9H12a1 1 0 0 1 0 2h-1.5z" fill="#ffffff"/>
        <path d="M15 10.5h1v-1.5h1v1.5h1v1h-1v2h1v1h-1v1.5h-1V15h-1v1.5h-1V15h-.8v-1h.8v-2h-.8v-1h.8V10.5h1zm0 2.5v2h1v-2h-1z" fill="#ffffff"/>
      </svg>
    )
  },
  {
    name: "Basic Python",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <path d="M11.9 2c-3.1 0-5 .7-5 2.5v2h5v.8H5c-1.8 0-3.3 1.2-3.3 3.5 0 2.4 1.3 3.7 3.3 3.7h1.4v-1.8c0-1.6 1.3-2.9 2.9-2.9h5.1c1.4 0 2.6-1.1 2.6-2.6V4.5C17 2.7 15 2 11.9 2zM9.5 3.8a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z" fill="#3776AB"/>
        <path d="M12.1 22c3.1 0 5-.7 5-2.5v-2h-5v-.8h6.9c1.8 0 3.3-1.2 3.3-3.5 0-2.4-1.3-3.7-3.3-3.7h-1.4v1.8c0 1.6-1.3 2.9-2.9 2.9H9.6c-1.4 0-2.6 1.1-2.6 2.6v2.7c0 1.8 2 2.5 5.1 2.5zM14.5 20.2a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z" fill="#FFD438"/>
      </svg>
    )
  },
  {
    name: "Database SQL",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <ellipse cx="12" cy="6" rx="8" ry="3" fill="#00758F" stroke="#00A8CC" strokeWidth="1.2"/>
        <path d="M4 6v5c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#00A8CC" strokeWidth="1.5" fill="none"/>
        <path d="M4 11v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" stroke="#00A8CC" strokeWidth="1.5" fill="none"/>
      </svg>
    )
  },
  {
    name: "SQL Server (SSMS)",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="4" fill="#CC292B"/>
        <path d="M7 8h10v2H7V8zm0 3.5h10v2H7v-2zm0 3.5h7v2H7v-2z" fill="#ffffff"/>
        <circle cx="17" cy="16" r="2.2" fill="#FFD700"/>
      </svg>
    )
  },
  {
    name: "VS Code, Git & GitHub",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <path d="M21.7 10.9L13.1 2.3c-.4-.4-1.1-.4-1.5 0L9.9 4c-.3.3-.4.7-.3 1.1l2.3 2.3a2 2 0 0 1 1.2 2.6l2.4 2.4c.8-.2 1.8 0 2.4.6.8.8.8 2.2 0 3-.8.8-2.2.8-3 0-.6-.6-.8-1.6-.6-2.4l-2.2-2.2v5.7a2 2 0 1 1-1.7 0V9.4a2 2 0 0 1-1.1-2.6L7.2 4.5 2.3 9.4c-.4.4-.4 1.1 0 1.5l8.6 8.6c.4.4 1.1.4 1.5 0l9.3-9.3c.4-.4.4-1.1 0-1.5z" fill="#F05032"/>
      </svg>
    )
  },
  {
    name: "Responsive Design",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#c6ff4a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="15" height="11" rx="2" />
        <path d="M6 18h7" />
        <path d="M9.5 14v4" />
        <rect x="14" y="8" width="8" height="13" rx="2" fill="#161616" stroke="#c6ff4a" strokeWidth="1.6"/>
        <circle cx="18" cy="18" r="0.7" fill="#c6ff4a" />
      </svg>
    )
  },
  {
    name: "Antigravity IDE",
    icon: (
      <img
        src="/images/antigravity.png"
        alt="Antigravity IDE"
        width="28"
        height="28"
      />
    )
  }
];

const experienceData = [
  {
    id: 1,
    title: "Frontend Development Internship Remote",
    company: "DecodeLabs India",
    dates: "04/2026 - 04/2026",
    description: "Worked on building responsive UI components and improving frontend performance for client projects."
  },
  {
    id: 2,
    title: "ERP Software Development Internship",
    company: "Sonic Textile Industries Pvt Ltd Karachi",
    dates: "07/2026 - 08/2026",
    description: "Assisted in ERP software development, database management, and testing backend workflows using C#.net and SQL Server."
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  // Typewriter effect state
  const fullText = "I build responsive, user-friendly websites using React and modern JavaScript.";
  const [displayText, setDisplayText] = useState('');
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  // Email form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Header scroll & active section detector
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'resume', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mousemove listener for dynamic card spotlight glow
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.spotlight-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typewriter Loop
  useEffect(() => {
    let timeoutId;
    const typeLoop = () => {
      const currentLength = charIndexRef.current;
      if (!isDeletingRef.current) {
        if (currentLength < fullText.length) {
          setDisplayText(fullText.substring(0, currentLength + 1));
          charIndexRef.current += 1;
          timeoutId = setTimeout(typeLoop, 65);
        } else {
          timeoutId = setTimeout(() => {
            isDeletingRef.current = true;
            timeoutId = setTimeout(typeLoop, 30);
          }, 2000);
        }
      } else {
        if (currentLength > 0) {
          setDisplayText(fullText.substring(0, currentLength - 1));
          charIndexRef.current -= 1;
          timeoutId = setTimeout(typeLoop, 30);
        } else {
          isDeletingRef.current = false;
          timeoutId = setTimeout(typeLoop, 600);
        }
      }
    };

    timeoutId = setTimeout(typeLoop, 400);
    return () => clearTimeout(timeoutId);
  }, [fullText]);

  // EmailJS init
  useEffect(() => {
    emailjs.init('n0Rje1XERstqgDvVv');
  }, []);

  // Button Ripple effect handler
  const handleRipple = (e) => {
    const btn = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;
    const rect = btn.getBoundingClientRect();

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.classList.add('btn-ripple__wave');

    const ripple = btn.getElementsByClassName('btn-ripple__wave')[0];
    if (ripple) {
      ripple.remove();
    }
    btn.appendChild(circle);
  };

  // Form submission handler
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('All fields are required.');
      return;
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setFormError('Enter a valid email address.');
      return;
    }

    setFormError('');
    setIsLoading(true);

    const serviceID = 'service_rah2ks1';
    const templateID = 'template_abc6o8s';

    emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    })
      .then(() => {
        setIsLoading(false);
        setFormSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormSuccess(false), 5000);
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setIsLoading(false);
        setFormError('Failed to send message. Please try again later.');
      });
  };

  const allTechnologies = ["All", ...new Set(projectsData.flatMap(p => p.tech))];
  const filteredProjects = filter === "All"
    ? projectsData
    : projectsData.filter(p => p.tech.includes(filter));

  return (
    <>
      {/* Sticky Header */}
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-inner">
          <a href="#home" className="logo" aria-label="Muhammad Farhan Portfolio">
            <span className="logo-badge">
              <svg viewBox="0 0 512 512" width="28" height="28" fill="none">
                <defs>
                  <linearGradient id="navLimeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#eaff9e" />
                    <stop offset="40%" stopColor="#c6ff4a" />
                    <stop offset="100%" stopColor="#9ee81f" />
                  </linearGradient>
                </defs>
                <rect x="20" y="20" width="472" height="472" rx="116" fill="#141811" stroke="#c6ff4a" strokeWidth="16" strokeOpacity="0.4" />
                <path d="M140 168 L80 256 L140 344" fill="none" stroke="#FFFFFF" strokeWidth="34" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M198 154 L198 358" fill="none" stroke="url(#navLimeGrad)" strokeWidth="36" strokeLinecap="round" />
                <path d="M198 174 L314 174" fill="none" stroke="url(#navLimeGrad)" strokeWidth="36" strokeLinecap="round" />
                <path d="M198 256 L284 256" fill="none" stroke="url(#navLimeGrad)" strokeWidth="32" strokeLinecap="round" />
                <path d="M372 168 L432 256 L372 344" fill="none" stroke="#FFFFFF" strokeWidth="34" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="314" cy="358" r="15" fill="#c6ff4a" />
              </svg>
            </span>
            <span className="logo-text">FARHAN<span>.</span></span>
          </a>

          <nav className="desktop-nav">
            <a href="#home" className={activeSection === 'home' ? 'is-active' : ''}>HOME</a>
            <a href="#about" className={activeSection === 'about' ? 'is-active' : ''}>ABOUT</a>
            <a href="#skills" className={activeSection === 'skills' ? 'is-active' : ''}>SKILLS</a>
            <a href="#experience" className={activeSection === 'experience' ? 'is-active' : ''}>EXPERIENCE</a>
            <a href="#projects" className={activeSection === 'projects' ? 'is-active' : ''}>PROJECTS</a>
            <a href="#resume" className={activeSection === 'resume' ? 'is-active' : ''}>RESUME</a>
            <a href="#contact" className={activeSection === 'contact' ? 'is-active' : ''}>CONTACT</a>
          </nav>

          <div className="header-actions">
            <a href="#contact" className="btn btn-primary nav-cta" onClick={handleRipple} style={{ padding: '10px 22px', fontSize: '13px' }}>
              <span className="btn-ripple__content">LET'S TALK</span>
            </a>
            <button
              className="menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'is-open' : ''}`}>
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>HOME</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>ABOUT</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)}>SKILLS</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)}>EXPERIENCE</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>PROJECTS</a>
          <a href="#resume" onClick={() => setMobileMenuOpen(false)}>RESUME</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>CONTACT</a>
          <div className="mobile-nav-cta">
            <a href="#contact" className="btn btn-primary" onClick={(e) => { handleRipple(e); setMobileMenuOpen(false); }} style={{ width: '100%', justifyContent: 'center' }}>
              <span className="btn-ripple__content">LET'S TALK →</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* HERO SECTION */}
        <section id="home" className="hero">
          <div className="hero-glow hero-glow-left" aria-hidden="true"></div>
          <div className="hero-glow hero-glow-right" aria-hidden="true"></div>
          <div className="crosshair crosshair-tl" aria-hidden="true"></div>
          <div className="crosshair crosshair-br" aria-hidden="true"></div>

          <div className="container">
            <div className="hero-grid">
              <div className="hero-content">
                <div className="status-pill">
                  <span className="status-beacon">
                    <span className="status-ping"></span>
                    <span className="status-dot"></span>
                  </span>
                  <span className="status-label">Available for projects</span>
                </div>
                <div className="kicker">Front-End & Web Developer</div>
                <h1 className="hero-title">
                  <span className="hero-line">Hello, I'm a</span>
                  <span className="hero-accent">Junior Web Developer</span>
                </h1>

                <div className="hero-lede-box">
                  <p className="hero-typewriter lede">
                    {displayText}
                    <span className="hero-typewriter__cursor">|</span>
                  </p>
                </div>

                <div className="hero-cta">
                  <a href="#projects" className="btn btn-primary" onClick={handleRipple}>
                    <span className="btn-ripple__content">
                      View Projects
                      <span className="btn-icon">→</span>
                    </span>
                  </a>
                  <a href="#contact" className="btn btn-outline" onClick={handleRipple}>
                    <span className="btn-ripple__content">Contact Me</span>
                  </a>
                </div>

                <div className="hero-stats">
                  <article>
                    <strong>10+</strong>
                    <span>Technologies</span>
                  </article>
                  <article>
                    <strong>6+</strong>
                    <span>Projects Built</span>
                  </article>
                  <article>
                    <strong>100%</strong>
                    <span>Dedication</span>
                  </article>
                </div>
              </div>

              {/* Exact Portrait Card Visual matching Reference */}
              <div className="hero-visual">
                <div className="portrait-wrap">
                  <div className="portrait-card">
                    <div className="portrait-glow" aria-hidden="true"></div>
                    <img
                      src="/images/farhan.jpg"
                      alt="Muhammad Farhan — Front-End Web Developer"
                      width="796"
                      height="1062"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  <ul className="float-badges">
                    <li>
                      <span className="badge-dot"></span>
                      React.js
                    </li>
                    <li>
                      <span className="badge-dot"></span>
                      JavaScript
                    </li>
                    <li>
                      <span className="badge-dot"></span>
                      UI / UX
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section section-alt">
          <div className="container">
            <div className="section-heading text-center">
              <div className="kicker">About Me</div>
              <h2>Turning Ideas Into <span className="heading-accent">Fast & Responsive</span> Web Experiences</h2>
            </div>

            <div className="about-grid">
              <div className="about-card spotlight-card">
                <div className="spotlight-card__glow"></div>
                <p className="about-copy">
                  I'm <strong>Muhammad Farhan Faisal</strong>, a Junior Front-End Web Developer with interactive, user-centered design. Leveraging my skills in <strong>HTML, CSS, JavaScript, and Basic React</strong>, I turn complex ideas into fast, accessible, and responsive web applications. I thrive on solving intricate UI challenges and continuously optimize for performance to ensure the best possible user experience.
                </p>
              </div>

              <div className="about-stats">
                <div className="about-stat spotlight-card">
                  <div className="spotlight-card__glow"></div>
                  <strong>2+</strong>
                  <span>Internships Completed</span>
                </div>
                <div className="about-stat spotlight-card">
                  <div className="spotlight-card__glow"></div>
                  <strong>6+</strong>
                  <span>Live Applications</span>
                </div>
                <div className="about-stat spotlight-card">
                  <div className="spotlight-card__glow"></div>
                  <strong>React</strong>
                  <span>Frontend Focus</span>
                </div>
                <div className="about-stat spotlight-card">
                  <div className="spotlight-card__glow"></div>
                  <strong>24/7</strong>
                  <span>Fast Learner</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section">
          <div className="container">
            <div className="section-heading text-center">
              <div className="kicker">Skills</div>
              <h2>Technical <span className="heading-accent">Proficiencies</span></h2>
              <p className="section-copy">Core technologies and development tools I use to create modern web software.</p>
            </div>

            <div className="skills-grid">
              {skillsList.map((skill) => (
                <div key={skill.name} className="skill-card spotlight-card">
                  <div className="spotlight-card__glow"></div>
                  <div className="skill-icon">{skill.icon}</div>
                  <h3>{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section section-alt">
          <div className="container">
            <div className="section-heading text-center">
              <div className="kicker">Experience</div>
              <h2>Professional <span className="heading-accent">Journey</span></h2>
              <p className="section-copy">Hands-on industry experience building real-world software and responsive web systems.</p>
            </div>

            <div className="exp-timeline">
              {experienceData.map((exp) => (
                <div key={exp.id} className="exp-card spotlight-card">
                  <div className="spotlight-card__glow"></div>
                  <div className="exp-header">
                    <div>
                      <h3 className="exp-title">{exp.title}</h3>
                      <p className="exp-company">{exp.company}</p>
                    </div>
                    <span className="exp-date">{exp.dates}</span>
                  </div>
                  <p className="exp-description">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section">
          <div className="container">
            <div className="section-heading text-center">
              <div className="kicker">Projects</div>
              <h2>Featured <span className="heading-accent">Works</span></h2>
              <p className="section-copy">A showcase of interactive web applications, real-time apps, and database management systems.</p>
            </div>

            <div className="filter-buttons">
              {allTechnologies.map(tech => (
                <button
                  key={tech}
                  className={`filter-btn ${filter === tech ? 'is-active' : ''}`}
                  onClick={() => setFilter(tech)}
                >
                  {tech}
                </button>
              ))}
            </div>

            <div className="projects-grid">
              {filteredProjects.map(project => (
                <div key={project.id} className="project-card spotlight-card">
                  <div className="spotlight-card__glow"></div>
                  <div className="project-media">
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </div>
                  <div className="project-body">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tech.map(t => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
                    <div className="project-actions">
                      {project.liveUrl && project.liveUrl !== '#' ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                          onClick={handleRipple}
                          style={{ padding: '10px 20px', fontSize: '13px' }}
                        >
                          <span className="btn-ripple__content">
                            Live Demo
                            <span className="btn-icon">↗</span>
                          </span>
                        </a>
                      ) : (
                        <a
                          href="#"
                          className="btn btn-outline"
                          onClick={handleRipple}
                          style={{ padding: '10px 20px', fontSize: '13px' }}
                        >
                          <span className="btn-ripple__content">View Project</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESUME SECTION */}
        <section id="resume" className="section section-alt">
          <div className="container">
            <div className="resume-box spotlight-card">
              <div className="spotlight-card__glow"></div>
              <div className="kicker">Resume</div>
              <h2>Want to Learn More?</h2>
              <p>My professional resume to learn more about my skills and experience.</p>
              <a href="/Farhan_CV.pdf" download="Farhan_CV.pdf" className="btn btn-primary" onClick={handleRipple}>
                <span className="btn-ripple__content">
                  Download Resume
                  <span className="btn-icon">↓</span>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section">
          <div className="container">
            <div className="section-heading text-center">
              <div className="kicker">Contact</div>
              <h2>Let's Build Something <span className="heading-accent">Together</span></h2>
              <p className="section-copy">Feel free to reach out for collaboration, job opportunities, or project discussions.</p>
            </div>

            <div className="contact-grid">
              <div className="contact-facts">
                <div className="fact-card spotlight-card">
                  <div className="spotlight-card__glow"></div>
                  <div className="fact-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:malikfarhan999x@gmail.com">malikfarhan999x@gmail.com</a>
                  </div>
                </div>

                <div className="fact-card spotlight-card">
                  <div className="spotlight-card__glow"></div>
                  <div className="fact-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>GitHub</h4>
                    <a href="https://github.com/farhan0999" target="_blank" rel="noopener noreferrer">github.com/farhan0999</a>
                  </div>
                </div>

                <div className="fact-card spotlight-card">
                  <div className="spotlight-card__glow"></div>
                  <div className="fact-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.366c0-4.624 5.935-5.012 5.935 0v8.366h5v-10.278c0-7.684-8.533-7.427-10.967-3.65v-2.072z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/malik-farhan-b40a962b4/" target="_blank" rel="noopener noreferrer">in/malik-farhan-b40a962b4</a>
                  </div>
                </div>
              </div>

              <div className="contact-form spotlight-card">
                <div className="spotlight-card__glow"></div>
                <form onSubmit={handleContactSubmit}>
                  <div className="float-field">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={isLoading}
                    />
                  </div>

                  <div className="float-field">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={isLoading}
                    />
                  </div>

                  <div className="float-field">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      disabled={isLoading}
                    />
                  </div>

                  {formError && <div className="form-feedback error">{formError}</div>}
                  {formSuccess && <div className="form-feedback success">Message sent successfully!</div>}

                  <button type="submit" className="btn btn-primary" disabled={isLoading} onClick={handleRipple}>
                    <span className="btn-ripple__content">
                      {isLoading ? 'Sending...' : 'Send Message'}
                      <span className="btn-icon">→</span>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="social-row">
            <a href="https://github.com/farhan0999" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/malik-farhan-b40a962b4/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.366c0-4.624 5.935-5.012 5.935 0v8.366h5v-10.278c0-7.684-8.533-7.427-10.967-3.65v-2.072z"/>
              </svg>
            </a>
            <a href="https://x.com/MALIKFA04510116" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="X">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/primedecoder333/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
          <p className="copyright">© 2026 Muhammad Farhan. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top */}
      <button
        id="scroll-top"
        className={isScrolled ? 'is-visible' : ''}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </>
  );
}
