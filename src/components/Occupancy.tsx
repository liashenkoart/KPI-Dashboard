import {
  Bar,
  BarChart,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { toggleModal } from "../lib/slices/ui";
import { OCCUPANCY_MOCK_DATA } from "../utils/data";
import { Box } from "./Box";
import { BoxTitle } from "./BoxTitle";
import CustomModal from "./CustomModal";
import { OccupancyModal } from "./Modals/OccupancyModal";

export const Occupancy = () => {
  const dispatch = useAppDispatch();
  const isOpenModal = useAppSelector((state) => state.ui.isOpenModal);
  const modalType = useAppSelector((state) => state.ui.modalType);

  return (
    <>
      <Box classes="md:col-span-2">
        <BoxTitle hasButton title="Occupancy" />

        <div className="flex items-center lg:justify-center gap-4 h-full mt-2 lg:mt-0">
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={OCCUPANCY_MOCK_DATA}>
              <Tooltip />
              <Bar dataKey="profit" fill="#8884d8">
                <LabelList
                  dataKey="profit"
                  position="top"
                  fill="#A2A6D1"
                  className="text-[10px]"
                />
              </Bar>
              <Bar dataKey="loss" fill="#82ca9d">
                <LabelList
                  dataKey="loss"
                  position="top"
                  fill="#A2A6D1"
                  className="text-[10px]"
                />
              </Bar>
              <Bar dataKey="comps" fill="#FF6493" />
              <XAxis dataKey="month" tick={{ fontSize: 10 }} tickLine={false} />
              <YAxis type="number" tick={{ fontSize: 10 }} tickLine={false} />
              <Legend />
            </BarChart>
          </ResponsiveContainer>

          <div className="lg:w-36"></div>
        </div>
      </Box>

      <CustomModal
        open={isOpenModal && modalType === "Occupancy"}
        setIsOpen={() =>
          dispatch(toggleModal({ value: false, type: "Occupancy" }))
        }
      >
        <OccupancyModal />
      </CustomModal>
    </>
  );
};
