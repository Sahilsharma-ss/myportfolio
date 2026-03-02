const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const projects = [
  {
    id: 1,
    title: "Intrusion Detection System",
    description: "An ML-based intrusion detection model for network security that analyzes network traffic patterns to identify and flag potential intrusions.",
    image: "/assets/project-1.png",
    github: "https://github.com/Sahilsharma-ss/intrusion_detection_model",
    live: "https://sahilsharma-ss.github.io/intrusion_detection_model/",
    tags: ["Python", "Machine Learning", "Network Security"]
  },
  {
    id: 2,
    title: "Ecartz – Smart Ecommerce Platform",
    description: "Smart ecommerce store with customer segmentation using ML and a comprehensive business analytics dashboard.",
    image: "/assets/project-2.png",
    github: "https://github.com/Sahilsharma-ss/Ecartz-Smart-Ecommerce-store-with-custumer-Segmentation-using-ml-and-buisness-dashboard",
    live: "https://ecommerce-web-with-customer-segmentation.onrender.com/",
    tags: ["Python", "ML", "JavaScript", "Dashboard"]
  },
  {
    id: 3,
    title: "CoreOS Simulation Suite",
    description: "An OS simulation suite that demonstrates core operating system concepts including process scheduling, memory management, and file systems.",
    image: "/assets/project-3.png",
    github: "https://github.com/sahilsharma-ss/coreos-simulation-suite",
    live: "https://github.com/sahilsharma-ss",
    tags: ["C", "C++", "Operating Systems"]
  }
];

const skills = {
  languages: [
    { name: "C", level: "Experienced" },
    { name: "C++", level: "Experienced" },
    { name: "Python", level: "Intermediate" },
    { name: "JavaScript", level: "Basic" }
  ],
  cybersecurity: [
    { name: "Network Security", level: "Intermediate" },
    { name: "SQL Injection", level: "Basic" },
    { name: "Botnet Detection", level: "Intermediate" },
    { name: "Ethical Hacking", level: "Basic" }
  ]
};

const about = {
  name: "Sahil Sharma",
  title: "Software Developer",
  bio: "B.Tech CSE student at Graphic Era Deemed to be University, Dehradun. Passionate about cybersecurity, ethical hacking, network security, and cyber defense. Also deeply interested in development and AI/ML.",
  experience: "1+ Year",
  education: "B.Tech CSE",
  university: "Graphic Era Deemed to be University, Dehradun",
  github: "https://github.com/sahilsharma-ss/",
  linkedin: "https://linkedin.com/in/sahilsharma-ss/",
  email: "sahilsharma-ss@outlook.com"
};

app.get('/api/projects', (req, res) => res.json(projects));
app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/about', (req, res) => res.json(about));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
