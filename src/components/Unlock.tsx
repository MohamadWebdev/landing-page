const Unlock = () => {
  return (
    <section className="w-full flex min-md:justify-between min-md:items-center max-md:flex-col mt-20 flex-wrap">
      <div className="max-md:w-full flex justify-center items-center">
        <img src="./unlock.png" alt="unlock" />
      </div>

      <div className="flex flex-col md:gap-[40px] gap-[20px] max-md:w-full max-md:mt-10 max-md:item-center max-md:items-center">
        <h1 className="text-[25.06px] font-semibold text-naturalD_Grey leading-[30px] text-left max-w-[418.34px]">
          The unseen of spending three years at Pixelgrade
        </h1>

        <p className="text-[10px] text-naturalGrey text-left leading-[14px] max-w-[418.34px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>

        <button className="md:w-[105.55px] w-full max-md:max-w-[418.34px] h-[36.49px] bg-Primary text-white rounded-[5px]">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Unlock;
