import React from "react";
import {GiPencil} from "react-icons/gi";
import {FaCode} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {RiVidiconLine} from "react-icons/ri";
import {FiThumbsUp} from "react-icons/fi";
import {MdOutlineCopyright} from "react-icons/md";


const Footer = ()=>{
    return (
        <>
            <div className="d-flex flex-column px-3  align-items-center font-linkk" style={{backgroundColor : "#dadada"}}><br />

                <div className="h-8 fs-2">Contact Us!</div>
                <div>Reach out to us on Github, or join us in the chat room. </div>
                <br />

                <div className="d-flex align-items-center gap-4">
                <div className="d-flex align-items-center gap-1"><GiPencil className="fs-2" /><a href="#" target="_blank">Edit this page</a></div> <div className="d-flex align-items-center gap-1"> <FaCode className="fs-2" /><a href="#"  text-dark target="_blank">View Source Code</a></div></div>

                <div className="d-flex align-items-center gap-4 mb-4">
                    <div className="d-flex align-items-center gap-1"><FaGithub className="fs-2" /><a href="https://github.com/aryasoni98/AI-Interview" target="_blank" text-dark >AI Interview</a></div>
                    <div className="d-flex align-items-center gap-1"><RiVidiconLine className="fs-2" /><a href="https://github.com/aryasoni98/AI-Interview/discussions" target="_blank" text-dark >Join our Discussions</a></div>
                    <div className="d-flex align-items-center gap-1"><FiThumbsUp className="fs-2" /><a href="https://github.com/aryasoni98/AI-Interview/blob/master/CODE_OF_CONDUCT.md" target="_blank" text-dark >Code of Conduct</a></div>
                </div>
                
                <div className="d-flex align-items-center gap-1"><MdOutlineCopyright className="fs-2" />2021 AI Interview.All rights reserved.</div><br />
            </div>
        </>
    );
}

export default Footer;