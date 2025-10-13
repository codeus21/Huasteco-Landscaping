import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <section className="about-hero">
          <h1>About Us</h1>
          <p>Learn more about our story, mission, and the team behind our success.</p>
        </section>
        
        <section className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Founded with a vision to provide exceptional services to our local community, 
              [Your Company] has been serving customers with dedication and excellence for years. 
              We believe in building lasting relationships through quality work and outstanding customer service.
            </p>
            <p>
              Our team consists of experienced professionals who are passionate about what they do. 
              We continuously strive to improve our services and stay up-to-date with the latest 
              industry standards and technologies.
            </p>
          </div>
          
          <div className="about-values">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Quality</h3>
                <p>We never compromise on quality and always deliver our best work.</p>
              </div>
              <div className="value-item">
                <h3>Integrity</h3>
                <p>Honest, transparent communication in all our interactions.</p>
              </div>
              <div className="value-item">
                <h3>Innovation</h3>
                <p>Embracing new technologies and methods to serve you better.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
