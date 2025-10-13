import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Service One",
      description: "Description of your first service offering and how it benefits your customers.",
      image: "https://via.placeholder.com/600x400/4A5568/FFFFFF?text=Service+1"
    },
    {
      title: "Service Two", 
      description: "Description of your second service offering and its unique advantages.",
      image: "https://via.placeholder.com/600x400/5A6678/FFFFFF?text=Service+2"
    },
    {
      title: "Service Three",
      description: "Description of your third service offering and why customers choose you.",
      image: "https://via.placeholder.com/600x400/6A7788/FFFFFF?text=Service+3"
    }
  ];

  return (
    <div className="services">
      <div className="container">
        <section className="services-hero">
          <h1>Our Services</h1>
          <p>Comprehensive solutions tailored to meet your needs</p>
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
                <Link to={service.title === "Service One" ? "/service1" : 
                           service.title === "Service Two" ? "/service2" : 
                           "/service3"} className="service-button">Learn More</Link>
              </div>
            </div>
          ))}
        </section>
        
        <section className="cta-section">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today to discuss your project and get a free consultation.</p>
          <button className="cta-button">Contact Us</button>
        </section>
      </div>
    </div>
  );
};

export default Services;
