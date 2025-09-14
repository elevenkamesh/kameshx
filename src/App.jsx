import './assets/App.css';
import HeroSection from './componnets/hero_section'
import NavBar from './componnets/navbar';
import About from './componnets/about';
import Footer from './componnets/footer';
import Education from './componnets/education';
import Social from './componnets/socials';
import Skills from './componnets/skills';
import Experience from './componnets/exp';
import { useLocation } from "react-router-dom"; // Add this import at the top
import { useState, useEffect } from 'react'
function App() {
  const location = useLocation();

  // Scroll to section if navigation state is present
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className='fullwid'>
<HeroSection />
< Skills />
<Experience />
< Education />
<About/>
</div>

  )
}

export default App
