import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

import React from "react";

const data = [
  { date: "Apr 20", income: 0, expenses: 0 },
  { date: "Apr 25", income: 0, expenses: 0 },
  { date: "Apr 30", income: 0, expenses: 0 },
  { date: "May 05", income: 0, expenses: 0 },
  { date: "May 10", income: 0, expenses: 0 },
  { date: "May 15", income: 0, expenses: 0 },
];

const pieData = [
    { name: "Completed", value: 70 },
    { name: "Remaining", value: 30 },
];

const COLORS = [
  "#155DFC",
  "#E5E7EB",
];

const activityData  = [
  { type: "Task", completed:2, total:4},
  { type: "Todos", completed:0, total:0},
  { type: "Study", completed:0, total:0},
  { type: "Goals", completed:0, total:0},
];

function FinancialChart() {
  return (
    <div className="bg-white rounded-3xl p-4 h-[411px] w-[750.53px] shadow-lg">
      
      <h2 className="text-2xl font-semibold mb-6">
        📈 Financial Trend (Last 30 Days)
      </h2>

      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          
          <XAxis dataKey="date" />
          <YAxis />

          <Tooltip />
          <Legend />

          {/* Income Line */}
          <Line
            type="monotone"
            dataKey="income"
            stroke="#10B981"
            strokeWidth={3}
          />

          {/* Expense Line */}
          <Line
            type="monotone"
            dataKey="expenses"
            stroke="#EF4444"
            strokeWidth={3}
          />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// export default FinancialChart;


function Productivity() {

    return (

        <div className="w-[410px] h-[411px] shadow-lg bg-white rounded-3xl p-4 flex flex-col justify-around">

            <h2 className="text-2xl font-semibold mb-6">
                    Productivity Score
            </h2>

            <ResponsiveContainer width="100%" height="35%">
                <PieChart>

                    <Pie 
                    data={pieData}
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                    cx="50%"
                    cy="75%"
                    innerRadius={70}
                    outerRadius={90}
                    >
                           {pieData.map((entry,index) => (

                            <Cell
                            key={index}
                            fill={COLORS[index]}/>

                           ))} 

                    </Pie>

                </PieChart>
            </ResponsiveContainer>

            <div className="flex flex-col items-center">
              <h1 className="text text-[34px]">0%</h1>
              <p className="text text-[13.3px]">Need improvement</p>
            </div>

            <div className="flex justify-between">
              <p className="text text-[11.7px]">Tasks</p>
              <p className="text text-[13px] font-semibold">0%</p>
            </div>

            <div className="flex justify-between">
              <p className="text text-[11.7px]">Study Progress</p>
              <p className="text text-[13px] font-semibold">0%</p>
            </div>

        </div>

    );
}

function Activity() {
  return(
    <div className="w-[588.4px] h-[405px] rounded-[14px] shadow-lg p-4">

      <h1 className="text-2xl font-semibold mb-6">Activity Completion</h1>

      <ResponsiveContainer width="100%" height="90%">

        <BarChart data={activityData}>

          <XAxis dataKey="type"/>
          <YAxis/>
          
          <Tooltip/>
          <Legend />

          <Bar
            dataKey="completed"
            fill="#FCA5A5"
            radius={[8, 8, 0, 0]}
            barSize={50}
          />

          <Bar
            dataKey="total"
            fill="#22C55E"
            radius={[8, 8, 0, 0]}
            barSize={50}
            />

        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export {FinancialChart,Productivity,Activity}