
import React, { useState } from "react";
import "./App.css"
import ApiExample from './components/ApiExample';
import CreateData from './components/CreateData';
import DisplayData from "./components/DisplayData";
import UpdateData from "./components/UpdateData";
import DeleteData from "./components/DeleteData";

function App(){
  return(
    <div className="App">
      <header className="App-header">
        REST API - Access and Manipulate resources
      </header>
      <ApiExample/>
      <CreateData/>
      <DisplayData/>
      <UpdateData/>
      <DeleteData/>
    </div>
  )
}
export default App;

