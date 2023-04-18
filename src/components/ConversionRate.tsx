import { PieChart, Pie, Cell, Label, ResponsiveContainer } from "recharts";
import { CONVERSION_RATE_MOCK_DATA } from "../utils/data";
import { Box } from "./Box";

const COLORS = ["#FF6493", "#E4E6F7"];

export const ConversionRate = () => {
  return (
    <Box>
      <h2 className="box-title">Average Conversion Rate</h2>

      <div className="flex items-center justify-center gap-4 h-full mt-2 lg:mt-0">
        <ResponsiveContainer width={176} height="95%">
          <PieChart>
            <Pie
              data={CONVERSION_RATE_MOCK_DATA}
              cx="50%"
              startAngle={-270}
              endAngle={360}
              cy="50%"
              innerRadius={60}
              outerRadius={85}
              fill="#8884d8"
              dataKey="value"
            >
              <Label value="43%" position="center" />
              {CONVERSION_RATE_MOCK_DATA.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Box>
  );
};
