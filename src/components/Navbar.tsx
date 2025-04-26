import { FaLongArrowAltRight } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { UseContext } from "../context/contextProvider";

const Navbar = () => {
  const {toggle}:any = UseContext();
  return (
    <section className={`w-full py-[20px] sha flex justify-between items-center z[5] ${!toggle && 'relative'} _shadow`}>
      <div className="flex gap-2 justify-center items-center">
        <img src="/logo.png" alt="logo" className="w-[24px] h-[17px]" />
        <h1 className="text-xl font-bold text-Secondary">Nexcent</h1>
      </div>

      <div className=" md:flex justify-end items-center gap-5 hidden">
        <ul className="flex font-medium text-naturalD_Grey gap-5 text-[11.14px]">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Community</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Pricing</li>
        </ul>

        <button className="flex w-[133.25px] h-[36.49px] font-medium bg-Primary text-naturalWhite text-[11.14px] rounded-[2.78px] justify-center items-center">
          <span>Register Now</span>
          <FaLongArrowAltRight className="ml-2" />
        </button>

        {/* responsive menu */}
      </div>

      <ResponsiveMenu />
    </section>
  );
};

export default Navbar;
