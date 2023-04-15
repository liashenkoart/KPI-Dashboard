import { Audence } from "./components/Audence";
import { Box } from "./components/Box";

function App() {
  return (
    <div className="container">
      <div className="py-[74px] gap-[18px] h-screen grid lg:grid-rows-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        <Audence />

        <Box classes="xl:col-span-2">
          <h2 className="box-title">Payment Last 3 Weeks</h2>
        </Box>

        <Box>
          <h2 className="box-title">Session over Time</h2>
        </Box>

        <Box>
          <h2 className="box-title">Paid vs Organic New Users</h2>
        </Box>

        <Box>
          <h2 className="box-title">Top pages by Conversion</h2>
        </Box>

        <Box classes="xl:col-span-2">
          <h2 className="box-title">MRR Movement</h2>
        </Box>

        <Box>
          <h2 className="box-title">Average Conversion Rate</h2>
        </Box>
      </div>
    </div>
  );
}

export default App;
