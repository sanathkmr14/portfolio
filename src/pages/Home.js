import React from "react";
import "../App.css";
import profileImage from "../Images/Sanath Kumar.jpg"; // Add your image here

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <p>Hello, It's Me</p>
        <h1>Sanath Kumar</h1>
        <h2>
          And I'm a <span className="highlight">Software Developer</span>
        </h2>
        <p>
          Tech Enthusiastic
          
        </p>
        <div className="social-icons">
          <a href="#" className="icon linkedin"></a>
          <a href="#" className="icon github"></a>
          <a href="#" className="icon twitter"></a>
        
        </div>
        <p style={{color:"rgb(56,25,66)"}}><i>You Can Download My Resume.</i></p>
        <a href="resume.pdf" download="Sanath Kumar.pdf" className="btn">Download Resume</a>
      </div>
      <div className="hero-avatar">
        <div className="avatar-container">
          <img src={profileImage} alt="Sanath Kumar" className="avatar" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
