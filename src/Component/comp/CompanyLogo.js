import { CompanyLogoData } from "./CarouselData"
import '../Assets/css/CompanyLogo.css'

import React from 'react'

function CompanyLogo() {
  return (<>
    <div className="mainDiv">
        {CompanyLogoData.map((props)=>{
            return(<>
                <div className="bodyDiv">
                    <img src={props.url}
                    alt={props.alt} />
                </div>
            </>)
        })}
    </div>
  </>)
}

export default CompanyLogo