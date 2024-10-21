import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavComponente = ({ setSelectedBrand }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container-fluid">
        <Link className="navbar-brand text-dark" to="/" onClick={() => setSelectedBrand('')}>Urban Trade</Link>
        
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/Ropa" onClick={() => setSelectedBrand('Ropa')}>Ropa</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Zapatillas" onClick={() => setSelectedBrand('Zapatillas')}>Zapatillas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/RopaDeportiva" onClick={() => setSelectedBrand('Ropa Deportiva')}>Ropa Deportiva</Link>
            </li>

            <li className="nav-item d-flex align-items-center ms-3">
              <CartWidget />
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
          <Link to="/login" className="btn btn-outline-primary me-2">Iniciar Sesión</Link>
          <Link to="/register" className="btn btn-outline-secondary">Registrarse</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavComponente;
