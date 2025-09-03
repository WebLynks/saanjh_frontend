import { Link } from "react-router";
import footerBackgroundImage from "../assets/images/background_slice.png";
import logo from "../assets/images/saanjh_footer_logo_new.webp";
import instagramRoundedImage from "../assets/images/instagram_rounded.png";
import linkedinRoundedImage from "../assets/images/linkedin_rounded.png";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import sacredHearts from "../assets/images/sacredhearts.png";

function Footer() {
  return (
    <footer className="text-white">
      <div className="relative bg-[#1E1D1B] py-8">
        <img
          src={logo}
          alt="Saanjh"
          className="left-[1dvw] ms-[1dvw] h-36 md:absolute md:top-[40px] md:ms-0 md:h-28 lg:h-36"
        />

        <div className="grid grid-cols-12 gap-y-8 py-8 pe-[5dvw] ps-[10dvw] md:ps-0">
          <div className="col-span-12 flex md:col-start-3 md:col-end-7 md:justify-center md:pe-4">
            <div className="space-y-6 text-lg md:text-base lg:text-xl">
              <div className="font-sans-black text-2xl tracking-tighter text-white opacity-90">
                Services
              </div>
              <div className="flex flex-col space-y-4 text-gray-400">
                <Link to="/events">Group Sessions</Link>
                <Link to="/services/individual-therapy">
                  Individual Session
                </Link>
                <Link to="/services/workplace-wellbeing">
                  Corporate Workshop
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="col-span-12 flex md:col-start-7 md:col-end-9 md:justify-center">
            <div className="space-y-6 text-lg md:text-base lg:text-xl">
              <div className="font-sans-black text-2xl tracking-tighter text-white opacity-90">
                Explore
              </div>
              <div className="space-y-4 text-gray-400">
                <div>
                  <Link to={"/"}>Home</Link>
                </div>
                <div>
                  <Link to={"/about-us"}>About Us</Link>
                </div>
                <div>
                  <Link to={"/events"}>Events</Link>
                </div>
                <div>
                  <Link to={"/blogs"}>Blogs</Link>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-span-12 flex md:col-start-7 md:col-end-13 md:justify-center md:ps-8">
            <div className="space-y-6 text-lg md:text-base lg:text-xl">
              <div className="font-sans-black text-2xl tracking-tighter text-white opacity-90">
                Follow Us
              </div>
              <div className="space-y-4 text-gray-400">
                <div>
                  <a
                    href="https://www.instagram.com/saanjh1628?igsh=MzZ3YjU0ZzJnOHdm"   
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="size-5 bg-contain"
                        style={{
                          backgroundImage: `url(${instagramRoundedImage})`,
                        }}
                      ></div>
                      <div>Instagram</div>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/company/saanjh-wellness/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="size-5 bg-contain"
                        style={{
                          backgroundImage: `url(${linkedinRoundedImage})`,
                        }}
                      ></div>
                      <div>Linkedin</div>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:saanjhwellness@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-2">
                      <EnvelopeIcon className="size-5 text-white" />{" "}
                      <div>saanjhwellness@gmail.com</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-around md:justify-center">
          <hr className="w-4/12 border-gray-400" />
          <div className="flex w-2/12 items-center justify-center">
            <img className="h-7 w-auto" src={sacredHearts} alt="Sacred Heart" />
          </div>
          <hr className="w-4/12 border-gray-400" />
        </div>
        <div className="flex w-full items-start justify-around pb-8 text-gray-400 md:justify-center">
          <div className="w-4/12">We respect your privacy</div>
          <div className="w-2/12"></div>
          <div className="flex w-4/12 flex-wrap justify-end">
            <div>Give us a call at&nbsp;</div>
            <a
              href="tel:+919373324053"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="">+91 9373324053</div>
            </a>
          </div>
        </div>
      </div>

      <div
        className="h-auto w-full bg-cover"
        style={{ backgroundImage: `url(${footerBackgroundImage})` }}
      >
        <div className="flex flex-col items-start justify-between gap-2 px-[10dvw] py-2 font-sans-black text-lg tracking-tighter text-white opacity-90 md:flex-row md:items-center md:justify-between md:text-base lg:text-xl">
          <div>
            Copyright<span className="align-super text-[0.75rem]">&copy;</span>{" "}
            by Saanjh - All rights reserved
          </div>
          <div>
            Designed and Developed by{" "}
            <a
              href="https://gitanshugupta7.github.io/WebLyknsPortfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>WebLynks</i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
