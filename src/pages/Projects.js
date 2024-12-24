import React from 'react';
import '../App.css'; // Import the CSS file

const ProjectsPage = () => {
  const projects = [
    {
      name: "A Framework for Privacy-Critical Cloud Storage Services", 
      description: [
        "Designed and implemented a secure searchable encryption framework for privacy-critical cloud storage.",
        "Utilized advanced encryption techniques with incidence matrices and hash tables to create an efficient encrypted index for search and update operations.",
        "Enabled secure file sharing with encryption to prevent unauthorized access.",
        "Developed a user-friendly interface for seamless integration with cloud storage services.",
        "Conducted extensive testing to ensure robustness and reliability."
      ], 
      link: "#"
    },
    {
      name: "E-Commerce",
      description: [
        "Developed a robust, user-friendly application that meets the demands of modern online shopping.",
        "Implemented a comprehensive backend system using Python to manage user interactions and product data.",
        "Enabled functionalities such as browsing products, managing shopping carts, placing orders, and securely paying through multiple gateways.",
        "Leveraged Django and DRF to provide a secure, scalable, and responsive backend for both users and administrators.",
        "Built a responsive and intuitive UI to enhance the shopping experience."
      ], 
      link: "#"
    },
  ];

  return (
    <div className="container">
      <h1 className="title">My Projects</h1>
      <div className="projects-list">
        {projects.map((project) => (
          <div className="project-card" key={project.name}>
            <h3 className="project-name">{project.name}</h3>
            <div className="project-description">
              <ol>
                {project.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ol>
            </div>
            {project.link && (
              <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
