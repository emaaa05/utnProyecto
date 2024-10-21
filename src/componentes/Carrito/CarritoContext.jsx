import React, { createContext, useState, useContext } from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const existingProductIndex = cart.findIndex((item) => item.id === product.id);
        if (existingProductIndex !== -1) {
            setCart(prevCart => {
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex] = {
                    ...updatedCart[existingProductIndex],
                    quantity: updatedCart[existingProductIndex].quantity + product.quantity
                };
                return updatedCart;
            });
        } else {
            setCart(prevCart => [...prevCart, { ...product, quantity: product.quantity }]);
        }
        Swal.fire({
            icon: 'success',
            title: 'Producto agregado al carrito',
            text: `${product.title} se añadió al carrito`,
            confirmButtonText: 'OK',
        });
    };

    const clearCart = () => {
        setCart([]);
        Swal.fire({
            icon: 'info',
            title: 'Carrito Vacío',
            text: 'El carrito ha sido vaciado.',
            confirmButtonText: 'OK',
        });
    };

    const incrementQuantity = (productId) => {
        setCart(prevCart => prevCart.map(item => 
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const decrementQuantity = (productId) => {
        setCart(prevCart => prevCart.map(item => 
            item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, incrementQuantity, decrementQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
