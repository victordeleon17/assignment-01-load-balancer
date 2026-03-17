assignment01 - load balancer con nginx y docker

Descripción
En esta tarea se implementa un sistema de balanceo de carga utilizando Nginx como proxy reverso y Docker para levantar los servicios de forma sencilla. El objetivo principal es distribuir las solicitudes de los clientes entre varios servidores para mejorar la disponibilidad y el rendimiento del sistema. Para demostrar el funcionamiento del balanceador se crearon dos servidores web llamados web1 y web2, cada uno mostrando un mensaje diferente. De esta manera es posible identificar cuál servidor está respondiendo a cada solicitud realizada por el cliente. El balanceador utiliza el algoritmo round robin, que distribuye las peticiones alternando entre los servidores disponibles.

Infraestructura
La arquitectura del sistema funciona de la siguiente manera: el cliente envía solicitudes al balanceador de carga implementado con Nginx, el cual actúa como proxy reverso y se encarga de redirigir las peticiones hacia uno de los servidores disponibles. Los servidores web responden a la solicitud y el balanceador distribuye la carga entre ellos para evitar que un solo servidor reciba todas las peticiones. Esta arquitectura permite mejorar la eficiencia del sistema y simular un entorno de alta disponibilidad.

Backend API
El proyecto también incluye una API desarrollada con Node.js y Express que permite administrar tareas mediante operaciones básicas como crear, listar y eliminar tareas. La API utiliza Prisma ORM para interactuar con la base de datos y gestionar el almacenamiento de la información. Se implementaron diferentes endpoints que permiten verificar que el servidor está funcionando correctamente, obtener todas las tareas registradas, crear nuevas tareas y eliminar tareas existentes.

Frontend
Se desarrolló una interfaz web utilizando Next.js que permite interactuar con la API de manera sencilla. Desde esta interfaz el usuario puede crear nuevas tareas, visualizar las tareas existentes y eliminarlas. El frontend se comunica con el backend mediante solicitudes HTTP, permitiendo que las acciones realizadas desde la interfaz se reflejen directamente en la base de datos.

Ejecución del proyecto
Para ejecutar el proyecto localmente primero se deben instalar las dependencias necesarias y luego levantar los contenedores utilizando Docker. Esto se puede hacer ejecutando el comando docker compose up -d. Una vez que los servicios estén en ejecución, el sistema estará disponible a través del navegador utilizando la dirección http://localhost:8080 para el balanceador y http://localhost:4000 para acceder directamente a la API.

Despliegue
El backend del proyecto fue desplegado utilizando Railway, lo que permite ejecutar la aplicación en la nube y acceder a ella mediante una URL pública. Railway se encarga automáticamente del proceso de construcción y ejecución del servicio utilizando la configuración definida en el repositorio.

Conclusión
Con esta implementación se demuestra cómo utilizar Nginx como balanceador de carga, Docker para la contenedorización de servicios y Node.js con Express para la creación de una API REST. Esta arquitectura permite distribuir solicitudes entre múltiples servidores, mejorar la disponibilidad del sistema y facilitar el despliegue de aplicaciones modernas.

https://assignment-01-load-balancer-production.up.railway.app/
http://localhost:4000/


<img width="1919" height="767" alt="Screenshot 2026-03-16 162153" src="https://github.com/user-attachments/assets/c1ae2da8-8fec-4948-ba9d-56e0fd917898" />

<img width="1244" height="360" alt="Screenshot 2026-03-15 203222" src="https://github.com/user-attachments/assets/55a82fd6-b428-46e6-8a1d-9ce01423c264" />

<img width="1919" height="907" alt="Screenshot 2026-03-15 194531" src="https://github.com/user-attachments/assets/98cf63bf-9b6c-4295-a61d-a04ab691498d" />

<img width="1862" height="674" alt="Screenshot 2026-03-15 194528" src="https://github.com/user-attachments/assets/6dd31121-51d3-4468-8eba-9c71aade3cc5" />

<img width="1919" height="1023" alt="Screenshot 2026-03-15 180105" src="https://github.com/user-attachments/assets/ac9c9037-8c8c-4287-9e37-68faae34f35d" />

