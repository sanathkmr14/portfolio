import React, { useState } from "react";
import "../App.css"; // Your styles
import MyImage from '../Images/Sanath Kumar.jpg'; // Your profile image

const Home = () => {
  const [showEducation, setShowEducation] = useState(false); // State to toggle education details visibility

  // Function to handle the "READ MORE" click
  const handleReadMoreClick = () => {
    setShowEducation(true); // Show education details
  };

  return (
    <div className="home-container">
      {/* Profile Section */}
      <div className="profile-background">
        <div className="profile-container">
          <img
            src={MyImage} // Replace with your profile image URL
            alt="Profile"
            className="profile-image"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="text-section">
        <h1>SANATH KUMAR</h1>
        <p>
          Enthusiastic and quick-learning <i><b>software developer</b></i> with foundational knowledge in Python, Django, Django Rest Framework (DRF), HTML, CSS, JavaScript, MySQL, and React.js. Looking for an opportunity to showcase my technical skills in software development. Excited to collaborate with a team, contribute to real-world projects, and grow professionally in a dynamic environment.
        </p>
        <a href="#about" className="read-more" onClick={handleReadMoreClick}>
          READ MORE
        </a>
      </div>

      {/* Education Section */}
      {showEducation && (
        <div className="education-section">
          <h2>Education Details</h2>
          <ul>
            <li>
              <strong>Sree Chaitanya Collage Of Engineering</strong>
            </li>
            <li>
              <i>Master's Of Computer Applications - (M.C.A)</i> - JNTUH University
              <br />
              Graduation: 2021
            </li>
            <li>
            <strong>Sree Chaitanya Degree College</strong>
            </li>
            <li>
              <i>Bachelor's Of Computer Science - (B.S.C)</i> - Satavahana University
              <br />
              Graduation: 2017
            </li>
            <li>
            <strong>SR Junior College</strong>
            </li>
            <li>
              <i>Intermediate</i>
              <br />
              Graduation: 2014
            </li>
            <li>
            <strong>Bharateeya Vidhya Kendra High School</strong>
            </li>
            <li>
              <i>High School</i>
              <br />
              Graduation: 2012
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
