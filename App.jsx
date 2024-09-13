import React from 'react'
import Header from './Header'
import Hero from './Hero'
import FeaturedPlans from './FeaturedPlans'
import Footer from './Footer'

function App(){
  return(
    <>
    <div>
     <Header/>
     <Hero/>
     <FeaturedPlans/>
     <hr></hr>
     <Footer/>
    </div>
    
    </>
  );
}

export default App