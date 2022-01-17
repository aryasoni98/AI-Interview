import React,{useState,useEffect} from "react";
import Navbar from "../components/navbar.component";
import Footer from "../components/footer.component";
import { Audioo } from "../components/audiorecorder";

const AudioInterview = () => {
  const [playing, setPlaying] = useState(false);

  const HEIGHT = 600;
  const WIDTH = 1200;

  const startVideo = () => {
    setPlaying(true);
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName("app__videoFeed")[0];
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.error(err)
    );
  };

  const stopVideo = () => {
    setPlaying(false);
    let video = document.getElementsByClassName("app__videoFeed")[0];
    video.srcObject.getTracks()[0].stop();
  };

  return (
    <>
    <Navbar/>
      <div className="d-flex flex-column align-items-center my-2 px-52 ">
        <h1 className="display-1 font-link font-weight-bold " style={{fontWeight:"bolder", marginBottom:"30px"}}>
          audio interview .
        </h1>

        <div className="w-full h-full d-flex " style={{gap:120 ,}}>
          <div className="w-full h-full " style={{marginLeft:"75px"}}>

            <div className="app">
              <div className="app__container bg-dark p-2" style={{height:"600px", width:"900px", marginBottom:"60px"  }}>
              <div style={{ marginTop:"240px",marginLeft:"120px"  }}>

                <Audioo />
              </div>
              </div>
            </div>

            {/* <div className="d-flex m-4 justify-evenly	">
              <button className="border-2 m-4 text-white bg-blue-900 px-8 py-2 border-blue fs-2 font-medium rounded-2">
                Start
              </button>
              <button className="border-2 m-4 px-5 text-blue py-2 border-black fs-2 font-medium rounded-2">
                Stop
              </button> */}
            {/* </div> */}
          </div>

        <div className="d-flex flex-column ml-12 text-xl font-regular"style={{marginTop:"45px" ,gap:24, height:"100%"}}>
            <div className="w-full rounded-2 fs-3 p-2 ml-4" style={{backgroundColor:"lightgrey",height:"100px",width:"500px"}}>
              You will have 15 mins to answer the questions mentioned above.
            </div>
            <div className=" rounded-2 p-4 fs-2" style={{backgroundColor:"lightgrey",height:"450px",width:"500px"}}>
              Qus 1
              <br />
              Qus 2
              <br />
              Qus 3
              <br />
            </div>
            <div className="d-flex  justify-evenly pt-5	"style={{marginBottom:"40px"}}>
              <button className="border-2  px-5 text-blue py-2 border-black fs-4 font-medium rounded-2" >
                Result
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