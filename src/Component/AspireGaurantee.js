//eslint
import React from 'react'
import './Assets/css/Aspiregaurantee.css'
import {WhyaspireImages} from './comp/CarouselData.js'
import Navbar from './comp/Navbar'
import Footer from './Footer'



function AspireGaurantee() {
  return (<>
      <Navbar/>
      <div className="AGTopDiv">
        <h1>
        ASPIRE’S GUARANTEE
        </h1>
        <div className='AGTopDivDiv'>
        <h2>At Aspire, we guarantee that you will receive the highest quality products and services.</h2>
        <p>Serving our customers by creating a positive personalized experience every time is our core mission.</p>
        </div>

      </div> <div className = 'AGDiv' > 
      <div className='AGDivLeft'>
        <h1>OUR PROMISE</h1>
            <p>When you choose Aspire as your IT service provider, we guarantee that you can expect:</p>
            <ul>
              <li>Highly skilled technical experts with extensive field experience</li>
              <li>Cutting-edge tools to keep your systems running at peak performance</li>
              <li>Responsive support from friendly, attentive, and knowledgeable staff</li>
              <li>Flexible, scalable solutions that keep your employees productive and focused on your core business</li>
              <li>Competitive support prices that reduce overhead and boost your bottom line</li>
              <li>Satisfaction guarantee for our service on all computer types, brands, and operating systems.</li>
            </ul>

    </div> <div className = 'AGDivRight' > {
        WhyaspireImages.map((props) => {
            return (
                <div>
                    <img src={props.url} alt={props.alt}/>
                </div>
            )
        })
    } </div>
  </div> <Footer/>
  </>)
}

export default AspireGaurantee