import React from "react";

const Skills = () => {
  const skills = ["Python", "Django Rest Framework", "JavaScript", "HTML", "CSS", "MySQL", "Bootstrap", "React.js"];
  
  return (
    <div className="skills">
      <h2><i>Tech Stack</i></h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>
            <i className=" skills "></i> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;

