import UpdatesCard from "./UpdatesCard";

const CommunityUpdates = () => {
  return (
    <section className="w-full flex-col flex justify-center items-center mt-16 mb-5">
      <div className="flex justify-center items-center flex-col w-full gap-3">
        <h1 className="text-[26px] text-naturalD_Grey font-semibold leading-[30px]">
          Caring is the new marketing
        </h1>

        <p className="text-[12px] text-naturalD_Grey leading-[16px] text-center max-w-[450px]">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.​
        </p>
      </div>

      <div className="flex w-full justify-between flex-wrap mt-10 max-md:flex-col max-md:justify-center max-md:items-center">
        <UpdatesCard
          img="./updateImg1.png"
          title="Creating Streamlined Safeguarding Processes with OneRen"
        />
        <UpdatesCard
          img="./updateImg2.png"
          title="What are your safeguarding responsibilities and how can you manage them?"
        />
        <UpdatesCard
          img="./updateImg3.png"
          title="Revamping the Membership Model with Triathlon Australia"
        />
      </div>
    </section>
  );
};

export default CommunityUpdates;
