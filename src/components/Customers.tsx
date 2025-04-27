import { FaLongArrowAltRight } from "react-icons/fa";

const Customers = () => {
  return (
    <section className="w-full max-[880px]:flex-col flex justify-between py-10 mt-10 flex-wrap">
      <div className="min-[880px]:max-w-[300px] w-full flex max-[880px]:justify-center">
        <img src="./customerImg.png" alt="customerImg" className="w-full max-[880px]:max-w-[300px]" />
      </div>

      <div className="flex flex-col justify-between items-start min-[880px]:max-w-[520.66px] w-full min-[880px]:pb-5 min-[880px]:pt-1 pt-5 max-[880px]:gap-3">
        <p className="w-full text-[12px] text-naturalGrey font-medium leading-[16px]">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>

        <h1 className="text-[15px] leading-[19px] text-Primary font-semibold">
          Tim Smith
        </h1>

        <span className="text-[12px] text-naturalL_Grey ">
          British Dragon Boat Racing Association
        </span>

        <div className="flex gap-3 max-[880px]:w-full max-[880px]:justify-between flex-wrap">
          <img className="w-[40px]" src="./client.png" alt="client" />
          <img className="w-[40px]" src="./client2.png" alt="client" />
          <img className="w-[40px]" src="./client3.png" alt="client" />
          <img className="w-[40px]" src="./client4.png" alt="client" />
          <img className="w-[40px]" src="./client5.png" alt="client" />
          <img className="w-[40px]" src="./client6.png" alt="client" />

          <button className="flex justify-center items-center p-2 gap-2 text-Primary">
            Meet all customers <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Customers;
