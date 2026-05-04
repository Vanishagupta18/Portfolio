import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Experience.css";

function Experience() {
  const codeString = `// Vanisha Gupta - Developer Profile

const VanishaGupta = {
  contact: {
    phone: "6396853591",
    email: "guptavanisha11@gmail.com",
    github: "Vanishagupta18"
  },

  summary: "Full-stack developer focused on React.js, Node.js, and AI integrations. Built scalable UI systems, AI workflows, and 3D web experiences.",

  education: {
    btech_cse: {
      college: "Hindustan College of Science and Technology, Mathura",
      university: "AKTU",
      cgpa: "8.30/10",
      duration: "2023 - 2027"
    },
    class_12: {
      school: "St Mary's Convent School, Agra",
      score: "92.5%",
      rank: "2nd"
    }
  },

  experience: {
    gyan_jyoti_fest: {
      role: "Promotion & Registration Team",
      impact: [
        "Handled 800+ registrations across 5+ colleges",
        "Generated ₹40,000 revenue via structured campaigns",
        "Optimized registration workflow using Google Forms + Sheets"
      ]
    },

    byte_club: {
      role: "Technical Event Volunteer",
      impact: [
        "Executed 4+ technical events (100+ participants)",
        "Managed logistics, registrations, and schedules"
      ]
    }
  },

  projects: {
    INDIANIME: {
      stack: ["React.js", "Three.js", "TypeScript", "Tailwind"],
      highlights: [
        "Built modular e-commerce SPA with 10+ reusable components",
        "Implemented 3D product visualization using @react-three/fiber",
        "Optimized navigation with React Router (6+ pages)"
      ]
    },

    AutoInquire: {
      stack: ["OpenAI API", "Make/n8n", "Google Forms"],
      highlights: [
        "Automated inquiry system reducing response time to <2 mins",
        "Built AI-powered workflows with real-time email & Slack triggers"
      ]
    },

    AI_Language_Tutor: {
      stack: ["Python", "Streamlit", "OpenAI API"],
      highlights: [
        "Integrated GPT + Whisper for speech & text evaluation",
        "Built real-time feedback system for language learning"
      ]
    }
  },

  skills: {
    languages: ["C", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
    frameworks: ["React.js", "Node.js", "Express.js", "Next.js", "Redux"],
    tools: ["Git", "Postman", "Figma", "REST APIs"],
    ai: ["OpenAI API", "LangChain", "Prompt Engineering", "n8n"]
  },

  achievements: [
    "Solved 100+ DSA problems on LeetCode",
    "Selected for Innovation Day (SkillBridge project)",
    "Finalist in Logic Quest, Byte Master, Brainometry"
  ]
};

export default VanishaGupta;
`;

  return (
    <div className="experience-container">
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        showLineNumbers
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default Experience;