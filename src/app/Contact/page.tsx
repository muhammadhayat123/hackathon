import React from 'react'
import Navbar from '../Components/Navbar'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <Navbar />
        <div>
          <Image
            src="/contact.png" // Path to your image
            alt="contact"
            width={1440} // Adjust dimensions as per your image
            height={316}
            className=""
          />
        </div>
        <div>
          <Image
            src="/cget.png" // Path to your image
            alt="cget"
            width={1440} // Adjust dimensions as per your image
            height={316}
            className=""
          />
        </div>
        <div>
          <Image
            src="/sfree.png" // Path to your image
            alt="sfree"
            width={1440} // Adjust dimensions as per your image
            height={300}
            className=""
          />
        </div>
      
    </div>
  )
}

export default page
