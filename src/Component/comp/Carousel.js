import CD from './CarouselData'
import '../Assets/css/Carousel.css'
import React, { useEffect, useState } from 'react'

const len=CD.length-1;
function Arrows({prevSlide,nextSlide})
{
    return(<>
        <div className='arrows'>
            {/* <i class="fa-solid fa-circle-play"></i> */}
            <span className='prev' onClick={prevSlide}>
            <i class="fa-solid fa-angle-left fa-3x"></i>
            </span>
            <span className='next' onClick={nextSlide}>
            <i class="fa-solid fa-angle-right fa-3x "></i>
            </span>
            {/* <i class="fa-solid fa-circle-pause"></i> */}
        </div>
    </>)
}

function Dots({activeIndex,onClick,CD})
{
    return(<>
        <div className='all-dots'>
            {CD.map((slide,index)=>(
                <span
                key={index}
                className={activeIndex === index ? "dot active-dot" : "dot"}
                onClick={()=>onClick(index)}></span>
            ))}
        </div>

    </>)
}
function SliderContent({activeIndex,CD}) {
    return(<>
    {CD.map((cdd,index)=>(
        <div key={index} className={index === activeIndex ? "active slides  " : "inactive"}>
            <img className='slide-img' src={cdd.urls} alt="images"/>
            <h2 className='slide-title'>{cdd.title}</h2>
            <p className='slide-text'>{cdd.description}</p>
        </div>
    ))}
    </>)
}



function Carousel(props) {
    const[activeIndex,setActiveIndex]=useState(0);
    useEffect(()=>{
        const interval =setInterval(()=>{
            setActiveIndex(activeIndex===len?0:activeIndex+1);
        },5000);
        return ()=> clearInterval(interval);
    },[activeIndex]);
  return (<>
            <div className='slider-container'>
                <SliderContent activeIndex={activeIndex} CD={CD}/>
                <Arrows 
                prevSlide={()=>setActiveIndex(activeIndex<1?len :activeIndex-1)
                }
                nextSlide={()=>setActiveIndex(activeIndex===len?0:activeIndex+1)}
                />
                <Dots activeIndex={activeIndex}
                    CD={CD}
                    onClick={(activeIndex)=>setActiveIndex(activeIndex)}
                />

            </div>
  

  </>)
}

export default Carousel;