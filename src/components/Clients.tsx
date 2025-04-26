const Clients = () => {
  return (
    <section className="w-full flex flex-col mt-10">
      <div className="flex justify-center flex-col items-center w-full gap-3">
        <h1 className="text-[30px] text-naturalD_Grey font-semibold leading-[30px]">
          Our Clients
        </h1>

        <span className="text-[15px] text-center text-naturalGrey leading-[16px]">
          We have been working with some Fortune 500+ clients
        </span>
      </div>

      <div className="w-full flex justify-between items-center p-5 flex-wrap">
        <img className="w-[50px]" src="./client.png" alt="client" />
        <img className="w-[50px]" src="./client2.png" alt="client" />
        <img className="w-[50px]" src="./client3.png" alt="client" />
        <img className="w-[50px]" src="./client4.png" alt="client" />
        <img className="w-[50px]" src="./client5.png" alt="client" />
        <img className="w-[50px]" src="./client6.png" alt="client" />
        <img className="w-[50px]" src="./client7.png" alt="client" />
      </div>
    </section>
  );
};

export default Clients;
