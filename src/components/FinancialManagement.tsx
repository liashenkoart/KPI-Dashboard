import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import useWindowSize from "../hooks/useWindowSize";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { toggleModal } from "../lib/slices/ui";
import { PAID_NEW_USERS_MOCK } from "../utils/data";
import { Box } from "./Box";
import { BoxTitle } from "./BoxTitle";
import CustomModal from "./CustomModal";
import { FinancialManagementModal } from "./Modals/FinancialManagementModal";

const COLORS = ["#E4E6F7", "#FF6493"];

export const FinancialManagement = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.ui.isOpenModal);
  const modalType = useAppSelector((state) => state.ui.modalType);

  const { width } = useWindowSize();
  const isMobile = width ? width < 768 : false;

  return (
    <>
      <Box>
        <BoxTitle hasButton title="Financial Management" />

        <div className="h-full items-end flex">
          <ResponsiveContainer
            height={180}
            width={isMobile ? "60%" : "90%"}
            className="mx-auto"
          >
            <BarChart
              data={PAID_NEW_USERS_MOCK}
              margin={{
                top: 20,
                bottom: 0,
              }}
            >
              <XAxis dataKey="name" tick={false} />
              <Bar dataKey="pv">
                {PAID_NEW_USERS_MOCK.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
                <LabelList
                  dataKey="name"
                  position="top"
                  fill="#A2A6D1"
                  className="text-[10px] -translate-y-1"
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Box>

      <CustomModal
        open={isModalOpen && modalType === "Financial Management"}
        setIsOpen={() =>
          dispatch(toggleModal({ value: false, type: "Financial Management" }))
        }
      >
        <FinancialManagementModal />
      </CustomModal>
    </>
  );
};
