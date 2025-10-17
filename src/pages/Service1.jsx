import React from 'react';
import { Link } from 'react-router-dom';
import { useDocumentHead } from '../hooks/useDocumentHead';
import lawnMowed1 from '../assets/Gallery/LawnMowed1.webp';
import './ServicePage.css';

const Service1 = () => {
  useDocumentHead({
    title: 'Lawn Care & Maintenance | Huasteco Landscape & Lawncare',
    description: 'Professional lawn care and maintenance services. Expert mowing, fertilization, and year-round care by skilled professionals.',
    keywords: 'lawn care, lawn maintenance, mowing, fertilization, weed control, landscaping',
    ogTitle: 'Lawn Care & Maintenance | Huasteco Landscape & Lawncare',
    ogDescription: 'Professional lawn care and maintenance services tailored to your needs.',
    ogType: 'website'
  });

  return (
    <>
      
      <div className="service-page">
        <div className="service-hero">
          <div className="service-hero-background">
            <img src={lawnMowed1} alt="Lawn Care & Maintenance" />
          </div>
          <div className="service-hero-overlay"></div>
          <div className="service-hero-content">
            <h1>Lawn Care & Maintenance</h1>
            <p>Keep your lawn healthy, lush, and beautiful year-round with our professional care</p>
          </div>
        </div>

        <div className="container">
          <section className="service-overview">
            <h2>Professional Lawn Care Excellence</h2>
            <p>
              At Huasteco Landscape & Lawncare, we specialize in delivering exceptional lawn care that exceeds your expectations. 
              Our experienced professionals bring years of expertise to ensure your lawn receives the highest quality care, 
              keeping it healthy, vibrant, and beautiful throughout every season.
            </p>
          </section>

          <section className="service-features">
            <h2>Our Lawn Care Services</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Professional Mowing</h3>
                <p>Regular mowing with precision equipment to maintain optimal grass height and healthy growth.</p>
              </div>
              <div className="feature-item">
                <h3>Fertilization Programs</h3>
                <p>Customized fertilization schedules to provide your lawn with essential nutrients for thick, green growth.</p>
              </div>
              <div className="feature-item">
                <h3>Weed Control</h3>
                <p>Effective weed prevention and elimination to keep your lawn pristine and weed-free.</p>
              </div>
              <div className="feature-item">
                <h3>Aeration & Seeding</h3>
                <p>Core aeration and overseeding to improve soil health and fill in thin or bare spots.</p>
              </div>
              <div className="feature-item">
                <h3>Seasonal Clean-Up</h3>
                <p>Spring and fall clean-up services including leaf removal, debris clearing, and bed preparation.</p>
              </div>
              <div className="feature-item">
                <h3>Edging & Trimming</h3>
                <p>Precise edging and trimming for crisp, clean lines and a polished, professional appearance.</p>
              </div>
            </div>
          </section>

          <section className="service-benefits">
            <h2>Why Choose Huasteco for Lawn Care?</h2>
            <div className="benefits-list">
              <div className="benefit-item">
                <h3>Experienced Professionals</h3>
                <p>Our team has extensive training and experience in proper lawn care techniques and turf management.</p>
              </div>
              <div className="benefit-item">
                <h3>Year-Round Service</h3>
                <p>Consistent, reliable lawn care throughout all seasons to keep your property looking its best.</p>
              </div>
              <div className="benefit-item">
                <h3>Quality Equipment & Products</h3>
                <p>We use professional-grade equipment and premium fertilizers and treatments for superior results.</p>
              </div>
              <div className="benefit-item">
                <h3>Custom Care Plans</h3>
                <p>Every lawn is unique—we create personalized care plans tailored to your lawn's specific needs.</p>
              </div>
            </div>
          </section>

          <section className="service-cta">
            <h2>Ready for a Beautiful, Healthy Lawn?</h2>
            <p>Contact us today for a free consultation and let our lawn care experts create the perfect care plan for your property.</p>
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

