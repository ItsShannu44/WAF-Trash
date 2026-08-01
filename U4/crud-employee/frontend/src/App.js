// import StudentForm from "./components/StudentForm";

// function App() {

//     return (
//         <div>
//             <StudentForm />
//         </div>
//     );
// }

// export default App;

import React from 'react';
import axios from "axios";
import { useState } from 'react';
import "./App.css";

function App()
{
    const[result, setResult] = useState(null);

    const insertEmployees = async () =>{
        const res = await axios.get("http://localhost:5000/insert");
        setResult(res.data);
    };

    const processEmployees = async () =>
    {
    const res =await axios.get("http://localhost:5000/process");
    setResult(res.data);
    };

    const deleteEmployees = async () =>
    {
    const res =await axios.get("http://localhost:5000/delete");
    setResult(res.data);
    };

    const getSummary = async () =>
    {
    const res =await axios.get("http://localhost:5000/summary");
    setResult(res.data);
    };
    
    
    return(
        <div className='container'>
            <h1>Employee CRUD Operations</h1>
            <button onClick={insertEmployees}>Insert Employees</button>

            <button onClick={processEmployees}>Read / Search / Update / Count</button>

            <button onClick={deleteEmployees}>Delete Aged Employee</button>

            <button onClick={getSummary}> Aggregate Summary</button>

            <h2>Output</h2>
            <pre>
                {
                    JSON.stringify(result, null, 2)
                }
            </pre>
        </div>
    );
}

export default App;