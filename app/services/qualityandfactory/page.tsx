import React from "react";
import Image from "next/image";

const ServicesQualityandFactory = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden py-20 md:py-28">
        <div className="container relative z-10 mx-auto flex items-center justify-center pb-20 text-center md:text-left">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="mt-20 py-20 pb-2 text-lg font-bold text-[#017dc5]">
              <span className="mt-20 border-b-2 border-[#017dc5]">
                Factory Acceptance Testing and Quality Assurance
              </span>
            </h3>
            <p className="mb-5 text-5xl font-bold text-white">
              Factory Acceptance Testing &amp; Quality Assurance
            </p>
          </div>
        </div>

        <div className="md:w-2/2 absolute inset-0 z-0 pt-20 pb-2">
          {/* Background Image */}
          <div className="relative h-full w-full pt-20">
            <img
              src="/images/services/servicesFactory6.webp" // Replace with your image path
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
                  Achieving Excellence Through Testing
                </p>
                <div
                  className="wow fadeInUp mb-12 mt-5 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <p className="mb-7 text-base text-[#9E9E9E]">
                    Our inspection services cover a comprehensive range of
                    equipment, including medium and low voltage switchgear,
                    transformers with capacities up to 45MVA (110kV/15kV),
                    rectifiers up to 9.2 MVA, and medium voltage (MV) motors
                    with capacities up to 5MW. We also specialize in MV variable
                    speed drives, including dual drives of 2 x 6.8MW and 2 x
                    4.5MW, as well as MV slip energy recovery drives, resistance
                    choppers, and ELRS systems for motors up to 7MW.
                    Additionally, our expertise includes the testing of MV/LV
                    switchgear, cables, and earthing systems.
                  </p>
                  <p className="text-base text-[#9E9E9E]">
                    Our commitment to quality assurance is a major factor in our
                    success. We ensure that equipment leaving the manufacturers
                    premises is designed correctly and meets specified
                    requirements through rigorous independent testing. Our
                    processes focus on verifying compliance with industry
                    standards and client specifications, ensuring that all
                    equipment upholds the highest levels of quality and
                    reliability. We utilize advanced testing techniques,
                    including infra-red testing and partial discharge
                    measurements, to provide thorough and accurate assessments.
                  </p>
                </div>
              </div>
              <div className="mt-10 flex justify-center md:mt-0 md:w-1/2 md:pl-10">
                <div className="w-full max-w-md">
                  <div className="mb-4">
                    <img
                      src="
                      /images/services/serviceFactory5.webp" // Replace with fallback image path
                      alt="Infrastructure Image"
                      className="h-auto w-full max-w-md shadow-xl "
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

export default ServicesQualityandFactory;
