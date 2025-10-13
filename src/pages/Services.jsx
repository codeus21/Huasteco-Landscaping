import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

// Import gallery images
import lawnMowed5 from '../assets/Gallery/LawnMowed5.webp';
import lawnMowed6 from '../assets/Gallery/LawnMowed6.webp';
import cleanup2 from '../assets/Gallery/Cleanup2.webp';

const Services = () => {
  const services = [
    {
      title: "Lawn Care & Maintenance",
      description: "Professional lawn mowing, fertilization, weed control, and ongoing maintenance to keep your lawn healthy and beautiful.",
      image: lawnMowed5
    },
    {
      title: "Landscape Design & Installation", 
      description: "Custom landscape designs featuring plants, trees, flowers, and garden features that transform your outdoor space.",
      image: lawnMowed6
    },
    {
      title: "Hardscaping & Outdoor Features",
      description: "Expert installation of patios, walkways, retaining walls, fire pits, and other hardscape elements.",
      image: cleanup2
    }
  ];

  return (
    <div className="services">
      <div className="container">
        <section className="services-hero">
          <h1>Our Landscaping Services</h1>
          <p>Comprehensive outdoor solutions tailored to enhance your property</p>
        </section>
        
        <section className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.title === "Lawn Care & Maintenance" ? "/service1" : 
                           service.title === "Landscape Design & Installation" ? "/service2" : 
                           "/service3"} className="service-button">Learn More</Link>
              </div>
            </div>
          ))}
        </section>
        
        <section className="cta-section">
          <h2>Ready to Transform Your Outdoor Space?</h2>
          <p>Contact us today to discuss your landscaping project and get a free consultation and quote.</p>
          <button className="cta-button">Get Free Quote</button>
        </section>
      </div>
    </div>
  );
};

export default Services;
