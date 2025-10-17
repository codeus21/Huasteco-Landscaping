import React from 'react';
import { Link } from 'react-router-dom';
import { useDocumentHead } from '../hooks/useDocumentHead';
import cleanup1 from '../assets/Gallery/Cleanup1.webp';
import './ServicePage.css';

const Service3 = () => {
  useDocumentHead({
    title: 'Hardscaping & Outdoor Features | Huasteco Landscape & Lawncare',
    description: 'Professional hardscaping services including patios, walkways, retaining walls, and outdoor living spaces. Expert installation with quality materials.',
    keywords: 'hardscaping, patios, walkways, retaining walls, outdoor living, landscaping',
    ogTitle: 'Hardscaping & Outdoor Features | Huasteco Landscape & Lawncare',
    ogDescription: 'Professional hardscaping and outdoor feature installation services.',
    ogType: 'website'
  });

  return (
    <>
      
      <div className="service-page">
        <div className="service-hero">
          <div className="service-hero-background">
            <img src={cleanup1} alt="Hardscaping & Outdoor Features" />
          </div>
          <div className="service-hero-overlay"></div>
          <div className="service-hero-content">
            <h1>Hardscaping & Outdoor Features</h1>
            <p>Create stunning outdoor living spaces with professional hardscaping</p>
          </div>
        </div>

        <div className="container">
          <section className="service-overview">
            <h2>Transform Your Outdoor Living Space</h2>
            <p>
              Our professional hardscaping services provide both beauty and functionality to your outdoor space. 
              We use premium materials and expert craftsmanship to create stunning patios, walkways, retaining walls, 
              and outdoor living areas that enhance your property's value and create inviting spaces for entertainment and relaxation.
            </p>
          </section>

          <section className="service-features">
            <h2>Hardscaping Services</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Patios & Outdoor Living</h3>
                <p>Custom patios and outdoor living spaces perfect for entertaining and relaxation.</p>
              </div>
              <div className="feature-item">
                <h3>Walkways & Paths</h3>
                <p>Beautiful walkways and garden paths using pavers, stone, or decorative concrete.</p>
              </div>
              <div className="feature-item">
                <h3>Retaining Walls</h3>
                <p>Functional and attractive retaining walls to manage slopes and create level areas.</p>
              </div>
              <div className="feature-item">
                <h3>Fire Pits & Features</h3>
                <p>Custom fire pits and outdoor fireplaces to extend your outdoor season.</p>
              </div>
              <div className="feature-item">
                <h3>Outdoor Kitchens</h3>
                <p>Complete outdoor kitchen installations for the ultimate entertaining experience.</p>
              </div>
              <div className="feature-item">
                <h3>Water Features</h3>
                <p>Ponds, fountains, and waterfalls to add tranquility and visual interest.</p>
              </div>
            </div>
          </section>

          <section className="service-benefits">
            <h2>Why Choose Huasteco for Hardscaping?</h2>
            <div className="benefits-list">
              <div className="benefit-item">
                <h3>Quality Materials</h3>
                <p>We use only premium pavers, stone, and materials for lasting beauty and durability.</p>
              </div>
              <div className="benefit-item">
                <h3>Expert Craftsmanship</h3>
                <p>Skilled hardscape professionals with years of experience and attention to detail.</p>
              </div>
              <div className="benefit-item">
                <h3>Custom Designs</h3>
                <p>Every hardscape project is uniquely designed to complement your home and landscape.</p>
              </div>
              <div className="benefit-item">
                <h3>Proper Installation</h3>
                <p>Correct base preparation and installation techniques ensure your hardscape lasts for decades.</p>
              </div>
            </div>
          </section>

          <section className="tint-options">
            <h2>Popular Hardscaping Materials</h2>
            <div className="options-grid">
              <div className="option-item">
                <h3>Natural Stone</h3>
                <p>Timeless elegance with flagstone, slate, and bluestone for premium outdoor spaces.</p>
              </div>
              <div className="option-item">
                <h3>Pavers</h3>
                <p>Versatile concrete and clay pavers in various colors, patterns, and styles.</p>
              </div>
              <div className="option-item">
                <h3>Decorative Concrete</h3>
                <p>Stamped and colored concrete for cost-effective beauty and durability.</p>
              </div>
              <div className="option-item">
                <h3>Brick</h3>
                <p>Classic brick hardscaping for traditional charm and lasting appeal.</p>
              </div>
            </div>
          </section>

          <section className="service-cta">
            <h2>Ready to Create Your Dream Outdoor Space?</h2>
            <p>Contact us for a free hardscaping consultation and transform your property today.</p>
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

