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
            src="/s1.png" // Path to your image
            alt="s1"
            width={1440} // Adjust dimensions as per your image
            height={100}
            className=""
          />
        </div>
        <div>
          <Image
            src="/s2.png" // Path to your image
            alt="s2"
            width={1440} // Adjust dimensions as per your image
            height={820}
            className=""
          />
        </div>
        <div>
          <Image
            src="/s3.png" // Path to your image
            alt="s3"
            width={1440} // Adjust dimensions as per your image
            height={744}
            className=""
          />
        </div>
        <div>
          <Image
            src="/s4.png" // Path to your image
            alt="s4"
            width={1440} // Adjust dimensions as per your image
            height={777}
            className=""
          />
        </div>
        <Footer />
      
    </div>
  )
}

export default page
