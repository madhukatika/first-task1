

import './App.css';
import GraphData from './Components/GraphData';

import SearchComponent from './Components/SearchData';
// import ChartComponent from './Components/charts/index';
import Gdata from './Components/GobalContext';
import { useState } from 'react';

// import allFiles from '../src/json_data/merged_file.json'


function App() {
  let update=(data)=>{
    setGdata({...gdata,"lineGraph":[...gdata.lineGraph,...data]})
  }
  let [gdata,setGdata]=useState({"update":update,"lineGraph":[]})
  console.log("from app",gdata)
  return (
    <>

<Gdata.Provider value={gdata}>
 <SearchComponent/>
 <GraphData/>
 </Gdata.Provider>
 {/* <ChartComponent/> */}
{/* <Datepicker/> */}



 
  </>
   
  );
}

export default App;
