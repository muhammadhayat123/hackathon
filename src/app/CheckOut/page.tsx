import React from 'react'
import Navbar from '../Components/Navbar'
import Image from 'next/image'
import Footer from '../Components/Footer'

const page = () => {
  return (
    <div>
        <Navbar />
        <div>
          <Image
            src="/checkout.png" // Path to your image
            alt="checkout"
            width={1440} // Adjust dimensions as per your image
            height={316}
            className=""
          />
        </div>
        <div>
          <Image
            src="/checkout1.png" // Path to your image
            alt="checkout1"
            width={1440} // Adjust dimensions as per your image
            height={1829}
            className=""
          />
        </div>
        
        <Footer />
      
    </div>
  )
}

export default page
