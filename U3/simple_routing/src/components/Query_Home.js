import React from "react";

function New_Home()
{
    return(
        <div style={pageStyle}>
            <center>
            <h2>Home Page</h2>
            <p>Select Student Id to view details.</p>
            </center>
        </div>
    );
}
const pageStyle={
    background: 'green',
    height:'50vh',
    color:'white',
    justifycontent:'center',
    padding: '0.10rem'
};
export default New_Home;

