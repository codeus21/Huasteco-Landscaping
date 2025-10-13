import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../assets/Logos/Googlecirclelogo.webp';

import './Home.css';

const Home = () => {
  // Array of background images - Replace with your own images
  const backgroundImages = [
    'https://via.placeholder.com/1920x1080/333333/FFFFFF?text=Hero+Background+1',
    'https://via.placeholder.com/1920x1080/444444/FFFFFF?text=Hero+Background+2',
    'https://via.placeholder.com/1920x1080/555555/FFFFFF?text=Hero+Background+3',
    'https://via.placeholder.com/1920x1080/666666/FFFFFF?text=Hero+Background+4',
    'https://via.placeholder.com/1920x1080/777777/FFFFFF?text=Hero+Background+5',
  ];

  // Array of brand logos - Replace with your partner brands
  const brandLogos = [
    { name: 'Brand 1', logo: 'https://via.placeholder.com/200x100/EEEEEE/333333?text=Brand+1' },
    { name: 'Brand 2', logo: 'https://via.placeholder.com/200x100/EEEEEE/333333?text=Brand+2' },
    { name: 'Brand 3', logo: 'https://via.placeholder.com/200x100/EEEEEE/333333?text=Brand+3' },
    { name: 'Brand 4', logo: 'https://via.placeholder.com/200x100/EEEEEE/333333?text=Brand+4' },
    { name: 'Brand 5', logo: 'https://via.placeholder.com/200x100/EEEEEE/333333?text=Brand+5' },
    { name: 'Brand 6', logo: 'https://via.placeholder.com/200x100/EEEEEE/333333?text=Brand+6' },
    { name: 'Brand 7', logo: 'https://via.placeholder.com/200x100/EEEEEE/333333?text=Brand+7' },
    { name: 'Brand 8', logo: 'https://via.placeholder.com/200x100/EEEEEE/333333?text=Brand+8' },
    { name: 'Brand 9', logo: 'https://via.placeholder.com/200x100/EEEEEE/333333?text=Brand+9' },
  ];

  // Array of customer reviews - Replace with your own testimonials
  const reviews = [
    {
      id: 1,
      name: "John Smith",
      rating: 5,
      text: "Excellent service and great attention to detail. Highly recommend their work!",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      rating: 5,
      text: "Professional team with outstanding results. Very satisfied with the quality of work.",
    },
    {
      id: 3,
      name: "Michael Brown",
      rating: 5,
      text: "Great experience from start to finish. The team was knowledgeable and efficient.",
    },
    {
      id: 4,
      name: "Emily Davis",
      rating: 5,
      text: "Top-notch service at fair prices. Will definitely be coming back!",
    },
    {
      id: 5,
      name: "David Wilson",
      rating: 5,
      text: "Exceptional work and customer service. Exceeded my expectations!",
    },
    {
      id: 6,
      name: "Lisa Anderson",
      rating: 5,
      text: "Highly professional and skilled. Best decision I made was choosing this company!",
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
  const brandsRef = useRef(null);
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

    const sections = [aboutRef, servicesRef, brandsRef, featuresRef, reviewsRef, workRef];
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
          <h1>Welcome to Your Business</h1>
          <p>Your trusted local business for quality services and solutions</p>
          <button className="cta-button">Get Started</button>
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
          <img src="https://via.placeholder.com/1920x600/222222/FFFFFF?text=About+Background" alt="About Background" />
        </div>
        <div className="container">
          <h2>About Our Company</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                <strong>Your Company Name</strong> is your premier destination for quality services and solutions. With years of industry experience, we specialize in delivering top-quality products and professional services at competitive prices.
              </p>
              
              <p>
                Our team of certified professionals brings unmatched expertise to every project. We partner with industry-leading brands to ensure you receive only the finest products and services.
              </p>
              
              <p>
                Our comprehensive services are tailored to meet your specific needs and exceed your expectations.
              </p>
              
              <p>
                At [Your Company], we believe in creating the perfect balance between quality and affordability. Let our expert team help you design and implement the ideal solution that meets both your needs and budget.
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
                <img src="https://via.placeholder.com/600x400/4A5568/FFFFFF?text=Service+1" alt="Service 1" />
              </div>
              <div className="service-content">
                <h3>Service One</h3>
                <p>Description of your first service offering and how it benefits your customers.</p>
                <Link to="/service1" className="service-learn-more">Learn More</Link>
              </div>
            </div>
            
            <div className={`service-card ${visibleSections.has('services') ? 'animate' : ''}`} style={{ animationDelay: '0.3s' }}>
              <div className="service-image">
                <img src="https://via.placeholder.com/600x400/5A6678/FFFFFF?text=Service+2" alt="Service 2" />
              </div>
              <div className="service-content">
                <h3>Service Two</h3>
                <p>Description of your second service offering and its unique advantages.</p>
                <Link to="/service2" className="service-learn-more">Learn More</Link>
              </div>
            </div>
            
            <div className={`service-card ${visibleSections.has('services') ? 'animate' : ''}`} style={{ animationDelay: '0.5s' }}>
              <div className="service-image">
                <img src="https://via.placeholder.com/600x400/6A7788/FFFFFF?text=Service+3" alt="Service 3" />
              </div>
              <div className="service-content">
                <h3>Service Three</h3>
                <p>Description of your third service offering and why customers choose you.</p>
                <Link to="/service3" className="service-learn-more">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section 
        ref={brandsRef}
        id="brands"
        className={`brands-section ${visibleSections.has('brands') ? 'fade-in' : ''}`}
      >
        <div className="container">
          <h2>Trusted Brands We Install</h2>
          <div className="brands-slider">
            <div className="brands-track">
              {/* Multiple sets of logos for seamless infinite loop */}
              {brandLogos.map((brand, index) => (
                <div key={`set1-${index}`} className="brand-item">
                  <img src={brand.logo} alt={`${brand.name} Logo`} />
                </div>
              ))}
              {brandLogos.map((brand, index) => (
                <div key={`set2-${index}`} className="brand-item">
                  <img src={brand.logo} alt={`${brand.name} Logo`} />
                </div>
              ))}
              {brandLogos.map((brand, index) => (
                <div key={`set3-${index}`} className="brand-item">
                  <img src={brand.logo} alt={`${brand.name} Logo`} />
                </div>
              ))}
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
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className={`feature-card ${visibleSections.has('features') ? 'animate' : ''}`} style={{ animationDelay: '0.1s' }}>
              <h3>Experience</h3>
              <p>Years of expertise and proven track record in the industry.</p>
            </div>
            <div className={`feature-card ${visibleSections.has('features') ? 'animate' : ''}`} style={{ animationDelay: '0.2s' }}>
              <h3>Certified Professionals</h3>
              <p>Expert team ensuring quality service and customer satisfaction.</p>
            </div>
            <div className={`feature-card ${visibleSections.has('features') ? 'animate' : ''}`} style={{ animationDelay: '0.3s' }}>
              <h3>Premium Quality</h3>
              <p>Working with top brands and high-quality products.</p>
            </div>
            <div className={`feature-card ${visibleSections.has('features') ? 'animate' : ''}`} style={{ animationDelay: '0.4s' }}>
              <h3>Complete Services</h3>
              <p>Full range of services to meet all your needs.</p>
            </div>
            <div className={`feature-card ${visibleSections.has('features') ? 'animate' : ''}`} style={{ animationDelay: '0.5s' }}>
              <h3>Best Value</h3>
              <p>Competitive pricing without compromising quality or service.</p>
            </div>
            <div className={`feature-card ${visibleSections.has('features') ? 'animate' : ''}`} style={{ animationDelay: '0.6s' }}>
              <h3>Custom Solutions</h3>
              <p>Tailored solutions for your specific needs and budget.</p>
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
          <img src="https://via.placeholder.com/1920x800/2D3748/FFFFFF?text=Reviews+Background" alt="Reviews Background" />
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
          <p className="section-subtitle">See the quality craftsmanship and attention to detail that sets us apart</p>
          
          <div className="work-gallery">
            <div className={`work-item ${visibleSections.has('work') ? 'animate' : ''}`} style={{ animationDelay: '0.1s' }}>
              <img src="https://via.placeholder.com/400x300/718096/FFFFFF?text=Project+1" alt="Portfolio Item 1" />
            </div>
            
            <div className={`work-item ${visibleSections.has('work') ? 'animate' : ''}`} style={{ animationDelay: '0.2s' }}>
              <img src="https://via.placeholder.com/400x300/8190A6/FFFFFF?text=Project+2" alt="Portfolio Item 2" />
            </div>
            
            <div className={`work-item ${visibleSections.has('work') ? 'animate' : ''}`} style={{ animationDelay: '0.3s' }}>
              <img src="https://via.placeholder.com/400x300/91A0B6/FFFFFF?text=Project+3" alt="Portfolio Item 3" />
            </div>
            
            <div className={`work-item ${visibleSections.has('work') ? 'animate' : ''}`} style={{ animationDelay: '0.4s' }}>
              <img src="https://via.placeholder.com/400x300/A1B0C6/FFFFFF?text=Project+4" alt="Portfolio Item 4" />
            </div>
            
            <div className={`work-item ${visibleSections.has('work') ? 'animate' : ''}`} style={{ animationDelay: '0.5s' }}>
              <img src="https://via.placeholder.com/400x300/B1C0D6/FFFFFF?text=Project+5" alt="Portfolio Item 5" />
            </div>
            
            <div className={`work-item ${visibleSections.has('work') ? 'animate' : ''}`} style={{ animationDelay: '0.6s' }}>
              <img src="https://via.placeholder.com/400x300/C1D0E6/FFFFFF?text=Project+6" alt="Portfolio Item 6" />
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
