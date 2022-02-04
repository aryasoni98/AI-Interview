import React from "react";
import Navbar from "../components/navbar.component";
import Footer from "../components/footer.component";
import { Audioo } from "../components/audiorecorder";

const AudioInterview = () => {

  return (
    <>
    <Navbar/>
      <div className="d-flex flex-column align-items-center my-2 px-52 ">
        <h1 className="display-2 font-link font-weight-bold " style={{fontWeight:"bolder"}}>
          audio interview .
        </h1>

        <div className="w-full h-full d-flex " style={{gap:80 ,}}>
          <div className="w-full h-full " style={{marginLeft:"75px"}}>

            <div className="app">
              <div className="app__container bg-dark p-2" style={{height:"500px", width:"700px", marginBottom:"60px",marginLeft:"-50px"  }}>
              <div style={{ marginTop:"190px",marginLeft:"20px",  }}>

                <Audioo />
                
              </div>
              </div>
            </div>

            <div className="d-flex m-4 justify-evenly	">
              {/* <button className="border-2 m-4 text-white bg-blue-900 px-8 py-2 border-blue fs-2 font-medium rounded-2">
                Start
              </button> */}
              
              <form action="/audio_interview" method="post">
                    <input type="submit" name="audio" value="Start Audio" className="border-2 m-4 text-white bg-blue-900 px-8 py-2 border-blue fs-2 font-medium rounded-2" />
              </form>

              {/* <button className="border-2 m-4 px-5 text-blue py-2 border-black fs-2 font-medium rounded-2">
                Stop
              </button> */}
            </div>
            
          </div>

        <div className="d-flex flex-column ml-12 text-xl font-regular"style={{marginTop:"25px" ,gap:10, height:"100%"}}>
            <div className="w-full rounded-2 fs-4 p-2 ml-4" style={{backgroundColor:"lightgrey",height:"100px",width:"380px"}}>
              You will have 15 mins to answer the questions mentioned above.
            </div>
            <div className=" rounded-2 p-4 fs-4" style={{backgroundColor:"lightgrey",height:"370px",width:"380px"}}>
              Qus 1
              <br />
              Qus 2
              <br />
              Qus 3
              <br />
            </div>
            <div className="d-flex  justify-evenly pt-5	"style={{marginBottom:"40px"}}>
              <button className="border-2  px-3 text-blue border-black fs-4 font-medium rounded-2" >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default AudioInterview;