import React, { useState } from "react";
import  {registerUser}  from "../firebase/registro";
import Swal from "sweetalert2";
import "./cssModels/registroCss.css";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
  
    const handleRegister = async () => {
      try {
        const user = await registerUser(username, password);
        Swal.fire({
          icon: 'success',
          title: 'Usuario registrado',
          text: `Usuario creado con exito: ${user.username}`,
          background: '#fff',
          color: '#333',
          confirmButtonColor: '#ffcc00',
        });
        setUsername("");
        setPassword("");
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.message,
          background: '#fff',
          color: '#333',
          confirmButtonColor: '#ffcc00',
        });
      }
    };
  
    return (
      <div className="container">
        <h2>Registro</h2>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Registrar</button>
        <p>{message}</p>
      </div>
    );
  }
  
  export default Register;