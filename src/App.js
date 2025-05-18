import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
