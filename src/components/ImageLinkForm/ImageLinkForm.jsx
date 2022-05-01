import React from 'react'
import Typewriter from 'typewriter-effect';

const ImageLinkForm = () => {

  return (
    <div className='flex flex-col items-center'>
      <p className='my-5 text-sm uppercase sm:text-3xl' style={{fontSize: '.8rem'}}>
        <Typewriter
          options={{
            strings: ['This magic brain will detect faces in your pictures.', 'give it a try!'],
            autoStart: true,
            loop: true,
          }}
        />
      </p>
      <div className='flex w-6/12 glass-input-box'>
        <div className='w-full flex flex-col shadow-xl py-4 px-4 rounded items-center'>
          <input type="text" className='w-full h-10 px-4 py-4 rounded-sm outline-0' />
          <button className='w-6/12 text-black bg-orange-100 mt-3 px-2 py-2 rounded uppercase drop-shadow-2xl' style={{fontFamily: 'equinox regular', fontWeight: 'bold', letterSpacing: '.5rem'}}>Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm