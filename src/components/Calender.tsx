const Calender = () => {
  return (
    <section className="mt-10 flex justify-between max-[785px]:justify-center items-center max-[785px]:flex-col">
      <div>
        <img src="./calenderImg.png" alt="calenderImg" className="" />
      </div>

      <div className="w-full max-w-[418.34px] max-[785px]:mt-10">
        <h1 className="text-[25px] text-naturalD_Grey font-semibold leading-[30px] w-full">
          How to design your site footer like we did
        </h1>

        <p className="text-[11px] text-naturalGrey leading-[15px] mt-5 mb-5 w-full">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>

        <button className="min-md:w-[105px] w-full h-[36px] text-naturalWhite min-md:text-[12px] text-[15px] rounded-[5px] bg-Primary">
          Learn more
        </button>
      </div>
    </section>
  );
};

export default Calender;
