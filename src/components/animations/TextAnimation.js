import React from 'react'
import Typewriter from 'typewriter-effect';
import './textanimation.css';
const TextAnimation = () => {
  return (
    <div>
      <h1 className='text-animation'>
        <Typewriter
        options={{
            autoStart:true,
            loop:true,
            delay:100,
            strings:["Hi, Prasanna here"]

        }}
        />
      </h1>
    </div>
  )
}

export default TextAnimation
