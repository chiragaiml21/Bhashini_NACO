import React from 'react';
import "../Chatbot.css"
import Deploy from '../Deploy_button/Deploy'

const Action = () => {
  return (
    <div className='bg-white rounded-xl box1 w-[550px] h-[80vh]'>
      <div className='flex flex-row justify-between items-center'>
        <h1 className='p-4 text-xl font-normal'>Avatar</h1>
        <Deploy/>
      </div>

      <hr />
    </div>
  )
}

export default Action