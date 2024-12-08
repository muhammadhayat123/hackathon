import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
         <div>
          <Image
            src="/cartsidebar.png" // Path to your image
            alt="cartsidebar"
            width={1440} // Adjust dimensions as per your image
            height={3107}
            className=""
          />
        </div>
      
    </div>
  )
}

export default page
