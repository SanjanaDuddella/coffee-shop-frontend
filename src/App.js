// src/App.js

import React from 'react';
import './App.css';
import ProductListComponent from './components/ProductListComponent';
import CartComponent from './components/CartComponent';
import { CartProvider } from './contexts/CartContext';

const App = () => {
    return (
        <CartProvider>
            <div className="App">
                <header className="App-header">
                    <h1>Welcome to the Coffee Shop</h1>
                </header>
                <ProductListComponent />
                <CartComponent />
            </div>
        </CartProvider>
    );
};

export default App;
