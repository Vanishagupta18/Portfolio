import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Experience.css";

function Experience() {
  const codeString = `/* experience.css */

.Vanisha-Gupta {
  phone: "6396853591";
  email: "guptavanisha11@gmail.com";
  github: "Vanishagupta18";

  education: {
    hindustan_college: {
      degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
      institution: "Hindustan College of Science and Technology, Mathura",
      university: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
      duration: "Sep 2023 - Jun 2027 (Expected)",
      cgpa: "8.30 / 10.0",
      coursework: [
        "Data Structures",
        "Design and Analysis of Algorithms",
        "Database Management Systems (DBMS)",
        "Machine Learning",
        "Operating Systems",
        "Computer Graphics",
        "Computer Networks",
        "Object-Oriented Programming"
      ]
    },
    st_marys_convent_school: {
      degree: "Senior Secondary (Class XII)",
      institution: "St Mary's Convent School, Agra",
      percentage: "92.5%",
      year: "2023",
      rank: "2nd Rank in Senior Secondary"
    }
  };

  experience: {
    Gyan_Jyoti_Annual_Fest_2025: {
      role: "Promotion & Registration Team Member",
      location: "Mathura, Uttar Pradesh",
      highlights: [
        "Drove participant onboarding and promotional campaigns, resulting in 800+ registrations",
        "Generated INR 40,000 in revenue through targeted registration drives and inter-college outreach",
        "Increased fest visibility across 5+ colleges by streamlining registration workflows",
        "Coordinated cross-team promotions to maximize event participation"
      ]
    },
    Byte_Club: {
      role: "Event Volunteer",
      location: "Mathura, Uttar Pradesh",
      highlights: [
        "Supported execution of 4+ technical events with 100+ total participants",
        "Managed registrations and logistics for smooth event operations",
        "Maintained participant records, schedules, and coordination details"
      ]
    }
  };

  projects: {
    SkillBridge: {
      type: "Innovation Day Project",
      stack: ["HTML", "JavaScript (ES6+)", "React.js", "Tailwind CSS"],
      features: [
        "Designed features enabling 20+ local businesses to showcase offerings digitally",
        "Built an analytics dashboard tracking 3+ business metrics (sales trends, growth rate, transactions)",
        "Developed modular training and promotion features for future business onboarding",
        "Delivered with a 3-member team within a fixed Innovation Day timeline"
      ]
    },
    INDIANIME: {
      stack: ["HTML5", "JavaScript", "React.js", "Tailwind CSS", "Three.js"],
      features: [
        "Developed a frontend e-commerce platform with 10+ reusable UI components",
        "Implemented client-side routing across 6+ pages using React Router DOM",
        "Integrated immersive 3D product visualization using Three.js with @react-three/fiber",
        "Designed a responsive UI with 10+ interactive components and animations"
      ]
    }
  };

  skills: {
    languages: ["C", "Java", "Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
    frameworks: ["React.js", "Redux", "Node.js", "Express.js", "Tailwind", "Bootstrap", "Mongoose"],
    databases: ["MySQL", "MongoDB"],
    tools: ["Git/GitHub", "Postman", "VS Code", "Figma", "Cloudinary", "Canva", "MS Office"],
    concepts: ["Data Structures", "Algorithms", "OOP", "Operating Systems", "DBMS", "REST APIs"]
  };

  achievements: [
    "🏆 800+ registrations & INR 40,000 revenue — Gyan Jyoti Annual Fest 2025",
    "👑 Assistant Coordinator – Invitation & Registration (large-scale events)",
    "🎨 Creative Head, Value Education Cell — social-impact student initiatives",
    "🏅 Finalist — Logic Quest 1.0, Byte Master (Coding), Brainometry (Aptitude)",
    "🥈 2nd Rank in Senior Secondary (Class XII) with 92.5%"
  ];
}
`;

  return (
    <div className="experience-container">
      <SyntaxHighlighter
        language="css"
        style={vscDarkPlus}
        customStyle={{
          fontSize: "14px",
          background: "#1e1e1e",
          padding: "1.5rem",
          borderRadius: "8px",
          overflowX: "auto",
        }}
        showLineNumbers
        lineNumberStyle={{
          color: "#555",
          paddingRight: "10px",
          minWidth: "2em",
          textAlign: "right",
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default Experience;