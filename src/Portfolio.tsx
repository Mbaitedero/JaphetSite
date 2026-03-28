import { useState, useEffect } from 'react'
import './Portfolio.css'
import japhetImg from './assets/japhet.png'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  metrics: string[]
  details: string
}

interface Experience {
  title: string
  organization: string
  date: string
  description: string[]
}

interface Education {
  degree: string
  institution: string
  date: string
  specialization?: string
}

function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('')

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(prefersDark)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const projects: Project[] = [
    {
      id: 1,
      title: 'Automated Bank Fraud Detection',
      description: 'Machine learning system for detecting fraudulent transactions with high precision',
      technologies: ['Python', 'Scikit-Learn', 'SMOTE', 'Pandas'],
      metrics: ['96% Precision', '91% Recall', '40% Reduction in undetected fraud'],
      details: 'Developed an end-to-end fraud detection pipeline using advanced machine learning techniques. Implemented SMOTE for handling imbalanced datasets and achieved significant improvements in fraud detection rates while minimizing false positives.'
    },
    {
      id: 2,
      title: 'Credit Scoring Application',
      description: 'Big data solution for credit risk assessment using Apache Spark',
      technologies: ['R', 'Sparklyr', 'Apache Spark', 'Shiny'],
      metrics: ['Scalable processing', 'Interactive dashboard', 'Real-time scoring'],
      details: 'Built a distributed credit scoring system capable of processing large volumes of financial data. Created an interactive Shiny dashboard for visualization and real-time credit risk assessment.'
    },
    {
      id: 3,
      title: 'Customer Churn Prediction',
      description: 'Predictive analytics solution to identify at-risk customers',
      technologies: ['Python', 'Scikit-Learn', 'XGBoost', 'Feature Engineering'],
      metrics: ['87% At-risk identification', 'AUC 0.89', '15% Projected churn reduction'],
      details: 'Implemented advanced feature engineering and ensemble methods to predict customer churn. The model enables proactive retention strategies by identifying customers likely to leave before they do.'
    }
  ]

  const experience: Experience[] = [
    {
      title: 'Data Analyst / Data Science Intern',
      organization: 'ENSA Fès',
      date: 'July - August 2025',
      description: [
        'Automated data collection of 200+ craftsmen profiles via web scraping',
        'Feature engineering and clustering with KMeans (Silhouette Score: 0.67)',
        'Delivered decision-support tool for tourism promotion'
      ]
    }
  ]

  const education: Education[] = [
    {
      degree: 'B.Eng. Data Science & Artificial Intelligence',
      institution: 'ENSA Fès',
      date: '2024 - 2027',
      specialization: 'Machine Learning, Deep Learning, Big Data'
    },
    {
      degree: 'Integrated Preparatory Classes',
      institution: 'ENSA Fès',
      date: '2022 - 2024'
    }
  ]

  const skills = {
    languages: ['Python (Pandas, NumPy, Scikit-Learn)', 'SQL', 'R', 'Java', 'C++'],
    deepLearning: ['PyTorch', 'TensorFlow', 'ANN', 'CNN', 'LSTM'],
    mlSupervised: ['Logistic Regression', 'Random Forest', 'XGBoost'],
    mlUnsupervised: ['KMeans', 'DBSCAN'],
    bigData: ['Apache Spark', 'Hadoop', 'Kafka'],
    dataViz: ['Power BI', 'Matplotlib', 'Seaborn', 'Folium'],
    web: ['HTML/CSS/JS', 'BeautifulSoup', 'Selenium']
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const downloadCV = () => {
    alert('CV download will be available soon. Please contact allahndiguimj@gmail.com for a copy.')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    console.log('Form submitted:', { name, email, message })

    setFormStatus('Thank you for your message! I will get back to you soon.')
    e.currentTarget.reset()

    setTimeout(() => {
      setFormStatus('')
    }, 5000)
  }

  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">Japhet Allah-N'diguim</div>
          <button
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-image">
            <img src={japhetImg} alt="Japhet Allah-N'diguim" />
          </div>
          <h1 className="hero-title">
            <span className="typing-text">Hi, I'm Japhet</span>
          </h1>
          <p className="hero-subtitle">Data Science & AI Engineering Student</p>
          <p className="hero-description">
            Building intelligent systems through machine learning and data analytics
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
              View My Work
            </button>
            <button onClick={downloadCV} className="btn btn-secondary">
              Download CV
            </button>
          </div>
          <div className="hero-social">
            <a href="https://linkedin.com/in/japhet-allah-ndiguim-764878320" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="mailto:allahndiguimj@gmail.com" aria-label="Email">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-quote">
                "Turning data into insights, insights into action"
              </p>
              <p>
                I'm a Data Science & AI engineering student with a passion for building intelligent systems
                that solve real-world problems. My hands-on experience spans fraud detection, churn prediction,
                and unsupervised clustering on real-world datasets.
              </p>
              <p>
                Proficient in Python, deep learning frameworks (PyTorch, TensorFlow), and big data technologies,
                I thrive on transforming complex data into actionable insights. When I'm not coding, you'll find
                me exploring new ML papers on Kaggle, capturing moments through photography, or staying active
                with football, basketball, and boxing.
              </p>
              <div className="about-info">
                <div className="info-item">
                  <strong>Location:</strong> Fès, Morocco
                </div>
                <div className="info-item">
                  <strong>Languages:</strong> French (Fluent), English (A2), Ngambaye (Native)
                </div>
                <div className="info-item">
                  <strong>Interests:</strong> AI & Data Science, Kaggle competitions, Photography, Sports
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="timeline-section">
        <div className="container">
          <h2 className="section-title">Education & Experience</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">{education[0].date}</span>
                <h3>{education[0].degree}</h3>
                <h4>{education[0].institution}</h4>
                <p>{education[0].specialization}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">{experience[0].date}</span>
                <h3>{experience[0].title}</h3>
                <h4>{experience[0].organization}</h4>
                <ul>
                  {experience[0].description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">{education[1].date}</span>
                <h3>{education[1].degree}</h3>
                <h4>{education[1].institution}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-metrics">
                  {project.metrics.map((metric, idx) => (
                    <span key={idx} className="metric">{metric}</span>
                  ))}
                </div>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-link">View Details →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-tags">
                {skills.languages.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Deep Learning</h3>
              <div className="skill-tags">
                {skills.deepLearning.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Supervised ML</h3>
              <div className="skill-tags">
                {skills.mlSupervised.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Unsupervised ML</h3>
              <div className="skill-tags">
                {skills.mlUnsupervised.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Big Data</h3>
              <div className="skill-tags">
                {skills.bigData.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Data Visualization</h3>
              <div className="skill-tags">
                {skills.dataViz.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Web Development</h3>
              <div className="skill-tags">
                {skills.web.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>
                I'm always interested in hearing about new opportunities, collaborations,
                or just chatting about data science and AI.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                  </svg>
                  <a href="mailto:allahndiguimj@gmail.com">allahndiguimj@gmail.com</a>
                </div>
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-9.638.182-.15 1.162-.95 1.162-.95l-3.521-6.795c-.25.125-1.492.815-1.819 1.002-1.796 1.028-2.628 2.955-2.628 4.544 0 6.285 9.328 17.617 14.356 17.617 1.839 0 3.667-.998 4.714-2.628.173-.27.833-1.502.95-1.768z"/>
                  </svg>
                  <a href="tel:+212777757825">+212 777 757 825</a>
                </div>
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                  </svg>
                  <span>Fès, Morocco</span>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
              {formStatus && <p className="form-status">{formStatus}</p>}
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Japhet Allah-N'diguim. All rights reserved.</p>
        </div>
      </footer>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              ×
            </button>
            <h2>{selectedProject.title}</h2>
            <p className="modal-description">{selectedProject.details}</p>
            <div className="modal-section">
              <h3>Key Metrics</h3>
              <div className="project-metrics">
                {selectedProject.metrics.map((metric, idx) => (
                  <span key={idx} className="metric">{metric}</span>
                ))}
              </div>
            </div>
            <div className="modal-section">
              <h3>Technologies Used</h3>
              <div className="project-tech">
                {selectedProject.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Portfolio
