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
            <div className="flex flex-col px-3 mb-4 items-center font-linkk" style={{backgroundColor : "#dadada"}}><br />

                <div className="h-8 text-xl">Contact Us!</div>
                <div>Reach out to us on Github, or join us in the chat room. </div>
                <br />

                <div className="flex items-center gap-4">
                <div className="flex items-center gap-1"><GiPencil className="text-2xl" /><a href="#" target="_blank">Edit this page</a></div> <div className="flex items-center gap-1"> <FaCode className="font-bold" /><a href="#" target="_blank">View Source Code</a></div></div>

                <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1"><FaGithub className="text-2xl" /><a href="https://github.com/aryasoni98/AI-Interview" target="_blank">AI Interview</a></div>
                    <div className="flex items-center gap-1"><RiVidiconLine className="text-2xl" /><a href="https://github.com/aryasoni98/AI-Interview/discussions" target="_blank">Join our Discussions</a></div>
                    <div className="flex items-center gap-1"><FiThumbsUp className="text-2xl" /><a href="https://github.com/aryasoni98/AI-Interview/blob/master/CODE_OF_CONDUCT.md" target="_blank">Code of Conduct</a></div>
                </div>
                
                <div className="flex items-center gap-1"><MdOutlineCopyright className="text-2xl" />2021 AI Interview.All rights reserved.</div><br />
            </div>
        </>
    );
}

export default Footer;