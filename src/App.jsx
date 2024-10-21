import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavComponente from './componentes/NavBar/NavComponente';
import { CartProvider } from './componentes/Carrito/CarritoContext';
import ItemListContainer from './componentes/ItemListContainer';
import Carrito from './componentes/Carrito/Carrito'; 


function App() {
  const [selectedBrand, setSelectedBrand] = useState('');

  return (
    <CartProvider>
      <Router>
        <NavComponente setSelectedBrand={setSelectedBrand} />
        <Routes>
          <Route path="/Ropa" element={<ItemListContainer selectedBrand="Ropa" />} />
          <Route path="/Zapatillas" element={<ItemListContainer selectedBrand="Zapatillas" />} />
          <Route path="/RopaDeportiva" element={<ItemListContainer selectedBrand="Ropa Deportiva" />} />
          <Route path="/" element={<ItemListContainer selectedBrand={selectedBrand} />} />
          <Route path="/cart" element={<Carrito />} /> 
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;





