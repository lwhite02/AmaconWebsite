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
        <div className=" pb-12  md:pb-12 lg:pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Left blank column */}
            <div></div>
            {/* Center column with content */}
            <div className="mb-10 flex flex-col items-center px-2 md:px-0">
              <img
                src="/images/about/Amacon_Website_Consulting_Services.jpg"
                alt="Background Image Fallback"
                className="mx-auto"
              />
              <p className="mt-5  text-center font-semibold text-[#212c53]">
                Amacon is a re-branding of iControl Consulting (Pty) Ltd with an
                intentional business focus and structuring of our engineering
                services with greater definition. As a company on the move we
                have grown our services to also provide quality solutions and
                products that will benefit and add value to our existing and
                potential Clients.
              </p>
              <p className="mt-5 text-center">
                We are a small to medium sized company that employs 15 personnel
                with 8 qualified engineers, several experienced technicians and
                site engineers, a competent design and drawing office team, and
                a marketing and sales team. All with back-up support.
              </p>
              <p className="mt-5 text-center">
                Amacon’s strength is in the quality of the personnel that we
                employ. Our personnel have a wealth of local and international
                experience, and have successfully completed numerous projects
                and have work experience in 13 countries in Africa, and further
                afield in China, Turkey, Guatemala, Mexico and Saudi Arabia.
              </p>
              <p className="mt-5 text-center">
                Amacon personnel have supported Canadian, American, Turkish,
                Japanese and United Kingdom consulting firms and mining
                companies with design, engineering, construction and
                commissioning management services.
              </p>
            </div>
            {/* Right blank column */}
            <div></div>
          </div>
          <img
            src="/images/about/Amacon_Website_map.jpg"
            alt="Background Image Fallback"
            className="mx-auto"
            style={{ maxWidth: "550px", width: "100%", height: "auto" }}
          />

          <p className=" mt-5 flex flex-col items-center text-center font-semibold text-[#212c53]">
            Amacon’s strength is in the quality of the personnel that we employ.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1050px] w-full">
  {/* Large top image */}
  <div>
    <img
      src="/images/about/Amacon_Website_home_image_1.jpg"
      alt="Background Image Fallback"
      className="mx-auto w-full h-auto"
    />
  </div>
  {/* Grid of images below */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mt-8">
    {/* Left: One tall image */}
    <div className="flex">
      <img
        src="/images/about/Amacon_Website_home_image_4.jpg"
        alt="Background Image Fallback"
        className="object-cover w-full h-full rounded-lg"
        style={{ minHeight: "400px", maxHeight: "700px" }}
      />
    </div>
    {/* Right: Two stacked images */}
    <div className="flex flex-col gap-6">
      <img
        src="/images/about/Amacon_Website_home_image_3.jpg"
        alt="Background Image Fallback"
        className="object-cover w-full rounded-lg flex-1"
        style={{ minHeight: 0, height: "50%" }}
      />
      {/* Add another image here if needed */}
    </div>
  </div>
</div>
    </section>
  );
};

export default AboutSectionOne;
