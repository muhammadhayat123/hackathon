import React from 'react'
import Image from 'next/image'
import Navbar from '../Components/Navbar'

const page = () => {
  return (
    <div>
        <div>
          <Navbar/>
          <Image
            src="/about.png" // Path to your image
            alt="about"
            width={1440} // Adjust dimensions as per your image
            height={672}
            className=""
          />
        </div>
      
    </div>
  )
}

export default page
