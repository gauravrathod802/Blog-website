import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import RecentPosts from './Components/RecentPosts/RecentPosts';
import Footer from './Components/Footer';

function App() {

  return (
    <>
        <Navbar />
        <Hero/>
        <RecentPosts/>
        <Footer/>
    </>
  )
}

export default App;
