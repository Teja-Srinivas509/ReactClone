import React from 'react';
import './Homepage.css';
import Header from '../../Components/HomePageComponents/HomePageHeader/Header'
import Features from '../../Components/HomePageComponents/Features/Features';
import Accordion from '../../Components/HomePageComponents/Accordion/Accordion';
import Footer from '../../Components/HomePageComponents/Footer/Footer';
import '../../Components/HomePageComponents/Footer/Footer.css'

function Homepage() {
  return (
     <div className='Homepage'>
        <Header />
        <Features />
        <Accordion />
        <Footer />
      </div>

  );
}

export default Homepage;
