import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="contact">
      <div className="container">
        <section className="contact-hero">
          <h1>Contact Us</h1>
          <p>Get in touch with us for any questions or to schedule a consultation</p>
        </section>
        
        <section className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>📞 Phone</h3>
              <p>(555) 555-5555</p>
            </div>
            <div className="contact-item">
              <h3>📍 Address</h3>
              <p>123 Main Street<br />Your City, ST 12345</p>
            </div>
            <div className="contact-item">
              <h3>🕒 Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: 10:00 AM - 3:00 PM<br />Sunday: Closed</p>
            </div>
            <div className="contact-item">
              <h3>📱 Follow Us</h3>
              <p><a href="https://facebook.com/yourcompany" target="_blank" rel="noopener noreferrer">Facebook</a></p>
            </div>
          </div>
          
          <div className="contact-form">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
