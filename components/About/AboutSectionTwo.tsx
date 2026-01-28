import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import SectionTitle from "@/components/Common/SectionTitle";
import { FaDollarSign, FaGlobe, FaTools } from "react-icons/fa";

const DrawingPage = () => {
  return (
    <section className="pt-50 relative mt-20 mb-12 overflow-hidden rounded-md md:py-20 lg:py-28">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/offers/whatweoffer2.webp" // Replace with your image path
          alt="Background Image Fallback"
          className="h-full w-full object-cover"
        />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-[black] opacity-50"></div>
      </div>

      {/* Text content */}
      <div className="container relative z-10 mb-10">
        <h3 className="mt-10 pb-2 text-lg font-bold text-[#017dc5] md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0 ">
          <span className="border-b-2 border-[#0484cc]">What we offer </span>
        </h3>
        <p className="mb-10 text-4xl font-bold text-white md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl">
          Our Project Contributions
        </p>
        <div className="flex flex-col items-center justify-between lg:flex-row">
          {/* Boxes with consistent height */}
          <div className="mb-5 w-full flex-1 px-4 lg:mb-0 lg:w-1/3">
            <div className="flex h-full min-h-[250px] flex-grow items-center rounded-md bg-[black] bg-opacity-80 p-8 shadow-lg">
             
              {/* Set minimum height */}
              <div className="h-full">
                <p className="mb-6 text-xl font-semibold text-white md:text-5xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
                  International Experience
                </p>
                <p className="text-sm text-[#9E9E9E]">
                  With a wealth of local and international experience, our team
                  has successfully completed numerous projects across 19
                  countries in Africa, as well as in China, Turkey, Guatemala,
                  Mexico, and Saudi Arabia. We have supported Canadian,
                  American, Turkish, Japanese, and United Kingdom consulting
                  firms and mining companies.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-5 w-full flex-1 px-4 lg:mb-0 lg:w-1/3">
            <div className="flex h-full min-h-[250px] flex-grow items-center rounded-md bg-white bg-opacity-80 p-8 shadow-lg">
             
              {/* Set minimum height */}
              <div className="h-full">
                <p className="mb-6 text-xl font-semibold md:text-5xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
                  Engineer Expertise
                </p>
                <p className="text-sm">
                
                  We specialise in advanced control systems, energy
                  optimisation, and automation. Our services include feasibility
                  studies, regulatory compliance, safety audits, and
                  infrastructure development. We also offer custom solutions,
                  technology integration, and training to ensure effective
                  system operation and maintenance.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex-1 px-4 lg:w-1/3">
            <div className="flex h-full min-h-[250px] flex-grow items-center rounded-md bg-[black] bg-opacity-80 p-8 shadow-lg">
             
              {/* Set minimum height */}
              <div className="h-full">
                <p className="mb-6 text-xl font-semibold text-white md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
                  Value Driven Approach
                </p>
                <p className="text-sm text-[#9E9E9E]">
                  At the core of our approach is a commitment to delivering
                  value to our clients. We focus on understanding your project
                  requirements, paying attention to detail, and pursuing
                  efficiency and cost-effectiveness. By prioritizing value at
                  every stage, we ensure your investment leads to quality
                  outcomes and cost savings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrawingPage;
