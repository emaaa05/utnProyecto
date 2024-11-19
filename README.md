# UTN 

Este es un proyecto de e-commerce desarrollado con React, Vite y Bootstrap. Permite a los usuarios navegar entre diferentes categorías de productos, ver detalles de los productos y gestionar un carrito de compras. Además, incluye funciones de inicio de sesión, registro y manejo de usuarios con SweetAlert2 para mostrar notificaciones.

## Instalación

Sigue los siguientes pasos para configurar y ejecutar el proyecto en tu máquina local.

### Comandos para instalar dependencias

npm install o yarn install

### Ejecutar el proyecto 

npm run dev o yarn dev

### Funcionalidades de la web

Navegación

Navbar: 

Una barra de navegación en la parte superior que permite a los usuarios navegar entre las categorías de productos: Ropa, Zapatillas, Ropa Deportiva.

Carrito de compras:

Los usuarios pueden agregar productos al carrito, visualizarlos y generar la orden de compra a través del ícono del carrito en la navbar.

Gestión de productos:

Los productos se cargan desde una base de datos y se muestran en tarjetas con la imagen, título y precio. Los productos pueden ser filtrados por categorías seleccionadas.

Manejo de usuarios:
Los usuarios pueden registrarse con un nombre de usuario y una contraseña. Luego pueden iniciar sesión con estas credenciales.

Cierre de sesión: 
Una vez que el usuario inicia sesión, el botón de "Iniciar sesión" se reemplaza por un mensaje de bienvenida y un botón de "Cerrar sesión". Al hacer clic en "Cerrar sesión", se elimina la sesión actual del usuario.

Notificaciones

Se utilizan notificaciones emergentes para mostrar mensajes de éxito o error, como cuando un usuario se registra, inicia sesión o cierra sesión.
Estilos

El proyecto utiliza Bootstrap 5 y Bootstrap Icons para el diseño y los íconos.

El estilo de la página es completamente responsivo y se adapta a dispositivos móviles y de escritorio.