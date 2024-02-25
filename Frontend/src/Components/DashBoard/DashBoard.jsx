import React from "react";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import Character from "../Character/Character";
import "./DashBoard.css";
import img1 from "../Images/01.jpg"
import img2 from "../Images/02.jpg"
import img3 from "../Images/03.jpg";
import Navbar from "../NavBar/Navbar";
const DashBoard = () => {
  const obj = [
    {
      image:
        img1,
      title: "Chirag",
    },

    {
      image:
        img2,
      title: "Harsh",
    },
    {
      image:
        img3,
      title: "Divyanshu",
    },
    
    
  ];

  

  
  return (
    <div className="z-0 flex justify-center w-[83.5%]  flex-col  py-10 top-16 min-h-fit overflow-y-auto right-0 ml-[20%] absolute">
      <div className="flex justify-between items-center px-[105px]">
        <h1 className="text-xl trackig-wider font-semibold">Your ChatBots  </h1>
        <Link to="/chatbot" className="button text-white" >
                  <div className="flex items-center gap-x-2" >
                  Create chatbot  <GoPlus className="font-bold text-xl"/>
                  </div>
              <div class="hoverEffect">
            <div></div>
          </div>
        </Link>
      </div>
      <div className="flex pb-12 flex-wrap justify-start px-[98px] ml-2   overflow-y-auto gap-10  pt-12">
        {obj.map((Element) => {
          return <Character props={Element} />;
        })}
      </div>
    </div>
  );
};

export default DashBoard;
