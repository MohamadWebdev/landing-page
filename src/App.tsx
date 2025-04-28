import {
  Clients,
  Community,
  Hero,
  Navbar,
  Unlock,
  Achievements,
  Calender,
  Customers,
  CommunityUpdates,
} from "./components";

import { UseContext } from "./context/contextProvider";
import Footer from "./components/Footer";

const App = () => {
  const { toggle }: any = UseContext();
  return (
    <div
      className={`w-full ${
        toggle && "overflow-y-hidden"
      } h-full overflow-y-auto z-0 _shadow`}
    >
      <div className={`${!toggle && "relative"} _shadow`}>
        <div
          className={`w-full max-w-[1002.34px] mx-auto min-[1000px]:px-20 px-5`}
        >
          {/* Navbar */}
          <Navbar />
        </div>
      </div>

      {/* Hero */}
      <div className="bg-naturalSilver">
        <div className="w-full max-w-[1002.34px] mx-auto min-[1000px]:px-20 px-5">
          <Hero />
        </div>
      </div>

      <div className="w-full max-w-[1002.34px] mx-auto min-[1000px]:px-20 px-5">
        {/* Clients */}
        <Clients />

        {/* Community */}
        <Community />

        {/* Unlock */}
        <Unlock />
      </div>

      <div className="bg-naturalSilver w-full">
        <div className="w-full max-w-[1002.34px] mx-auto min-[1000px]:px-20 px-5">
          {/* Achievements */}
          <Achievements />
        </div>
      </div>

      <div className="w-full max-w-[1002.34px] mx-auto min-[1000px]:px-20 px-5">
        {/* Calender */}
        <Calender />
      </div>

      <div className="bg-naturalSilver w-full">
        <div className="w-full max-w-[1002.34px] mx-auto min-[1000px]:px-20 px-5">
          {/* Customers */}
          <Customers />
        </div>
      </div>

      <div className="w-full max-w-[1002.34px] mx-auto min-[1000px]:px-20 px-5">
        {/* CommunityUpdates */}
        <CommunityUpdates />
      </div>

      <div className="bg-naturalSilver w-full">
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
