import { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetchProducts();

    }, []);

    const fetchProducts = async () => {

        const res = await axios.get(
            "http://localhost:5000/api/marketplace/products"
        );

        setProducts(res.data);
    };

    return (

        <div>

            <h2>Products</h2>

            <table border="1">

                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Seller</th>
                        <th>Stock</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        products.map(product => (

                            <tr key={product._id}>

                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                                <td>{product.seller}</td>
                                <td>{product.stock}</td>

                            </tr>
                        ))
                    }

                </tbody>

            </table>

        </div>
    );
}

export default ProductList;