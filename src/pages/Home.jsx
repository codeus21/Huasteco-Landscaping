import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../assets/Logos/Googlecirclelogo.webp';

// Import gallery images
import lawnMowed1 from '../assets/Gallery/LawnMowed1.webp';
import lawnMowed2 from '../assets/Gallery/LawnMowed2.webp';
import lawnMowed3 from '../assets/Gallery/LawnMowed3.webp';
import lawnMowed4 from '../assets/Gallery/LawnMowed4.webp';
import lawnMowed5 from '../assets/Gallery/LawnMowed5.webp';
import lawnMowed6 from '../assets/Gallery/LawnMowed6.webp';
import cleanup1 from '../assets/Gallery/Cleanup1.webp';
import cleanup2 from '../assets/Gallery/Cleanup2.webp';
import cleanup3 from '../assets/Gallery/Cleanup3.webp';

import './Home.css';

const Home = () => {
  // Array of background images
  const backgroundImages = [
    lawnMowed1,
    lawnMowed2,
    lawnMowed3,
    lawnMowed4,
    cleanup1,
  ];


  // Array of customer reviews - Replace with your own testimonials
  const reviews = [
    {
      id: 1,
      name: "John Smith",
      rating: 5,
      text: "Huasteco transformed our backyard into an oasis! Their attention to detail and professionalism is unmatched. Highly recommend!",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      rating: 5,
      text: "Professional lawn care service that keeps our property looking pristine year-round. Outstanding results every time!",
    },
    {
      id: 3,
      name: "Michael Brown",
      rating: 5,
      text: "From landscape design to installation, the team was knowledgeable and efficient. Our yard has never looked better!",
    },
    {
      id: 4,
      name: "Emily Davis",
      rating: 5,
      text: "Top-notch landscaping at fair prices. The team is reliable, punctual, and does beautiful work. Will definitely use them again!",
    },
    {
      id: 5,
      name: "David Wilson",
      rating: 5,
      text: "Exceptional hardscaping work on our patio and walkways. The craftsmanship exceeded all expectations!",
    },
    {
      id: 6,
      name: "Lisa Anderson",
      rating: 5,
      text: "Highly professional and skilled landscapers. Best decision we made was choosing Huasteco for our outdoor renovation!",
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState('next');
  const [visibleSections, setVisibleSections] = useState(new Set());

  // Refs for each section
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const featuresRef = useRef(null);
  const reviewsRef = useRef(null);
  const workRef = useRef(null);

  useEffect(() => {
    if (backgroundImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % backgroundImages.length
        );
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval);
    }
  }, [backgroundImages.length]);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add section to visible set when it comes into view
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          } else {
            // Remove section from visible set when it goes out of view
            // This allows the animation to retrigger when scrolled back to
            setVisibleSections(prev => {
              const newSet = new Set(prev);
              newSet.delete(entry.target.id);
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const sections = [aboutRef, servicesRef, featuresRef, reviewsRef, workRef];
    sections.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const nextReview = () => {
    if (isAnimating) return;
    setAnimationDirection('next');
    setIsAnimating(true);
    setCurrentReviewIndex((prevIndex) => 
      (prevIndex + 1) % reviews.length
    );
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevReview = () => {
    if (isAnimating) return;
    setAnimationDirection('prev');
    setIsAnimating(true);
    setCurrentReviewIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToReview = (index) => {
    if (isAnimating) return;
    setAnimationDirection(index > currentReviewIndex ? 'next' : 'prev');
    setIsAnimating(true);
    setCurrentReviewIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextReview();
    }
    if (isRightSwipe) {
      prevReview();
    }
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="slideshow-container">
          {backgroundImages.map((image, index) => (
            <img 
              key={index}
              src={image} 
              alt={`Hero Background ${index + 1}`} 
              className={`hero-background ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Transform Your Outdoor Space</h1>
          <p>Professional landscaping and lawn care services you can trust</p>
          <button className="cta-button">Get Free Quote</button>
        </div>
        
        {/* Slide indicators - only show if more than 1 image */}
        {backgroundImages.length > 1 && (
          <div className="slide-indicators">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </section>
      
      <section 
        ref={aboutRef}
        id="about"
        className={`about-section ${visibleSections.has('about') ? 'fade-in' : ''}`}
      >
        <div className="red-bar top"></div>
        <div className="about-background">
          <img src={lawnMowed2} alt="Landscape Background" />
        </div>
        <div className="container">
          <h2>About Huasteco Landscape & Lawncare</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                <strong>Huasteco Landscape & Lawncare LLC</strong> is your premier destination for professional landscaping and lawn care services. With years of industry experience, we specialize in delivering top-quality outdoor transformations and maintenance at competitive prices.
              </p>
              
              <p>
                Our team of skilled landscaping professionals brings unmatched expertise to every project. From beautiful garden designs to pristine lawn maintenance, we ensure your outdoor space looks its absolute best year-round.
              </p>
              
              <p>
                Our comprehensive services include lawn care, landscape design and installation, hardscaping, irrigation systems, seasonal clean-ups, and much more—all tailored to meet your specific needs and exceed your expectations.
              </p>
              
              <p>
                At Huasteco Landscape & Lawncare, we believe in creating the perfect balance between beauty, functionality, and affordability. Let our expert team help you design and maintain the outdoor oasis you've always dreamed of, within your budget.
              </p>
            </div>
          </div>
        </div>
        <div className="red-bar bottom"></div>
      </section>
      
      <section 
        ref={servicesRef}
        id="services"
        className={`services-section ${visibleSections.has('services') ? 'fade-in' : ''}`}
      >
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className={`service-card ${visibleSections.has('services') ? 'animate' : ''}`} style={{ animationDelay: '0.1s' }}>
              <div className="service-image">
                <img src={lawnMowed5} alt="Lawn Care & Maintenance" />
              </div>
              <div className="service-content">
                <h3>Lawn Care & Maintenance</h3>
                <p>Keep your lawn healthy, lush, and beautiful with our professional mowing, fertilization, and maintenance services.</p>
                <Link to="/service1" className="service-learn-more">Learn More</Link>
              </div>
            </div>
            
            <div className={`service-card ${visibleSections.has('services') ? 'animate' : ''}`} style={{ animationDelay: '0.3s' }}>
              <div className="service-image">
                <img src={lawnMowed6} alt="Landscape Design & Installation" />
              </div>
              <div className="service-content">
                <h3>Landscape Design & Installation</h3>
                <p>Transform your outdoor space with custom landscape designs featuring beautiful plants, trees, and garden features.</p>
                <Link to="/service2" className="service-learn-more">Learn More</Link>
              </div>
            </div>
            
            <div className={`service-card ${visibleSections.has('services') ? 'animate' : ''}`} style={{ animationDelay: '0.5s' }}>
              <div className="service-image">
                <img src={cleanup2} alt="Hardscaping & Outdoor Features" />
              </div>
              <div className="service-content">
                <h3>Hardscaping & Outdoor Features</h3>
                <p>Add elegance and functionality with patios, walkways, retaining walls, and custom outdoor living spaces.</p>
                <Link to="/service3" className="service-learn-more">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section 
        ref={featuresRef}
        id="features"
        className={`features ${visibleSections.has('features') ? 'fade-in' : ''}`}
      >
        <div className="container">
          <h2>Why Choose Huasteco?</h2>
          <div className="features-grid">
            <div className={`feature-card ${visibleSections.has('features') ? 'animate' : ''}`} style={{ animationDelay: '0.1s' }}>
              <h3>Experienced Team</h3>
              <p>Years of expertise in landscaping and lawn care with proven results.</p>
            </div>
            <div className={`feature-card ${visibleSections.has('features') ? 'animate' : ''}`} style={{ animationDelay: '0.2s' }}>
              <h3>Professional Service</h3>
              <p>Skilled professionals dedicated to quality workmanship and customer satisfaction.</p>
            </div>
            <div className={`feature-card ${visibleSections.has('features') ? 'animate' : ''}`} style={{ animationDelay: '0.3s' }}>
              <h3>Quality Materials</h3>
              <p>Using only premium plants, materials, and equipment for lasting beauty.</p>
            </div>
            <div className={`feature-card ${visibleSections.has('features') ? 'animate' : ''}`} style={{ animationDelay: '0.4s' }}>
              <h3>Full-Service Solutions</h3>
              <p>Complete landscaping services from design to ongoing maintenance.</p>
            </div>
            <div className={`feature-card ${visibleSections.has('features') ? 'animate' : ''}`} style={{ animationDelay: '0.5s' }}>
              <h3>Competitive Pricing</h3>
              <p>Fair, transparent pricing without sacrificing quality or service excellence.</p>
            </div>
            <div className={`feature-card ${visibleSections.has('features') ? 'animate' : ''}`} style={{ animationDelay: '0.6s' }}>
              <h3>Custom Designs</h3>
              <p>Personalized landscape solutions tailored to your style and budget.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section 
        ref={reviewsRef}
        id="reviews"
        className={`reviews-section ${visibleSections.has('reviews') ? 'fade-in' : ''}`}
      >
        <div className="reviews-background">
          <img src={lawnMowed4} alt="Reviews Background" />
        </div>
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="reviews-carousel">
            <button className="carousel-btn prev-btn" onClick={prevReview} aria-label="Previous review">
              ‹
            </button>
            
            <div className="review-container">
              <div 
                className={`review-card ${isAnimating ? `animating ${animationDirection}` : ''}`}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="review-header">
                  <img src={googleLogo} alt="Google" className="google-logo" />
                  <div className="review-info">
                    <h4>{reviews[currentReviewIndex].name}</h4>
                    <div className="stars">
                      {[...Array(reviews[currentReviewIndex].rating)].map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="review-text">"{reviews[currentReviewIndex].text}"</p>
              </div>
            </div>
            
            <button className="carousel-btn next-btn" onClick={nextReview} aria-label="Next review">
              ›
            </button>
          </div>
          
          <div className="carousel-indicators">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentReviewIndex ? 'active' : ''}`}
                onClick={() => goToReview(index)}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section 
        ref={workRef}
        id="work"
        className={`view-our-work ${visibleSections.has('work') ? 'fade-in' : ''}`}
      >
        <div className="container">
          <h2>View Our Work</h2>
          <p className="section-subtitle">See the quality craftsmanship and stunning transformations that set us apart</p>
          
          <div className="work-gallery">
            <div className={`work-item ${visibleSections.has('work') ? 'animate' : ''}`} style={{ animationDelay: '0.1s' }}>
              <img src={lawnMowed1} alt="Professional Lawn Care" />
            </div>
            
            <div className={`work-item ${visibleSections.has('work') ? 'animate' : ''}`} style={{ animationDelay: '0.2s' }}>
              <img src={lawnMowed3} alt="Beautiful Lawn Maintenance" />
            </div>
            
            <div className={`work-item ${visibleSections.has('work') ? 'animate' : ''}`} style={{ animationDelay: '0.3s' }}>
              <img src={cleanup1} alt="Professional Cleanup Services" />
            </div>
            
            <div className={`work-item ${visibleSections.has('work') ? 'animate' : ''}`} style={{ animationDelay: '0.4s' }}>
              <img src={lawnMowed5} alt="Expert Lawn Maintenance" />
            </div>
            
            <div className={`work-item ${visibleSections.has('work') ? 'animate' : ''}`} style={{ animationDelay: '0.5s' }}>
              <img src={cleanup3} alt="Yard Cleanup Project" />
            </div>
            
            <div className={`work-item ${visibleSections.has('work') ? 'animate' : ''}`} style={{ animationDelay: '0.6s' }}>
              <img src={lawnMowed6} alt="Beautiful Landscaped Yard" />
            </div>
          </div>
          
          <div className="view-work-cta">
            <Link to="/gallery" className="gallery-btn">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
