import React  from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

//HOC

import Landing from "../src/pages/landing.pages";
import Audio from "./pages/audio";
import Video from "./pages/video";
import VideoInterview from "./pages/videoInterview";
import AudioInterview from "./pages/audioInterview";

const App=()=> {
  return (
    <>
        <Router>
        <div>
            
            <Route path="/" exact component={Landing} />
            <Route path="/audio" exact component={Audio} />
            <Route path="/video" exact component={Video} />
            <Route path="/interview/v" exact component={VideoInterview} /> {/* Should fix this link */}
            <Route path="/interview/a" exact component={AudioInterview} /> {/* Should fix this link */}
        </div>
        </Router>

      {/* <InterviewType>
      <Landing/>
      </InterviewType>
      <Footer/> */}
      {/* <DefaultHoc path="/" exact component={Landing} /> */}
      {/* <DefaultHoc path="/audio" exact component={Audio} />
      <DefaultHoc path="/video" exact component={Video} />

      <DefaultHoc path="/interview/v" exact component={VideoInterview} />
      <DefaultHoc path="/interview/a" exact component={AudioInterview} /> */}
      
    </>
  );
}

export default App;
