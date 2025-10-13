import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import lawnMowed3 from '../assets/Gallery/LawnMowed3.webp';
import './ServicePage.css';

const Service2 = () => {
  return (
    <>
      <Helmet>
        <title>Landscape Design & Installation | Huasteco Landscape & Lawncare</title>
        <meta name="description" content="Professional landscape design and installation services. Custom outdoor designs with beautiful plants, gardens, and features." />
        <meta name="keywords" content="landscape design, landscape installation, garden design, outdoor design, landscaping" />
        <meta property="og:title" content="Landscape Design & Installation | Huasteco Landscape & Lawncare" />
        <meta property="og:description" content="Professional landscape design and installation with custom solutions." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="service-page">
        <div className="service-hero">
          <div className="service-hero-background">
            <img src={lawnMowed3} alt="Landscape Design & Installation" />
          </div>
          <div className="service-hero-overlay"></div>
          <div className="service-hero-content">
            <h1>Landscape Design & Installation</h1>
            <p>Transform your outdoor space with custom designs and expert installation</p>
          </div>
        </div>

        <div className="container">
          <section className="service-overview">
            <h2>Custom Landscape Design & Installation</h2>
            <p>
              Experience the beauty of a professionally designed landscape tailored to your property and preferences. 
              We create stunning outdoor spaces with custom designs featuring beautiful plants, trees, flowers, and garden features 
              that enhance your property's curb appeal and value.
            </p>
          </section>

          <section className="service-features">
            <h2>Our Landscape Services</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Custom Design Plans</h3>
                <p>Personalized landscape designs that reflect your style and complement your property's architecture.</p>
              </div>
              <div className="feature-item">
                <h3>Plant Selection & Installation</h3>
                <p>Expert selection of plants, trees, and shrubs perfectly suited to your climate and soil conditions.</p>
              </div>
              <div className="feature-item">
                <h3>Garden Bed Creation</h3>
                <p>Beautiful garden beds with proper soil preparation, mulching, and strategic plant placement.</p>
              </div>
              <div className="feature-item">
                <h3>Tree & Shrub Planting</h3>
                <p>Professional planting of trees and shrubs for shade, privacy, and aesthetic beauty.</p>
              </div>
              <div className="feature-item">
                <h3>Irrigation Systems</h3>
                <p>Efficient irrigation solutions to keep your landscape healthy while conserving water.</p>
              </div>
              <div className="feature-item">
                <h3>Landscape Lighting</h3>
                <p>Outdoor lighting to showcase your landscape and improve safety and ambiance.</p>
              </div>
            </div>
          </section>

          <section className="service-benefits">
            <h2>Why Choose Huasteco for Landscape Design?</h2>
            <div className="benefits-list">
              <div className="benefit-item">
                <h3>Creative Expertise</h3>
                <p>Our design team brings creativity and horticultural knowledge to every project.</p>
              </div>
              <div className="benefit-item">
                <h3>Quality Installation</h3>
                <p>Meticulous installation practices ensure your landscape thrives for years to come.</p>
              </div>
              <div className="benefit-item">
                <h3>Sustainable Practices</h3>
                <p>Environmentally conscious designs that use native plants and water-wise landscaping.</p>
              </div>
              <div className="benefit-item">
                <h3>Complete Project Management</h3>
                <p>From initial design to final installation, we handle every aspect of your landscape transformation.</p>
              </div>
            </div>
          </section>

          <section className="service-cta">
            <h2>Ready to Transform Your Outdoor Space?</h2>
            <p>Contact us for a free landscape design consultation and see your vision come to life.</p>
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

