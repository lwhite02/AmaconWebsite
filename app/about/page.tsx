import React from "react";
import Image from "next/image";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const AboutPage = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden py-20 md:py-28">
        <div className="container relative z-10 mx-auto flex items-center justify-center pb-20 text-center md:text-left">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="mt-20 py-20 pb-2 text-lg font-bold text-[#017dc5]">
              <span className="mt-20 border-b-2 border-[#017dc5]">
                About Us
              </span>
            </h3>
            <p className="mb-5 text-5xl font-bold text-white">
              Powering a Sustainable Future
            </p>
          </div>
        </div>

        <div className="md:w-2/2 absolute inset-0 z-0 pb-10">
          {/* Background Image */}

          <img
            src="/images/services/abouthero.webp" // Replace with your image path
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

      <section id="about" className="pt-10 md:pt-5 lg:pt-5 ">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <p className="mt-10 text-4xl font-bold  md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl ">
                  Building Sustainable Solutions Through Innovation
                </p>
                <div
                  className="wow fadeInUp mb-12 mt-5 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <p className="mb-7 text-sm text-[#9E9E9E] md:text-base lg:text-base xl:text-base 2xl:text-base">
                    Our team is committed to delivering high-quality solutions
                    and often collaborates with mining companies, consulting
                    firms, and other engineering teams to support their
                    electrical and instrumentation needs. We emphasize building
                    reliable systems that provide enduring support for your
                    operations, ensuring they perform effectively over time.
                    reliable support for your operations for years to come.
                    <br /><br/>
                    Our strength lies in the experienced professionals we
                    employ, who bring a wealth of knowledge from both local and
                    international projects. We have successfully completed
                    various projects across different countries, including
                    Canada, the United States, Turkey, Japan, and across Africa.
                    This diverse experience enables us to offer well-informed
                    solutions tailored to meet the unique requirements of each
                    client.
                  </p>
                  <p className=" text-sm text-[#9E9E9E] md:text-base lg:text-base xl:text-base 2xl:text-base">
                    We focus on practical and dependable engineering practices
                    that adhere to industry standards. Our approach is centered
                    around providing effective, straightforward solutions that
                    enhance operational efficiency without unnecessary
                    complexity. By prioritising thoroughness and quality in our
                    work, we aim to support our clients in achieving their
                    operational goals with reliable and efficient systems.
                  </p>
                </div>
              </div>
              <div className="mt-10 flex w-full flex-col justify-between px-4 lg:w-1/2">
                <div>
                  <div className="mb-4 shadow-lg">
                    <img
                      src="/images/about/aboutusimage.webp" // Replace with fallback image path
                      alt="Background Image Fallback"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutSectionTwo></AboutSectionTwo>
      <Contact></Contact>
    </>
  );
};

export default AboutPage;
