import React from 'react'

import brain from './brain.png' 
import Tilt from 'react-parallax-tilt'

const Logo = () => {
  return (
    <div className='w-24 ml-10 px-2 py-2 rounded' style={{boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}}>
      <Tilt>
        <div>
          <img src={brain} alt="" />
        </div>
      </Tilt>
    </div>
  )
}

export default Logo