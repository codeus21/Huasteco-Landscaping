import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './ServicePage.css';

const Service3 = () => {
  return (
    <>
      <Helmet>
        <title>Service Three | Your Company</title>
        <meta name="description" content="Professional service for protection, enhancement, and improved aesthetics. Expert implementation with premium materials and warranty." />
        <meta name="keywords" content="professional service, protection, enhancement, quality service" />
        <meta property="og:title" content="Service Three | Your Company" />
        <meta property="og:description" content="Professional service for protection and enhancement." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="service-page">
        <div className="service-hero">
          <div className="service-hero-background">
            <img src="https://via.placeholder.com/1920x600/6A7788/FFFFFF?text=Service+Three" alt="Service Three" />
          </div>
          <div className="service-hero-overlay"></div>
          <div className="service-hero-content">
            <h1>Service Three</h1>
            <p>Professional service for protection, enhancement, and improved aesthetics</p>
          </div>
        </div>

        <div className="container">
          <section className="service-overview">
            <h2>Protect and Enhance</h2>
            <p>
              Our professional service provides more than just aesthetics. We use premium materials 
              that offer superior protection, enhanced performance, and give you a polished, 
              professional result. All work comes with our comprehensive warranty.
            </p>
          </section>

          <section className="service-features">
            <h2>Service Benefits</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Protection</h3>
                <p>Superior protection to safeguard and preserve your investment.</p>
              </div>
              <div className="feature-item">
                <h3>Performance Enhancement</h3>
                <p>Improved performance and efficiency for better results.</p>
              </div>
              <div className="feature-item">
                <h3>Privacy & Security</h3>
                <p>Enhanced privacy and security for peace of mind.</p>
              </div>
              <div className="feature-item">
                <h3>Long-term Value</h3>
                <p>Prevent degradation and maintain quality over time.</p>
              </div>
              <div className="feature-item">
                <h3>Improved Comfort</h3>
                <p>Enhanced comfort and usability in all conditions.</p>
              </div>
              <div className="feature-item">
                <h3>Cost Savings</h3>
                <p>Reduce operational costs and improve overall efficiency.</p>
              </div>
            </div>
          </section>

          <section className="service-benefits">
            <h2>Why Choose Us?</h2>
            <div className="benefits-list">
              <div className="benefit-item">
                <h3>Premium Materials</h3>
                <p>We use only the highest quality materials with superior performance and durability.</p>
              </div>
              <div className="benefit-item">
                <h3>Expert Implementation</h3>
                <p>Professional service by experienced professionals with attention to detail.</p>
              </div>
              <div className="benefit-item">
                <h3>Comprehensive Warranty</h3>
                <p>All our work comes with a comprehensive warranty for your peace of mind.</p>
              </div>
              <div className="benefit-item">
                <h3>Quality Compliance</h3>
                <p>We ensure all work meets industry standards and requirements.</p>
              </div>
            </div>
          </section>

          <section className="tint-options">
            <h2>Available Options</h2>
            <div className="options-grid">
              <div className="option-item">
                <h3>Premium Option</h3>
                <p>Superior performance and maximum protection with excellent results.</p>
              </div>
              <div className="option-item">
                <h3>Standard Option</h3>
                <p>Excellent quality and reliability with professional appearance.</p>
              </div>
              <div className="option-item">
                <h3>Enhanced Option</h3>
                <p>Strong performance with added features for extra protection.</p>
              </div>
              <div className="option-item">
                <h3>Basic Option</h3>
                <p>Affordable choice with good quality and reliable performance.</p>
              </div>
            </div>
          </section>

          <section className="service-cta">
            <h2>Ready to Get Started?</h2>
            <p>Get a free consultation and see how our service can benefit you.</p>
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

export default Service3;

