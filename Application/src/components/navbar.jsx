import React from "react";
import {FaGithub, FaProductHunt} from "react-icons/fa";

import { Link } from "react-router-dom";

const Navbar  = ()=>{
    return (
        <>
            <div className="h-100 py-2" style={{backgroundColor: "#e5e8eb"}}>
               <nav className="px-3">
                    <div className="flex items-center justify-between">
                    <Link to="/">
                        <div>
                            <a class="navbar-brand">
                                <img src="../logo/logo.svg" alt="logo" />
                            </a>
                        </div>
                    </Link>
                        <div className="flex items-center gap-8">
                            <div className="flex gap-8">

                            <Link to="/video">

                                <h4 className="font-semibold text-xl">Video</h4>
                            </Link>

                            <Link to="/audio">

                                <h4 className="font-semibold text-xl">Audio</h4>
                            </Link>
                                
                            </div>
                            <div className="flex items-center" >

                                <a href="https://github.com/aryasoni98/AI-Interview">
                                <div className="flex px-5 items-center gap-3 border-2 border-gray-800 rounded-md">
                                    <FaGithub className="text-3xl" />

                                    <div className="flex flex-col ">
                                        <div className="font-medium text-base ">aryasoni98/ai-interview</div> 
                                    </div>

                                </div>
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
