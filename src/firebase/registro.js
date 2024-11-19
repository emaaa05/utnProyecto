export let localUsers = [
  { id: 1, username: "admin", password: "admin" }
];

export async function registerUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const existingUser = localUsers.find(user => user.username === username);
      if (existingUser) {
        reject(new Error("El usuario ya existe."));
      } else {
        const newUserId = localUsers.length + 1;
        localUsers.push({ id: newUserId, username, password });
        console.log("Usuario registrado:", { id: newUserId, username });
        resolve({ id: newUserId, username });
      }
    }, 500);
  });
}
