import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight, BriefcaseBusiness, CheckCircle2, Download, Github, GraduationCap,
  Linkedin, Mail, Menu, Moon, Sun, UserRound, X,
} from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Mahesh Hake',
  role: 'Java Full Stack Developer',
  email: 'hakemahesh11@gmail.com',
  location: 'Pune, Maharashtra',
  linkedin: 'https://www.linkedin.com/in/mahesh-hake-b66538285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  intro: 'I build robust, scalable and user-friendly web applications using Java, React and MySQL.',
};

const skills = [
  ['Java', 'Core Java, OOP, Collections'],
  ['Java Web', 'MVC, JPA and backend logic'],
  ['Application Development', 'Clean and maintainable code'],
  ['React', 'Components, Hooks, API'],
  ['JavaScript', 'ES6, DOM, Async JS'],
  ['MySQL', 'SQL, Joins, Relationships'],
  ['HTML5', 'Semantic HTML'],
  ['CSS3', 'Responsive Design'],
  ['Git & GitHub', 'Version Control'],
];

const projects = [
  {
    title: 'PG & Flat Tracking System',
    stack: 'HTML · CSS · JavaScript · SQL',
    description: 'A simple, user-friendly platform that helps students and working professionals find and manage PG and flat accommodation information.',
    points: ['Structured listing database', 'Tenant information', 'Search and filtering', 'Listing management'],
    image: 'accommodation',
  },
  {
    title: 'Doggy - Helping Stray Dogs',
    stack: 'Java · Kotlin · Android Studio · Firebase · Google Maps',
    description: 'An Android application for reporting and locating stray dogs, connecting users with synchronized data, location tracking, and notifications.',
    points: ['Firebase Authentication', 'Realtime Database', 'Google Maps locations', 'Image uploads and notifications'],
    image: 'doggy',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(true);

  React.useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="reference-portfolio">
      <header className="reference-header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <img src="/mahesh-hake-profile.jpeg" alt="Mahesh Hake" />
          <span><b>Mahesh</b> Hake</span>
        </a>
        <nav className={menuOpen ? 'reference-nav open' : 'reference-nav'}>
          <a className="active" href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <div className="header-actions">
          <a className="resume-link" href="/mahesh-hake-resume.pdf" target="_blank" rel="noreferrer"><Download size={15} /> Resume</a>
          <button className="round-control" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle theme">
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button className="menu-control" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main>
        <section className="reference-hero" id="home">
          <div className="hero-scene" aria-hidden="true">
            <span className="scene-orb orb-one" />
            <span className="scene-orb orb-two" />
            <span className="scene-orb orb-three" />
            <span className="scene-particle particle-one" />
            <span className="scene-particle particle-two" />
            <span className="scene-particle particle-three" />
            <div className="tech-badge tech-java"><span>☕</span><b>Java</b></div>
            <div className="tech-badge tech-js"><span>JS</span><b>JavaScript</b></div>
            <div className="tech-badge tech-mysql"><span>◈</span><b>MySQL</b></div>
            <i className="light-trail trail-one" />
            <i className="light-trail trail-two" />
            <div className="hero-orbit orbit-a" /><div className="hero-orbit orbit-b" /><div className="hero-orbit orbit-c" />
          </div>
          <div className="hero-content">
            <p className="hero-greeting">Hello, I&apos;m</p>
            <h1>Mahesh <span>Hake</span></h1>
            <h2>{profile.role}</h2>
            <p>{profile.intro}</p>
            <div className="hero-buttons">
              <a className="blue-button" href="#projects">View Projects <ArrowRight size={18} /></a>
              <a className="outline-button" href={`mailto:${profile.email}`}><Mail size={17} /> Contact Me</a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/hakemahesh11?tab=repositories" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={20} /></a>
            </div>
          </div>
        </section>

        <section className="reference-section about-reference" id="about">
          <div className="section-heading"><span>01</span><div><p>About me</p><h2>Building with purpose.</h2></div></div>
          <div className="about-columns">
            <div className="about-icon"><UserRound size={40} /></div>
            <div><p>I&apos;m a passionate Java Full Stack Developer based in {profile.location}, interested in developing secure, scalable and high-performance web applications.</p><p>I work with Java, React and MySQL to build complete full-stack applications. I enjoy solving real-world problems and writing clean, maintainable and efficient code.</p></div>
          </div>
        </section>

        <section className="reference-section" id="skills">
          <div className="section-heading"><span>02</span><div><p>My toolkit</p><h2>Skills & technologies.</h2></div></div>
          <div className="skills-grid">{skills.map(([name, detail]) => <article className="skill-card" key={name}><CheckCircle2 size={20} /><h3>{name}</h3><p>{detail}</p></article>)}</div>
        </section>

        <section className="reference-section" id="projects">
          <div className="section-heading"><span>03</span><div><p>What I&apos;ve built</p><h2>Featured projects.</h2></div></div>
          <div className="reference-projects">{projects.map((project) => <article className="reference-project" key={project.title}><div className={`project-image ${project.image}`}><div className="browser-frame"><span /><span /><span /><div className="frame-content"><b>{project.image === 'accommodation' ? 'PG / FLAT' : 'DOGGY'}</b><i /><i /><i /></div></div></div><div className="project-copy"><h3>{project.title}</h3><strong>{project.stack}</strong><p>{project.description}</p><ul>{project.points.map((point) => <li key={point}>{point}</li>)}</ul></div></article>)}</div>
        </section>

        <section className="reference-section timeline-section" id="experience">
          <div className="section-heading"><span>04</span><div><p>My journey</p><h2>Experience.</h2></div></div>
          <div className="experience-list">
            <article className="experience-card">
              <div className="experience-date"><span>01</span><small>Certification</small></div>
              <div className="timeline-icon"><BriefcaseBusiness size={19} /></div>
              <div className="experience-content">
                <p className="experience-label">Java Certification · Core2Web</p>
                <h3>Core Java & Advanced Java</h3>
                <p className="experience-summary">Completed certification covering Core Java, Advanced Java, Data Structures & Algorithms, and Operating Systems.</p>
                <div className="experience-tools"><span>Core Java</span><span>Advanced Java</span><span>DSA</span><span>Operating Systems</span></div>
              </div>
            </article>
            <article className="experience-card">
              <div className="experience-date"><span>02</span><small>Creative skill</small></div>
              <div className="timeline-icon"><BriefcaseBusiness size={19} /></div>
              <div className="experience-content">
                <p className="experience-label">Professional video editing</p>
                <h3>Video Editing</h3>
                <p className="experience-summary">Experience creating and editing videos using VN Editor, CapCut, and Adobe Premiere Pro.</p>
                <div className="experience-tools"><span>VN Editor</span><span>CapCut</span><span>Adobe Premiere Pro</span></div>
              </div>
            </article>
            <article className="experience-card">
              <div className="experience-date"><span>2 yrs</span><small>Experience</small></div>
              <div className="timeline-icon"><BriefcaseBusiness size={19} /></div>
              <div className="experience-content">
                <p className="experience-label">Personal achievement</p>
                <h3>Wrestling</h3>
                <p className="experience-summary">Two years of wrestling experience demonstrating discipline, consistency, and commitment.</p>
                <div className="experience-tools"><span>Discipline</span><span>Consistency</span><span>Commitment</span></div>
              </div>
            </article>
          </div>
        </section>

        <section className="reference-section timeline-section" id="education">
          <div className="section-heading"><span>05</span><div><p>Academic background</p><h2>Education.</h2></div></div>
          <div className="education-grid"><article><GraduationCap size={24} /><small>2021 — 2025</small><h3>Bachelor of Computer Engineering</h3><p>University of Mumbai</p><strong>CGPA: 6.75 / 10.00</strong></article><article><GraduationCap size={24} /><small>2021</small><h3>H.S.C.</h3><p>Maharashtra State Board</p><strong>Percentage: 86.17%</strong></article><article><GraduationCap size={24} /><small>2019</small><h3>S.S.C.</h3><p>Maharashtra State Board</p><strong>Percentage: 70.20%</strong></article></div>
        </section>

        <section className="reference-contact" id="contact"><p>Let&apos;s work together</p><h2>Have a project in mind?</h2><a className="blue-button" href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a></section>
      </main>
      <footer className="reference-footer"><span>© 2025 Mahesh Hake</span><span>Java Full Stack Developer</span></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
