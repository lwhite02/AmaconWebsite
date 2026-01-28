import React from "react";
import Image from "next/image";

const ServicesInfrasctructure = () => {
  const imageUrl = "@/images/experience/experienceInternational.webp"; // Add your image URL here
  const imageUrl2 = "@/images/services/serviceFactory3.webp"; // Add your image URL here

  return (
    <>
      <section className="relative z-10 overflow-hidden py-20 md:py-28">
        <div className="container relative z-10 mx-auto flex items-center justify-center pb-20 text-center md:text-left">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="mt-20 py-20 pb-2 text-lg font-bold text-[#017dc5]">
              <span className="mt-20 border-b-2 border-[#017dc5]">
                Our Mineral ProcessingExperience
              </span>
            </h3>
            <p className="mb-5 text-5xl font-bold text-white">
              From Mine to Market: Your Trusted Partner in Mineral Processing
            </p>
          </div>
        </div>

        <div className="md:w-2/2 absolute inset-0 z-0 pb-10">
          {/* Background Image */}

          <img
            src="/images/experience/experienceGeneral3.webp" // Replace with your image path
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
      </section>

      <section id="about" className="pt-10 md:pt-5 lg:pt-5">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <p className="text-5xl font-bold">
                  Comprehensive Mineral Processing Expertise
                </p>
                <div
                  className="wow fadeInUp mb-12 mt-5 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <p className="mb-7 text-base text-[#9E9E9E]">
                    We specialise in conveyors, crushing, and screening systems,
                    which are integral to efficient material handling and size
                    reduction processes in mining operations. Our expertise
                    extends to milling and flotation plants, where we work to
                    optimize the extraction of valuable minerals using
                    well-developed processing techniques. Additionally, we
                    manage flocculent preparation and dosing facilities to
                    enhance solid-liquid separation in mineral slurries. Our
                    capabilities also include operating elution plants,
                    streamlining the extraction of precious metals from loaded
                    carbon or solution through effective processing methods.{" "}
                  </p>

                  <p className="text-base text-[#9E9E9E]">
                    We have extensive experience with large smelter
                    installations, including those with capacities up to 78MVA,
                    which supports the efficient smelting of ores to extract
                    metals. Our expertise covers a broad range of minerals,
                    including Gold, Platinum, Copper, Silver, Ferrochrome,
                    Chrome, and Zinc. With a deep understanding of the
                    processing requirements for each mineral, we are
                    well-equipped to address the unique challenges posed by
                    different mineral compositions. Our team is adept at
                    applying tailored solutions to ensure effective and
                    efficient processing across various mineral types.
                  </p>
                </div>
              </div>
              <div className="mt-10 flex justify-center md:mt-0 md:w-1/2 md:pl-10">
                <div className="w-full max-w-md">
                  <div className="mb-4">
                    <img
                      src="/images/experience/experienceGeneral2.webp" // Replace with fallback image path
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

export default ServicesInfrasctructure;
