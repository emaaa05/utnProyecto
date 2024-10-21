import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi'; 
import { CartContext } from '../Carrito/CarritoContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalProductos = cart.length; 

  return (
    <div className="cart-widget">
      <Link to="/cart">
        <FiShoppingCart />
        <span className="item-count">{totalProductos}</span>{}
      </Link>
    </div>
  );
}

export default CartWidget;
