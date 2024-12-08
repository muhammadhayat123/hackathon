import React from 'react';
import Navbar from './Components/Navbar';
import Image from 'next/image';
import Footer from './Components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-center  bg-[#FBEBB5] px-10">
        {/* Content Section */}
        <div className="text-black space-y-4">
          <h1 className="text-4xl font-bold">Rocket Single</h1>
          <h1 className="text-4xl font-bold">Seater</h1>
          <p className="text-lg">Experience the ultimate comfort with our premium single-seater sofa. Perfect for modern interiors.</p>
          <button className="px-6 py-2 bg-black text-white font-semibold rounded hover:bg-gray-700">
            Shop Now
          </button>
        </div>

        {/* Image Section */}
        <div>
          <Image
            src="/sofa.png" // Path to your image
            alt="sofa"
            width={853} // Adjust dimensions as per your image
            height={1000}
            className=""
          />
        </div>
      </div>
      <div>
          <Image
            src="/table.png" // Path to your image
            alt="table"
            width={1440} // Adjust dimensions as per your image
            height={672}
            className=""
          />
        </div>
        <div>
          <Image
            src="/chair.png" // Path to your image
            alt="chair"
            width={1440} // Adjust dimensions as per your image
            height={672}
            className=""
          />
        </div>
        <div>
          <Image
            src="/asofa.png" // Path to your image
            alt="asofa"
            width={1440} // Adjust dimensions as per your image
            height={672}
            className=""
          />
        </div>
        <div>
          <Image
            src="/laptop.png" // Path to your image
            alt="laptop"
            width={1440} // Adjust dimensions as per your image
            height={672}
            className=""
          />
        </div>
        <div className="relative">
  {/* Background Image */}
  <Image
    src="/our.png" // Path to your background image
    alt="our"
    width={1440} // Adjust dimensions as per your image
    height={672}
    className=""
  />

  {/* Overlay Image */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <Image
      src="/our2.png" // Path to your overlay image
      alt="our"
      width={454} // Adjust dimensions as per your image
      height={202}
      className=""
    />
  </div>
</div>

        <div>
          
        </div>
        <Footer />
    </div>
  
  );
};

export default Home;
