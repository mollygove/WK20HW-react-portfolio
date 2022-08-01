import React from 'react';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Resume from './Resume';
import Footer from './Footer';

export default function Portfolio () {
  return (
      <div>
          <Header />
          <Intro />
          <About />
          <Work />
          <Contact />
          <Resume />
          <Footer />
      </div>
  )
};