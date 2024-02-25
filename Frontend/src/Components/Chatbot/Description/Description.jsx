import React from 'react';
import "../Chatbot.css"
import "../../DashBoard/DashBoard.css";
import { IoMdCreate } from "react-icons/io";
import { Link } from "react-router-dom";

const Description = () => {

  return (
    <div className='flex flex-col bg-white rounded-xl box1 w-[550px] h-[80vh]'>
      <div className='flex flex-row justify-between items-center'>
        <h1 className='p-4 text-xl font-normal'>ChatBot Description</h1>
        <button className='bg-red-500 mr-4 px-8 h-10 rounded-xl hover:bg-red-400 font-light text-white'>Deploy</button>
      </div>
        
      <hr></hr>

      <div className='flex flex-col p-4 gap-2'>
        <label htmlFor="" className='font-light text-sm'>ChatBot's Name</label>
        <div className='flex flex-row justify-between items-center'>
          <input type="text" className='border border-slate-400 border-solid w-2/4 h-10 p-4 rounded-xl' required/>
          <Link to="" className="button text-white" >
                  <div className="flex items-center gap-x-2" >
                  <IoMdCreate />Create chatbot
                  </div>
              <div class="hoverEffect">
            <div></div>
          </div>
        </Link>
        </div>
      </div>

      <div className='flex flex-col p-4  gap-2'>
        <label htmlFor="" className='font-light text-sm'>ChatBot's Backstory</label>
        <textarea name="" id="" cols="30" rows="10" className='border border-slate-400 border-solid h-[47.5vh] p-4 rounded-xl' placeholder='Please enter you context here' required></textarea>
      </div>

    </div>
  )
}

export default Description