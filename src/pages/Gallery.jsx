import React from 'react';
import './Gallery.css';

const Gallery = () => {
  // Placeholder images - you can replace these with actual project images
  const galleryItems = [
    { id: 1, title: "Project 1", category: "Category A" },
    { id: 2, title: "Project 2", category: "Category B" },
    { id: 3, title: "Project 3", category: "Category A" },
    { id: 4, title: "Project 4", category: "Category C" },
    { id: 5, title: "Project 5", category: "Category B" },
    { id: 6, title: "Project 6", category: "Category A" },
    { id: 7, title: "Project 7", category: "Category C" },
    { id: 8, title: "Project 8", category: "Category B" }
  ];

  return (
    <div className="gallery">
      <div className="container">
        <section className="gallery-hero">
          <h1>Our Gallery</h1>
          <p>Take a look at some of our recent projects and work</p>
        </section>
        
        <section className="gallery-filters">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Category A</button>
          <button className="filter-btn">Category B</button>
          <button className="filter-btn">Category C</button>
        </section>
        
        <section className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-image">
                <div className="placeholder-image">
                  <span>📷</span>
                  <p>Image Placeholder</p>
                </div>
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
