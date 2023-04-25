import {
  Area,
  AreaChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { toggleModal } from "../lib/slices/ui";
import { SESSIONS_MOCK_DATA } from "../utils/data";
import { Box } from "./Box";
import { BoxTitle } from "./BoxTitle";
import CustomModal from "./CustomModal";
import { RetentionModal } from "./Modals/RetentionModal";

export const Retention = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.ui.isOpenModal);
  const modalType = useAppSelector((state) => state.ui.modalType);

  return (
    <>
      <Box>
        <BoxTitle hasButton title="Retention" />

        <div className="mt-2 flex items-center justify-center h-full">
          <ResponsiveContainer height={200} width="120%">
            <AreaChart
              data={SESSIONS_MOCK_DATA}
              margin={{ left: 10, right: 10 }}
            >
              <Area dataKey="value" stroke="#ECEBF1" fill="#F3F3FD">
                <LabelList
                  dataKey="value"
                  position="top"
                  className="text-[8px] text-blue-300 -translate-y-2"
                />
              </Area>
              <Tooltip />
              <XAxis
                dataKey="month"
                interval={0}
                tickCount={4}
                tick={{ fontSize: 8, fill: "#A2A6D1" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Box>

      <CustomModal
        open={isModalOpen && modalType === "Retention"}
        setIsOpen={() =>
          dispatch(toggleModal({ value: false, type: "Retention" }))
        }
      >
        <RetentionModal />
      </CustomModal>
    </>
  );
};
