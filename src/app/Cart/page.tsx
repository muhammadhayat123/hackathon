import React from 'react';
import Navbar from '../Components/Navbar';
import Image from 'next/image';
import Footer from '../Components/Footer';
const Page = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Image
          src="/ccart.png" // Correct path to your image in the public folder
          alt="ccart"
          width={1440} // Adjust dimensions as per your image
          height={316}
          className=""
        />
      </div>
      <div>
        <Image
          src="/cart2.png" // Correct path to your image in the public folder
          alt="cart2"
          width={1440} // Adjust dimensions as per your image
          height={416}
          className=""
        />
      </div>
      <div>
        <Image
          src="/sfree.png" // Correct path to your image in the public folder
          alt="sfree"
          width={1440} // Adjust dimensions as per your image
          height={316}
          className=""
        />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
