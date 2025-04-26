import { FaLongArrowAltRight, FaList, FaWindowClose } from "react-icons/fa";
import { UseContext } from "../context/contextProvider";

const ResponsiveMenu = () => {
  const { toggle, setToggle }: any = UseContext();
  return (
    <div className="md:hidden flex  justify-end items-center gap-5">
      <FaList
        className="text-Secondary"
        onClick={() => setToggle((e: any) => !e)}
        size={30}
      />

      {toggle && (
        <div className="w-full h-full bg-naturalWhite justify-center items-center absolute flex flex-col top-0 left-0 z-10 gap-10">
          <FaWindowClose
            onClick={() => setToggle((e: any) => !e)}
            size={30}
            className="absolute top-10 right-5 text-Secondary"
          />

          <ul className="flex md:hidden flex-col justify-center items-center font-medium text-naturalD_Grey gap-6 text-[15px]">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Community</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Pricing</li>
          </ul>

          <button className="flex w-[133.25px] h-[36.49px] font-medium bg-Primary text-naturalWhite text-[13px] rounded-[2.78px] justify-center items-center">
            <span>Register Now</span>
            <FaLongArrowAltRight className="ml-2" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ResponsiveMenu;
