import React from "react";
import Image from "next/image";

const ServicesConstruction = () => {
 
  return (
    <>
      <section className="relative z-10 overflow-hidden py-20 md:py-28">
        <div className="container relative z-10 mx-auto flex items-center justify-center pb-20 text-center md:text-left">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="mt-20 py-20 pb-2 text-lg font-bold text-[#017dc5]">
              <span className="mt-20 border-b-2 border-[#017dc5]">
              Construction Management and Commisioning
              </span>
            </h3>
            <p className="mb-5 text-5xl font-bold text-white">
             Construction & Commissioning Solutions
            </p>
          </div>
        </div>
        
        
        <div className="md:w-2/2 absolute inset-0 z-0 pt-20 pb-2">
          {/* Background Image */}
          <div className="relative h-full w-full pt-20">
            <img
              src="/images/services/serviceConstruction4.webp" // Replace with your image path
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
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        </div>
      </section>

      <section id="about" className="pt-10 md:pt-5 lg:pt-5">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <p className="text-5xl font-bold">
                Delivering Excellence in Every Project
                </p>
                <div className="wow fadeInUp mb-12 mt-5 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                  <p className="mb-7 text-base text-[#9E9E9E]">
                  iControl Consulting (Pty) Ltd stands as a  provider of
              comprehensive construction and commissioning solutions in the
              realm of electrical and instrumentation engineering. Our
              services encompass every aspect of project
              execution, from initial planning to final implementation. We work
              closely with project owners, complementing their teams with our
              expertise to efficiently manage all electrical, instrumentation,
              and commissioning activities. One of our core competencies lies in
              independent testing, a crucial step in ensuring that equipment
              leaving a manufacturer&apos;s premises meets stringent quality and
              performance standards.
              
                </p>
                  <p className="text-base text-[#9E9E9E]">
                  Our testing capabilities cover a wide range of equipment,
              including medium and low-voltage switchgear, transformers of up to
              45MVA with ratings of 110kV/15kV, recta-formers up to 9.2 MVA, MV
              motors with capacities up to 5MW, and MV variable speed drives,
              including dual-drive configurations of 2 x 6.8MW and 2 x 4.5MW.
              Additionally, we specialize in MV slip energy recovery drives,
              resistance choppers, and ELRS for motors up to 7MW. Furthermore,
              our construction and commissioning services are unparalleled in
              their depth and breadth.
               </p>
                </div>
              </div>
              <div className="mt-10 md:mt-0 md:w-1/2 md:pl-10 flex justify-center">
                <div className="w-full max-w-md">
                  <div className="mb-4">
                    <img
                      src="/images/services/img2.webp" // Replace with fallback image path
                      alt="Infrastructure Image"
                      className="shadow-xl w-full h-auto max-w-md "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesConstruction;
