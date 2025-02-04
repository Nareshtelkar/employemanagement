import React, { useState } from 'react'


const URI = "https://mongoserver-dm1k.onrender.com/api/send-email";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(URI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      if (data.success) {
        setStatus('Message sent successfully!')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setStatus('Failed to send message. Please try again.')
      }
    } catch (error) {
      setStatus('Failed to send message. Please try again.')
    }
  }

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">Contact Us</h1>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="form-label">Phone</label>
            <input
              type="tel"
              id="phone"
              className="form-input"
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              rows="4"
              className="form-input"
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleChange}
              required
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
          {status && <p className={status.includes('success') ? 'success-message' : 'error-message'}>{status}</p>}
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
