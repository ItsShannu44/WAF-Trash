import { useState } from "react";
import axios from "axios";

function BorrowEquipment() {

    const [form, setForm] = useState({
        equipmentId: "",
        borrowerName: ""
    });

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const borrowEquipment = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(
                "http://localhost:5000/api/equipment/borrow",
                form
            );

            alert(
                res.data.message +
                "\nReference: " +
                res.data.transaction.referenceId
            );

        } catch (err) {

            alert(
                err.response?.data?.message ||
                "Borrow Failed"
            );
        }
    };

    return (
        <div>

            <h2>Borrow Equipment</h2>

            <form onSubmit={borrowEquipment}>

                <input
                    type="text"
                    name="equipmentId"
                    placeholder="Equipment ID"
                    value={form.equipmentId}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    type="text"
                    name="borrowerName"
                    placeholder="Borrower Name"
                    value={form.borrowerName}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <button type="submit">
                    Borrow
                </button>

            </form>

        </div>
    );
}

export default BorrowEquipment;