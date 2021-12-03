import React from "react";
import {Route} from "react-router-dom"

import InterviewType from "../layout/interviewType";

const DefaultHoc =({component:Component,...rest})=>{
    return (
        <> 
            <Route {...rest} component={()=>{
                return (
                    <>
                        <InterviewType>
                            <Component />
                        </InterviewType>
                    </>
                );
            }} />
        </>
    
    );
}

export default DefaultHoc;