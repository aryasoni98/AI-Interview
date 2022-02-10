import { ReactMic } from 'react-mic';
import React from 'react';

 
export class Audioo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
    }
  }
 
  startRecording = () => {
    this.setState({ record: true });
  }
 
  stopRecording = () => {
    this.setState({ record: false });
  }
 
  onData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }
 
  onStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob);
  }
 
  render() {
    return (
      <div style={{height:"400px", width:"10px"}}>
        <ReactMic
          
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#0000ff" />
          <div className='d-flex justify-content-evenly' style={{gap:40 , width:"70%",marginTop:"235px",marginLeft:"300px"}} >
            <button onClick={this.startRecording} type="button" className='border-2  px-3 text-blue border-black fs-4 font-medium rounded-2'>Start</button>
            <button onClick={this.stopRecording} type="button" className='border-2  px-3 text-blue  border-black fs-4 font-medium rounded-2'>Stop</button>

          </div>
      </div>
    );
  }
}