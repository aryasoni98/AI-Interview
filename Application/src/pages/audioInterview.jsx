import React from "react";
import Videorecorder from "react-video-recorder";
const AudioInterview = () => {
  return (
    <>
      <div className="flex flex-col items-center my-2 px-52 ">
        <h1 className="text-7xl font-link font-semibold mb-16">
          audio interview .
        </h1>

        <div className="w-full h-full flex gap-12">
          <div className="w-full h-full ">
            <div style={{ height: "550px" }} className="w-full h-full ">
              <Videorecorder className="w-full h-full" />
            </div>
            <div className="flex m-4 justify-evenly	">
              <button className="border-2 m-4 text-white bg-blue-900 px-8 py-2 border-blue text-lg font-medium rounded-md">
                Start
              </button>

              <button className="border-2 m-4 px-5 text-blue py-2 border-black text-lg font-medium rounded-md">
                Stop
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-5 ml-12 w-2/5 text-xl font-regular">
            <div className="bg-gray-300 h-1/4 w-full rounded-md p-4">
              You will have 15 mins to answer the questions mentioned above.
            </div>
            <div className="bg-gray-300 h-3/4 w-full rounded-md p-4">
              Qus 1
              <br />
              Qus 2
              <br />
              Qus 3
              <br />
            </div>
            <div className="flex m-4 justify-evenly	">
              <button className="border-2 m-4 px-5 text-blue py-2 border-black text-lg font-medium rounded-md">
                Result
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioInterview;
