import {
  PieChart,
  Pie,
  Cell,
  Label,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Payload } from "recharts/types/component/DefaultLegendContent";
import { AUDENCE_MOCK_DATA } from "../utils/data";
import { Box } from "./Box";

const COLORS = ["#FF6493", "#414468", "#FFE2E0", "#FFA2AB"];
const visitors = "32,762";

export const Audence = () => {
  const renderCustomLegend = (props: { payload?: Payload[] }) => {
    const { payload } = props;
    return (
      <div className="flex flex-col gap-3">
        {payload?.map((entry, index) => {
          const { color } = entry;

          return (
            <div key={`item-${index}`} className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded-full shadow-sm"
                style={{ background: color }}
              ></div>
              <span className="text-[10px] text-blue-300">
                {entry.value} - 16,024
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Box classes="md:col-span-2">
      <h2 className="box-title">Audence by Channels</h2>

      <div className="flex items-center lg:justify-center gap-4 h-full mt-2 lg:mt-0">
        <ResponsiveContainer width={176} height="95%">
          <PieChart>
            <Pie
              data={AUDENCE_MOCK_DATA}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={85}
              fill="#8884d8"
              dataKey="value"
            >
              <Label value={visitors} position="centerBottom" />
              <Label
                value="Website Visitors"
                position="centerTop"
                className="text-[9px] translate-y-2 text-blue-200"
              />
              {AUDENCE_MOCK_DATA.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend
              verticalAlign="middle"
              wrapperStyle={{
                left: 200,
                position: "absolute",
              }}
              content={renderCustomLegend}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="lg:w-44"></div>
      </div>
    </Box>
  );
};
