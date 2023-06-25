
// import jsonData from '../../json_data/merged_file.json' 
// import React, { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';
// // import jsonData from './data.json'; // Assuming the JSON file is named 'data.json' and located in the same folder

// const ChartComponent = () => {
//   // Extracting required data from the JSON
//   const [thermostatPackets, setThermostatPackets] = useState([])
//   // const thermostatPackets = jsonData.map((item) => {
//   //   // console.log("Item : ", item)
//   //   if(item === "thermostatPacket") {
//   //     return item;
//   //   }
//   // let thermostatPackets = [];
//   let timestamps = []                                                                                                                                                                                                                                        
//   for(let i = 0; i < jsonData.length; i++) {
//       // if(jsonData[i]["thermostatPacket"] == "thermostatPacket") {
//         setThermostatPackets(...thermostatPackets, jsonData[i]["thermostatPacket"]);
//           // thermostatPackets.push(jsonData[i]["thermostatPacket"]);
//           console.log("jghfcvb", jsonData[i]["thermostatPacket"]);
//       // }
//   }
  
//   // for(let i = 0; i< thermostatPackets.length; i++) {
//   //   // timestamps.push(thermostatPackets[i]["data"]["timestamp"])
//   // }

//   // console.log('samfgh aaya kya?',timestamps)
//   // const timestamps = thermostatPackets.map((packet) => packet);
//   // console.log("jgyhvb ",timestamps)
//   // const temperatures = thermostatPackets.map((packet) => packet.data?.outdoorTemperature10xF);

//   // Creating the chart options and series data
//   const chartOptions = {
//     // chart: {
//     //   id: 'temperature-chart',
//     // },
//     // xaxis: {
//     //   categories: timestamps,
//     // },
//   };

//   const seriesData = [
//     // {
//     //   name: 'Outdoor Temperature',
//     //   data: temperatures,
//     // },
//   ];
//   console.log("Thermo ka packet ", thermostatPackets)
//   return (
//     <ReactApexChart options={chartOptions} series={seriesData} type="line" height={400} />
//   );
// };

// export default ChartComponent;
