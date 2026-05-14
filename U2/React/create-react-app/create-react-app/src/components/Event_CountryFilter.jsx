import React from "react";

class CountryFilter extends React.Component{
    handleeChange=(e)=>{
        this.props.setFilterText(e.target.value);};
    render()
    {
        return(
            <div>
                <input type="text" placeholder="Filter countries.." onChange={this.handleeChange}/>
            </div>
        );
    }
}
export default CountryFilter;
