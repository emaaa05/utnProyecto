import React, { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const handleIncreaseQuantity = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <button onClick={handleDecreaseQuantity}>-</button>
            <p>{quantity}</p>
            <button onClick={handleIncreaseQuantity}>+</button>
            <button onClick={() => onAdd(quantity)}>Agregar al Carrito</button>
        </div>
    );
};

export default ItemCount;
