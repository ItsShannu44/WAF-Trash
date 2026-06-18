import { useState } from "react";
import axios from "axios";

function VisitorForm() {

    const [formData, setFormData] = useState({
        name: "",
        category: "Parent",
        phone: "",
        purpose: ""
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(
                "http://localhost:5000/api/visitors/add",
                formData
            );

            alert(res.data.message);

            setFormData({
                name: "",
                category: "Parent",
                phone: "",
                purpose: ""
            });

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Error Adding Visitor"
            );
        }
    };

    return (
        <div>

            <h2>Visitor Registration</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Visitor Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                >
                    <option value="Parent">Parent</option>
                    <option value="Vendor">Vendor</option>
                    <option value="Guest">Guest</option>
                    <option value="Alumni">Alumni</option>
                </select>

                <br /><br />

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    type="text"
                    name="purpose"
                    placeholder="Purpose of Visit"
                    value={formData.purpose}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <button type="submit">
                    Register Visitor
                </button>

            </form>

        </div>
    );
}

export default VisitorForm;