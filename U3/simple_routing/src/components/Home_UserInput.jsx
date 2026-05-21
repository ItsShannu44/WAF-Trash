import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function Home()
{
    const[id, setId]= useState('');
    const navigate= useNavigate();
    const handleSearch =() =>
    {
        if(id.trim()!=="")
        {
            navigate(`/student/${id}`);
        }
    };
    return(
        <div>
            <h2>Home Page</h2>
            <p>Search Student details via input ID.</p>
            Search:
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Enter Student ID" />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}
export default Home;