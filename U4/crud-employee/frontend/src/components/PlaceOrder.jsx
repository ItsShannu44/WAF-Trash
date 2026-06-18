import { useState } from "react";
import axios from "axios";

function PlaceOrder() {

    const [order, setOrder] = useState({
        productId: "",
        buyer: "",
        quantity: ""
    });

    const handleChange = (e) => {

        setOrder({
            ...order,
            [e.target.name]: e.target.value
        });
    };

    const placeOrder = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(
                "http://localhost:5000/api/marketplace/orders",
                order
            );

            alert(
                "Order Placed Successfully\nTotal: ₹" +
                res.data.order.total
            );

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Order Failed"
            );
        }
    };

    return (

        <div>

            <h2>Place Order</h2>

            <form onSubmit={placeOrder}>

                <input
                    type="text"
                    name="productId"
                    placeholder="Product ID"
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    type="text"
                    name="buyer"
                    placeholder="Buyer Name"
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <button type="submit">
                    Place Order
                </button>

            </form>

        </div>
    );
}

export default PlaceOrder;