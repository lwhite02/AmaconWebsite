import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#272652] pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
          {/* Contact Us Section (Left) */}
          {/* <div className="md:w-1/3 mb-10 md:mb-0">
            <h2 className="text-xl font-bold text-white mb-6">Contact Us</h2>
            <ul className="text-[#CED3F6] text-base mb-8">
              <li className="mb-2">(011) 782 3450</li>
              <li className="mb-2">
                <a
                  href="mailto:info@iControlConsulting.co.za"
                  className="hover:text-[#0484cc]"
                >
                  info@iControlConsulting.co.za
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Verona+Office+Park,+cnr+Malibonge+Drive+and+McArthur+Ave,+Randburg,+Quateng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0484cc]"
                >
                  Unit 7, Verona Office Park, cnr Malibonge Drive and McArthur Ave, Randburg, Guateng
                </a>
              </li>
            </ul>
            {/* Add more contact info here if needed */}
            {/* <div className="mt-8">{/* Add more content here */}
        

          {/* Divider */}
          <div className="hidden md:block w-px bg-[#CED3F6] mx-4"></div>
          <hr className="block md:hidden border-[#CED3F6] mb-8" />

          {/* Three Columns */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 ">
            {/* Contact Us Column */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              
              <ul className="text-[#CED3F6] text-base mb-8">
                <li className="mb-2">(011) 782 3450</li>
                <li className="mb-2">
                  <a
                    href="mailto:info@iControlConsulting.co.za"
                    className="hover:text-[#0484cc]"
                  >
                    info@iControlConsulting.co.za
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Verona+Office+Park,+cnr+Malibonge+Drive+and+McArthur+Ave,+Randburg,+Quateng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0484cc]"
                  >
                    Randburg, Guateng
                  </a>
                </li>
              </ul>
              <div className="mt-8">{/* Add more content here */}</div>
            </div>
            {/* Menu Column */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Menu</h3>
              <ul className="text-[#CED3F6] text-base mb-8">
                <li className="mb-2">
                  <Link href="/about" className="hover:text-[#0484cc]">About Us</Link>
                </li>
                <li className="mb-2">
                  <Link href="/contact" className="hover:text-[#0484cc]">Contact Us</Link>
                </li>
                <li className="mb-2">
                  <Link href="/services/powerAndEnergy" className="hover:text-[#0484cc]">Power and Energy</Link>
                </li>
                <li className="mb-2">
                  <Link href="/services/infrastructure" className="hover:text-[#0484cc]">Infrastructure</Link>
                </li>
                <li className="mb-2">
                  <Link href="/services/qualityandfactory" className="hover:text-[#0484cc]">Quality Assurance</Link>
                </li>
                <li>
                  <Link href="/experience/international" className="hover:text-[#0484cc]">International Experience</Link>
                </li>
              </ul>
              <div className="mt-8">{/* Add more content here */}</div>
            </div>
            {/* Bee Status Column */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Bee Status</h3>
              <ul className="text-[#CED3F6] text-base mb-8">
                <div className="flex">
                 <img
              src="/images/logo/Amacon_Website_BEE_logo_2.png"
              alt="Background Image Fallback"
              className="mx-auto"
            />
             <img
              src="/images/logo/amaconLogo.png"
              alt="Background Image Fallback"
              className="mx-auto"
            />
                </div>
                
                {/* Add more bee status info here */}
              </ul>
              <div className="mt-8">{/* Add more content here */}</div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm text-[#CED3F6]">
          © 2025 iControl Consulting (Pty) Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;