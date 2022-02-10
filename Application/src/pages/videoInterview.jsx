import React from "react";
import Navbar from "../components/navbar.component";
import Footer from "../components/footer.component";

const VideoInterview = () => {
  //const [playing, setPlaying] = useState(false);

  const HEIGHT = 440;
  const WIDTH = 600;

  // const startVideo = () => {
  //   setPlaying(true);
  //   navigator.getUserMedia(
  //     {
  //       video: true,
  //     },
  //     (stream) => {
  //       let video = document.getElementsByClassName("app__videoFeed")[0];
  //       if (video) {
  //         video.srcObject = stream;
  //       }
  //     },
  //     (err) => console.error(err)
  //   );
  // };

  // const stopVideo = () => {
  //   setPlaying(false);
  //   let video = document.getElementsByClassName("app__videoFeed")[0];
  //   video.srcObject.getTracks()[0].stop();
  // };

  return (
    <>
    <Navbar/>
      <div className="d-flex flex-column align-items-center px-52 " style={{marginBottom:"30px"}}>
        <h1 className="display-2 font-link font-weight-bold mb-16" style={{fontWeight:"bolder",marginTop:"20px",marginBottom:"15px"}}>
          video interview .
        </h1>

        <div className="w-full h-full d-flex " style={{gap:120 ,}}>
          <div className="w-full h-full " style={{marginLeft:"100px"}}>

            <div className="app">
              <div className="app__container bg-dark p-2" style={{height:"440px", width:"600px", marginBottom:"20px"  }}>
                <video
                  height={HEIGHT}
                  width={WIDTH}
                  muted
                  autoPlay
                  className="app__videoFeed"
                  style={{paddingRight:"300px", paddingBottom:"20px"}}
                ></video>
              </div>
              <div className="app__input ">

                {/* {playing ? (
                  <button className="border-2  px-3 text-blue  border-black fs-4 font-medium rounded-2" onClick={stopVideo} style={{marginTop:"20px",marginBottom:"20px"}}>Stop</button>
                ) : (
                  <button className="border-2  px-3 text-blue border-black fs-4 font-medium rounded-2" onClick={startVideo} style={{marginTop:"20px",marginBottom:"20px"}}>Start</button>
                )} */}

                <form action="/video_interview" method="post">
                    <input type="submit" name="video" value="Start Recording" className="border-2  px-3 text-blue  border-black fs-4 font-medium rounded-2" style={{marginTop:"20px",marginBottom:"20px"}} />
                </form>

              </div>
            </div>

          </div>

        <div className="d-flex flex-column gap-4 ml-12 text-xl font-regular"style={{marginTop:"30px" , height:"100%"}}>
            <div className="w-full rounded-2 fs-4 p-2 ml-4" style={{backgroundColor:"lightgrey",height:"100px",width:"380px"}}>
              You will have 15 mins to answer the questions mentioned above.
            </div>
            <div className=" rounded-2 p-4 fs-4" style={{backgroundColor:"lightgrey",height:"310px",width:"380px"}}>
              Qus 1
              <br />
              Qus 2
              <br />
              Qus 3
              <br />
            </div>
            <div className="d-flex  justify-evenly mb-10 pt-5	">
              <button className="border-2  px-3 text-blue  border-black fs-4 font-medium rounded-2" style={{marginTop:"-25px"}}>
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
export default VideoInterview;
