import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer.component";
import Newnavbar from "../components/newnavbar";

import LandingPageImg from "../assets/images/landing.svg";

const Landing = ()=>{
    return (
        <>
        <Newnavbar/>
            <div className="py-24 w-100" style={{width:"100%",}}> 
                <br/>
                <div className="d-flex flex-column font-link align-items-center my-3">
                    <h1 className=" display-1 " style={{fontWeight:"bolder", marginBottom:"60px"}} >AI Interview Test</h1>
                   

                    <p className="fs-4 "style={{marginBottom:"60px"}} >Test  &  Develope  Your  Interview   Skills</p>

                    <Link to="/video">
                    <button type="button" class="btn btn-outline-dark py-2">Get Started</button>
                    </Link>

                </div>  

                <div >
                    <div class="landing-img" style={{width:"100%"}}>
                        <img src={LandingPageImg} style={{width:"100%" , height:"600px"}} alt="Landing" />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Landing;