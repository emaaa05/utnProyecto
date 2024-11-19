import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavComponente from './componentes/NavBar/NavComponente';
import { CartProvider } from './componentes/Carrito/CarritoContext';
import ItemListContainer from './componentes/ItemListContainer';
import Carrito from './componentes/Carrito/Carrito'; 
import Login from './componentes/Login';
import Register from './componentes/Register';

function App() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [user, setUser] = useState(null); 

  return (
    <CartProvider>
      <Router>
        <NavComponente setSelectedBrand={setSelectedBrand} user={user} setUser={setUser} />
        <Routes>
          <Route path="/Ropa" element={<ItemListContainer selectedBrand="Ropa" />} />
          <Route path="/Zapatillas" element={<ItemListContainer selectedBrand="Zapatillas" />} />
          <Route path="/RopaDeportiva" element={<ItemListContainer selectedBrand="Ropa Deportiva" />} />
          <Route path="/" element={<ItemListContainer selectedBrand={selectedBrand} />} />
          <Route path="/cart" element={<Carrito />} />
          <Route path="/Login" element={<Login setUser={setUser} />} />
          <Route path="/Register" element={<Register />} /> 
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;



