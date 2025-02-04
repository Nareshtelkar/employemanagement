import React from 'react'

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">Contact Us</h1>
        
        <form className="contact-form">
          <div>
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              rows="4"
              className="form-input"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <div className="button-container">
            <button
              type="submit"
              className="submit-button"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="info-grid">
          <div className="info-section">
            <h2 className="info-title">Our Location</h2>
            <p className="info-text">
              123 Business Street<br />
              New York, NY 10001<br />
              United States
            </p>
          </div>

          <div className="info-section">
            <h2 className="info-title">Contact Info</h2>
            <p className="info-text">
              Email: info@example.com<br />
              Phone: (555) 123-4567<br />
              Hours: Mon-Fri 9am-5pm
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact