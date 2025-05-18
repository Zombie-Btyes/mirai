import React from 'react';
import '../style/ProjectCard.css';

export default function ProjectCard({ image, title, description, tags, projectUrl }) {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        <div className="project-overlay">
          <div className="overlay-content">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="tech-tags">
              {tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        {projectUrl ? (
          <a 
            href={projectUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn">
            View Project
          </a>
        ) : (
          <button className="btn" disabled>
            Coming Soon
          </button>
        )}
      </div>
    </div>
  );
}