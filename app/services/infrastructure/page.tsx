import React from "react";
import Head from "next/head";

const InfrastructurePage = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Infrastructure - iControl Consulting</title>
        <meta
          name="description"
          content="Innovating Tomorrow: Revolutionising Infrastructure Development with iControl Consulting. Discover our expertise in electrical infrastructure, substation upgrades, pump stations, and more."
        />
        <meta
          name="keywords"
          content="Infrastructure, Consulting, iControl Consulting, Electrical Infrastructure, Substation Upgrades, Pump Stations, Water Treatment Plants, Hydroelectric Power Stations"
        />
        <meta name="author" content="iControl Consulting" />
        <link
          rel="canonical"
          href="https://www.icontrolconsulting.co.za/infrastructure"
        />
      </Head>

      {/* Infrastructure Section */}
      <section className="relative z-10 overflow-hidden py-20 md:py-28">
        <div className="container relative z-10 mx-auto flex items-center justify-center pb-20 text-center md:text-left">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="mt-20 py-20 pb-2 text-lg font-bold text-[#017dc5]">
              <span className="mt-20 border-b-2 border-[#017dc5]">
                Infrastructure
              </span>
            </h3>
            <p className="mb-5 text-5xl font-bold text-white">
              Infrastructure for a sustainable future.
            </p>
          </div>
        </div>

        {/* Background Image */}
        <div className="md:w-2/2 absolute inset-0 z-0 pb-10">
          <img
            src="/images/services/serviceSolar.webp" // Replace with your image path
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
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-10 md:pt-5 lg:pt-5">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <p className="pt-5 text-5xl font-bold">
                  Power Quality & Thermal Analysis: Efficiency & Preventative
                  Maintenance
                </p>
                <div
                  className="wow fadeInUp mb-12 mt-5 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <p className="mb-7 mt-10 text-base text-[#9E9E9E]">
                    At iControl Consulting (Pty) Ltd, we offer a comprehensive
                    range of services tailored to modern industry needs. Our
                    expertise covers testing and maintaining MV switchgear and
                    protection systems, upgrading MV protection relays, and
                    conducting substation earthing assessments. We also
                    specialize in BTU testing, MV cable and transformer testing,
                    power quality measurements, and thermal infrared testing to
                    ensure system performance and reliability. Our team has
                    successfully engineered and managed diverse projects,
                    including large pump stations, water treatment plants, hydro
                    power stations, Gautrain electrical infrastructure, building
                    services, and diesel generator power stations.
                  </p>
                  <p className="text-base text-[#9E9E9E]">
                    Our thorough assessments and audits enhance electrical
                    infrastructure safety, compliance, and efficiency. We offer
                    specialized testing for cables and transformers, ensuring
                    insulation integrity and fault detection. Our power quality
                    analysis identifies potential issues and optimizes energy
                    usage. Additionally, we utilize thermal infrared imaging to
                    detect anomalies, hotspots, and potential faults, enabling
                    early intervention and preventing costly downtime. This
                    comprehensive approach helps maintain system reliability,
                    improve safety, and enhance overall energy efficiency,
                    providing our clients with reliable and effective
                    engineering solutions.
                  </p>
                </div>
              </div>
              <div className="mt-10 flex justify-center md:mt-0 md:w-1/2 md:pl-10">
                <div className="w-full max-w-md">
                  <div className="mb-4">
                    <img
                      src="/images/services/serviceInfrastructure8.webp" // Replace with fallback image path
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

export default InfrastructurePage;
