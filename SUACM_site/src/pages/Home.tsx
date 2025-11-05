// Landing page
import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="page-content">
      {/* Hero Welcome Section with Background Image */}
      <section className="hero-welcome-section">
        <div className="hero-background">
          <img src={import.meta.env.BASE_URL + 'Background.png'} alt="SU ACM Background" className="hero-bg-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="fun-welcome">
            <h1>Welcome to SU ACM</h1>
            <p className="fun-description">Seattle University's student-led computer science organization, fostering innovation, collaboration, and excellence in technology education and research.</p>
          </div>
        </div>
      </section>

      {/* Core Mission Section */}
      <section className="fun-features">
        <div className="features-container">
          <h2 className="features-heading">Our Mission</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Innovation & Development</h3>
              <p>Facilitate hands-on learning through hackathons, workshops, and collaborative projects that advance technical skills and creativity</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Community Building</h3>
              <p>Create meaningful connections between students, faculty, industry professionals, and technology enthusiasts</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Knowledge & Growth</h3>
              <p>Provide opportunities to explore emerging technologies, develop new competencies, and advance professional development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="content-section">
        <h2>Join Our Community</h2>
        <p className="fun-description">
          Whether you're a first-year or a graduate student, SU ACM offers diverse opportunities to engage with technology, 
          develop your skills, and contribute to our vibrant academic community.
        </p>
        <div className="fun-cta">
          <a href="https://discord.gg/3FgCPuFu3v" target="_blank" rel="noopener noreferrer" className="fun-btn">
            <span>Join our Discord</span>
            <span className="btn-emoji">🗣️</span>
          </a>
          <Link to="/events" className="fun-btn">
            <span>View Events</span>
            <span className="btn-emoji">📅</span>
          </Link>
          <Link to="/hacksu" className="fun-btn">
            <span>HackSU 2026</span>
            <span className="btn-emoji">⚡</span>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="fun-fact">
        <div className="fact-container">
          <p className="fact-text">
            Seattle University's chapter of Association for Computing Machinery (ACM) is the largest computer
            science organization on campus, serving over 600 members. We value the interdisciplinary
            nature of computer science and its ability to intersect with various fields. Our mission is to cultivate a
            community where diverse backgrounds and perspectives thrive alongside collaboration and
            meaningful connections.
          </p>
          <div className="fun-stats">
            <div className="stat">
              <span className="stat-number">600+</span>
              <span className="stat-label">Members</span>
            </div>
            <div className="stat">
              <span className="stat-number">24</span>
              <span className="stat-label">Hours of HackSU</span>
            </div>
            <div className="stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">Opportunities</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
