import React from "react"

function Child(props){
    return<h2 align="center">Message from Parent: {props.message}</h2>;
}

function App()
{
    const msg="Hello from Parent Component";

    return(
        <div>
            <h1>Unidirectional Data Flow</h1>
            <Child message={msg}/>
        </div>
    );
}
export default App;