import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const topic = useLoaderData().data;
  console.log(topic);
  //   const gotData = getData.data;
  //   console.log(gotData);

  return (
    <div>
      {/* <p>This is Statistics Page {getData.legnth} </p> */}


    <div >
    <BarChart width={500} height={250} data={topic}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#8884d8" />
        </BarChart>

    </div>
    </div>
  );
};

export default Statistics;
