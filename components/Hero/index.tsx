import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="w-full flex items-center justify-center p-5 pt-20 bg-[#272652]">
      <Image
        src="/images/hero/amaconHeader.jpg"
        alt="Hero"
        width={1200} 
        height={600} 
        className="rounded-lg w-full h-auto"
        style={{ objectFit: 'contain' }}
        priority
      />
    </section>
  );
};

export default Hero;