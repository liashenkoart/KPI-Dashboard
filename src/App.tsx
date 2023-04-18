import { Occupancy } from "./components/Occupancy";
import { Marketing } from "./components/Marketing";
import { ReputationManagement } from "./components/ReputationManagement";
import { FinancialManagement } from "./components/FinancialManagement";
import { Delinquency } from "./components/Delinquency";
import { Retention } from "./components/Retention";
import { LeaseFileAudit } from "./components/LeaseFileAudit";

function App() {
  return (
    <div className="container">
      <div className="py-8 md:py-[74px] gap-[18px] h-screen grid lg:grid-rows-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        <Occupancy />
        <Delinquency />
        <Retention />
        <FinancialManagement />
        <LeaseFileAudit />
        <ReputationManagement />
        <Marketing />
      </div>
    </div>
  );
}

export default App;
