import React, { useState } from "react";
import { loginUser } from "../firebase/login";
import Swal from "sweetalert2";
import "./cssModels/loginCss.css";

function Login({ setUser }) {  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const user = await loginUser(username, password);
      setUser(user); 
      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión exitoso',
        text: `Bienvenido: ${user.username}`,
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
      <h2>Inicio de sesión</h2>
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
      <button onClick={handleLogin}>Iniciar sesión</button>
      <p>{message}</p>
    </div>
  );
}

export default Login;
