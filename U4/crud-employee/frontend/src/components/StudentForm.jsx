import { useState } from "react";
import axios from "axios";

function StudentForm() {

    const [student, setStudent] = useState({
        name: "",
        usn: "",
        aptitude: "",
        coding: "",
        communication: ""
    });

    const handleChange = (e) => {

        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(
                "http://localhost:5000/api/students/add",
                student
            );

            alert(res.data.message);

        } catch (error) {

            alert("Failed");
        }
    };

    return (

        <div>

            <h2>
                Placement Readiness Analytics
            </h2>

            <form onSubmit={handleSubmit}>

                <input
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    name="usn"
                    placeholder="USN"
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    name="aptitude"
                    type="number"
                    placeholder="Aptitude"
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    name="coding"
                    type="number"
                    placeholder="Coding"
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    name="communication"
                    type="number"
                    placeholder="Communication"
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <button type="submit">
                    Add Student
                </button>

            </form>

        </div>
    );
}

export default StudentForm;