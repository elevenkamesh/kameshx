import { useState } from 'react'

import './assets/App.css';
import HeroSection from './componnets/hero_section'
import NavBar from './componnets/navbar';
import About from './componnets/about';
import Footer from './componnets/footer';
import Education from './componnets/education';
import Social from './componnets/socials';
import Skills from './componnets/skills';
import Experience from './componnets/exp';

function App() {

  return (
    <div className='fullwid'>
< NavBar />
<HeroSection />

< Skills />
<Experience />
< Education />
<About/>
<Footer />
    </div>
  )
}

export default App
