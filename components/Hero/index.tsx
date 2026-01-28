import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component from next/image

const Hero = () => {
  const imageUrl = "/images/hero/herobg.webp"; // Add your image URL here

  return (
    <>
       <section className="relative z-10 overflow-hidden py-20 md:py-28">
        <div className="container relative z-10 mx-auto flex items-center justify-center pb-20 text-center md:text-left">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="mt-20 py-20 pb-2 text-lg font-bold text-[#0484cc]">
              <span className="mt-20 border-b-2 border-[#0484cc]">
              Home
              </span>
            </h3>
            <p className="mb-5 text-5xl font-bold text-white">
            Your Vision <br/> 
            Our Expertise<br/> 
            Unparalleled Results
            </p>
            <p className="mb-20 text-base !leading-relaxed text-[#B1B1B1] dark:text-white sm:text-sm md:text-base text-left">
                 </p>
               
          </div>
        </div>
        
        
        <div className="md:w-2/2 absolute inset-0 z-0 pt-20 pb-2">
          {/* Background Image */}
          <div className="relative h-full w-full pt-20">
            <img
              src="/images/hero/herobg5.webp
              " // Replace with your image path
              alt="Background Image Fallback"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: "-1",
              }}
            />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-[black] opacity-50"></div>
        </div>
        </div>
      </section>

    </>
  );
};

export default Hero;
