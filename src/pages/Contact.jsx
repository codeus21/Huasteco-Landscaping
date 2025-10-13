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
          <h1>Contact Huasteco Landscape & Lawncare</h1>
          <p>Get in touch with us for a free quote or to schedule your landscaping consultation</p>
        </section>
        
        <section className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>📞 Phone</h3>
              <p>(706) 809-8741</p>
            </div>
            <div className="contact-item">
              <h3>📍 Service Area</h3>
              <p>Douglasville &<br />Surrounding Cities</p>
            </div>
            <div className="contact-item">
              <h3>🕒 Hours</h3>
              <p>Monday - Saturday: 7:00 AM - 7:00 PM<br />Sunday: 9:00 AM - 5:00 PM</p>
            </div>
            <div className="contact-item">
              <h3>📱 Follow Us</h3>
              <p><a href="https://facebook.com/huastecolandscape" target="_blank" rel="noopener noreferrer">Facebook</a></p>
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
