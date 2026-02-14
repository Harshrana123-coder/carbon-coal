import { useState, useRef } from "react";
import axios from "axios";
import EmissionChart from "./EmissionChart";
import YearlyTrendChart from "./YearlyTrendChart";
import MineComparisonChart from "./MineComparisonChart";
import { generateReport } from "../utils/generateReport";

export default function Calculator() {
  const pieRef = useRef(null);
  const trendRef = useRef(null);
  const mineRef = useRef(null);

  const [form, setForm] = useState({
    dieselLitres: "",
    electricityKwh: "",
    explosivesKg: "",
    methaneTons: "",
  });

  const [result, setResult] = useState(null);

  const submit = async () => {
    const res = await axios.post(
      "http://carbon-coal.onrender.com/api/emission/calculate",
      form
    );
    setResult(res.data);
  };

  const breakdown = {
    diesel: form.dieselLitres * 2.68,
    electricity: form.electricityKwh * 0.82,
    explosives: form.explosivesKg * 5.0,
    methane: form.methaneTons * 25000,
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl">

        <h1 className="text-4xl font-bold text-center text-red-600 mb-2">
          CoalCarbon Insight
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Carbon Footprint Calculator for Coal Mines
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(form).map((k) => (
            <div key={k}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {k.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="number"
                value={form[k]}
                className="w-full rounded-lg border border-gray-300 px-4 py-2"
                placeholder={`Enter ${k}`}
                onChange={(e) =>
                  setForm({ ...form, [k]: Number(e.target.value) })
                }
              />
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={submit}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl"
          >
            Calculate Emissions
          </button>
        </div>

        {result && (
          <>
            <div className="mt-8 bg-green-50 border rounded-xl p-6 text-center">
              <p className="text-lg">Total CO₂ Emissions</p>
              <p className="text-3xl font-bold text-green-700">
                {result.totalCO2e} kg
              </p>
            </div>

            {/* 👇 refs DIRECTLY to components */}
            <EmissionChart ref={pieRef} breakdown={breakdown} />
            <YearlyTrendChart ref={trendRef} />
            <MineComparisonChart ref={mineRef} />

            <div className="mt-6 flex justify-center">
              <button
                onClick={() =>
                  generateReport({
                    form,
                    result: { ...result, breakdown },
                    pieRef,
                    trendRef,
                    mineRef,
                  })
                }
                className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-xl"
              >
                Download PDF Report
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
