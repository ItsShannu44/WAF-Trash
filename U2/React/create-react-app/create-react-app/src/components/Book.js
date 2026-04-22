import React from 'react';

function Book(props)
{
    return(
        <div style= {{border: "1px solid grey", margin: "10px", color: "yellow", padding:"20px", textAlign: "center", zIndex: "1"}}>
            <img src={props.image} style={{width: "50%", height:"20vh", zIndex: "1", backgroundSize: "cover", position: "relative", marginTop: "-20px"}}/>
            <div style={{position: "relative", marginTop: "-150px", zIndex: "999"}}>
            <h2 style={{}}>{props.title}</h2>
            <p style={{}}>{props.author}</p>
            <p style={{}}>${props.price}</p>
            </div>
        </div>
    );
}
export default Book;