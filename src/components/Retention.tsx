import {
  Area,
  AreaChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { SESSIONS_MOCK_DATA } from "../utils/data";
import { Box } from "./Box";

export const Retention = () => {
  return (
    <Box>
      <h2 className="box-title">Retention</h2>

      <div className="mt-2 flex items-center justify-center h-full">
        <ResponsiveContainer height={200} width="120%">
          <AreaChart data={SESSIONS_MOCK_DATA} margin={{ left: 10, right: 10 }}>
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
  );
};
