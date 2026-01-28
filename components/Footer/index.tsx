import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-[#F7F7F7]  pt-16 md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <img
                    src="/images/logo/updatedlogo.png"
                    alt="logo"
                    className="w-full dark:hidden"
                    style={{ width: "180px", height: "90px" }}
                  />
                </Link>
                <p className="mb-9 text-base font-medium leading-relaxed text-body-color">
                  Your Vision, Our Expertise, Unparalleled Results
                </p>
                <div className="flex items-center">
                  <a
                    href="https://www.facebook.com/icontrolconsulting/"
                    aria-label="social-link"
                    className="mr-6 text-[#CED3F6] hover:text-[#0484cc]"
                  >
                    <svg
                      width="9"
                      height="18"
                      viewBox="0 0 9 18"
                      className="fill-current"
                    >
                      <path d="M8.13643 7H6.78036H6.29605V6.43548V4.68548V4.12097H6.78036H7.79741C8.06378 4.12097 8.28172 3.89516 8.28172 3.55645V0.564516C8.28172 0.254032 8.088 0 7.79741 0H6.02968C4.11665 0 2.78479 1.58064 2.78479 3.92339V6.37903V6.94355H2.30048H0.65382C0.314802 6.94355 0 7.25403 0 7.70564V9.7379C0 10.1331 0.266371 10.5 0.65382 10.5H2.25205H2.73636V11.0645V16.7379C2.73636 17.1331 3.00273 17.5 3.39018 17.5H5.66644C5.81174 17.5 5.93281 17.4153 6.02968 17.3024C6.12654 17.1895 6.19919 16.9919 6.19919 16.8226V11.0927V10.5282H6.70771H7.79741C8.11222 10.5282 8.35437 10.3024 8.4028 9.96371V9.93548V9.90726L8.74182 7.95968C8.76604 7.7621 8.74182 7.53629 8.59653 7.31048C8.54809 7.16935 8.33016 7.02823 8.13643 7Z" />
                    </svg>
                  </a>

                  <a
                    href="https://za.linkedin.com/company/icontrol-consulting-pty-ltd"
                    aria-label="social-link"
                    className="mr-6 text-[#CED3F6] hover:text-[#0484cc]"
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      className="fill-current"
                    >
                      <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Contact Information
                </h2>
                <div>
                  <p className="mb-5 font-medium inline-block text-body-color hover:text-[#0484cc]">
                    (011) 782 3450
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Verona+Office+Park,+cnr+Malibonge+Drive+and+McArthur+Ave,+Randburg,+Quateng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-10 font-medium inline-block text-body-color hover:text-[#0484cc]"
                  >
                    Unit 7, Verona Office Park, cnr Malibonge Drive and McArthur
                    Ave, Randburg, Guateng
                  </a>
                  <a
                    href="mailto:info@iControlConsulting.co.za"
                    className="font-medium inline-block text-body-color hover:text-[#0484cc]"
                  >
                    <p className="mt-5">info@iControlConsulting.co.za</p>
                  </a>
                </div>
              </div>
            </div> */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Contact 
                </h2>
                <ul>
                  <li>
                    <p className="mb-5 font-medium inline-block text-body-color hover:text-[#0484cc]">
                    (011) 782 3450
                  </p>
                    
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Verona+Office+Park,+cnr+Malibonge+Drive+and+McArthur+Ave,+Randburg,+Quateng"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" font-medium inline-block text-body-color hover:text-[#0484cc]"
                    >
                      
                      Unit 7, Verona Office Park, cnr Malibonge Drive and McArthur
                    Ave, Randburg, Guateng
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@iControlConsulting.co.za"
                    className="font-medium inline-block text-body-color hover:text-[#0484cc]"
                    >
                      
                      <p className="mt-5 whitespace-pre-wrap">info@iControlConsulting.co.za</p>
                    </a>
                  </li>
                  
                  
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Support and Help
                </h2>
                <ul>
                  <li>
                    <a
                      href="/about"
                      className="mb-4 inline-block  font-medium text-body-color hover:text-[#0484cc]"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="mb-4 inline-block  font-medium text-body-color hover:text-[#0484cc]"
                    >
                      
                      Contact Us
                    </a>
                  </li> 
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Quick Links
                </h2>
                <ul>
                  <li>
                    <a
                      href="/services/powerAndEnergy"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-[#0484cc]"
                    >
                      Power and Energy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/infrastructure"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-[#0484cc]"
                    >
                      
                      Infrastructure
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/qualityandfactory"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-[#0484cc]"
                    >
                      
                      Quality Assurance and Factory Acceptance testing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/experience/international"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-[#0484cc]"
                    >
                      
                      International Experience
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
            

          </div>
        </div>
        <div className=" pb-4 mt-5s text-center text-sm">
          <p className="mb-4  text-black">
            © 2025 iControl Consulting (Pty) Ltd. All rights reserved.
          </p>
          
        </div>
      </footer>
    </>
  );
};

export default Footer;
