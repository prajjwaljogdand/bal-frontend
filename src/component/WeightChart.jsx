import React from "react";
import { Chart } from "react-google-charts";
import { Box } from "@mui/system";
import { Paper, Stack, Typography } from "@mui/material";

const options = {
  title: "Weights",
  curveType: "function",
  legend: { position: "bottom" },
};

const createData = (data) => {
  const chartData = data.map((row) => {
    const d = new Date(row.timeOut * 1000);
    const created = d.toLocaleString();
    return [created , Number(row.weight), 4000];
  });

  const finalData = [["timeOut", "Weight", "Threshold"], ...chartData];

  console.log(finalData);

  return finalData;
};

export default function WeightChart(props) {
  console.log(props.data);
  const chartData = createData(props.data);

  return (
    <Box sx={{ width: "45%", margin: "auto", marginTop: "10px" }}>
      <Paper elevation={6} sx={{ width: "80%",border: "0.1px solid #3D95DF", p :0 }}>
      <Chart
        chartType="LineChart"
        // style={{borderRadius : "10px"}}
        width="100%"
        height="500px"
        data={chartData}
        options={options}
      />
      </Paper>
    </Box>
  );
}
