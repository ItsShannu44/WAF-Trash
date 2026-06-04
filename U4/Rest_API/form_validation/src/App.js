import React, {useState} from "react";
import './App.css';
import FormValidation from "./components/FormValidation";
import FilterList from "./components/FilterList";

function App() {
    const [students, setStudents] = useState([
      {id : 1, name: "Tom"},
      {id : 2, name: "Nat"},
      {id : 3, name: "Chris"},
      {id : 4, name: "RDJ"},
      {id : 5, name: "Mili"}
    ])

    const addStudent= (studentName)=>
    {
      setStudents([...students,
        {
          id: students.length+1,
          name: studentName
        }
      ]);
    };
    return(
      <div>
        <header className="App-header">
          <FormValidation addStudent={addStudent}/>
          <FormValidation/>
          <hr/>
          <FilterList students={students}/>
        </header>
      </div>
    );
}

export default App;
