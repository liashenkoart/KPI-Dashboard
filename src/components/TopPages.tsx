import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import useWindowSize from "../hooks/useWindowSize";
import { TOP_PAGES_MOCK } from "../utils/data";
import { Box } from "./Box";

const COLORS = ["#414468", "#E4E6F7", "#FF6493"];

export const TopPages = () => {
  const { width } = useWindowSize();
  const isMobile = width ? width < 768 : false;

  return (
    <Box>
      <h2 className="box-title">Top Pages by Conversion</h2>

      <div className="h-full items-end flex">
        <ResponsiveContainer
          height={180}
          width={isMobile ? "60%" : "100%"}
          className="mx-auto"
        >
          <BarChart
            layout="vertical"
            data={TOP_PAGES_MOCK}
            barCategoryGap={40}
            barSize={23}
          >
            <YAxis
              dataKey="name"
              tickMargin={25}
              type="category"
              tick={{ fontSize: 10, fill: "#A2A6D1" }}
            />
            <XAxis axisLine={false} tick={false} type="number" />
            <Bar dataKey="pv">
              {TOP_PAGES_MOCK.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              <LabelList
                dataKey="percentage"
                position="right"
                fill="#A2A6D1"
                className="text-[8px] translate-x-2"
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Box>
  );
};
