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
            src="/shop.png" // Path to your image
            alt="shop"
            width={1440} // Adjust dimensions as per your image
            height={672}
            className=""
          />
        </div>
        <div>
          <Image
            src="/sfilter.png" // Path to your image
            alt="sfilter"
            width={1440} // Adjust dimensions as per your image
            height={100}
            className=""
          />
        </div>
        <div>
          <Image
            src="/stable.png" // Path to your image
            alt="stable"
            width={1440} // Adjust dimensions as per your image
            height={672}
            className=""
          />
        </div>
        <div>
          <Image
            src="/sfree.png" // Path to your image
            alt="sfree"
            width={1440} // Adjust dimensions as per your image
            height={672}
            className=""
          />
        </div>
        <Footer />
        
      
    </div>
  )
}

export default page
