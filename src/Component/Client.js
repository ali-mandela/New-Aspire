import React from 'react'
import Navbar from './comp/Navbar'
import Footer from './Footer'
import '../Component/Assets/css/Client.css'

function Client() {
  return (<>
    <Navbar/>
    <div className='clientDiv'>
    <h1>Clients</h1>
    <ul>
        <li> <a href='https://na.myconnectwise.net/support/index.htm?Company=aspiredenver' target={"_blank"}>Customer Portal</a></li>
        <li> <a href='https://atsi.connectboosterportal.com/platform/login' target={"_blank"}>Payments</a></li>
        <li> <a href='https://b9phj.login.trendmicro.com/simplesaml/saml2/idp/SSOService.php?wkey=tmrm-nabu' target={"_blank"}>Trend Micro Management</a></li>
    </ul></div>
    <Footer/>
  </>)
}

export default Client