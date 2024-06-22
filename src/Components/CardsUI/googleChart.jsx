import React, { useEffect } from "react";

export default function GoogleChart() {
  useEffect(() => {
    // Load the Google Charts library
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/charts/loader.js";
    script.onload = () => {
      // Load the line chart package
      window.google.charts.load("current", { packages: ["line"] });
      window.google.charts.setOnLoadCallback(drawChart);
    };
    document.body.appendChild(script);

    function drawChart() {
      const data = new window.google.visualization.DataTable();
      data.addColumn("string", "Month");
      data.addColumn("number", "Sales");
      data.addColumn("number", "Expenses");

      data.addRows([
        ["Jan", 37.8, 80.8],
        ["Feb", 30.9, 69.5],
        ["Mar", 25.4, 57],
        ["Apr", 11.7, 18.8],
        ["May", 11.9, 17.6],
        ["Jun", 8.8, 13.6],
        ["Jul", 7.6, 12.3],
        ["Aug", 12.3, 29.2],
        ["Sep", 16.9, 42.9],
        ["Oct", 12.8, 30.9],
        ["Nov", 5.3, 7.9],
        ["Dec", 6.6, 8.4],
      ]);

      const options = {
        chart: {
          // Title and subtitle are removed
          // title: 'Box Office Earnings in First Two Weeks of Opening',
          // subtitle: 'in millions of dollars (USD)'
        },
        width: 900,
        height: 400,
        colors: ["#377CF6", "#24A959"], // Blue and Orange
        axes: {
          x: {
            0: { label: "Month" },
          },
          y: {
            0: { label: "Earnings (in 1000s)", format: "short" },
          },
        },
        hAxis: {
          format: "short",
          title: "Month",
        },
        vAxis: {
          format: "short",
          title: "Earnings (in 1000s)",
          ticks: [10000, 20000, 30000], // Set the vertical axis labels
          //   viewWindow: {
          //     min: 10000, // Minimum value on the axis
          //     max: 50000 // Maximum value on the axis
          //   }
        },
        legend: { position: "none" }, // Remove text on the chart
      };

      const chart = new window.google.charts.Line(
        document.getElementById("line_top_x")
      );
      chart.draw(data, window.google.charts.Line.convertOptions(options));
    }
  }, []);

  return <div id="line_top_x" className=" rounded-[25px] drop-shadow-xl"></div>;
}
