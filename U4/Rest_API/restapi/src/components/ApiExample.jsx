import React, {useState, useEffect} from "react";

const ApiExample =() =>
{
    const [data, setData]=useState([]);
    useEffect(() =>
    {
        const fetchData =async () =>
        {
            try{
                const response = await
                fetch("https://jsonplaceholder.typicode.com/users");
                const result = await response.json();
                setData(result);
            }
        }
    })
}