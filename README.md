Basado en la siguiente consigna:

__TP2 - API con Express__

Crear una API en Node.js con Express que cumpla con las
siguientes especificaciones:
1. Que se encuentre configurado Express al levantar la
aplicación en un archivo “index.js/server.js/app.js” a la
misma altura que el package.json, con un puerto asignado
y un log en consola que de aviso si el servicio está
corriendo
2. Debe existir al menos una ruta GET disponible en esta
API, con su respectiva arquitectura en capas (rutas,
controlador, servicio, modelo)
3. La ruta en cuestión debe traer información de alguna API
de uso gratuito, externa, de la cual podamos consumir
datos (películas, personajes de ciencia ficción, el
clima, el valor de alguna moneda, información de
actualidad, juegos, etc)
4. Trabajar la respuesta de esta API de manera asincrónica
con promesas o async/await según preferencia
5. El proyecto debe tener su debida configuración para poder
levantar desde el package.json con Express instalado
6. Tener en cuenta manejo de errores

Se creo un servidor con express que cumple con los requisitos, para probar el projecto debe:

1- clonar el repositorio

2- correr el comando `npm install` para bajar las dependencias

3- ejecutar el projecto con `npm run dev`

3- consumir el endpoint GET http://localhost:8080/people/{id}
