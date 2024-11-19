import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import Swal from 'sweetalert2';

const NavComponente = ({ setSelectedBrand, user, setUser }) => {
  const handleLogout = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Cerrar sesión eliminará tu sesión actual.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ffcc00',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        setUser(null); 
        Swal.fire({
          icon: 'success',
          title: 'Sesión cerrada',
          text: 'Has cerrado sesión correctamente.',
          confirmButtonColor: '#ffcc00'
        });
      }
    });
  };
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
          {user ? (
            <>
              <span className="navbar-text text-dark me-2">Hola, {user.username}</span>
              <button className="btn btn-outline-danger" onClick={handleLogout}>Cerrar sesión</button>
            </>
          ) : (
            <>
              <Link to="/Login" className="btn btn-outline-primary me-2">Iniciar Sesión</Link>
              <Link to="/Register" className="btn btn-outline-secondary">Registrarse</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavComponente;
