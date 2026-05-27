import React from "react";
import { useSearchParams } from "react-router-dom";

function Student() {

    const [searchParams, setSearchParams] = useSearchParams();

    const id = searchParams.get("id");
    const name = searchParams.get("name");

    const changeStudent = () => {
        setSearchParams({
            id: 104,
            name: "Mike"
        });
    };

    return (
        <div className="container" style={pageStyle}>
            <center>
            <h2>Student Details</h2>

            <p><b>Student Id:</b> {id}</p>
            <p><b>Student Name:</b> {name}</p>

            <button onClick={changeStudent}>
                Load SRN 104
            </button>
            </center>
        </div>
    );
}

const pageStyle = {
    background: 'skyblue',
    color: 'black',
    height:'50vh',
    padding: '0.10em',
};

export default Student;
