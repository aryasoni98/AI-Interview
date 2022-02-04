import React from "react";
import {Link} from "react-router-dom"
import Navbar from "../components/navbar.component";
import Footer from "../components/footer.component";

import SideBot from "../assets/images/sideBot.svg";

const Video= ()=>{
    return (
        <>
        <Navbar/>
            <div className="my-16">
                <div className="d-flex  mb-16">
                    <div className="w-full p-10 m-16 " style={{ margin:"150px 100px 220px 220px "}} >
                        <h1 className="display-2  font-link "style={{fontWeight:"bolder", marginBottom:"60px"}}>video interview.</h1>
                       
                        <div className="fs-4 mb-16" style={{width:"60%"}}>
                            <p>Use the video interview simulator  and get a feedback on how our 
                                algorithm interprets your facial emotions compared to other candidates.
                            </p>
                            <br />
                            <p className="" style={{fontWeight:"lighter"}}>
                                You will be provided a feedback on your facial emotions such as 
                            </p>
                            <br />
                            <p style={{fontWeight:"lighter"}}>Anger | Happiness | Fear | Sadness | Surprise | Disgust</p>
                        </div>
                        <br />
                        <br />

                        {/* <div className="d-flex gap-10">
                            <Link to="/interview/a">
                            <button className="bg-black font-light px-5 py-2 rounded-2">Interview</button>
                            </Link>
                            <button classNa
                            me="border-2 border-black font-dark px-6 py-2 rounded-2">Result</button>
                        </div> */}

                        <div className=" gap-2" >
                            <Link to="/interview/v" >
                                <button type="button" class="btn btn-dark px-3 mr-4 py-2" style={{margin:"20px"}}>Interview</button>
                                {/* <button type="button" class="btn btn-outline-dark py-2">Result</button> */}
                            </Link>

                            <Link to="/video_dash" >
                                <button type="button" class="btn btn-outline-dark py-2">Result</button>
                            </Link>

                        </div>

                    </div>
                    
                    <div >
                        <div class="sideBot-img"  className="w-96 h-full">
                            <img src={SideBot} className="h-full w-full " alt="Side Bot" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Video;