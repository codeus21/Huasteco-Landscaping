import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './ServicePage.css';

const Service1 = () => {
  return (
    <>
      <Helmet>
        <title>Service One | Your Company</title>
        <meta name="description" content="Professional service offering tailored to your needs. Expert service by certified professionals." />
        <meta name="keywords" content="service, professional service, quality service" />
        <meta property="og:title" content="Service One | Your Company" />
        <meta property="og:description" content="Professional service offering tailored to your needs." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="service-page">
        <div className="service-hero">
          <div className="service-hero-background">
            <img src="https://via.placeholder.com/1920x600/4A5568/FFFFFF?text=Service+One" alt="Service One" />
          </div>
          <div className="service-hero-overlay"></div>
          <div className="service-hero-content">
            <h1>Service One</h1>
            <p>Description of your first service offering and how it benefits your customers</p>
          </div>
        </div>

        <div className="container">
          <section className="service-overview">
            <h2>Professional Service Excellence</h2>
            <p>
              At [Your Company], we specialize in delivering exceptional service that exceeds your expectations. 
              Our certified professionals bring years of experience and expertise to ensure you receive the highest quality results.
            </p>
          </section>

          <section className="service-features">
            <h2>Our Service Offerings</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Feature One</h3>
                <p>Description of the first key feature of this service offering.</p>
              </div>
              <div className="feature-item">
                <h3>Feature Two</h3>
                <p>Description of the second key feature that sets this service apart.</p>
              </div>
              <div className="feature-item">
                <h3>Feature Three</h3>
                <p>Description of the third important aspect of this service.</p>
              </div>
              <div className="feature-item">
                <h3>Feature Four</h3>
                <p>Description of the fourth benefit customers receive.</p>
              </div>
              <div className="feature-item">
                <h3>Feature Five</h3>
                <p>Description of the fifth value-added component of this service.</p>
              </div>
              <div className="feature-item">
                <h3>Feature Six</h3>
                <p>Description of the sixth element that completes the service offering.</p>
              </div>
            </div>
          </section>

          <section className="service-benefits">
            <h2>Why Choose Us?</h2>
            <div className="benefits-list">
              <div className="benefit-item">
                <h3>Certified Professionals</h3>
                <p>Our team is certified and trained to ensure professional service standards.</p>
              </div>
              <div className="benefit-item">
                <h3>Years of Experience</h3>
                <p>Expertise and proven track record in delivering quality results.</p>
              </div>
              <div className="benefit-item">
                <h3>Quality Products</h3>
                <p>We work with top brands to ensure you receive the finest products and services.</p>
              </div>
              <div className="benefit-item">
                <h3>Custom Solutions</h3>
                <p>Every solution is tailored specifically to your unique needs and preferences.</p>
              </div>
            </div>
          </section>

          <section className="service-cta">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today for a free consultation and let our experts create the perfect solution for you.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">Get Free Quote</Link>
              <Link to="/services" className="cta-button secondary">View All Services</Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Service1;

