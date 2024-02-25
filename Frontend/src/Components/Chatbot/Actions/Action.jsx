import React from 'react';
import "../Chatbot.css"

const Action = () => {
  return (
    <div className='bg-white rounded-xl box1 w-[550px] h-[80vh]'>
      <div className='flex flex-row justify-between items-center'>
        <h1 className='p-4 text-xl font-normal'>Avatar</h1>
        <button className='bg-red-500 mr-4 px-8 h-10 rounded-xl hover:bg-red-400 font-light text-white'>Deploy</button>
      </div>

      <hr />
    </div>
  )
}

export default Action