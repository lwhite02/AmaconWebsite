import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Image1 = "/images/logo/iControl Logo_Final.png";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <header
        className={`header items-right top-0 right-0 z-30 flex w-full bg-[#272652] text-[black] ${
          /* White background */ sticky
            ? "!fixed !z-[9999] shadow-sticky backdrop-blur-sm !transition "
            : "absolute"
        }`}
      >
        <div className="container mx-auto max-w-7xl">
          {" "}
          {/* Added max width */}
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href=""
                className={`header-logo block w-full ${
                  sticky ? "py-3 lg:py-2" : "py-8"
                }`}
              >
                <Image
                  src={Image1}
                  alt="log2222"
                  width={140}
                  height={30}
                  className="hidden w-full "
                />
                <img
                  src="/images/logo/updatedlogo.png" // Replace with fallback image path
                  alt="Background Image Fallback"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-end px-4">
              
              {/* Modified justify property */}
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="hover:bg-blue-500 absolute right-4 top-1/2 block -translate-y-1/2 transform px-3 py-[6px] ring-[#b4bc1c] focus:ring-2 lg:hidden"
                >
                  {navbarOpen ? (
                    <IconX size={24} stroke={1} />
                  ) : (
                    <IconMenu2 size={24} stroke={1} />
                  )}
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-40 w-full  border-[.5px] border-body-color/50 bg-white text-[black]  duration-300  lg:visible lg:static  lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[100%] opacity-0"
                  }`}
                >
                  <ul className="block px-3 lg:flex lg:space-x-12 lg:px-0">
                    {menuData.map((menuItem, index) => (
                      <li
                        key={menuItem.id}
                        className="group relative mx-3 lg:mx-0"
                      >
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base ${
                              menuItem.hovered ? "text-hover-color" : "text-"
                            } text-[black] hover:text-[#0484cc]  lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                            onMouseEnter={() => {
                              menuItem.hovered = true;
                            }}
                            onMouseLeave={() => {
                              menuItem.hovered = false;
                            }}
                            onClick={navbarToggleHandler}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <a
                              onClick={() => handleSubmenu(index)}
                              className="group-hover:[#0484cc] flex cursor-pointer items-center justify-between py-2 text-base text-[black] hover:text-[#0484cc]  lg:mr-0 lg:inline-flex lg:py-6 lg:px-0"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="15" height="14" viewBox="0 0 15 14">
                                  <path
                                    d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </a>
                            <div
                              className={`submenu relative top-full left-0 rounded-md bg-white text-[black] transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem) => (
                                <Link
                                  href={submenuItem.path}
                                  key={submenuItem.id}
                                  className="block rounded py-2.5 text-sm text-[black] hover:text-[#0484cc]  lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
