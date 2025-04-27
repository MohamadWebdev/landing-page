const AchievementsCard = ({
  img,
  number,
  title,
}: {
  img: string;
  number: string;
  title: string;
}) => {
  return (
    <div className="flex items-center gap-4 max-w-[180px] w-full">
      <img src={img} alt="user2" className="w-[50px]" />

      <div className="">
        <h1 className="text-naturalD_Grey text-[20px] font-bold">{number}</h1>

        <span className="text-[12px] text-naturalGrey leading-[10px]">
          {title}
        </span>
      </div>
    </div>
  );
};

export default AchievementsCard;
