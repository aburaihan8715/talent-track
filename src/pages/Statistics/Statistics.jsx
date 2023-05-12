import React from "react";
import "./Statistics.css";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const data = [
    { week: "1st", value: 58 },
    { week: "2nd", value: 60 },
    { week: "3rd", value: 50 },
    { week: "4th", value: 58 },
    { week: "5th", value: 49 },
    { week: "6th", value: 60 },
    { week: "7th", value: 58 },
  ];
  const data2 = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="heading_secondary ps-5 mt-5">Assignment marks of 7th Week!</h2>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-12 py-5">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#da77f2" fill="#9775fa" />
            </AreaChart>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
