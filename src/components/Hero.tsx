const Hero = () => {
  return (
    <div className="w-full flex justify-between py-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-naturalD_Grey text-[44.55px] font-semibold leading-[52.9px] text-left max-w-[457.32px]">
          Lessons and insights <span className="text-">from 8 years</span>
        </h1>

        <span className="text-[11.14px] max-w-[457.32px] text-naturalGrey leading-[16.7px]">
          Where to grow your business as a photographer: site or social media?
        </span>

        <button className="w-[89.55px] h-[36.49px] bg-Primary text-naturalWhite rounded-[2.78px]">
          Register
        </button>
      </div>

      <div className="">
        <img src="./heroImg.png" alt="heroImg" className="w-[280px]" />
      </div>
    </div>
  );
};

export default Hero;
