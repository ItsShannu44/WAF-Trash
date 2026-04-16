import React from 'react';

const Greeting= ({name})=>{
    return(
        <div>
            <h1>Hello, {name}!</h1>
            <p>Welcome to the greetings page.</p>
        </div>
    );
};

export default Greeting;