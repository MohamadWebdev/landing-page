import AchievementsCard from "./AchievementsCard";

const Achievements = () => {
  return (
    <section className="w-full min-[750px]:justify-between max-[750px]:justify-center flex mt-20 py-[60px] flex-wrap items-center">
      <div className="max-[750px]:max-w-[375.88px] max-[750px]:w-full">
        <h1 className="text-[26px] text-naturalD_Grey leading-[30px] font-semibold text-left mb-4">
          Helping a local <br className="max-md:hidden" />
          <span className="text-Primary">business reinvent itself</span>
        </h1>

        <span className="text-[13px] text-naturalD_Grey">
          We reached here with our hard work and dedication
        </span>
      </div>

      <div className="max-w-[380.88px] max-md:w-full flex flex-wrap justify-between gap-5 max-[750px]:mt-10">
        <AchievementsCard
          img="./user2.png"
          number="2,245,341"
          title="Members"
        />
        <AchievementsCard img="./hand2.png" number="46,328" title="Clubs" />
        <AchievementsCard
          img="./hand3.png"
          number="828,867"
          title="Event Bookings"
        />
        <AchievementsCard img="./card.png" number="1,926,436" title="Payments" />
      </div>
    </section>
  );
};

export default Achievements;
