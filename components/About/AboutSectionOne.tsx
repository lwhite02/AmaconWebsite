import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { FaGlobe, FaTools, FaDollarSign } from "react-icons/fa";
import React from "react";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ icon, text }) => (
    <p className="mb-5 flex items-center text-base font-medium text-[black]">
      <span className="mr-4 flex h-[40px] items-center">
        {/* Icon with color and size */}
        {React.cloneElement(icon, {
          style: { color: "#0484cc", fontSize: "24px" },
        })}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-10 md:pt-5 lg:pt-5 ">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16  md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <h3 className="pb-2 pt-10 text-lg font-bold text-[#0484cc]">
                <span className="border-b-2 border-[#0484cc]">About Us</span>
              </h3>
              <p className="text-5xl font-bold">
                Engineering Solutions: Our Journey and Expertise
              </p>

              <div
                className="wow fadeInUp mb-12 mt-5 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <p className="mb-7 text-base text-[#9E9E9E]">
                  iControl Consulting (Pty) Ltd is a dynamic small to
                  medium-sized consulting firm that specializes in providing
                  comprehensive Engineering, Procurement, and Construction
                  Management (EPCM) and commissioning services in the
                  electrical, instrumentation, and control fields. Our team is
                  dedicated to delivering high-quality solutions and often
                  collaborates with mining companies, as well as other
                  consulting or engineering firms, to complement their
                  electrical and instrumentation expertise. By partnering with
                  us, these companies can leverage our specialized knowledge and
                  experience to successfully complete their projects.
                </p>

                {/* Button */}
                <div className="flex justify-start">
                  {" "}
                  {/* Adjusted flex to justify-between */}
                  <div></div> {/* Empty div for spacing */}
                  <div>
                    <a
                      href="/about"
                      className="mt-10 inline-block rounded-md bg-[#0484cc] py-3 px-2 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
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
  );
};

export default AboutSectionOne;
