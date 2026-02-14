import { forwardRef } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#ef4444", "#3b82f6", "#f59e0b", "#10b981"];

const EmissionChart = forwardRef(({ breakdown }, ref) => {
  if (!breakdown) return null;

  const data = [
    { name: "Diesel", value: breakdown.diesel },
    { name: "Electricity", value: breakdown.electricity },
    { name: "Explosives", value: breakdown.explosives },
    { name: "Methane", value: breakdown.methane },
  ];

  return (
    <div ref={ref} className="mt-10 flex justify-center">
      {/* Tailwind-free wrapper for PDF capture */}
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "20px",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "600px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "18px", fontWeight: 600 }}>
          Emission Breakdown
        </h2>
        <p style={{ textAlign: "center", color: "#555", marginBottom: "10px" }}>
          Contribution of each emission source
        </p>

        <div style={{ height: "300px" }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={110}
                label
              >
                {data.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
});

export default EmissionChart;
