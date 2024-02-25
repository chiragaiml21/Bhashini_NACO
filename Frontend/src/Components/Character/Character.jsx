import React from 'react';
import "./Character.css"

const Character = ({props}) => {
    console.log("props", props);
    
  return (
    <div className='w-[180px] h-52 bg-white text-black font-bold rounded-lg box-shadow effect'>
        <img className='w-48 h-44 rounded-lg' src={props.image} alt="img" />
        <h1 className='text-sm pt-1 tracking-wider pl-4'>{props.title}</h1>
    </div>
  )
}

export default Character