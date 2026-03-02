import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/projects`)
      .then(r => r.json())
      .then(setProjects)
      .catch(() => {});

    fetch(`${API_URL}/api/skills`)
      .then(r => r.json())
      .then(setSkills)
      .catch(() => {});
  }, []);

  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <About />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
