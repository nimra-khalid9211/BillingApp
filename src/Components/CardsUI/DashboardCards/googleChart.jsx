import React, { useEffect, useState } from "react";
import { Button, Dropdown, message, Space } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

// Sample data
const data = [
  { name: "Jan", Electricity: 4000, Gas: 2400, PTCL: 2400, Water: 2878 },
  { name: "Feb", Electricity: 3000, Gas: 1398, PTCL: 2210, Water: 2878 },
  { name: "Mar", Electricity: 2000, Gas: 9800, PTCL: 2290, Water: 2738 },
  { name: "Apr", Electricity: 2780, Gas: 3908, PTCL: 2000, Water: 3878 },
  { name: "May", Electricity: 1890, Gas: 4800, PTCL: 2181, Water: 4878 },
  { name: "Jun", Electricity: 2390, Gas: 3800, PTCL: 2500, Water: 5878 },
  { name: "Jul", Electricity: 3490, Gas: 4300, PTCL: 2100, Water: 2878 },
  { name: "Aug", Electricity: 3490, Gas: 4300, PTCL: 2100, Water: 2878 },
  { name: "Sep", Electricity: 3490, Gas: 4300, PTCL: 2100, Water: 2078 },
  { name: "Oct", Electricity: 3490, Gas: 4300, PTCL: 2100, Water: 2878 },
  { name: "Nov", Electricity: 3490, Gas: 4300, PTCL: 2100, Water: 2878 },
  { name: "Dec", Electricity: 3490, Gas: 4300, PTCL: 2100, Water: 2878 },
];

const GoogleChart = () => {
  const [selectedUtility, setSelectedUtility] = useState("All");

  const renderChart = (interval) => (
    <ResponsiveContainer height={250} width="100%">
      <LineChart data={data} margin={{ right: 25, top: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={interval} />
        <YAxis interval={interval} tickFormatter={formatYAxis} />
        {(selectedUtility === "All" || selectedUtility === "Electricity") && (
          <Line type="linear" dataKey="Electricity" stroke="#8884d8" activeDot={{ r: 8 }} />
        )}
        {(selectedUtility === "All" || selectedUtility === "Gas") && (
          <Line type="linear" dataKey="Gas" stroke="#82ca9d" />
        )}
        {(selectedUtility === "All" || selectedUtility === "PTCL") && (
          <Line type="linear" dataKey="PTCL" stroke="#ef4444" />
        )}
        {(selectedUtility === "All" || selectedUtility === "Water") && (
          <Line type="linear" dataKey="Water" stroke="#77c4ff" />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
  const formatYAxis = (tickItem) => {
    if (tickItem >= 1000) {
      return `${tickItem / 1000}k`;
    }
    return tickItem;
  };
  

  const items = [
    {
      label: "2024",
      key: "1",
    },
    {
      label: "2023",
      key: "2",
    },
    {
      label: "2022",
      key: "3",
    },
  ];

  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    // console.log("click", e);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div className="mt-5">

      <div className="font-medium w-full drop-shadow-lg text-lg bg-white p-4 pl-7 rounded-t-3xl flex items-center justify-between">
        <div className="text-[#176ba3]">Bills Statistics</div>
        <Dropdown menu={menuProps}>
          <div className="border border-[#6C7293] flex justify-between cursor-pointer items-center mr-2 py-1 w-28 px-3 rounded-full">
            <div className="font-medium text-sm">This Year</div>
            <div className="pl-2">
            <IoIosArrowDown />
            </div>
          </div>
        </Dropdown>
      </div>

      <div className="rounded-b-3xl flex flex-col justify-center bg-white">
       
        <div className="py-5">{renderChart("preserveEnd")}</div>

        <div className="flex space-x-4 items-center justify-center pb-10">
         
          <div className="flex items-center space-x-2">
         
          <div
              className={`flex items-center space-x-1 ${
                selectedUtility === "All" ? "bg-gray-100 border-gray-500" : ""
              } text-gray-700 rounded-full px-3 py-1 cursor-pointer border`}
              onClick={() => setSelectedUtility("All")}
            >
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
             
              <span>All</span>

            </div>

            <div
              className={`flex items-center space-x-1 ${
                selectedUtility === "Electricity" ? "bg-blue-100 border-[#377CF6]" : ""
              } text-blue-700 rounded-full px-3 py-1 cursor-pointer border`}
              onClick={() => setSelectedUtility("Electricity")}
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Electricity</span>
            </div>

            <div
              className={`flex items-center space-x-1 ${
                selectedUtility === "Gas" ? "bg-green-100 border-[#24A959]" : ""
              } text-green-700 rounded-full px-3 py-1 cursor-pointer border`}
              onClick={() => setSelectedUtility("Gas")}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Gas</span>
            </div>

            <div
              className={`flex items-center space-x-1 ${
                selectedUtility === "PTCL" ? "border-red-500 bg-[#F9D2D4]" : ""
              } text-red-700 rounded-full px-3 py-1 cursor-pointer border`}
              onClick={() => setSelectedUtility("PTCL")}
            >
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>PTCL</span>
            </div>

            <div
              className={`flex items-center space-x-1 ${
                selectedUtility === "Water" ? "border-blue-500 bg-[#DBF0FF]" : ""
              } text-blue-700 rounded-full px-3 py-1 cursor-pointer border`}
              onClick={() => setSelectedUtility("Water")}
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Water</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleChart;
