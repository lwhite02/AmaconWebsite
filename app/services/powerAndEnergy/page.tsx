import React from "react";
import Head from "next/head";
import Image from "next/image";

const PowerAndEnergy = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Power and Energy - iControl Consulting</title>
        <meta
          name="description"
          content="Discover expertise in Power and Energy Solutions with iControl Consulting. From power supply assessments to high voltage substation designs and PV installations, we offer comprehensive solutions."
        />
        <meta
          name="keywords"
          content="Power and Energy, Consulting, iControl Consulting, Power Supply, High Voltage Substations, PV Installations, Substation Audits, Protection Upgrades"
        />
        <meta name="author" content="iControl Consulting" />
        <link
          rel="canonical"
          href="https://www.icontrolconsulting.co.za/power-and-energy"
        />
      </Head>

      {/* Power and Energy Section */}
      <section className="relative z-10 overflow-hidden py-20 md:py-28">
        <div className="container relative z-10 mx-auto flex items-center justify-center pb-20 text-center md:text-left">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="mt-20 py-20 pb-2 text-lg font-bold text-[#017dc5]">
              <span className="mt-20 border-b-2 border-[#017dc5] bg-clip-text text-transparent">
          Power and Energy
        </span>
            </h3>
            <p className="mb-5 text-5xl font-bold text-white">
              Expertise in Power &amp; Energy Solutions
            </p>
          </div>
        </div>
        <div className="md:w-2/2 absolute inset-0 z-0 pt-20 pb-2">
          {/* Background Image */}
          <div className="relative h-full w-full pt-20">
            <img
              src="/images/services/serviceInfrastructure5.webp" // Replace with your image path
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

      {/* About Power and Energy Section */}
      <section id="about" className="pt-10 md:pt-5 lg:pt-5">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <p className="text-5xl font-bold">
                 Transforming Power &amp; Energy
                  Solutions
                </p>
                <div
                  className="wow fadeInUp mb-12 mt-5 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <p className="mb-7 text-base text-[#9E9E9E]">
                    iControl Consulting offers a wide range of power and energy
                    solutions to meet diverse client needs. Our services
                    encompass power supply assessments, including evaluations of
                    power lines and diesel power systems, alongside negotiations
                    with supply authorities for optimal outcomes. Additionally,
                    we specialize in the detailed design of high voltage outdoor
                    substations and substation extensions, with capabilities
                    extending up to 400kV. Our expertise also includes
                    conducting substation audits and developing specifications
                    for protection upgrades, catering to systems of up to 132kV.{" "}
                  </p>
                  <p className="text-base text-[#9E9E9E]">
                    For projects involving photo voltaic (PV) cell
                    installations, we provide innovative MV infrastructure
                    designs to enhance performance and efficiency. Our MV
                    switchgear commissioning services are tailored for diesel
                    generator power stations, with capacities of up to 27MW,
                    ensuring seamless operation and maximum reliability. To
                    enhance our designs and assessments, we use specialised
                    tools like E-Tap modeling for symmetrical and asymmetrical
                    system analysis, load flow, arc flash, and protection
                    coordination studies. Furthermore, our collaboration with
                    esteemed institutions like Wits University enables us to
                    conduct High Voltage (HV) transient switching studies,
                    enhancing the robustness and reliability of our solutions.{" "}
                  </p>
                </div>
              </div>
              <div className="mt-10 flex justify-center md:mt-0 md:w-1/2 md:pl-10">
                <div className="w-full max-w-md">
                  <div className="mb-4">
                    <img
                      src="/images/services/servicePower.webp" // Replace with fallback image path
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

export default PowerAndEnergy;
