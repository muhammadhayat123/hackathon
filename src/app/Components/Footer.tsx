import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
        
        <div>
          <Image
            src="/footer.png" // Path to your image
            alt="footer"
            width={1440} // Adjust dimensions as per your image
            height={672}
            className=""
          />
        </div>
    </div>
  )
}

export default Footer
