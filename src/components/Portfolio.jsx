import React from 'react';
import ProjectCard from './ProjectCard';
import charAI from '../assets/charAI.png';
import '../style/Portfolio.css';

export default function Portfolio() {
  const projects = [
    {
      image: charAI,
      title: "Chat App",
      description: "Real-time chat application with multimedia support and AI integration.",
      tags: ["React", "Node.js", "WebSockets", "MongoDB", "Axios"],
      projectUrl: "" // Add this
    },
    {
      image: charAI,
      title: "Maple Guild Page",
      description: "Fan-made website for MapleStory guild with member profiles and event calendar.",
      tags: ["HTML", "CSS", "JavaScript"],
      projectUrl: "" // Add this
    },
    {
      image: charAI,
      title: "Trip Planner",
      description: "AI-powered platform for generating personalized travel itineraries.",
      tags: ["React", "Express", "AI API", "SQL"],
      projectUrl: "" // Leave empty for "Coming Soon" button
    }
  ];

  return (
    <section id="portfolio">
      <div className="container">
        <h2>My Portfolio</h2>
        <p className="portfolio-intro">Here are some of my recent projects...</p>
        <div className="portfolio-projects">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              tags={project.tags}
              projectUrl={project.projectUrl} // Pass the URL here
            />
          ))}
        </div>
      </div>
    </section>
  );
}