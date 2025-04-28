const Hero = () => {
  return (
    <div className="w-full flex min-[790px]:flex-row flex-col-reverse justify-between items-center py-10 flex-wrap">
      <div className="flex flex-col gap-5">
        <h1 className="text-naturalD_Grey sm:text-[44.55px] text-[25px] font-semibold leading-[30px] sm:leading-[52.9px] text-left max-w-[457.32px]">
          Lessons and insights <br className="sm:hidden" /> <span className="text-Primary">from 8 years</span>
        </h1>

        <span className="text-[11.14px] max-w-[457.32px] text-naturalGrey leading-[16.7px]">
          Where to grow your business as a photographer: site or social media?
        </span>

        <button className="sm:w-[89.55px] w-fulls h-[36.49px] bg-Primary text-naturalWhite rounded-[2.78px]">
          Register
        </button>
      </div>

      <div className="min-[790px]:mt-0 mt-[50px]">
        <img src="./heroImg.png" alt="heroImg" className="sm:w-[280px] w-[200px]" />
      </div>
    </div>
  );
};

export default Hero;
