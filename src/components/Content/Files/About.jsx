import React, { useState } from "react";
import "./About.css";

const skills = {
  Languages: [
    {
      name: "C",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "SQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
  ],
  "Web Development": [
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Redux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
    },
    {
      name: "Three.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
    },
    {
      name: "REST APIs",
      icon: "https://cdn-icons-png.flaticon.com/512/1250/1250686.png",
    },
    {
      name: "Mongoose",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
  ],
  "Core CS": [
    {
      name: "Data Structures",
      icon: "https://cdn-icons-png.flaticon.com/512/2092/2092693.png",
    },
    {
      name: "Algorithms",
      icon: "https://cdn-icons-png.flaticon.com/512/2010/2010990.png",
    },
    {
      name: "OOP",
      icon: "https://cdn-icons-png.flaticon.com/512/8649/8649595.png",
    },
    {
      name: "Operating Systems",
      icon: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    },
    {
      name: "DBMS",
      icon: "https://cdn-icons-png.flaticon.com/512/2772/2772165.png",
    },
    {
      name: "Machine Learning",
      icon: "https://cdn-icons-png.flaticon.com/512/8637/8637101.png",
    },
    {
      name: "Computer Networks",
      icon: "https://cdn-icons-png.flaticon.com/512/1183/1183669.png",
    },
    {
      name: "Computer Graphics",
      icon: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
    },
  ],
  Databases: [
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
  ],
  Tools: [
    {
      name: "Git & GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Postman",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Cloudinary",
      icon: "https://cdn.worldvectorlogo.com/logos/cloudinary-2.svg",
    },
    {
      name: "Canva",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
    },
  ],
};

const categories = ["All", ...Object.keys(skills)];

function About() {
  const [activeCategory, setActiveCategory] = useState("All");

  const getFilteredSkills = () => {
    if (activeCategory === "All") {
      return Object.entries(skills).flatMap(([_, list]) => list);
    }
    return skills[activeCategory] || [];
  };

  return (
    <div className="about-container">
      <div className="about-intro">
        <h2>👋 About Me</h2>
        <p>
          I&apos;m Vanisha — a B.Tech CSE student at Hindustan College of
          Science and Technology, Mathura, passionate about building impactful
          web experiences.
        </p>
        <p>
          With a strong foundation in full-stack development and core computer
          science, I love turning ideas into clean, functional products — from
          3D e-commerce platforms to analytics dashboards.
        </p>
      </div>

      <div className="skills-section">
        <h3>🧰 Skills</h3>
        <div className="skill-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`skill-tab ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="skill-grid">
          {getFilteredSkills().map((skill) => (
            <div key={skill.name} className="skill-badge">
              {skill.icon && (
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
              )}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;