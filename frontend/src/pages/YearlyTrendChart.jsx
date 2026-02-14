import { forwardRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const YearlyTrendChart = forwardRef((props, ref) => {
  const data = [
    { year: 2021, emissions: 42000 },
    { year: 2022, emissions: 39500 },
    { year: 2023, emissions: 36000 },
    { year: 2024, emissions: 33000 },
    { year: 2025, emissions: 31110 },
  ];

  return (
    <div ref={ref} className="mt-10 bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-center mb-2">
        Multi-Year Emission Trend
      </h2>
      <p className="text-center text-gray-600 mb-4">
        CO₂ emissions over last 5 years (kg)
      </p>

      <div className="h-72">
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="emissions"
              stroke="#dc2626"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
});

export default YearlyTrendChart;
