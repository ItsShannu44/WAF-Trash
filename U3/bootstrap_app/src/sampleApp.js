import React from "react";
import './index.css';
import MyButton from './components/Button';
import MyAlert from "./components/Alert";
import MyModel from "./components/Model";

function App(){
    return(
        <div className="App">
            <header className="App-header"></header>
            <MyButton/>
            <hr/>
            {/* <ButtonOutline/>
            <hr/>
            <NavigationBar/>
            <hr/>
            <MyCard/>
            <hr/>
            <MyForm/>
            <hr/> */}
            <MyAlert/>
            <hr/>
            <MyModel/>
        </div>
    );
}
export default App;