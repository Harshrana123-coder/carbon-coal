import { forwardRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const MineComparisonChart = forwardRef((props, ref) => {
  const data = [
    { mine: "Jharia", emissions: 52000 },
    { mine: "Bokaro", emissions: 41000 },
    { mine: "Raniganj", emissions: 36000 },
    { mine: "Talcher", emissions: 29000 },
  ];

  return (
    <div ref={ref} className="mt-10 bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-center mb-2">
        Mine-Wise Emission Comparison
      </h2>
      <p className="text-center text-gray-600 mb-4">
        Annual CO₂ emissions by mine (kg)
      </p>

      <div className="h-72">
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mine" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="emissions"
              fill="#16a34a"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
});

export default MineComparisonChart;
