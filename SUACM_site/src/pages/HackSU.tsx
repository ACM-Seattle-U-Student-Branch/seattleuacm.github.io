// Info about HackSU
import React from 'react';

const HackSU: React.FC = () => {
  return (
    <div className="page-content">
      {/* Hero Section with Background Image */}
      <section className="hero-welcome-section">
        <div className="hero-background">
          <img src={import.meta.env.BASE_URL + 'hacksu.png'} alt="HackSU Background" className="hero-bg-image" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="fun-welcome">
            <h1>HackSU 2026</h1>
            <p className="fun-description">
              Seattle University's Student Led 24-Hour Hackathon
            </p>
            <div className="cta-buttons pt-4">
              <a href="https://forms.gle/Rn2oQT78AvZUhvk57" className="cta-button" target="_blank">INTEREST FORM</a>
              <a href="https://forms.gle/CWZbx9jL4niy3mqD9" className="cta-button" target="_blank">VOLUNTEER FORM</a>
                <a href={import.meta.env.BASE_URL + 'Seattle University ACM Sponsor Information.pdf'} target="_blank" rel="noopener noreferrer" className="cta-button">SPONSORSHIP PACKAGES</a>
            </div>
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
      <section className="content-section hacksu-details-section">
        <h2>Event Details</h2>
        <div className="hacksu-details-grid">
          <div className="hacksu-detail-card">
            <h3>Duration</h3>
            <p>24 Hours of Non-Stop Innovation</p>
          </div>
          <div className="hacksu-detail-card">
            <h3>Participants</h3>
            <p>Students from Across Seattle</p>
          </div>
          <div className="hacksu-detail-card">
            <h3>Focus</h3>
            <p>Real-World Problem Solving</p>
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
        <div className="hacksu-cta">
          <a href="mailto:seattleuacm@gmail.com" className="cta-button">Contact Us About Sponsorship</a>
        </div>
      </section>
    </div>
  );
};

export default HackSU;