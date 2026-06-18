import { useState } from "react";
import axios from "axios";

function EquipmentForm() {

    const [equipment, setEquipment] = useState({
        name: "",
        category: "",
        quantity: ""
    });

    const handleChange = (e) => {

        setEquipment({
            ...equipment,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(
                "http://localhost:5000/api/equipment/add",
                equipment
            );

            alert(res.data.message);

            setEquipment({
                name: "",
                category: "",
                quantity: ""
            });

        } catch (err) {

            alert("Error Adding Equipment");
        }
    };

    return (
        <div>

            <h2>Add Equipment</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Equipment Name"
                    value={equipment.name}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={equipment.category}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    value={equipment.quantity}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <button type="submit">
                    Add Equipment
                </button>

            </form>

        </div>
    );
}

export default EquipmentForm;