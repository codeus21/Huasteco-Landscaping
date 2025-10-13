import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './ServicePage.css';

const Service2 = () => {
  return (
    <>
      <Helmet>
        <title>Service Two | Your Company</title>
        <meta name="description" content="Professional service offering with modern features and expert implementation." />
        <meta name="keywords" content="service, professional service, quality service" />
        <meta property="og:title" content="Service Two | Your Company" />
        <meta property="og:description" content="Professional service offering with cutting-edge solutions." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="service-page">
        <div className="service-hero">
          <div className="service-hero-background">
            <img src="https://via.placeholder.com/1920x600/5A6678/FFFFFF?text=Service+Two" alt="Service Two" />
          </div>
          <div className="service-hero-overlay"></div>
          <div className="service-hero-content">
            <h1>Service Two</h1>
            <p>Modern solutions with advanced features from industry-leading providers</p>
          </div>
        </div>

        <div className="container">
          <section className="service-overview">
            <h2>Modern Solutions for Your Needs</h2>
            <p>
              Experience the latest in service excellence with our professional offerings. 
              We provide cutting-edge solutions with advanced features and seamless integration 
              from industry-leading providers.
            </p>
          </section>

          <section className="service-features">
            <h2>Service Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Feature One</h3>
                <p>Seamless integration and connectivity for optimal performance.</p>
              </div>
              <div className="feature-item">
                <h3>Feature Two</h3>
                <p>Advanced compatibility and full functionality across all platforms.</p>
              </div>
              <div className="feature-item">
                <h3>Feature Three</h3>
                <p>Smart solutions with real-time updates and guidance.</p>
              </div>
              <div className="feature-item">
                <h3>Feature Four</h3>
                <p>Premium options with crystal clear quality and reliability.</p>
              </div>
              <div className="feature-item">
                <h3>Feature Five</h3>
                <p>Multiple options and flexible configurations to suit your needs.</p>
              </div>
              <div className="feature-item">
                <h3>Feature Six</h3>
                <p>User-friendly interfaces for easy control and management.</p>
              </div>
            </div>
          </section>

          <section className="service-benefits">
            <h2>Why Choose This Service?</h2>
            <div className="benefits-list">
              <div className="benefit-item">
                <h3>Enhanced Performance</h3>
                <p>Improved efficiency and effectiveness in every aspect.</p>
              </div>
              <div className="benefit-item">
                <h3>Better Quality</h3>
                <p>Advanced processing and optimization for superior results.</p>
              </div>
              <div className="benefit-item">
                <h3>Modern Convenience</h3>
                <p>All the features you need in one comprehensive solution.</p>
              </div>
              <div className="benefit-item">
                <h3>Future-Proof Technology</h3>
                <p>Regular updates ensure your solution stays current with latest advances.</p>
              </div>
            </div>
          </section>

          <section className="service-cta">
            <h2>Ready for an Upgrade?</h2>
            <p>Transform your experience with our professional service offerings.</p>
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

export default Service2;

