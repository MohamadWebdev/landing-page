const Community = () => {
  return (
    <section className="w-full mt-10 flex flex-col">
      <div className="w-full flex flex-col items-center justify-center gap-7">
        <h1 className="text-[30px] font-semibold text-center max-w-[430px] leading-[30.6px] text-naturalD_Grey">
          Manage your entire community in a single system
        </h1>

        <span className="text-[20px] text-center text-naturalGrey">
          Who is Nextcent suitable for?
        </span>
      </div>

      <div className="w-full mt-10 flex justify-between items-center flex-wrap max-md:flex-col max-[880px]:gap-10">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="w-[50px] h-[50px] rounded-[6px_3px_15px_3px] bg-Tint5 relative z-0">
            <img
              className="absolute z-10 -left-[15px] w-[45px] top-[-8px]"
              src="./user.png"
              alt="Membership"
            />
          </div>

          <h1 className="max-w-[200px] text-[25px] text-naturalD_Grey font-bold leading-[30px] text-center">
            Membership Organizations
          </h1>

          <span className="max-w-[280px] text-center text-naturalGrey leading-[18px] text-[15px]">
            Our membership management software provides full automation of
            membership renewals and payments
          </span>
        </div>

        <div className="flex flex-col justify-center items-center gap-5">
          <div className="w-[50px] h-[50px] rounded-[6px_3px_15px_3px] bg-Tint5 relative">
            <img
              className="absolute -left-[15px] w-[45px] top-[-8px]"
              src="./building.png"
              alt="Membership"
            />
          </div>

          <h1 className="max-w-[200px] text-[25px] text-naturalD_Grey font-bold leading-[30px] text-center">
            National Associations
          </h1>

          <span className="max-w-[280px] text-center text-naturalGrey leading-[18px] text-[15px]">
            Our membership management software provides full automation of
            membership renewals and payments
          </span>
        </div>

        <div className="flex flex-col justify-center items-center gap-5">
          <div className="w-[50px] h-[50px] rounded-[6px_3px_15px_3px] bg-Tint5 relative">
            <img
              className="absolute -left-[15px] w-[45px] top-[-8px]"
              src="./hand.png"
              alt="Membership"
            />
          </div>

          <h1 className="max-w-[200px] text-[25px] text-naturalD_Grey font-bold leading-[30px] text-center">
            Clubs And Groups
          </h1>

          <span className="max-w-[280px] text-center text-naturalGrey leading-[18px] text-[15px]">
            Our membership management software provides full automation of
            membership renewals and payments
          </span>
        </div>
      </div>
    </section>
  );
};

export default Community;
