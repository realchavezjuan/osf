import React, { useState } from 'react';
import Navigation from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import Services from './components/Services';
import ContactForm from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/images/TransparentLogo.png';

function App() {

  return (
    <div id='main-wrapper'>
      <Navigation></Navigation>
      <section className='hero'>
        <img src='./assets/images/TransparentLogo.png' alt="" />
      </section>
      <main>
        <About></About>
        <Gallery></Gallery>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
}

export default App;