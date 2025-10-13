import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <section className="about-hero">
          <h1>About Huasteco Landscape & Lawncare</h1>
          <p>Learn more about our story, mission, and the dedicated team behind your beautiful outdoor spaces.</p>
        </section>
        
        <section className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Founded with a vision to provide exceptional landscaping and lawn care services to our local community, 
              Huasteco Landscape & Lawncare LLC has been serving customers with dedication and excellence for years. 
              We believe in building lasting relationships through quality work, outstanding customer service, and creating outdoor spaces that enhance your property's beauty and value.
            </p>
            <p>
              Our team consists of experienced landscaping professionals who are passionate about transforming ordinary yards into extraordinary outdoor living spaces. 
              We continuously strive to improve our services and stay up-to-date with the latest 
              landscaping trends, sustainable practices, and horticultural techniques.
            </p>
          </div>
          
          <div className="about-values">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Quality Craftsmanship</h3>
                <p>We never compromise on quality and always deliver exceptional workmanship in every project.</p>
              </div>
              <div className="value-item">
                <h3>Integrity & Trust</h3>
                <p>Honest, transparent communication and reliable service you can count on.</p>
              </div>
              <div className="value-item">
                <h3>Sustainable Practices</h3>
                <p>Environmentally conscious landscaping methods that benefit your property and our planet.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
