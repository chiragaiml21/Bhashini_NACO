import React from 'react';
import { MdOutlineInsights } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const NavBar2 = () => {
  return (
    <div className='z-10 w-full fixed top-0 right-0 gap-x-8 bg-black text-white flex justify-end h-10 items-center p-8'>
        <MdOutlineInsights className='text-3xl'/> 
        <div className='flex gap-x-3 items-center cursor-pointer tracking-wider'>Login <IoIosArrowDown/> </div>
    </div>
  )
}

export default NavBar2