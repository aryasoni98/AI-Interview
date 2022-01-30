import React from "react";
import {FaGithub} from "react-icons/fa";

import Logo from "../assets/logo/logo.svg";

import { Link } from "react-router-dom";

const Navbar  = ()=>{
    return (
        <>
            <div class="h-48 " style={{backgroundColor: "#e5e8eb", height:"70px"}}>
               <nav class=" px-3 " >
                    <div class="d-flex align-items-center pb-10 justify-content-between pt-2">
                    
                    <Link to="/">
                        <div>
                            <a className="navbar-brand" href="/">
                                <img src={Logo} alt="logo" />
                            </a>
                        </div>
                    </Link>
                        <div class="d-flex align-items-center" >
                            <div class="d-flex gap-8" style={{gap:40}}>

                            <Link to="/video">

                            <button type="button" class="btn btn-outline-dark py-2">Video</button>

                            </Link>

                            <Link to="/audio">

                                <button type="button" class="btn btn-outline-dark py-2">Audio</button>

                            </Link>
                                
                            </div>
                            <div class="d-flex align-items-center" >

                                <a href="https://github.com/aryasoni98/AI-Interview">
                                <div class="d-flex px-5 align-items-center gap-3 border-2 border-light rounded-2">
                                    <FaGithub class="fs-1" />

                                    <div class="d-flex d-flex-col ">
                                        <div class="font-weight-bold  ">aryasoni98/ai-interview</div> 
                                    </div>

                                </div>
                                </a>
                            </div>
                            <div className="d-flex align-items-center">
                                <a href="https://www.producthunt.com/posts/ai-interview-system?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ai-interview-system" target="_blank">
                                <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=322838&theme=light" alt="AI Interview System - Test & Developed Your Interview Skills | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" />
                                </a>
                            </div>
                        </div>
                    </div>
               </nav>
            </div>
        </>
    );
}

export default Navbar;
