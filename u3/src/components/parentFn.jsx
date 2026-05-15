import React, {useState} from 'react';
import Child from "./childFn";

function Parent()
{
    const [receivedData, setReceivedData]= useState('');

    const handleDataFromChild= (data) =>{setReceivedData(data);};
    return(
        <div>
            <h2>Parent component</h2>
            <p>Data received from child: <strong>{receivedData}</strong></p>
            <Child onSendData={handleDataFromChild}/>
        </div>
    );
}

export default Parent;