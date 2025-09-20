const { useState, useEffect } = React;

// Portfolio data
const portfolioData = {
  "personalInfo": {
    "name": "Pratiyush Kumar",
    "title": "Power BI Developer | Data Analytics Specialist",
    "location": "Gaya, Bihar",
    "phone": "+917301125802",
    "email": "pratiyushpk@gmail.com",
    "linkedin": "https://www.linkedin.com/in/pratiyushh/",
    "github": "https://github.com/Pratiyushhh",
    "profilePhoto": "assets/IMG_0701.jpg",
    "resumeLink": "assets/Pratiyush_Resume.pdf",
    "intro": "I'm a detail-oriented data analyst and business intelligence consultant with a proven track record of delivering C-level insights that drive measurable business impact. My work transforms raw data into strategic competitive advantage, serving executives, product managers, and business stakeholders with implementation-ready intelligence.",
    "summary": "Google Certified Data Analyst with a proven ability to develop effective Power BI dashboards from concept to deployment. Adept at the full data analysis lifecycle: transforming and cleaning raw data, performing exploratory analysis, and running complex SQL queries to define key performance metrics."
  },
  "skills": [
    {
      "category": "Business Intelligence & Visualization",
      "skills": ["Power BI (Desktop, Service, Power Query, DAX)", "Tableau", "KPI Dashboards", "Data Modeling", "Report Automation", "Data Storytelling"]
    },
    {
      "category": "Data Analytics & ETL",
      "skills": ["SQL (CTEs, Joins, Stored Procedures)", "Python (Pandas, NumPy)", "R (ggplot2, dplyr, lubridate)"]
    },
    {
      "category": "Databases & Cloud",
      "skills": ["Google BigQuery", "SQL Server", "Advanced Excel (PIVOT tables, VLOOKUP, VBA)"]
    },
    {
      "category": "Consulting & Collaboration",
      "skills": ["Requirement Gathering", "Stakeholder Engagement", "Client Presentations", "Agile Methods", "Cross-Functional Teaming", "Documentation", "Git"]
    }
  ],
  "experience": [
    {
      "title": "Software & Data Analytics Intern",
      "company": "Tata Steel Foundation",
      "location": "Jamshedpur, Jharkhand",
      "duration": "Feb 2024 - Aug 2024",
      "achievements": [
        "Designed, developed, and maintained 10+ KPI dashboards in Power BI with DAX and Power Query, enabling faster data-driven decisions for senior leadership",
        "Automated SQL-to-Excel reporting pipelines using stored procedures, reducing manual reporting efforts by 20%",
        "Collaborated with cross-functional teams to design analytics solutions aligned with strategic business goals"
      ]
    },
    {
      "title": "Teaching Assistant",
      "company": "Coding Ninjas",
      "location": "Remote",
      "duration": "Oct 2023 - Jan 2024",
      "achievements": [
        "Conducted 1:1 mentoring for 200+ learners on Java and DSA, improving student accuracy scores by 15%",
        "Reviewed and debugged 100+ student codebases, increasing project completion rates by 20%"
      ]
    }
  ],
  "projects": [
    {
      "title": "Capstone: Cyclistic Bike-Share Analysis Case Study",
      "tools": ["Excel", "SQL", "R"],
      "githubLink": "https://github.com/Pratiyushhh/Capstone-Cyclistic-Bike-Share-Analysis",
      "pdfLink": "assets/Cyclistic_case_study_notebook.pdf",
      "achievements": [
        "Analyzed 5.47M+ trips over the last 12 months to compare rider behavior between casual and annual members",
        "Engineered a 97.5% clean dataset with >99.9% statistical confidence using advanced R data wrangling",
        "Quantified 155K+ potential annual member conversions at a 10% rate, projecting major revenue growth"
      ]
    },
    {
      "title": "Telecom Customer Churn Analysis",
      "tools": ["Power BI", "SQL", "DAX"],
      "githubLink": "https://github.com/Pratiyushhh/Telecom-Customer-Churn-Analysis",
      "pdfLink": "assets/Telecom-Customer-Churn-Analysis.pdf",
      "achievements": [
        "Analyzed data from 7,043 customers, identifying a 26.5% churn rate and $3.68M in lost revenue",
        "Provided key insights by highlighting that 25% of high-value customers contributed to 50% of churned revenue",
        "Recommended data-driven strategies (loyalty perks, digital billing incentives) adopted for retention planning"
      ]
    },
    {
      "title": "Workforce Intelligence Dashboard",
      "tools": ["Power BI", "DAX", "Power Query"],
      "githubLink": "https://github.com/Pratiyushhh/Global-Data-Professionals-Insights",
      "pdfLink": "assets/Workforce-Intelligence-Dashboard_Export.pdf",
      "achievements": [
        "Designed a dynamic dashboard analyzing survey responses from 630+ data professionals",
        "Delivered insights on job satisfaction vs compensation, showing remote work and culture as key motivators"
      ]
    }
  ],
  "education": {
    "degree": "B.Tech in Computer Science & Engineering",
    "institution": "Central University of Haryana",
    "duration": "Nov 2020 - Jun 2024",
    "cgpa": "8.04"
  }
};

