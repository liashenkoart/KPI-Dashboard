import { Audence } from "./components/Audence";
import { Box } from "./components/Box";
import { MRRMovement } from "./components/MRRMovement";
import { PaidNewUsers } from "./components/PaidNewUsers";
import { TopPages } from "./components/TopPages";

function App() {
  return (
    <div className="container">
      <div className="py-8 md:py-[74px] gap-[18px] h-screen grid lg:grid-rows-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        <Audence />

        <Box classes="xl:col-span-2">
          <h2 className="box-title">Payment Last 3 Weeks</h2>
        </Box>

        <Box>
          <h2 className="box-title">Session over Time</h2>
        </Box>

        <PaidNewUsers />
        <TopPages />
        <MRRMovement />

        <Box>
          <h2 className="box-title">Average Conversion Rate</h2>
        </Box>
      </div>
    </div>
  );
}

export default App;
