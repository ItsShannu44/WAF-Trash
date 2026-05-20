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
        
    );
}