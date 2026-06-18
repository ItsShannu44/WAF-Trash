import { useState } from "react";
import axios from "axios";

function AddProduct() {

    const [product, setProduct] = useState({
        title: "",
        price: "",
        category: "",
        seller: "",
        stock: ""
    });

    const handleChange = (e) => {

        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(
                "http://localhost:5000/api/marketplace/products",
                product
            );

            alert(res.data.message);

        } catch (error) {

    console.log("ERROR:", error);

    if (error.response) {
        console.log("DATA:", error.response.data);
        console.log("STATUS:", error.response.status);

        alert(JSON.stringify(error.response.data));
    } else {
        alert(error.message);
    }
    }   
    };

    return (

        <div>

            <h2>Add Product</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="title"
                    placeholder="Product Name"
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    type="text"
                    name="seller"
                    placeholder="Seller Name"
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    type="number"
                    name="stock"
                    placeholder="Stock"
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <button type="submit">
                    Add Product
                </button>

            </form>

        </div>
    );
}

export default AddProduct;