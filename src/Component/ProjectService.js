import React from 'react'
import Navbar from './comp/Navbar'
import Footer from './Footer'
import img from './Assets/img/projectServiceimg.jpg'
import {WhyaspireImages} from './comp/CarouselData.js'
import '../Component/Assets/css/ProjectService.css'

function TenReason() {
    return ( <> <Navbar/> < div className = 'MissionDiv' > <div className='MissionDivLeft'>
        <h1>PROJECT BASED SERVICES
        </h1>
        <h4>Detailed Scope Of Work</h4>
        <p>Aspire’s project based services provide a pre-defined set of deliverables
            tailored to your specific needs. The scope of work, timeline, and the associated
            costs are outlined in the framework of the project before work begins. You will
            know exactly how long and how much it will take to achieve your desired results.</p>
            <img src={img} alt="image of "/>
            <h3>On Time and On Budget</h3>
            <p> Project based services are designed to minimize the
            risk associated with critical or large-scale projects. With our experienced team
            of technicians, we will focus our resources to aggressively define your specific
            problems, solve them, and deliver high quality results throughout the project
            execution. We offer consulting, planning, design, installation, and maintenance
            on all project based services.</p>
            <p>Whether you need a server installed or migrated,
            an email system migration, replacement of multiple workstations, or a
            line-of-business application deployed, Aspire will complete your IT project on
            time and within budget.</p>

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

export default TenReason