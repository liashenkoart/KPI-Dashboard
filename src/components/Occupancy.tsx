import { useState } from "react";
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
import { OCCUPANCY_MOCK_DATA } from "../utils/data";
import { Box } from "./Box";
import Button from "./Button";
import CustomModal from "./CustomModal";

export const Occupancy = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <>
      <Box classes="md:col-span-2">
        <div className="flex items-center justify-between">
          <h2 className="box-title">Occupancy</h2>
          <Button title="+" onClick={() => setIsOpenModal(true)} />
        </div>

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

          <div className="lg:w-44"></div>
        </div>
      </Box>

      <CustomModal open={isOpenModal} setIsOpen={() => setIsOpenModal(false)}>
        <h2>Occupancy</h2>
      </CustomModal>
    </>
  );
};
