// About Us page
import React from 'react'

const About: React.FC = () => {
  return (
    <div className="page-content">
      {/* Hero Section with Background Image */}
      <section className="hero-welcome-section">
        <div className="hero-background">
          <img src="/about.png" alt="About SU ACM Background" className="hero-bg-image" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="fun-welcome">
            <h1>About SU ACM</h1>
            <p className="fun-description">
              Building the future of technology through community, innovation, and collaboration
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-section">
        <div className="about-container">
          <h2>Our Mission</h2>
          <p className="about-text">
            Seattle University's Association for Computing Machinery (ACM) chapter is dedicated to fostering 
            a vibrant community of computer science enthusiasts, providing opportunities for learning, 
            networking, and professional development. We believe in the power of collaboration and 
            innovation to solve real-world problems.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="about-section about-section-gray">
        <div className="about-container">
          <h2>What We Do</h2>
          <div className="about-grid">
            <div className="about-card">
              <div className="about-card-icon">🎓</div>
              <h3>Education & Learning</h3>
              <p>Workshops, tutorials, and skill-building sessions to help you grow as a developer</p>
            </div>
            <div className="about-card">
              <div className="about-card-icon">🤝</div>
              <h3>Networking</h3>
              <p>Connect with industry professionals, alumni, and fellow students</p>
            </div>
            <div className="about-card">
              <div className="about-card-icon">🚀</div>
              <h3>Innovation</h3>
              <p>Hackathons, coding competitions, and project showcases</p>
            </div>
            <div className="about-card">
              <div className="about-card-icon">🌍</div>
              <h3>Community</h3>
              <p>Building lasting friendships and professional relationships</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-section">
        <div className="about-container">
          <h2>Our Story</h2>
          <div className="about-story">
            <p className="about-text">
              Founded by passionate computer science students at Seattle University, SU ACM has grown 
              from a small study group to the largest tech organization on campus. Our journey began 
              with a simple idea: that learning computer science shouldn't happen in isolation.
            </p>
            <p className="about-text">
              Today, we're proud to serve over 600 active members, hosting events that range from 
              beginner-friendly workshops to advanced technical discussions. We've partnered with 
              leading tech companies, hosted successful hackathons, and helped countless students 
              launch their careers in technology.
            </p>
            <p className="about-text">
              Our success is built on the foundation of inclusivity, innovation, and the belief that 
              everyone has something valuable to contribute to the tech community.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-section about-section-gray">
        <div className="about-container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-emoji">🤝</div>
              <h3>Inclusivity</h3>
              <p>We welcome students from all backgrounds and skill levels</p>
            </div>
            <div className="value-item">
              <div className="value-emoji">💡</div>
              <h3>Innovation</h3>
              <p>We encourage creative thinking and problem-solving</p>
            </div>
            <div className="value-item">
              <div className="value-emoji">👥</div>
              <h3>Collaboration</h3>
              <p>We believe in the power of working together</p>
            </div>
            <div className="value-item">
              <div className="value-emoji">⭐</div>
              <h3>Excellence</h3>
              <p>We strive for quality in everything we do</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="about-section">
        <div className="about-container">
          <h2>Get Involved</h2>
          <p className="about-text">
            Ready to be part of our community? Whether you're a freshman just starting your CS journey 
            or a senior looking to mentor others, there's a place for you in SU ACM.
          </p>
          <div className="about-cta">
            <a href="/events" className="about-btn">
              <span>Join Our Events</span>
              <span className="btn-emoji">📅</span>
            </a>
            <a href="mailto:acm@seattleu.edu" className="about-btn">
              <span>Contact Us</span>
              <span className="btn-emoji">📧</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About