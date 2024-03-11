import React from 'react';
import "../Chatbot.css"

const TestingBot = () => {
  return (
    <div className={`w-[400px] h-[80vh] rounded-xl bg-white box1`}>
      <iframe src="http://127.0.0.1:7860" className='rounded-xl w-[400px] h-[80vh]'></iframe>
    </div>
  )
}

export default TestingBot