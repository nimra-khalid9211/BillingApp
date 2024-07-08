// import React, { useEffect } from "react";

// export default function GoogleChart() {
//   useEffect(() => {
//     // Load the Google Charts library
//     console.log("google chart scripting");
//     const script = document.createElement("script");
//     script.src = "https://www.gstatic.com/charts/loader.js";
//     script.onload = () => {
//       // Load the line chart package
//       window.google.charts.load("current", { packages: ["line"] });
//       window.google.charts.setOnLoadCallback(drawChart);
//     };
//     document.body.appendChild(script);

//     function drawChart() {
//       console.log("drawChart function called");
//       const data = new window.google.visualization.DataTable();
//       data.addColumn("string", "Month");
//       data.addColumn("number", "Sales");
//       data.addColumn("number", "Expenses");

//       data.addRows([
//         ["Jan", 37.8, 80.8],
//         ["Feb", 30.9, 69.5],
//         ["Mar", 25.4, 57],
//         ["Apr", 11.7, 18.8],
//         ["May", 11.9, 17.6],
//         ["Jun", 8.8, 13.6],
//         ["Jul", 7.6, 12.3],
//         ["Aug", 12.3, 29.2],
//         ["Sep", 16.9, 42.9],
//         ["Oct", 12.8, 30.9],
//         ["Nov", 5.3, 7.9],
//         ["Dec", 6.6, 8.4],
//       ]);

//       const options = {
//         chart: {
//           // Title and subtitle are removed
//           // title: 'Box Office Earnings in First Two Weeks of Opening',
//           // subtitle: 'in millions of dollars (USD)'
//         },
//         height: 400,
//         colors: ["#377CF6", "#24A959"], // Blue and Orange
//         axes: {
//           x: {
//             0: { label: "Month" },
//           },
//           y: {
//             0: { label: "Earnings (in 1000s)", format: "short" },
//           },
//         },
//         hAxis: {
//           format: "short",
//           title: "Month",
//         },
//         vAxis: {
//           format: "short",
//           title: "Earnings (in 1000s)",
//           ticks: [10000, 20000, 30000], // Set the vertical axis labels
//           //   viewWindow: {
//           //     min: 10000, // Minimum value on the axis
//           //     max: 50000 // Maximum value on the axis
//           //   }
//         },
//         legend: { position: "none" }, // Remove text on the chart
//       };

//       const chart = new window.google.charts.Line(
//         document.getElementById("line_top_x")
//       );
//       chart.draw(data, window.google.charts.Line.convertOptions(options));
//     }
//   }, []);

//   return <div id="line_top_x" className=" rounded-[25px] drop-shadow-xl"></div>;
// }

import { Button, Dropdown, Space } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Sample data
const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const GoogleChart = () => {
  const renderChart = (interval) => (
    <ResponsiveContainer height={250} width="100%">
      <LineChart data={data} margin={{ right: 25, top: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={interval} />
        <YAxis interval={interval} />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
  const items = [
    {
      label: "2024",
      key: "1",
      // icon: <UserOutlined />,
    },
    {
      label: "2023",
      key: "2",
      // icon: <UserOutlined />,
    },
    {
      label: "2022",
      key: "3",
      // icon: <UserOutlined />,
    },
  ];
  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div className=" rounded-[3rem] drop-shadow-xl bg-white">
      <div className="font-semibold w-full my-10 w-full drop-shadow-xl bg-white py-4 px-10 rounded-t-[3rem] flex items-center justify-between">
        <div>Bills Statistics</div>
        <Dropdown menu={menuProps}>
          <div className="border-2 py-1 px-5 rounded-full flex">
            <div className="font-medium"> Button</div>
            <div className="ml-5">
              <DownOutlined />
            </div>
          </div>
        </Dropdown>
      </div>
      <div className="p-5">
        {renderChart("preserveEnd")}
        {/* {renderChart('preserveStart')}
      {renderChart('preserveStartEnd')}
      {renderChart('equidistantPreserveStart')}
      {renderChart(1)} */}
      </div>
    </div>
  );
};

export default GoogleChart;
