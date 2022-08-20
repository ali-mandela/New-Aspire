// eslint-disable-next-line
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../Assets/css/Navbar.css'
import logo from '../Assets/img/logo.png'

function Navbar() {

    const LinkStyle={
        color:"gray",
        textDecoration:"none",
    };

const [clicked,setClicked]=useState(false);
const sttyle1={
    right:"0",
    
}
const sttyle2={
    left:"-100%", 
}

function handleclick(){
    setClicked(!clicked)
}
  return (<>
  <div className="topText">
         <div>
             <span>CALL US TODAY 
             </span>
             <a href="tel:303.932.8555"> 303.932.8555</a>
         </div>
    </div>
  <nav className='Navbar'>
  <Link to="/">
        <div className='NavbarLogo'><a href=""><img src={logo} alt="logo"/></a></div>
    </Link>
        <i onClick={handleclick} className={clicked?"fa-solid fa-3x fa-xmark":"fa-solid fa-3x fa-bars"}></i>
        
        <ul className='NavbarMenu' style={clicked?sttyle1:sttyle2}>
                <li className= "MenuLink"><a>Why Aspire</a>
                <ul className='SubMenu'>
                    <li><Link to="TenReason"><a>10 Reason to Aspire</a></Link></li>
                    <li><Link to="AspireGaurantee"><a>Aspire Guarantee</a></Link> </li>
                    <li><Link to="Mission"><a>Mission</a></Link></li>

                </ul>
                </li>
                <li className= "MenuLink "><a>IT services</a>
                <ul className='SubMenu'>
                    <li><Link to="BlockPage"><a>Hourly IT services</a></Link></li>
                    <li><a>Managed IT services</a>
                        <ul className='SubSubMenu'>
                            <li> <a href=''>Managed services Packages</a></li>
                            <li> <a href=''>Software Management</a></li>
                            <li> <a href=''>Backup System Management</a></li>
                            <li> <a href=''>Microsoft Exchange Server Setup</a></li>
                            <li> <a href=''>Microsoft Office 365 Setup</a></li>
                            <li> <a href=''>Mobile Device Management</a></li>
                            <li> <a href=''>Network services</a></li>
                            <li> <a href=''>Vendor Management</a></li>
                            <li> <a href=''>Server Management</a></li>
                            <li> <a href=''>Workstation Management</a></li>
                        </ul>
                    </li>
                    <li><a href='#'>Network Security Consulting</a></li>
                    <li><a href='#'>Project services</a></li>

                </ul></li>
                <li className= "MenuLink "> <a><Link to="contact">Contact</Link></a></li>
                <li><span><Link to="Clients" style={LinkStyle}>CLIENTS</Link></span></li>
                <li><span><Link to="/RemoteSupport" style={LinkStyle}>REMOTE SUPPORT</Link></span></li>
                
        </ul>
  </nav>


  </>)
  
}

export default Navbar