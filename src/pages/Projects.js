import React from "react";

const Projects = () => {
  const projects = [
    { name: " A Framework for Privacy-Critical Cloud Storage Services", description: "Designed and implemented a secure searchable encryption framework for privacy-critical cloud storage. Utilized advanced encryption techniques with incidence matrices and hash tables to create an efficient encrypted index for search and update operations. Enabled secure file sharing with encryption to prevent unauthorized access. Developed a user-friendly interface for seamless integration with cloud storage services and conducted extensive testing to ensure robustness and reliability.", link: "#" },
    { name: "E-Commerce", description: "The E-Commerce platform is a robust, user-friendly application that meets the demands of modern online shopping. and developed robust backend functionalities by using Python allowing users to browse products, manage their shopping cart, place orders, and securely pay through multiple gateways. leveraging Django and DRF, the system provides a secure, scalable, and responsive solution for both users and administrators, making it an ideal fit for any online retail business.", link: "#" },
  ];

  return (
    <div className="projects">
      <h2><i>Projects</i></h2>
      <div>
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            <h3 style={{ color: "rgb(35,115,175)"}}>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
