// src/components/ProductListComponent.js

import React, { useState, useEffect, useContext } from 'react';
import ProductService from '../services/ProductService';
import { CartContext } from '../contexts/CartContext';

const ProductListComponent = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        ProductService.getAllProducts().then(response => {
            setProducts(response.data);
        });
    }, []);

    return (
        <div>
            <h2>Our Coffees</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>
                                <button onClick={() => addToCart(product)}>Add to Cart</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductListComponent;
