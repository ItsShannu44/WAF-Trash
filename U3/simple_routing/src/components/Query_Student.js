import React from "react";

import { useSearchParams, useSearchParams } from "react-router-dom";

function Student()
{
    const [useSearchParams, setSearchParams]= useSearchParams();
    const id= searchParams.get("id");
    const name= searchParams.get("name");

    const changeStudent =() =>{
        setSearchParams({
            id:104,
            name:"Mike"
        });
    };
    
}
export default Student;