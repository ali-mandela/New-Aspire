import '../Assets/css/Testimonial.css'
import img from '../Assets/img/testimonial.png'
 import { css} from '@emotion/css'
 
import React, { useState } from "react"; 

const Testimonial = () => {
  const Testimonials = {
    0:{
        quote:"Aspire Technology provided managed IT services for our law firm for 2-1/2 years. They met with us several times to discuss the services we needed and their proposal was consistent with our expectations and their fees reasonable. They made suggestions during the time we worked with them for enhanced security which were very helpful. During our time with them they responded in a timely fashion to any issues that arose outside routine services. We found their office staff and techs to be responsive, knowledgeable and a pleasure to work with.",
        writer:"DONNA V - LAW FIRM"
    },
    1:{
        quote:"Aspire Solutions has top notch people and service. Angie, Ian and Zach are all professional, caring and spend the time you need. Being someone who is not computer savvy I appreciate having a team that will provide me with honest information and choices where I can do it myself or have them do it for me",
        writer:"DEE M"
    },
    2:{
        quote:"Outstanding IT management. They have an attentive and incredibly knowledgeable staff who are always on top of their stuff! 10/10 recommend to anyone needing managed IT services for their company.",
        writer:"AMY C"
    },
    3:{
        quote:"Great service with no headache! Their very friendly service was great and they made it easy to make decisions on fixing my computer. Also, very reasonable pricing...",
        writer:"URSULA H"
    },
    4:{
        quote:"Outstanding IT management. They have an attentive and incredibly knowledgeable staff who are always on top of their stuff! 10/10 recommend to anyone needing managed IT services for their company.",
        writer:"TOM W - MANUFACTURING"
    },
  }

  const [current, setCurrent] = useState([0])

  const [active, setActive] = useState(2)

  const date=new Date().toLocaleDateString();

  const handleSetClick = event => {
    setCurrent(Testimonials[event.target.getAttribute("data-quote")])
    setActive(event.target.getAttribute("data-quote"))
  }

  return (<>
  <div className='testimonialDiv'>
    <img src={img} alt="testimonial image" className={css`
    float:left;
    height:140px;
    width:140px;
    margin:10px;`}/>
    <div
      className={css`
        margin: 40px auto;
        max-width: 1200px;

        p {
          margin-bottom: 20px;
          color: #45454d;
        }
      `}
    ><i class="fa-solid fa-quote-left fa-6x"></i>
      <p className={css`
    font-size:16px;
    color:grey;
    
    `}>{current.quote} <i class="fa-solid fa-quote-right fa-4x" style={{float:"right"}}></i></p>
      <p>Computer Service</p>
      
    <h6
    className={css`
    font-size:18px;
    float:right;
    `}>{current.writer}</h6>
    <p>{date}</p>
      <div
        className={css`
          display: flex;
          justify-content:center;

          span {
            height: 20px;
            width: 20px;
            margin: 0 3px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }

          span::before {
            content: "";
            height: 6px;
            width: 6px;
            background-color: #d4d4d4;
            border-radius: 50%;
            transition: background-color 0.3s ease;
          }

          span:hover::before {
            background-color: #45454d;
          }

          span[data-quote="${active}"]::before {
            background-color: #45454d;
          }

        `}
      >
      <br></br>
        {Object.keys(Testimonials).map(index => (
            
          <span
            onClick={event => handleSetClick(event)}
            data-quote={index}
            key={index}
          />
        ))}
      </div>
    </div>
    </div>
    </>)
}

export default Testimonial;
