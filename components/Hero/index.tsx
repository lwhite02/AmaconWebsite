
import Link from 'next/link';
import Image from 'next/image'; // Import Image component from next/image

import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero/amaconHeader.jpg')",
      }}
    >
      {/* Optional: Add your hero content here */}
      {/* <div className="z-10 text-center">
        <h1 className="text-5xl font-bold text-white">Your Vision<br/>Our Expertise<br/>Unparalleled Results</h1>
      </div> */}
    </section>
  );
};

export default Hero;


