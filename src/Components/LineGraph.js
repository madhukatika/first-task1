import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js/auto';

const LineGraph = (props) => {
  let  [graphData,setGraphData]=useState([])
  useEffect(()=>{
    setGraphData([...props.lineGraph])
  },[props.lineGraph])
  console.log(graphData)
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
let label=graphData.map((item)=>item.data.timestamp.split("T")[0])
console.log("temp",graphData.map((item) => item.data.indoorTemperature10xF))
console.log(label)
  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const labels = graphData.map((item)=>item.data.timestamp.split("T")[0]);
    const datasets = graphData.map((item) => ({
      label: item.data.indoorTemperature10xF,
      data: graphData.map((item) => item.data.indoorTemperature10xF),
      fill: false,
      borderColor: getRandomColor(),
      tension: 0.5,
    }));

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: datasets,
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [props.lineGraph]);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return <canvas ref={chartRef} />;
};

export default LineGraph;
