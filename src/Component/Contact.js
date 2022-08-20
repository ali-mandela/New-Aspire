import React from 'react'
import Navbar from './comp/Navbar'
import '../Component/Assets/css/Contact.css'
import Footer from './Footer'

function Contact() {
  return (<>
    <Navbar/>
    <div className='contactDiv'>
        <div className='contactLeftDiv'>
        <h1> ASPIRE TECHNOLOGY SOLUTIONS, INC.</h1>
        <p><i className="fa-solid fa-2x fa-star"></i> 4350 WADSWORTH BLVD, STE 275 WHEAT RIDGE, CO 80033</p>
        <p><i className="fa-solid fa-2x fa-phone-flip"></i><a href='tel:303.932.8555'>303.932.8555</a></p>
        <p><i className="fa-solid fa-2x fa-envelope"></i>SUPPORT@ASPIREDENVER.COM</p>
        <p><i className="fa-solid fa-2x fa-clock"></i>MONDAY-FRIDAY | 8AM-5PM</p>        

         </div>
        <div className='contactRightDiv'>
                <input type="text" placeholder="FULL NAME"></input>
                <input type="text" placeholder="COMPANY EMAIL"></input><br/>
                <input type="text" placeholder="Work NUMBER"></input>
                <input type="text" placeholder="Work NUMBER"></input><br/>
                <textarea placeholder='How can we help you ?' rows="12" cols="30"/>
                <br/>
                <input placeholder='Human Check- 4 +1'></input><br/>
                <button>Contact</button>
            </div>
            </div>
           
    <Footer/>
    </>)
}

export default Contact