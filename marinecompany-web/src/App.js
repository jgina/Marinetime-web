// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './pages/HeroSection';
import WhyChooseUs from './pages/WhyChooseUs';
import Services from './components/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
