import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { TbMessageChatbot } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // const [state, setstate] = useState(true);
  const [isactive1 , setisactive1] = useState(true);
  const [isactive2 , setisactive2] = useState(false);

  const handlestate = () => {
    // setstate(true);
    setisactive1(!isactive1);
    setisactive2(!isactive2);
  }

  const handlestate1 = () => {
    // setstate(false);
    setisactive1(!isactive1);
    setisactive2(!isactive2);
  }

  // className={` flex items-center space-x-4 cursor-pointer ${isactive2 ? "backdrop-blur-sm bg-white/20" : ""}  px-8 py-2 hover:backdrop-blur-md rounded-lg hover:bg-white/20`}

  return ( 
    <div className="z-50 fixed">
      <div className={`bg-[#0b0f19] text-white w-64  min-h-screen flex flex-col items-center `}>
        <h1 className="pt-8 text-3xl tracking-wider font-semibold">NACO </h1>
        <div className={`py-24 space-y-1 text-2xl  `}>
          <NavLink className={(navClass) =>
                        navClass.isActive
                          ? "flex items-center space-x-4 cursor-pointer px-14 py-2 backdrop-blur-md bg-white/20 rounded-lg hover:bg-white/20  text-white text-[16px] leading-7 font-[500]"
                          : "flex items-center space-x-4 cursor-pointer px-14 py-2 hover:backdrop-blur-md rounded-lg hover:bg-white/20 text-white text-[16px] leading-7 font-[500]"
                      } to="/" props={handlestate1} onClick={handlestate}>
            <MdDashboard/>
           {/* {
            state &&  <h1 className="text-lg">DashBoard</h1>
           } */}
           <h1 className="text-lg">DashBoard</h1>
          </NavLink>
          <NavLink className={(navClass) =>
                        navClass.isActive
                        ? "flex items-center space-x-4 cursor-pointer px-14 py-2 backdrop-blur-md bg-white/20 rounded-lg hover:bg-white/20  text-white text-[16px] leading-7 font-[500]"
                        : "flex items-center space-x-4 cursor-pointer px-14 py-2 hover:backdrop-blur-md rounded-lg hover:bg-white/20 text-white text-[16px] leading-7 font-[500]"
                      }  to="/chatbot"  onClick={handlestate1}>
            <TbMessageChatbot className="" />
            {/* {state && <h1 className="text-lg">Create Chatbot</h1>} */}
            <h1 className="text-lg">Chatbot</h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export  default Navbar ;
