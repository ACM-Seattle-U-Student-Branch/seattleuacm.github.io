// Info about our past and upcoming events
import React, { useState } from 'react';

interface Event {
  id: string;
  name: string;
  date: string;
  venue: string;
  description: string;
  status: 'upcoming' | 'past';
  ctaText: string;
  ctaLink: string;
  category: string;
}

const Events: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const events: Event[] = [
    {
      id: '1',
      name: 'Fall Panel Discussion',
      date: 'November 7, 2025',
      venue: 'Seattle University - xyz',
      description: 'Hear directly from Seattle U grad students who\'ve recently landed roles at top tech companies. They\'ll share tips, strategies, and lessons learned — from tackling tough coding challenges to nailing behavioral questions.',
      status: 'upcoming',
      ctaText: 'Register Now',
      ctaLink: '#register',
      category: 'Panel Discussion'
    },
    {
      id: '2',
      name: 'Git Beginners Workshop',
      date: 'TBD - Coming Soon',
      venue: 'Seattle University - xyz',
      description: 'Learn the fundamentals of Git version control in this hands-on workshop. Perfect for beginners who want to understand how to track changes and collaborate on projects. We\'ll cover essential Git commands, branching strategies, resolving merge conflicts, and best practices for team collaboration. Bring your laptop and get ready to practice with real examples!',
      status: 'upcoming',
      ctaText: 'Get Notified',
      ctaLink: '#notify',
      category: 'Workshop'
    },
    {
      id: '3',
      name: 'HackSU 2025',
      date: 'Jan xx-xx, 2026',
      venue: 'Seattle University',
      description: 'Our annual 24-hour hackathon brought together students from across Seattle for an exciting coding experience. Check out the amazing projects that were built!',
      status: 'upcoming',
      ctaText: 'Participate',
      ctaLink: '#projects',
      category: 'Hackathon'
    }
  ];

  const filteredEvents = events.filter(event => {
    if (activeFilter === 'all') return true;
    return event.status === activeFilter;
  });

  const handleEventAction = (event: Event) => {
    if (event.ctaLink === '#register') {
      alert(`Registration for ${event.name} will open soon!`);
    } else if (event.ctaLink === '#notify') {
      alert(`We'll notify you when ${event.name} is scheduled!`);
    } else if (event.ctaLink === '#projects') {
      alert(`Sign up link for ${event.name} coming soon!`);
    }
  };

  const openModal = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="page-content events-page">
      {/* Hero Section with Background Image */}
      <section className="hero-welcome-section">
        <div className="hero-background">
          <img src="/events.png" alt="SU ACM Events Background" className="hero-bg-image" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="fun-welcome">
            <h1>SU ACM Events</h1>
            <p className="fun-description">
              Discover exciting opportunities to learn, network, and grow with our community
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="content-section events-section">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Events
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'upcoming' ? 'active' : ''}`}
              onClick={() => setActiveFilter('upcoming')}
            >
              Upcoming
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'past' ? 'active' : ''}`}
              onClick={() => setActiveFilter('past')}
            >
              Past Events
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="events-grid">
          {filteredEvents.map(event => (
            <div key={event.id} className={`event-card ${event.status}`} onClick={() => openModal(event)}>
              <div className="event-header">
                <span className="event-category">{event.category}</span>
                <span className={`event-status ${event.status}`}>
                  {event.status === 'upcoming' ? 'Upcoming' : 'Past'}
                </span>
              </div>
              
              <div className="event-content">
                <h3 className="event-title">{event.name}</h3>
                <p className="event-description">{event.description.substring(0, 120)}...</p>
                
                <div className="event-details">
                  <div className="event-detail">
                    <span className="detail-icon">📅</span>
                    <span>{event.date}</span>
                  </div>
                  <div className="event-detail">
                    <span className="detail-icon">📍</span>
                    <span>{event.venue}</span>
                  </div>
                </div>
              </div>
              
              <div className="event-footer">
                <button 
                  className="event-cta"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEventAction(event);
                  }}
                >
                  {event.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#666' }}>
            <p>No events found for the selected filter.</p>
          </div>
        )}
      </section>

      {/* Event Modal */}
      {isModalOpen && selectedEvent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-category">{selectedEvent.category}</span>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            
            <div className="modal-body">
              <h2 className="modal-title">{selectedEvent.name}</h2>
              <p className="modal-description">{selectedEvent.description}</p>
              
              <div className="modal-details">
                <div className="modal-detail">
                  <span className="detail-icon">📅</span>
                  <span><strong>Date:</strong> {selectedEvent.date}</span>
                </div>
                <div className="modal-detail">
                  <span className="detail-icon">📍</span>
                  <span><strong>Venue:</strong> {selectedEvent.venue}</span>
                </div>
                <div className="modal-detail">
                  <span className="detail-icon">🏷️</span>
                  <span><strong>Status:</strong> {selectedEvent.status === 'upcoming' ? 'Upcoming' : 'Past Event'}</span>
                </div>
              </div>
            </div>
            
            <div className="modal-footer">
              <button 
                className="modal-cta"
                onClick={() => handleEventAction(selectedEvent)}
              >
                {selectedEvent.ctaText}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;