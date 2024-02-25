import React, { useRef, useState } from "react";
import { IoPerson } from "react-icons/io5";
import { FaRunning } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PiFinnTheHumanFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import "../Chatbot.css"

const Customization = () => {
  const navigate = useNavigate();
  const arr = [
    { logo: <IoPerson />, text: "Character Description", path: "" },
    { logo: <PiFinnTheHumanFill />, text: "Actions", path: "/actions" },
    { logo: <FaLanguage />, text: "Select Language", path: "/language" },
    
  ];

 

  return (
    <div className="w-[150px] h-[80vh] bg-white px-4 py-8 rounded-xl overflow-y-auto">
      <div className="flex flex-col items-start">

      {
        arr.map((ele,index)=>{
          return(
            <Link to={`/chatbot${ele.path}`}  className="flex  space-x-4 items-center px-2 py-4">
              <p className="text-2xl">{ele.logo}</p>
              <p className="">{ele.text}</p>
            </Link>
            )
          })
        }
        </div>
    </div>
  );
};

export default Customization;
