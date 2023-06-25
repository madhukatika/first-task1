import React, { useContext, useEffect, useState } from 'react';
import LineGraph from "../Components/LineGraph";
import Gdata from './GobalContext';

const GraphData = () => {
  let [lineGraphData,setLineGraph]=useState([])
  let gdata=useContext(Gdata)
    useEffect(()=>{
      setLineGraph([...gdata.lineGraph])
     },[gdata.lineGraph])

 const cityData = [
    {
      city: 'New York',
      temperatures: [
        { label: 'Jan', value: 32 },
        { label: 'Feb', value: 35 },
        { label: 'Mar', value: 40 },
        // ... more temperature data for New York
      ],
    },
    {
      city: 'London',
      temperatures: [
        { label: 'Jan', value: 45 },
        { label: 'Feb', value: 42 },
        { label: 'Mar', value: 50 },
        // ... more temperature data for London
      ],
    },
    // Add more city data objects as needed
  ];

  return (
    <div>
      <h1>City Temperature Line Graph</h1>
      <LineGraph lineGraph={lineGraphData} />
    </div>
  );
};

export default GraphData;
