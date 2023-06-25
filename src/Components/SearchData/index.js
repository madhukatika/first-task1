// import React, { useState, useEffect } from "react";
// import mergeData from "../../json_data/merged_file.json";
// import Displaytable from "../Displaytable";

// const SearchComponent = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     // Perform initial search on component mount
//     performSearch(searchTerm);
//   }, []); 

//   const handleSearch = (e) => {
//     const searchTerm = e.target.value;
//     setSearchTerm(searchTerm);
//     performSearch(searchTerm);
//   };

//   // const performSearch = (term) => {
//   //   // Perform search on the imported JSON data
//   //   const results = mergeData.filter((item) => {
//   //     if (item.hasOwnProperty("thermostatPacket")) {
//   //       console.log("hello");
//   //       const itemString = JSON.stringify(item).toLowerCase();
//   //       return itemString.includes(term.toLowerCase());
//   //   }
//   //   });
//   const performSearch = (term) => {
//     const results = mergeData.filter((item) => {
//       if (item.hasOwnProperty("thermostatPacket")) {
//         const { product } = item.thermostatPacket.info;
//         return product.toLowerCase().includes(term.toLowerCase());
//       }
//     });
//     setSearchResults(results);
//   };
  
//   // const performSearch = (product) => {
//   //   // Perform search on the imported JSON data
//   //   const result = mergeData.find((item) => {
//   //     if (item.hasOwnProperty("thermostatPacket")) {
//   //       const { product: itemProduct } = item.thermostatPacket.info;
//   //       return itemProduct === product;
//   //     }
//   //   });
//   //   console.log(result);
//   //   setSearchResults(result ? [result] : []);
//   // };
  

//   return (
//     <div>
//       <input
//         type="text"
//         className="search-bar"
//         placeholder="Search-item"
//         value={searchTerm}
//         onChange={handleSearch}
//       />
      // <table className="custom_table">
      //   <thead>
      //     <tr>
      //       <th>date</th>
      //       <th>time</th>
      //       <th>product</th>
      //       <th>version</th>
      //       <th>id</th>
      //       <th>hvacMode</th>
      //       <th>deadband10xF</th>
      //       <th>outdoorTempLockout10xF</th>
      //       <th>programMode</th>
      //       <th>fanMode</th>
      //       <th>numHeatStages</th>
      //       <th>numCompressorStages</th>
      //       <th>numHeatStages</th>
      //       <th>smartSensorCnt</th>
      //       <th>outdoorTemperature10xF</th>
      //       <th>indoorTemperature10xF</th>
      //       <th>outdoorHumidityPer</th>
      //       <th>indoorHumidityPer</th>
      //     </tr>
      //   </thead>
      //   {searchResults.map((item, index) => (
      //     <Displaytable data={item} />
      //   ))}
      // </table>
//     </div>
//   );
// };

// export default SearchComponent;








// // import React, { useState, useEffect } from "react";
// // import mergeData from "../../json_data/merged_file.json";
// // import Displaytable from "../Displaytable";

// // const SearchComponent = () => {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [searchResults, setSearchResults] = useState([]);

// //   useEffect(() => {
// //     // Perform initial search on component mount
// //     performSearch(searchTerm);
// //   }, []); 

// //   const handleSearch = (e) => {
// //     const searchTerm = e.target.value;
// //     setSearchTerm(searchTerm);
// //     performSearch(searchTerm);
// //   };

// //   const performSearch = (term) => {
// //     const results = mergeData.filter((item) => {
// //       if (item.hasOwnProperty("thermostatPacket")) {
// //         const { product } = item.thermostatPacket.info;
// //         return product.toLowerCase().includes(term.toLowerCase());
// //       }
// //     });
// //     setSearchResults(results);
// //   };

// //   return (
// //     <div>
// //       <input
// //         type="text"
// //         className="search-bar"
// //         placeholder="Search product"
// //         value={searchTerm}
// //         onChange={handleSearch}
// //       />
// //       <table className="custom_table">
// //         <thead>
// //           <tr>
// //             <th>date</th>
// //             <th>time</th>
// //             <th>product</th>
// //             <th>version</th>
// //             <th>id</th>
// //             <th>hvacMode</th>
// //             <th>deadband10xF</th>
// //             <th>outdoorTempLockout10xF</th>
// //             <th>programMode</th>
// //             <th>fanMode</th>
// //             <th>numHeatStages</th>
// //             <th>numCompressorStages</th>
// //             <th>numHeatStages</th>
// //             <th>smartSensorCnt</th>
// //             <th>outdoorTemperature10xF</th>
// //             <th>indoorTemperature10xF</th>
// //             <th>outdoorHumidityPer</th>
// //             <th>indoorHumidityPer</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {searchResults.map((item, index) => (
// //             <Displaytable key={index} data={item} />
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default SearchComponent;

import React, { useState, useEffect, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import mergeData from "../../json_data/merged_file.json";
import Displaytable from "../Displaytable";
import Gdata from "../GobalContext";
import GraphData from "../GraphData";

const SearchComponent = () => {
  let gdata = useContext(Gdata);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    performSearch(searchTerm, selectedDate);
  }, [searchTerm, selectedDate]);

  useEffect(() => {
    gdata.update(graph);
  }, [searchResults]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const performSearch = (term, date) => {
    const results = mergeData.filter((item) => {
      if (item.hasOwnProperty("thermostatPacket")) {
        const { product } = item.thermostatPacket.info;

        if (!date) {
          // When no date is selected, include all items
          return product.toLowerCase().includes(term.toLowerCase()) ;
        } else {
          // When date is selected, filter by date
          return (
            product.toLowerCase().includes(term.toLowerCase()) &&
            new Date(item.thermostatPacket.data.timestamp).toDateString() ===
              date.toDateString() ||product.toLowerCase().includes(term.toLowerCase()) &&
              new Date(item.thermostatPacket.data.timestamp).toISOString() ==term.toLowerCase()
          );
        }
      }
    });

    setSearchResults(results);
  };

  var graph = searchResults.map((item, index) => item.thermostatPacket);
  

  return (
    <div>
      <input
        style={{
          width: "30%",
          height: "3vh",
          padding: "5px",
          marginBottom: "5px",
        }}
        type="text"
        className="search-bar"
        placeholder="Search product"
        value={searchTerm}
        onChange={handleSearch}
      />
      <DatePicker
        style={{ width: "30%", height: "3vh" }}
        selected={selectedDate}
        onChange={handleDateChange}
        placeholderText="mm/dd/yyyy"
        dateFormat="MM/dd/yyyy"
      />

      <table className="custom_table">
        <thead>
          <tr>
            <th>date</th>
            <th>time</th>
            <th>product</th>
            <th>version</th>
            <th>id</th>
            <th>hvacMode</th>
            <th>deadband10xF</th>
            <th>outdoorTempLockout10xF</th>
            <th>programMode</th>
            <th>fanMode</th>
            <th>numHeatStages</th>
            <th>numCompressorStages</th>
            <th>numHeatStages</th>
            <th>smartSensorCnt</th>
            <th>outdoorTemperature10xF</th>
            <th>indoorTemperature10xF</th>
            <th>outdoorHumidityPer</th>
            <th>indoorHumidityPer</th>
          </tr>
        </thead>
        {searchResults.map((item, index) => (
          <Displaytable data={item} key={index} />
        ))}
      </table>
      <div></div>
    </div>
  );
};

export default SearchComponent;