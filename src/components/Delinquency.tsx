import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  YAxis,
} from "recharts";
import { PAYMENTS_MOCK_DATA } from "../utils/data";
import { Box } from "./Box";

export const Delinquency = () => {
  return (
    <Box classes="xl:col-span-2">
      <h2 className="box-title">Delinquency</h2>

      <div className="mt-2 h-full flex items-center">
        <ResponsiveContainer height={200} width="100%">
          <LineChart margin={{ bottom: 20, top: 20 }} data={PAYMENTS_MOCK_DATA}>
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
  );
};
