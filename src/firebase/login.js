import { localUsers } from './registro'; 

export async function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = localUsers.find(
        user => user.username === username && user.password === password
      );
      if (user) {
        console.log("Inicio de sesión exitoso:", { id: user.id, username });
        resolve({ id: user.id, username });
      } else {
        reject(new Error("Usuario o contraseña incorrectos."));
      }
    }, 500);
  });
}
