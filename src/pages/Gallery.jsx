import React, { useState } from 'react';
import './Gallery.css';

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

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const galleryItems = [
    { id: 1, title: "Professional Lawn Mowing", category: "Lawn Care", image: lawnMowed1 },
    { id: 2, title: "Pristine Lawn Maintenance", category: "Lawn Care", image: lawnMowed2 },
    { id: 3, title: "Expert Lawn Service", category: "Lawn Care", image: lawnMowed3 },
    { id: 4, title: "Beautiful Lawn Results", category: "Lawn Care", image: lawnMowed4 },
    { id: 5, title: "Quality Lawn Care", category: "Lawn Care", image: lawnMowed5 },
    { id: 6, title: "Exceptional Lawn Work", category: "Lawn Care", image: lawnMowed6 },
    { id: 7, title: "Professional Cleanup", category: "Cleanup", image: cleanup1 },
    { id: 8, title: "Yard Cleanup Service", category: "Cleanup", image: cleanup2 },
    { id: 9, title: "Seasonal Cleanup", category: "Cleanup", image: cleanup3 }
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="gallery">
      <div className="container">
        <section className="gallery-hero">
          <h1>Our Work Gallery</h1>
          <p>Take a look at our professional landscaping and lawn care projects</p>
        </section>
        
        <section className="gallery-filters">
          <button 
            className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`}
            onClick={() => setActiveFilter('All')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'Lawn Care' ? 'active' : ''}`}
            onClick={() => setActiveFilter('Lawn Care')}
          >
            Lawn Care
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'Cleanup' ? 'active' : ''}`}
            onClick={() => setActiveFilter('Cleanup')}
          >
            Cleanup
          </button>
        </section>
        
        <section className="gallery-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="gallery-info">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Gallery;
