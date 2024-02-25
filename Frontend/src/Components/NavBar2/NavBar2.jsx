import React from 'react';
import { MdOutlineInsights } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import "./Navbar2.css"

const NavBar2 = () => {
  return (
    <div className='z-10 w-full fixed top-0 right-0 gap-x-8 bg-white text-white flex justify-end h-10 items-center p-8' id="navbar2">
        <MdOutlineInsights className='text-3xl text-[#4338ca] cursor-pointer hover:text-[#7970ff]'/> 
        <div className='flex gap-x-3 items-center cursor-pointer tracking-wider text-black'>Login <IoIosArrowDown/> </div>
    </div>
  )
}

export default NavBar2