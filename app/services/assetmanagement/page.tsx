import React from "react";
import Image from "next/image";

const ServicesAssets = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden py-20 md:py-28">
        <div className="container relative z-10 mx-auto flex items-center justify-center pb-20 text-center md:text-left">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="mt-20 py-20 pb-2 text-lg font-bold text-[#017dc5]">
              <span className="mt-20 border-b-2 border-[#017dc5]">
                Asset Management Service Division
              </span>
            </h3>
            <p className="mb-5 text-5xl font-bold text-white">
              Comprehensive Asset Management Services
            </p>
          </div>
        </div>

        <div className="md:w-2/2 absolute inset-0 z-0 pt-20 pb-2">
          {/* Background Image */}
          <div className="relative h-full w-full pt-20">
            <img
              src="/images/services/mcc.webp" // Replace with your image path
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
                  Power Quality & Thermal Analysis: Efficiency & Preventative
                  Maintenance
                </p>
                <div
                  className="wow fadeInUp mb-12 mt-5 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <p className="mb-7 text-base text-[#9E9E9E]">
                    iControl Consulting (Pty) Ltd offers a range of essential
                    services for modern industries. We specialise in testing and
                    maintenance of MV switchgear and protection systems,
                    upgrading MV protection relays, substation earthing
                    assessments, BTU testing, MV cable and transformer testing,
                    power quality measurements, and thermal infrared testing.
                    Our goal is to ensure optimal performance, minimize
                    downtime, and maximize operational efficiency.
                  </p>
                  <p className="text-base text-[#9E9E9E]">
                    Our comprehensive substation earthing assessments and BTU
                    testing ensure the safety and integrity of electrical
                    infrastructure, meeting regulatory requirements. We test
                    medium-voltage cables and transformers for insulation
                    integrity and fault detection. By analyzing power quality
                    and supply parameters, we optimize energy efficiency and
                    compliance. Using thermal infrared imaging, we perform
                    non-destructive testing to detect anomalies, hotspots, and
                    potential faults, preventing costly downtime and enhancing
                    safety.
                  </p>
                </div>
              </div>
              <div className="mt-10 flex justify-center md:mt-0 md:w-1/2 md:pl-10">
                <div className="w-full max-w-md">
                  <div className="mb-4">
                    <img
                      src="/images/services/serviceAsset4.webp" // Replace with fallback image path
                      alt="Infrastructure Image"
                      className="h-auto w-full max-w-md  shadow-xl"
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

export default ServicesAssets;
