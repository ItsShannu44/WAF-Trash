import React from "react";
import {useForm} from "react-hook-form";

function FormValidation({addStudent})
{
        const{
            register,
            handleSubmit,
            reset,
            formState: {errors}
        }= useForm();

        const onSubmit = (data) =>{
            addStudent(data.username);
            alert("Form Submitted Successfully")
            console.log(data);
            reset();
        };
        
        const addStudent =(studentName) =>
        {
            id: students.length+1,
            name: studentName
        }

}
export default FormValidation;
