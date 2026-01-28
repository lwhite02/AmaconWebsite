import React from "react";
import Image from "next/image";

const ServicesInfrasctructure = () => {
  const imageUrl = "/images/services/serviceFactory2.webp"; // Add your image URL here
  const imageUrl2 = "/images/services/serviceFactory3.webp"; // Add your image URL here

  return (
    <>
      <section className="relative z-10 overflow-hidden py-20 md:py-28">
        <div className="container relative z-10 mx-auto flex items-center justify-center text-center md:text-left">
          <div className="max-w-xl text-center">
            <h3 className="pb-2 pt-20 text-lg font-bold text-[#017dc5]">
              <span className="mt-20 border-b-2 border-[#017dc5] text-center ">
                Our Experience
              </span>
            </h3>
            <p className="mb-5 text-5xl font-bold text-white">
              Build world-class Drawing for a sustainable future. Get a free
              consultation today!
            </p>
          </div>
        </div>

        <div className="md:w-2/2 absolute inset-0 z-0 pb-10">
          {/* Background Image */}
          <Image
            src={imageUrl}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            priority={true} // Optimize loading by giving priority
            className="shadow-md"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
      </section>

      <section className="py-2 md:py-2 lg:py-10">
        <div className="container mx-auto flex items-center justify-center">
          <div className="text-center md:w-1/2 md:text-left">
            {/* Text content below the image */}
            <h3 className="pb-2 pt-2 text-lg font-bold text-[#017dc5]">
              <span className="border-b-2 border-[#61AE4A]"></span>
            </h3>
            <p className="text-5xl font-bold">
              Innovating Tomorrow: Revolutionising Infrastructure Development
            </p>
            {/* Additional text below the heading */}
            <p className="mt-10 text-base text-[#9E9E9E]">
              iControl Consulting (Pty) Ltd plays a pivotal role in ensuring the
              precision and compliance of equipment leaving manufacturers&apos;
              premises. Our dedicated personnel conduct rigorous independent
              testing of equipment across various countries globally, including
              Australia, Switzerland, Poland, Spain, Brazil, China, India,
              Malaysia, Turkey, Taiwan, and South Africa
            </p>
            <p className="mt-5 text-base text-[#9E9E9E]">
              The equipment we inspect covers a broad spectrum, including medium
              and low voltage switchgear, transformers with capacities of up to
              45MVA (110kV/15kV), recta-formers up to 9.2 MVA, medium voltage
              (MV) motors with capacities of up to 5MW, and MV variable speed
              drives, including dual drives of 2 x 6.8MW and 2 x 4.5MW.
              Additionally, our expertise extends to MV slip energy recovery
              drives, resistance choppers, and ELRS systems for motors with
              capacities of up to 7MW{" "}
            </p>
            <p className="mt-5 text-base text-[#9E9E9E]">
              Our meticulous testing procedures and global reach ensure that
              equipment meets stringent design standards and complies with
              specifications, guaranteeing optimal performance and reliability
              in diverse operational environments.
            </p>
          </div>

          <div className="flex justify-center md:w-1/2">
            <Image
              src={imageUrl2}
              alt="Background Image"
              width={300}
              height={400}
              priority={true} // Optimize loading by giving priority
              className="shadow-md"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesInfrasctructure;
