import React from "react";
import CounterClass from "./CounterClass";

function App(){
    return(
        <div className="App">
            <h3>Function and Class Based State MAnagement</h3>
            <p>Another Text</p>
            {/* Counter */}
            <CounterClass/>
        </div>
    );
}
export default App;