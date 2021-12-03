import React from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const InterviewType = (props)=>{
    return (
        <>
            <div>
                <Navbar />
                {props.children}
                <Footer />
            </div>
        </>
    );
}

export default InterviewType;