import React, { useState } from "react";
import "../App.css"; // Import the CSS file

const SkillsPage = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const [selectedSkill, setSelectedSkill] = useState(null);

  const techStack = {
    frontend: [
      {
        name: "React.js",
        image:
          "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
        description: "A JavaScript library for building user interfaces.",
      },
      {
        name: "JavaScript",
        image:
          "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
        description: "A high-level, dynamic, untyped programming language.",
      },
      {
        name: "HTML",
        image:
          "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
        description:
          "The standard markup language for documents designed to be displayed in a web browser.",
      },
      {
        name: "CSS",
        image:
          "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
        description:
          "A styling language used to control layout and appearance of web pages.",
      },
    ],
    backend: [
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png",
        description: "A high-level, interpreted programming language.",
      },
      {
        name: "Django",
        image:
          "https://camo.githubusercontent.com/8c0487762b2c2fd0bd873f71e4c89c7a211165b49c9b1ce69f109180ba3a390f/68747470733a2f2f77372e706e6777696e672e636f6d2f706e67732f31302f3131332f706e672d7472616e73706172656e742d646a616e676f2d7765622d646576656c6f706d656e742d7765622d6672616d65776f726b2d707974686f6e2d736f6674776172652d6672616d65776f726b2d646a616e676f2d746578742d74726164656d61726b2d6c6f676f2e706e67",
        description:
          "A high-level Python web framework that encourages rapid development and clean design.",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png",
        description: "An open-source relational database management system.",
      },
    ],
    tools: [
      {
        name: "GitHub",
        image:
          "https://cdn-icons-png.flaticon.com/128/3291/3291695.png",
        description: "A web-based platform for version control and collaboration.",
      },
      {
        name: "VSCode",
        image:
          "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png",
        description: "A lightweight, open-source code editor.",
      },
      {
        name: "PyCharm",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/PyCharm_Icon.svg/800px-PyCharm_Icon.svg.png",
        description: "A popular integrated development environment (IDE) for Python.",
      },
    ],
  };

  return (
    <div className="skills-container">
      <h1 className="skills-title">Skills</h1>

      {/* Tab Navigation */}
      <div className="skills-tabs text-center">
        {["frontend", "backend", "tools"].map((tab) => (
          <button
            key={tab}
            className={`btn ${
              tab === "frontend" && activeTab === "frontend"
                ? "frontend-active"
                : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="row justify-content-center mt-4">
        {techStack[activeTab].map((tech, index) => (
          <div
            key={index}
            className={`skills-card card m-2 col-md-3 ${
              selectedSkill === tech.name ? "border-primary" : ""
            }`}
            onClick={() => setSelectedSkill(tech.name)}
          >
            <img src={tech.image} className="card-img-top" alt={tech.name} />
            <div className="card-body">
              <h5 className="card-title">{tech.name}</h5>
              <p className="card-text">{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
