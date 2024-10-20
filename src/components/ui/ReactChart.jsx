import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: '12AM', uv: 2000 },
  { name: '01AM', uv: 2000 },
  { name: '02AM', uv: 2800 },
  { name: '03AM', uv: 4900 },
  { name: '04AM', uv: 3700 },
  { name: '05AM', uv: 4600 },
  { name: '09AM', uv: 3000 },
  { name: '10AM', uv: 4400 },
  { name: '11AM', uv: 2900 },
];

const ReactChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#242526" />
        <XAxis dataKey="name" stroke="#2F4F4F" tick={{ fontSize: 10 }} />
        <YAxis stroke="#2F4F4F" tick={{ fontSize: 10 }} />
        <Tooltip
          wrapperStyle={{ backgroundColor: "#444" }}
          cursor={false}
        />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#49C2A9"
          strokeWidth={2}
          dot={false}
          activeDot={{
            r: 8,
            fill: '#FFFFFF',
            stroke: '#49C2A9',
            strokeWidth: 2,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ReactChart;
