import React from 'react'
import '../Component/Assets/css/RemoteSupport.css'
import Navbar from './comp/Navbar'
import Footer from './Footer'

function RemoteSupport() {
  return (<>
    <Navbar/>
    <div className='remotediv'>
        <h1>REMOTE SUPPORT</h1>
        <p>
        The Aspire Remote Support tool allows us to provide instant, secure remote support for Windows PCs and Macs. This helps us to provide more efficient service and quicker resolution with the ability to connect to your computer as if a technician was on site
        </p>
        <h3>Windows Download</h3>
        <h3> Mac Download</h3>
        <p><a href='https://aspire.itglue.com/DOC-2503658-2878028' target='_blank'> Instructions – Opening an Aspire Remote Support Session on MacOS</a></p>
        <h3>Host Installer</h3>
    </div>
    <Footer/>
    </>)
}

export default RemoteSupport