import './Assets/css/Footer.css'

function Footer(){
    return(<>
            <div className="FooterDiv">
            <div className="topDiv">
            <h1>Serving small business IT needs in Metro Denver since 2000.</h1>
            <p>
            <a href="tel:303.932.8555">303.932.8555</a><br/>
            support@aspiredenver.com<br/>4350 Wadsworth Blvd, Suite 275<br/>Wheat Ridge, CO 80033<br/>
            <a href=''>Areas Served</a>
            </p>
            </div>
            <span className='sidebtn'><a href="#bottom"><i class="fa-solid fa-angle-up fa-3x"></i></a></span>

            <div className="btmdiv">
            <p>© 2000-2022 Aspire Technology Solutions, Inc. All Rights Reserved.</p>
            <a href="">Acceptable Use Policy</a> 
            </div>
              
        </div>
    </>);
}

export default Footer;
