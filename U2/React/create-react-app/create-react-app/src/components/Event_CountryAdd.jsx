import React from "react";

class CountryAdd extends React.Component{
    constructor()
    {
        super();
        this.state={name: "", region: ""};
    }

    handleSubmit =(e)=>{
        e.preventDefault();
        if(!this.state.name || !this.state.region) return;
        this.props.addCountry({
            name: 
        })
    }
}