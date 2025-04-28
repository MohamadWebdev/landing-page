import {
  FaLongArrowAltRight,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="w-full mt-20 pt-10">
      <div className="w-full max-w-[1002.34px] mx-auto min-[1000px]:px-20 px-5 flex flex-col justify-center items-center gap-10">
        <h1 className="font-semibold text-[45px] leading-[50px] max-w-[600px] text-naturalBlack text-center">
          Pellentesque suscipit fringilla libero eu.
        </h1>

        <button className="bg-Primary w-[140px] h-[40px] flex justify-center items-center gap-3 text-naturalWhite rounded-[5px]">
          Get a Demo <FaLongArrowAltRight />
        </button>
      </div>

      <div className="bg-naturalBlack mt-10 w-full">
        <div className="w-full max-w-[1002.34px] mx-auto flex p-20 md:justify-between justify-center h-full items-center flex-wrap">
          <div className="flex h-full flex-col md:justify-between justify-center items-center md:items-start gap-5">
            <div className="flex gap-2 justify-center items-center">
              <img src="./logo2.png" alt="logo" className="w-auto h-auto" />

              <h1 className="font-bold text-naturalWhite text-[25px]">
                Nexcent
              </h1>
            </div>

            <div className="flex flex-col md:justify-start justify-center md:items-start items-center gap-1">
              <h3 className="text-naturalSilver text-[10px] leading-[13px] text-left">
                Copyright © 2020 Landify UI Kit.
              </h3>

              <h3 className="text-naturalSilver text-[10px] leading-[13px] text-left">
                Developed by MWD
              </h3>

              <h3 className="text-naturalSilver text-[10px] leading-[13px] text-left">
                All rights reserved
              </h3>
            </div>

            <div className="flex justify-start items-start gap-5 text-naturalWhite">
              <FaInstagram className="w-[40px] rounded-full p-2 h-[40px] bg-naturalD_Grey" />
              <FaEarthAsia className="w-[40px] rounded-full p-2 h-[40px] bg-naturalD_Grey" />
              <FaTwitter className="w-[40px] rounded-full p-2 h-[40px] bg-naturalD_Grey" />
              <FaYoutube className="w-[40px] rounded-full p-2 h-[40px] bg-naturalD_Grey" />
            </div>
          </div>

          <div className="flex gap-10 max-[630px]:mt-10 flex-wrap max-md:flex-col">
            <div className="h-full flex flex-col gap-3 md:items-start items-center">
              <h1 className="font-semibold text-naturalWhite text-[17px]">
                Company
              </h1>

              <ul className="flex h-full flex-col justify-between md:items-start items-center gap-[2px]">
                <li className="text-[13px] text-naturalSilver">About us</li>
                <li className="text-[13px] text-naturalSilver">Blog</li>
                <li className="text-[13px] text-naturalSilver">Contact us</li>
                <li className="text-[13px] text-naturalSilver">Pricing</li>
                <li className="text-[13px] text-naturalSilver">Testimonials</li>
              </ul>
            </div>

            <div className="h-full flex flex-col gap-3 md:items-start items-center">
              <h1 className="font-semibold text-naturalWhite text-[17px]">
                Support
              </h1>

              <ul className="flex h-full flex-col justify-between md:items-start items-center gap-[2px]">
                <li className="text-[13px] text-naturalSilver">Help center</li>
                <li className="text-[13px] text-naturalSilver">
                  Terms of service
                </li>
                <li className="text-[13px] text-naturalSilver">Legal</li>
                <li className="text-[13px] text-naturalSilver">
                  Privacy policy
                </li>
                <li className="text-[13px] text-naturalSilver">Status</li>
              </ul>
            </div>

            <div className="h-full flex flex-col gap-3 md:items-start items-center">
              <h1 className="font-semibold text-naturalWhite text-[17px]">
                Stay up to date
              </h1>

              <div className="relative text-white w-[190px] p-3 flex justify-end">
                <input
                  type="email"
                  name="email"
                  className="absolute text-[13px] pr-10 pl-5 top-0 left-0 w-full h-full bg-naturalGrey z-0 rounded-[5px] outline-none"
                  placeholder="Your email address"
                />

                <button className="z-10 text-white">
                  <FaTelegramPlane size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
