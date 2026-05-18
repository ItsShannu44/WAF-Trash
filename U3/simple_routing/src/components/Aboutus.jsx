import React from 'react';

const Aboutus=() =>{
    return(
        <div className='container' style={pageStyle}>
            <h4 className='center'>About</h4>
            <p>My about page content is here</p>
        </div>
    );
};
const pageStyle={
    background: 'skyblue',
    color:'maroon',
    padding: 'o.10em'
};
export default About;