import { Occupancy } from "./components/Occupancy";
import { Marketing } from "./components/Marketing";
import { ReputationManagement } from "./components/ReputationManagement";
import { FinancialManagement } from "./components/FinancialManagement";
import { Delinquency } from "./components/Delinquency";
import { Retention } from "./components/Retention";
import { LeaseFileAudit } from "./components/LeaseFileAudit";
import { useAppDispatch, useAppSelector } from "./lib/hooks";
import CustomModal from "./components/CustomModal";
import { PrelimQuestionsModal } from "./components/Modals/PrelimQuestionsModal";
import { toggleModal } from "./lib/slices/ui";
import { Question } from "phosphor-react";

function App() {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.ui.isOpenModal);
  const modalType = useAppSelector((state) => state.ui.modalType);

  return (
    <>
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

      <div
        onClick={() =>
          dispatch(toggleModal({ value: true, type: "questions" }))
        }
        className="fixed bg-pink-200 cursor-pointer hover:scale-105 transform transition-all bottom-1/2 right-0 p-3 shadow-lg flex items-center justify-center rounded-md"
      >
        <Question size={30} className="text-blue-900" />
      </div>

      <CustomModal
        open={isModalOpen && modalType === "questions"}
        setIsOpen={() =>
          dispatch(toggleModal({ value: false, type: "questions" }))
        }
      >
        <PrelimQuestionsModal />
      </CustomModal>
    </>
  );
}

export default App;
