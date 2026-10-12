const { useState, useEffect, useRef } = React;

// Dark Mode Toggle
function DarkModeToggle() {
    const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

    useEffect(() => {
        document.body.classList.toggle('dark', dark);
        localStorage.setItem('theme', dark ? 'dark' : 'light');
    }, [dark]);

    return (
        <button
            id="theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
        >
            {dark ? (
                <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
            ) : (
                <svg viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            )}
        </button>
    );
}
ReactDOM.createRoot(document.getElementById('dark-toggle-root')).render(<DarkModeToggle />);

// ---------- HOME COMPONENT ----------
function Home() {
    const fullText = "I build responsive, user-friendly websites using React and modern JavaScript.";
    const [displayText, setDisplayText] = useState('');
    const charIndexRef = useRef(0);
    const isDeletingRef = useRef(false);

    useEffect(() => {
        let timeoutId;

        const typeLoop = () => {
            const currentLength = charIndexRef.current;

            if (!isDeletingRef.current) {
                if (currentLength < fullText.length) {
                    setDisplayText(fullText.substring(0, currentLength + 1));
                    charIndexRef.current += 1;
                    timeoutId = setTimeout(typeLoop, 70);
                } else {
                    timeoutId = setTimeout(() => {
                        isDeletingRef.current = true;
                        timeoutId = setTimeout(typeLoop, 30);
                    }, 1500);
                }
            } else {
                if (currentLength > 0) {
                    setDisplayText(fullText.substring(0, currentLength - 1));
                    charIndexRef.current -= 1;
                    timeoutId = setTimeout(typeLoop, 30);
                } else {
                    isDeletingRef.current = false;
                    timeoutId = setTimeout(typeLoop, 800);
                }
            }
        };

        timeoutId = setTimeout(typeLoop, 400);
        return () => clearTimeout(timeoutId);
    }, [fullText]);

    return (
        <>
            <h1>Hello, I'm a Junior Web Developer</h1>
            <p className="typing-text">
                {displayText}
                <span className="cursor">|</span>
            </p>
            <a href="#projects" className="btn">View Projects</a>
        </>
    );
}
ReactDOM.createRoot(document.getElementById('home-root')).render(<Home />);

// ---------- PROJECTS DATA ----------
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
        image: "images/login-app.png",
        tech: ["C#.net", "SQL Server"],
        liveUrl: "https://farhan0999.github.io/Login-App/"
    },
    {
        id: 6,
        title: "Employee Management System",
        description: "Using React, Python & SQL Server.",
        image: "images/employee management system.png",
        tech: ["Python, React, SQL Server"],
        liveUrl: "https://farhan0999.github.io/System/"
    },
];

// ---------- PROJECTS COMPONENT ----------
function Projects() {
    const [filter, setFilter] = useState("All");
    const allTechnologies = ["All", ...new Set(projectsData.flatMap(p => p.tech))];

    const filteredProjects = filter === "All"
        ? projectsData
        : projectsData.filter(p => p.tech.includes(filter));

    return (
        <div>
            <div className="filter-buttons">
                {allTechnologies.map(tech => (
                    <button
                        key={tech}
                        className={`filter-btn ${filter === tech ? 'active' : ''}`}
                        onClick={() => setFilter(tech)}
                    >
                        {tech}
                    </button>
                ))}
            </div>
            <div className="projects-grid">
                {filteredProjects.map(project => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title} />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div style={{ marginBottom: '0.8rem' }}>
                                {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                            </div>

                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
                                {project.liveUrl && project.liveUrl !== '#' ? (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
                                        Live Demo
                                    </a>
                                ) : (
                                    <a href="#" className="btn" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
                                        View Project
                                    </a>
                                )}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
ReactDOM.createRoot(document.getElementById('projects-root')).render(<Projects />);

// ---------- CONTACT FORM WITH EMAILJS ----------
function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    // Initialize EmailJS with your public key
    useEffect(() => {
        emailjs.init('n0Rje1XERstqgDvVv');
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setError('All fields are required.');
            return;
        }
        if (!formData.email.includes('@') || !formData.email.includes('.')) {
            setError('Enter a valid email address.');
            return;
        }

        setError('');
        setIsLoading(true);

        // Send via EmailJS
        const serviceID = 'service_rah2ks1';
        const templateID = 'template_abc6o8s';

        emailjs.send(serviceID, templateID, {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        })
            .then(() => {
                setIsLoading(false);
                setSuccess(true);
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setSuccess(false), 5000);
            })
            .catch((err) => {
                console.error('EmailJS error:', err);
                setIsLoading(false);
                setError('Failed to send message. Please try again later.');
            });
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading}
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
            />
            <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                disabled={isLoading}
            />
            {error && <p className="form-feedback error">{error}</p>}
            {success && <p className="form-feedback success">Message sent successfully!</p>}
            <button type="submit" className="btn" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
}
ReactDOM.createRoot(document.getElementById('contact-root')).render(<ContactForm />);

// Scroll to top
const scrollBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 500 ? 'flex' : 'none';
});
scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});