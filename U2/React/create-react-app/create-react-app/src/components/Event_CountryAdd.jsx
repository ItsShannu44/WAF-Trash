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
            name: this.state.name,
            region: this.state.region
        });
        //clear form
        this.setState({
            name: "",
            region:""
        });
    };
    render(){
        return(
        <div>
            <h3>Add Country</h3>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Country Name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/><br/>
                <input type="text" placeholder="Region" value={this.state.region} onChange={(e) => this.setState({region: e.target.value})}/><br/>
                <button type="submit">Add</button>
            </form>
        </div>
        );
    };
}
export default CountryAdd;