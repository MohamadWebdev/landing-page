import Navbar from "./components/Navbar"
import { UseContext } from "./context/contextProvider"

const App = () => {
  const {toggle}:any = UseContext()
  return (
    <div className={`w-full ${toggle} h-full overflow-y-auto z-0`}>
      <div className="w-full max-w-[1002.34px] mx-auto min-[1000px]:px-20 px-5">
        {/* Navbar */}
        <Navbar/>
        {/* Hero */}
        {/* Clients */}
        {/* Community */}
        {/* Unlock */}
        {/* Achievements */}
        {/* Calender */}
        {/* Customers */}
        {/* CommunityUpdates */}
        {/* Footer */}
      </div>
    </div>
  )
}

export default App