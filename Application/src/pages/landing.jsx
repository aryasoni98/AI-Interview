import React from "react";
import { Link } from "react-router-dom";

const Landing = ()=>{
    return (
        <>
            <div className="py-6"> 
                <br/>
                <div className="flex flex-col font-link items-center my-3">
                    <h1 className="text-7xl font-semibold mb-16">AI Interview Test</h1>
                   

                    <p className="text-2xl mb-16">Test  &  Develope  Your  Interview   Skills</p>
            
                    <button className="border-2 px-4 py-2 mb-16 border-black text-lg font-extralight rounded-md"><a href="/video" class="default-btn bg-main">Get Start</a></button>
              
                    <p className="text-2xl mb-12">Test  &  Develope  Your  Interview   Skills</p>

                    <Link to="/video">
                    <button className="border-2 px-4 py-2 mb-16 border-black text-lg font-extralight rounded-md"><a class="default-btn bg-main">Get Start</a></button>
                    </Link>

                </div>  

                <div>
                    <div class="landing-img">
                        <img src="../images/landing.svg" class="w-full h-full" alt="Landing" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing;