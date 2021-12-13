import React from "react";
import {Link} from "react-router-dom"

const Audio= ()=>{
    return (
        <>
            <div>
                <div className="flex">
                    <div className="w-full ml-32 p-10 m-16 ">
                        <h1 className="text-7xl mb-16 font-semibold font-link ">audio interview.</h1>
                       
                        <div className="w-3/5 text-xl mb-12">
                            <p>Use the audio interview simulator  and get a feedback on how our 
                                algorithm interprets your facial emotions compared to other candidates.
                            </p>
                            <br />
                            <p className="font-extralight">
                                You will be provided a feedback on your facial emotions such as 
                            </p>
                            <br />
                            <p className="font-extralight">Anger | Happiness | Fear | Sadness | Surprise | Disgust</p>
                        </div>
                        <br />
                        <div className="flex gap-10">
                            <Link to="/interview/a">
                            <button className="bg-black text-white px-5 py-2 rounded-md">Interview</button>
                            </Link>
                            <button className="border-2 border-black text-balck px-6 py-2 rounded-md">Result</button>
                        </div>
                    </div>
                    
                    <div >
                        <div class="sideBot-img"  className="w-96 h-full">
                            <img src="../images/sideBot.svg" className="h-full w-full " alt="Side Bot" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Audio;
