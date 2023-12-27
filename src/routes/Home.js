import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Experts from '../components/Experts';
import Plans from '../components/Plans';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import ContactData from '../components/ContactData';

function Home() {
  return (
    <>
   <Header/>
   <Banner/>
   <Experts/>
   <Plans/>
   <NewsLetter/>
   <ContactData/>
   <Footer/>
   </>
  )
}

export default Home
