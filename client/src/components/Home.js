import React from 'react';
import './App.css';
import HeroSection from './HeroSection';
import Footer from './Footer';
import About from './About';
import Contact from './Contact'
import Cards from './Cards';
//import Sponsers from '../Sponsers';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards/>
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
