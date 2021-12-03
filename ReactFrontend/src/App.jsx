import React from "react";


//HOC
import DefaultHoc from "./hoc/hoc";
//
import Landing from "../src/pages/landing";
import Audio from "./pages/audio";
import Video from "./pages/video";
import VideoInterview from "./pages/videoInterview";
import AudioInterview from "./pages/audioInterview";

const App=()=> {
  return (
    <>
      <DefaultHoc path="/" exact component={Landing} />
      <DefaultHoc path="/audio" exact component={Audio} />
      <DefaultHoc path="/video" exact component={Video} />

      <DefaultHoc path="/interview/v" exact component={VideoInterview} />
      <DefaultHoc path="/interview/a" exact component={AudioInterview} />
      
    </>
  );
}

export default App;
