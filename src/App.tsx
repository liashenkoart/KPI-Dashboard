import { Audence } from "./components/Audence";
import { ConversionRate } from "./components/ConversionRate";
import { MRRMovement } from "./components/MRRMovement";
import { PaidNewUsers } from "./components/PaidNewUsers";
import { Payment } from "./components/Payment";
import { SessionsOverTime } from "./components/SessionsOverTime";
import { TopPages } from "./components/TopPages";

function App() {
  return (
    <div className="container">
      <div className="py-8 md:py-[74px] gap-[18px] h-screen grid lg:grid-rows-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        <Audence />
        <Payment />
        <SessionsOverTime />
        <PaidNewUsers />
        <TopPages />
        <MRRMovement />
        <ConversionRate />
      </div>
    </div>
  );
}

export default App;
