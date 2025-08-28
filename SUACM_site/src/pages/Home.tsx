// Landing page
import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="page-content">
      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="fun-welcome">
          <h1>Hey there, welcome to SU ACM!</h1>
          <p className="fun-description">We're not just another student group - we're your coding comrades, your debugging buddies, and your gateway to all things tech!</p>
        </div>
      </section>

      {/* Fun Features Section and more */}
      <section className="fun-features">
        <div className="features-container">
          <h2 className="features-heading">What's the Buzz? 🐝</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Build Cool Stuff</h3>
              <p>From hackathons to workshops, create projects that actually matter</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Meet Your People</h3>
              <p>Connect with fellow coders, industry professionals, mentors, and tech enthusiasts</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Learn & Grow</h3>
              <p>Pick up new skills, discover emerging tech, and level up your game</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="content-section">
        <h2>Ready to Jump In? 🎯</h2>
        <p className="fun-description">
          Don't just sit there staring at your screen - let's make something awesome happen! 
          Whether you're a freshman or a grad student, there's a spot for you here.
        </p>
        <div className="fun-cta">
          <a href="/about" className="fun-btn">
            <span>Join Our Newsletter</span>
            <span className="btn-emoji">📧</span>
          </a>
          <a href="/events" className="fun-btn">
            <span>Upcoming Events</span>
            <span className="btn-emoji">📅</span>
          </a>
          <a href="/hacksu" className="fun-btn">
            <span>HackSU Time!</span>
            <span className="btn-emoji">⚡</span>
          </a>
        </div>
      </section>

      {/* Fun Fact Section */}
      <section className="fun-fact">
        <div className="fact-container">
          <p className="fact-text">
            Seattle University's chapter of Association for Computing Machinery (ACM) is the largest computer
            science club on campus, with over 600 members. We at ACM deeply value the interdisciplinary
            nature of computer science and its ability to intersect with various fields. We aim to cultivate a
            community where diverse backgrounds and perspective thrive alongside collaboration and
            connection.
          </p>
          <div className="fun-stats">
            <div className="stat">
              <span className="stat-number">600+</span>
              <span className="stat-label">Active Members</span>
            </div>
            <div className="stat">
              <span className="stat-number">24</span>
              <span className="stat-label">Hours of HackSU Fun</span>
            </div>
            <div className="stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">Possibilities</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
