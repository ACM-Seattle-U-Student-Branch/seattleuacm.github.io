// Info about HackSU
import React from 'react';

const HackSU: React.FC = () => {
  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>HackSU 2025</h1>
          <p>Seattle University's Premier 24-Hour Hackathon</p>
          <div className="cta-buttons">
            <a href="#about" className="cta-button">ABOUT HACKSU '25</a>
            <a href="#sponsorship" className="cta-button">SPONSORSHIP PACKAGES</a>
          </div>
        </div>
      </section>


      {/* About HackSU Section */}
      <section id="about" className="content-section">
        <h2>About HackSU</h2>
        <p>
          HackSU is Seattle University's flagship hackathon event, bringing together students 
          from across the Seattle area for an exciting 24-hour coding experience. This annual 
          event challenges participants to build innovative solutions to real-world problems 
          while fostering collaboration, creativity, and technical skills.
        </p>
        <p>
          Whether you're a seasoned developer or just starting your coding journey, HackSU 
          provides the perfect environment to learn, network, and showcase your talents. 
          Join us for workshops, networking events, and the chance to work with industry 
          professionals and fellow students.
        </p>
      </section>

      {/* Event Details Section */}
      <section className="content-section" style={{ background: '#f8fafc' }}>
        <h2>Event Details</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div style={{ textAlign: 'center', padding: '1.5rem', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#D90000', marginBottom: '1rem' }}>Duration</h3>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>24 Hours of Non-Stop Innovation</p>
          </div>
          <div style={{ textAlign: 'center', padding: '1.5rem', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#D90000', marginBottom: '1rem' }}>Participants</h3>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>Students from Across Seattle</p>
          </div>
          <div style={{ textAlign: 'center', padding: '1.5rem', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#D90000', marginBottom: '1rem' }}>Focus</h3>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>Real-World Problem Solving</p>
          </div>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section id="sponsorship" className="content-section">
        <h2>Sponsorship Opportunities</h2>
        <p>
          Support the next generation of innovators by becoming a HackSU sponsor. Your 
          sponsorship helps us provide an exceptional experience for participants while 
          connecting your organization with talented students and cutting-edge projects.
        </p>
        <p>
          We offer various sponsorship packages designed to meet your organization's goals 
          and budget. Contact us to learn more about how you can be part of this exciting 
          event and help shape the future of technology.
        </p>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="email here" className="cta-button">Contact Us About Sponsorship</a>
        </div>
      </section>
    </div>
  );
};

export default HackSU;