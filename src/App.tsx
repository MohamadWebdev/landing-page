import Clients from "./components/Clients";
import Community from "./components/Community";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Unlock from "./components/Unlock";
import Achievements from "./components/Achievements";
import Calender from "./components/Calender";
import Customers from "./components/Customers";
import CommunityUpdates from "./components/CommunityUpdates";
import { UseContext } from "./context/contextProvider";
import Footer from "./components/Footer";

const App = () => {
  const { toggle }: any = UseContext();
  return (
    <div className={`w-full ${toggle} h-full overflow-y-auto z-0`}>
      <div className="w-full max-w-[1002.34px] mx-auto min-[1000px]:px-20 px-5">
        {/* Navbar */}
        <Navbar />
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
