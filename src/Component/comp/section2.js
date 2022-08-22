import '../Assets/css/section2.css'
import {Link} from 'react-router-dom'
import {section2Data,LinkSectionData} from '../comp/CarouselData.js'
import React from 'react'

function Section2() {
  return (<>
    <div className="section2header">
        <h1>BUSINESS IT SERVICES IN DENVER, CO</h1>
    </div>
    <div className='maindiv'>
    {section2Data.map((props)=>{return(<>
    <div className='divbody'>
    <img src={props.url} alt="img icon"/>
    <h1>{props.title}</h1>
    <p>{props.body}</p>
    <p><Link to="BlockPage"><button onClick={props.link}>Learn More</button></Link> </p>
    </div>
    </>)

    })}
    </div>
    <div className='maindiv2'>
    {LinkSectionData.map((props)=>{
        return(
            <div className='maindiv2body'>
            <Link to="BlockPage"> <a href={props.link}>
                    <h3>{props.title}</h3>
                    <p>{props.body}</p>
                </a>
            </Link>
            </div>
    )})}
    </div></>)
}

export default Section2