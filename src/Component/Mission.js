import React from 'react'
import Navbar from './comp/Navbar'
import Footer from './Footer'
import '../Component/Assets/css/Mission.css'
import {WhyaspireImages} from './comp/CarouselData.js'

function Mission() {
    return ( <> <Navbar/> <div className = 'MissionDiv' > <div className='MissionDivLeft'>
        <h1>Mission Statement </h1>
            <p>Our mission is to be the premier customer-service focused
            technology solutions provider in Colorado. We will support your business goals
            by increasing your overall efficiency with a predictable technology budget and
            service expectation. We will demystify IT and explain technology in
            easy-to-understand terms. We will build long-standing relationships with our
            customers by creating a positive personalized experience every time and by
            providing consistent high-quality solutions, honest and objective
            recommendations, and a guarantee on all products and services.</p>

    </div> <div className = 'MissionDivRight' > {
        WhyaspireImages.map((props) => {
            return (
                <div>
                    <img src={props.url} alt={props.alt}/>
                </div>
            )
        })
    } </div>
  </div> <Footer/> </>)
}

export default Mission