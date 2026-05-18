import React, { useState } from "react";

function Child( {onSendData})
{
    const [message, setMessage]=useState('');
    const handleSend=()=>
    {
        onSendData(message);
        setMessage('');
    };
    return(
        <div style={{border: '1px solid grey', padding:'10px',margin: '10px'}}>
            <h3>Child Component</h3>
            <input type="text" value={message} placeholder="Type a message" onChange={(e)=> setMessage(e.target.value)}/>
            <button onClick={handleSend}>Send to Parent</button>
        </div>
    );
}
export default Child;
