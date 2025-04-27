import { FaLongArrowAltRight } from "react-icons/fa";

interface Props {
  img: string;
  title: string;
}

const UpdatesCard = ({ img, title }: Props) => {
  return (
    <section className="h-[260px] w-[256.15px] relative flex justify-center items-end max-[825px]:mt-5">
      <img
        src={img}
        alt="updateImg1"
        className="w-full absolute z-0 rounded-[5px] top-0 left-0"
      />

      <div className="h-[125px] z-10 w-[220px] rounded-[5px] bg-naturalSilver flex justify-center items-center flex-col p-3 gap-3 _shadow2">
        <h2 className="font-semibold text-[14px] leading-[20px] text-naturalGrey w-full text-center">
          {title}
        </h2>

        <button className="w-full text-Primary flex justify-center items-center gap-2">
          Read More <FaLongArrowAltRight />
        </button>
      </div>
    </section>
  );
};

export default UpdatesCard;
