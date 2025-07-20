import { Link, useLocation, useNavigate } from "react-router";
import logo from "../assets/images/saanjh_new_logo_header.png";
import headerBackgroundImage from "../assets/images/background_slice.png";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isPathIncludeWhitePages =
    location.pathname.includes("/events") ||
    location.pathname.includes("/individual-therapy") ||
    location.pathname.includes("/contact") ||
    location.pathname.includes("/about-us");
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState("");
  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    if (window.innerWidth < 768) {
      setIsAtTop(false);
      return;
    }

    if (window.scrollY <= 50) {
      setIsAtTop(true);
    } else {
      setIsAtTop(false);
    }
  };

  // const toggleMobileDropdown = () => {
  //   setIsMobileDropdownOpen(!isMobileDropdownOpen);
  // };

  const handleLogoClick = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    if (isOpen) {
      setIsVisible(false);
      setTimeout(() => setIsOpen(false), 600); // Match the duration of the opacity transition
    } else {
      setIsOpen(true);
      setTimeout(() => setIsVisible(true), 100); // Small delay to trigger the transition
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 z-10 w-full font-sans-black tracking-tighter text-gray-900 opacity-90">
      <div
        className={`fixed top-0 flex h-20 w-full items-center justify-between ${isAtTop && !isPathIncludeWhitePages ? "bg-transparent" : "bg-cover"} px-[5vw] transition-all duration-500 ease-in-out`}
        style={{
          backgroundImage:
            isAtTop && !isPathIncludeWhitePages
              ? "none"
              : `url(${headerBackgroundImage})`,
        }}
      >
        <img
          onClick={handleLogoClick}
          className="h-16 w-auto"
          src={logo}
          alt="Saanjh"
        />
        <div className="hidden md:block">
          <nav className="space-x-4 rounded-full bg-pink-50 px-3 py-2 text-sm uppercase text-sunset lg:space-x-8 lg:px-6">
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
            {/* ABOUT US DROPDOWN (Desktop) */}
            <div className="group relative inline-block">
              <Link
                to="/about-us"
                className="inline-flex items-center uppercase focus:outline-none"
                onClick={toggleMenu}
              >
                About Us
                {/* <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg> */}
              </Link>
              <div className="absolute right-0 z-20 mt-2 w-56 rounded-md bg-pink-50 opacity-0 shadow-lg ring-1 ring-black ring-opacity-5 transition-opacity duration-300 group-hover:opacity-100">
                <div className="py-1" role="menu">
                  <Link
                    to="/about-us"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={toggleMenu}
                  >
                    Our Team
                  </Link>
                  <Link
                    to="/our-collectives"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={toggleMenu}
                  >
                    Our Collectives
                  </Link>
                </div>
                <div className="absolute -top-2 right-0 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-pink-50"></div>
              </div>
            </div>

            <Link to="/blogs" onClick={toggleMenu}>
              Blogs
            </Link>
            {/* <Link to="/about-us" onClick={toggleMenu}>
              About Us
            </Link> */}
            <div className="group relative inline-block">
              <button className="uppercase focus:outline-none">Services</button>
              <div className="absolute right-0 mt-2 w-56 rounded-md bg-pink-50 opacity-0 shadow-lg ring-1 ring-black ring-opacity-5 transition-opacity duration-300 group-hover:opacity-100">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <Link
                    to="/events"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Group Sessions
                  </Link>
                  <Link
                    to="/services/collectives"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Individual Therapy
                  </Link>
                  <Link
                    to="/services/workplace-wellbeing"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Workplace Wellbeing
                  </Link>
                </div>
                <div className="absolute -top-2 right-0 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-pink-50"></div>
              </div>
            </div>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </nav>
        </div>
        <div className="hidden rounded-full bg-pink-50 px-3 py-2 text-sm uppercase text-sunset md:block">
          <Link to="/resources" onClick={toggleMenu}>
            Resources
          </Link>
        </div>
        <div className="md:hidden">
          {isOpen ? (
            <XMarkIcon
              className="size-10 cursor-pointer text-white"
              onClick={toggleMenu}
            />
          ) : (
            <Bars3Icon
              className="size-10 cursor-pointer text-white"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>
      {isOpen && (
        <nav
          className={`fixed top-20 flex w-full flex-col gap-4 bg-pink-50 px-[10dvw] py-4 font-medium text-sunset transition-all duration-500 md:hidden ${isVisible ? "translate-x-0" : "-translate-x-full"} uppercase`}
        >
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          {/* ABOUT US DROPDOWN (Mobile) */}
          <div className="relative">
            <button
              onClick={() =>
                setIsMobileDropdownOpen(
                  isMobileDropdownOpen === "about-us" ? "" : "about-us",
                )
              }
              className="uppercase focus:outline-none"
            >
              About Us
            </button>
            {isMobileDropdownOpen === "about-us" && (
              <div
                className="flex flex-col pl-4"
                onClick={() =>
                  setIsMobileDropdownOpen(
                    isMobileDropdownOpen === "about-us" ? "" : "about-us",
                  )
                }
              >
                <Link
                  to="/about-us"
                  className="block p-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  Our Team
                </Link>
                <Link
                  to="/our-collectives"
                  className="block p-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  Our Collectives
                </Link>
              </div>
            )}
          </div>

          <Link to="/blogs" onClick={toggleMenu}>
            Blogs
          </Link>
          <div className="relative">
            <button
              onClick={() =>
                setIsMobileDropdownOpen(
                  isMobileDropdownOpen === "services" ? "" : "services",
                )
              }
              className="uppercase focus:outline-none"
            >
              Services
            </button>
            {isMobileDropdownOpen === "services" && (
              <div
                className="flex flex-col pl-4"
                onClick={() =>
                  setIsMobileDropdownOpen(
                    isMobileDropdownOpen === "services" ? "" : "services",
                  )
                }
              >
                <Link
                  to="/events"
                  className="block p-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  Group Sessions
                </Link>
                <Link
                  to="/services/collectives"
                  className="block p-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  Individual Therapy
                </Link>
                <Link
                  to="/services/workplace-wellbeing"
                  className="block p-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  Workplace Wellbeing
                </Link>
              </div>
            )}
          </div>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
          <Link to="/resources" onClick={toggleMenu}>
            Resources
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
