import {
  Bar,
  BarChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { toggleModal } from "../lib/slices/ui";
import { MRRMOVEMENT_MOCK } from "../utils/data";
import { Box } from "./Box";
import { BoxTitle } from "./BoxTitle";
import CustomModal from "./CustomModal";
import { ReputationModal } from "./Modals/ReputationModal";

const COLORS = ["#414468", "#E4E6F7", "#FF6493"];

export const ReputationManagement = () => {
  const dispatch = useAppDispatch();
  const isOpenModal = useAppSelector((state) => state.ui.isOpenModal);
  const modalType = useAppSelector((state) => state.ui.modalType);

  return (
    <>
      <Box classes="md:col-span-2 overflow-y-scroll">
        <BoxTitle title="Reputation Management" hasButton />

        <div className="mt-3 flex">
          <ResponsiveContainer width="100%" height={170}>
            <BarChart
              barCategoryGap={8}
              data={MRRMOVEMENT_MOCK}
              stackOffset="sign"
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <ReferenceLine y={0} fill="#E4E6F7" />
              <CartesianGrid vertical={false} color="#E4E6F7" opacity={0.4} />
              <Bar dataKey="uv" stackId="a" fill={COLORS[2]} />
              <Bar dataKey="tp" stackId="a" fill={COLORS[0]} />
              <Bar dataKey="pv" stackId="a" fill={COLORS[1]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-2 flex items-center justify-around">
          <div className="flex items-center gap-3">
            <div className={`h-3 w-3 rounded-full shadow-sm bg-blue-500`} />
            <span className="text-xs text-blue-300">New MRR</span>
          </div>
          <div className="flex items-center gap-3">
            <div className={`h-3 w-3 rounded-full shadow-sm bg-blue-100`} />
            <span className="text-xs text-blue-300">Expansion</span>
          </div>
          <div className="flex items-center gap-3">
            <div className={`h-3 w-3 rounded-full shadow-sm bg-pink-500`} />
            <span className="text-xs text-blue-300">Contraction</span>
          </div>
        </div>
      </Box>

      <CustomModal
        open={isOpenModal && modalType === "Reputation Management"}
        setIsOpen={() =>
          dispatch(toggleModal({ value: false, type: "Reputation Management" }))
        }
      >
        <ReputationModal />
      </CustomModal>
    </>
  );
};
