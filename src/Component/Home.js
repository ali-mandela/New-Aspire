import React from 'react'
import Navbar from './comp/Navbar.js'
import '../Component/Assets/css/Home.css'
import Carousel from './comp/Carousel.js'
import Section2 from './comp/section2.js'
import Testimonial from './comp/Testimonial.js'
import CompanyLogo from './comp/CompanyLogo.js'
import Footer from './Footer.js'

function Home(){
  return (<>
    <Navbar/>
    <div className='HomeDiv'>
   <Carousel/> 
    <Section2/>
    <Testimonial/>
    <CompanyLogo/>
    <Footer/>
    </div>
  </>)
}

export default Home