// Utility function for smooth scrolling
const scrollToElement = (elementId) => {
  setTimeout(() => {
    const element = document.querySelector(elementId);
    if (element) {
      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, 100);
};

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href, e) => {
    e.preventDefault();
    e.stopPropagation();
    scrollToElement(href);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-glass">
      <div className="container">
        <a 
          className="navbar-brand" 
          href="#home" 
          onClick={(e) => handleNavClick('#home', e)}
          style={{ cursor: 'pointer' }}
        >
          Portfolio
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li key={item.name} className="nav-item">
                <a 
                  className="nav-link" 
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  style={{ cursor: 'pointer' }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  const { personalInfo } = portfolioData;
  
  const handleViewResume = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (personalInfo.resumeLink) {
      window.open(personalInfo.resumeLink, '_blank', 'noopener,noreferrer');
    }
  };

  const handleViewProjects = (e) => {
    e.preventDefault();
    e.stopPropagation();
    scrollToElement('#projects');
  };
  
  const handleGetInTouch = (e) => {
    e.preventDefault();
    e.stopPropagation();
    scrollToElement('#contact');
  };
  
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="hero-content">
              <h1 className="animate-fade-in">Hi, I'm {personalInfo.name}</h1>
              <h2 className="animate-fade-in animate-delay-1">{personalInfo.title}</h2>
              <p className="animate-fade-in animate-delay-2">{personalInfo.intro}</p>
              <div className="hero-buttons animate-fade-in animate-delay-3">
                <button 
                  className="btn-glass btn-primary" 
                  onClick={handleViewResume}
                  type="button"
                >
                  <i className="fas fa-file-alt"></i>
                  View Resume
                </button>
                <button 
                  className="btn-glass" 
                  onClick={handleViewProjects}
                  type="button"
                >
                  <i className="fas fa-project-diagram"></i>
                  View Projects
                </button>
                <button 
                  className="btn-glass" 
                  onClick={handleGetInTouch}
                  type="button"
                >
                  <i className="fas fa-envelope"></i>
                  Let's Connect!
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-flex justify-content-center animate-fade-in animate-delay-2">
              <div className="profile-image">
                <img 
                  src={personalInfo.profilePhoto} 
                  alt={personalInfo.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="profile-placeholder" style={{display: 'none'}}>
                  <i className="fas fa-user"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  const { personalInfo, education } = portfolioData;
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    });

    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="about" className="section section-animate">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card-glass animate-delay-1">
              <h3>Professional Summary</h3>
              <p>{personalInfo.summary}</p>
              
              <div className="row mt-4">
                <div className="col-md-6">
                  <h4>Education</h4>
                  <p>
                    <strong>{education.degree}</strong><br />
                    {education.institution}<br />
                    {education.duration}<br />
                    CGPA: {education.cgpa}
                  </p>
                </div>
                <div className="col-md-6">
                  <h4>Certifications</h4>
                  <ul class="styled-ul">
                    <li>Google Data Analytics Professional</li>
                    <li>Deloitte Data Analytics Job Simulation</li>
                    <li>Coding Ninjas' Data Structures & Algorithms in Java</li>
                    <li>UGC NET Certified - Computer Science & Applications</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section Component
const SkillsSection = () => {
  const { skills } = portfolioData;
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    });

    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="skills" className="section section-animate">
      <div className="container">
        <div className="section-title">
          <h2>Technical Skills</h2>
        </div>
        <div className="row">
          {skills.map((skillCategory, index) => (
            <div key={index} className="col-lg-6 mb-4">
              <div className={`card-glass animate-delay-${index % 3 + 1}`}>
                <div className="skills-wrapper">
                  <h3>{skillCategory.category}</h3>
                  <div className="skills-tags">
                    {skillCategory.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Section Component
const ExperienceSection = () => {
  const { experience } = portfolioData;
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    });

    const experienceSection = document.querySelector('#experience');
    if (experienceSection) {
      observer.observe(experienceSection);
    }

    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="experience" className="section section-animate">
      <div className="container">
        <div className="section-title">
          <h2>Professional Experience</h2>
        </div>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className={`timeline-item animate-delay-${index + 1}`}>
                  <div className="card-glass">
                    <h3>{exp.title}</h3>
                    <h4>{exp.company} - {exp.location}</h4>
                    <p className="mb-3"><strong>{exp.duration}</strong></p>
                    <ul class="styled-ul">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Section Component
const ProjectsSection = () => {
  const { projects } = portfolioData;
  
  const handleProjectClick = (link, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    });

    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="projects" className="section section-animate">
      <div className="container">
        <div className="section-title">
          <h2>Featured Projects</h2>
        </div>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className={`project-card animate-delay-${index + 1}`}>
                <div className="project-card-body">
                  <div className="project-title">
                    {/* Project Title */}
                    <h4>{project.title}</h4>
                  </div>

                  {/* Tech Stack */}
                  <div className="project-tools">
                    {project.tools.map((tool, toolIndex) => (
                      <span key={toolIndex} className="tool-tag">
                        {tool}
                      </span>
                    ))}
                  </div>
                    
                  {/* Project Description - achievements */}
                  <div className="project-achievements">
                    <ul class="styled-ul">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Button Section */}
                  <div className="project-buttons">
                    <button 
                      className="btn-glass btn-glass-small"
                      onClick={(e) => handleProjectClick(project.githubLink, e)}
                      type="button"
                    >
                      <i className="fab fa-github"></i>
                      <span>View GitHub</span>
                    </button>
                    <button 
                      className="btn-glass btn-glass-small btn-primary"
                      onClick={(e) => handleProjectClick(project.pdfLink, e)}
                      type="button"
                    >
                      <i className="fas fa-file-pdf"></i>
                      <span>View PDF</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  const { personalInfo } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const subject = encodeURIComponent('Portfolio Contact from ' + formData.name);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    window.open(mailtoLink);
  };

  const handleSocialClick = (link, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const handleEmailClick = (email, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (email) {
      window.open(`mailto:${email}`);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    });

    // Observe inner elements instead of the whole section
    const targets = document.querySelectorAll('#contact .contact-form, #contact .contact-info');
    targets.forEach(el => observer.observe(el));

    // const contactSection = document.querySelector('#contact');
    // if (contactSection) {
    //   observer.observe(contactSection);
    // }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="section section-animate">
      <div className="container">
        <div className="section-title">
          <h2>Let's Connect!</h2>
        </div>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="row">
              <div className="col-md-6 contact-separator px-4">
                <div className="contact-form animate-delay-1">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input 
                        type="text" 
                        name="name"
                        className="form-control" 
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input 
                        type="email" 
                        name="email"
                        className="form-control" 
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <textarea 
                        name="message"
                        className="form-control" 
                        rows="5" 
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn-glass btn-primary w-100">
                      <i className="fas fa-paper-plane me-2"></i>
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-6 p-5">
                <div className="contact-info animate-delay-2">
                  <h4>Contact Information</h4>
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{personalInfo.location}</span>
                  </div>
                  
                  <div className="social-links">
                    <button 
                      className="social-link"
                      onClick={(e) => handleSocialClick(personalInfo.linkedin, e)}
                      type="button"
                      title="LinkedIn"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </button>
                    <button 
                      className="social-link"
                      onClick={(e) => handleSocialClick(personalInfo.github, e)}
                      type="button"
                      title="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </button>
                    <button 
                      className="social-link"
                      onClick={(e) => handleEmailClick(personalInfo.email, e)}
                      type="button"
                      title="Email"
                    >
                      <i className="fas fa-envelope"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App Component
const App = () => {
  useEffect(() => {
    // Padding top to body to account for fixed navbar
    document.body.style.paddingTop = '80px';
    
    // Ensure smooth scrolling is enabled
    document.documentElement.style.scrollBehavior = 'smooth';

    // Add intersection observer for scroll animations
    const observeElements = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
          }
        });
      }, {
        threshold: 0.1
      });

      // Observe all cards and sections
      const elements = document.querySelectorAll('.card-glass, .project-card, .timeline-item');
      elements.forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
      });

      return observer;
    };

    // Start observing after component mount
    const timer = setTimeout(() => {
      const observer = observeElements();
      
      return () => {
        observer.disconnect();
      };
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

// Render the App
ReactDOM.render(<App />, document.getElementById('root'));