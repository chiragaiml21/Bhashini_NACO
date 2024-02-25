import React from "react";
import Description from "./Description/Description";
import Action from "./Actions/Action";
import Language from "./Language/Language";
import TestingBot from "./TestingBot/TestingBot";
import "./Chatbot.css";
import { useLocation } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { FaLanguage } from "react-icons/fa";
import { PiFinnTheHumanFill } from "react-icons/pi";
import { useState } from "react";

const Chatbot = () => {

  const arr = [
    { logo: <IoPerson />, text: "Character Description", path: "description" },
    { logo: <PiFinnTheHumanFill />, text: "Actions", path: "actions" },
    { logo: <FaLanguage />, text: "Select Language", path: "language" },
    
  ];


  const [content, setContent] = useState("description");
  const handleClick = (newContent) => {
    setContent(newContent);
  };
  return (
    <div className="flex h-[91.3%] justify-evenly   items-center w-[83.4%]  top-16 min-h-fit right-0  absolute ">
      <div className="w-[250px] h-[80vh] box bg-white px-4 py-8 rounded-xl overflow-y-auto">
      <div className="flex flex-col space-y-3 items-start">

      {
        arr.map((ele,index)=>{
          return(
            <div  className="flex  space-x-4 items-center px-2 py-4 cursor-pointer " onClick={() => handleClick(ele.path)}>
              <p className="text-2xl">{ele.logo}</p>
              <p className="">{ele.text}</p>
            </div>
            )
          })
        }
        </div>
    </div>
    <div>
      <div>
          {content === "description" && <div><Description/></div>}
          {content === "actions" && <div><Action/></div>}
          {content === "language" && <div> <Language/> </div>}
        </div>
    </div>
      <TestingBot/>
    </div>
  );
};

export default Chatbot;
