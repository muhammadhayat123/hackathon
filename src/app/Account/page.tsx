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
            src="/account.png" // Path to your image
            alt="account"
            width={1440} // Adjust dimensions as per your image
            height={316}
            className=""
          />
        </div>
        <div>
          <Image
            src="/login.png" // Path to your image
            alt="login"
            width={1440} // Adjust dimensions as per your image
            height={760}
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
        <Footer />
      
    </div>
  )
}

export default page
