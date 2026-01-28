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
                International Experience
              </span>
            </h3>
            <p className="mb-5 text-5xl font-bold text-white">
              Rigorous Testing for International Projects
            </p>
          </div>
        </div>

        <div className="md:w-2/2 absolute inset-0 z-0 pb-10">
          {/* Background Image */}

          <img
            src="/images/experience/experienceInternational.webp" // Replace with your image path
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

      <section className="py-2 md:py-2 lg:py-10">
        <div className="container mx-auto flex items-center justify-center">
          <div className="text-center md:w-1/2 md:text-left">
            {/* Text content below the image */}
            <h3 className="pb-2 pt-2 text-lg font-bold text-[#017dc5]">
              <span className="border-b-2 border-[#61AE4A]"></span>
            </h3>
            <p className="text-5xl font-bold">Our Global Project Portfolio</p>
            {/* Additional text below the heading */}
            <p className="mt-10 text-base text-[#9E9E9E]">
              We havs built a reputation for delivering high-quality engineering
              services that align with international standards. With extensive
              local and international experience, our team has successfully
              completed numerous projects across 19 countries in Africa, as well
              as in China, Turkey, Guatemala, Mexico, and Saudi Arabia. We have
              supported Canadian, American, Turkish, Japanese, and UK consulting
              firms and mining companies, demonstrating our adaptability and
              expertise across diverse geographical locations.
            </p>
            <p className="mt-5 text-base text-[#9E9E9E]">
              Our global project portfolio includes significant assignments,
              such as silver and gold plants in Guatemala, Egypt, Turkey, and
              China, and gold and zinc processing plants in Burkina Faso. We
              have contributed to copper plant operations in the Democratic
              Republic of Congo and managed uranium plant projects in Malawi.
              Our personnel have also undertaken smaller assignments, including
              feasibility studies for gold plants in Romania, medium voltage
              infrastructure testing in Tanzania, and commissioning of diesel
              power plants and MV switchgear in Namibia, Zimbabwe, and Nigeria.
            </p>
            <p className="mt-5 text-base text-[#9E9E9E]">
              This extensive international experience underscores our ability to
              provide reliable, effective, and tailored engineering solutions to
              meet the unique challenges of each project, ensuring our clients
              receive the highest quality service.
            </p>
          </div>

          <div className="flex justify-center pl-10 md:w-1/2">
            <img
              src="/images/experience/experienceInternational4.webp" // Replace with fallback image path
              alt="Background Image Fallback"
              className=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesInfrasctructure;
