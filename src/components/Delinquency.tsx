import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  YAxis,
} from "recharts";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { toggleModal } from "../lib/slices/ui";
import { PAYMENTS_MOCK_DATA } from "../utils/data";
import { Box } from "./Box";
import { BoxTitle } from "./BoxTitle";
import CustomModal from "./CustomModal";
import { DelinquencyModal } from "./Modals/DelinquencyModal";

export const Delinquency = () => {
  const dispatch = useAppDispatch();
  const isOpenModal = useAppSelector((state) => state.ui.isOpenModal);
  const modalType = useAppSelector((state) => state.ui.modalType);

  return (
    <>
      <Box classes="xl:col-span-2">
        <BoxTitle hasButton title="Delinquency" />

        <div className="mt-2 h-full flex items-center">
          <ResponsiveContainer height={200} width="100%">
            <LineChart
              margin={{ bottom: 20, top: 20 }}
              data={PAYMENTS_MOCK_DATA}
            >
              <CartesianGrid vertical={false} />
              <Line
                dataKey="amount"
                stroke="#8884d8"
                dot={{ r: 4, fill: "#414468" }}
              />
              <Tooltip />
              <YAxis
                dataKey="amount"
                tick={{ fontSize: 10, fill: "#A2A6D1" }}
                tickLine={false}
                axisLine={false}
                tickCount={5}
                // allowDataOverflow={true}
                type="number"
                tickMargin={9}
                domain={[1000, 4000]}
                interval={0}
                tickFormatter={(str) => `$${str}`}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Box>

      <CustomModal
        open={isOpenModal && modalType === "Delinquency"}
        setIsOpen={() =>
          dispatch(toggleModal({ value: false, type: "Delinquency" }))
        }
      >
        <DelinquencyModal />
      </CustomModal>
    </>
  );
};
