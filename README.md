# assignment01 - load balancer con nginx y docker

## descripción

En esta tarea se utilizo un balanceador de carga usando nginx como proxy reverso y docker para poder levantar toda la infraestructura de una forma más sencilla.

Se crearon dos servidores (web1 y web2) que muestran mensajes diferentes, para poder identificar cuál responde cada vez.

El balanceador distribuye las solicitudes utilizando el algoritmo round robin, que va alternando las peticiones entre los servidores.

---
## Infraestructura

Cliente -> Load Balancer (Nginx) -> web1
                                     -> web2

<img width="1917" height="864" alt="app" src="https://github.com/user-attachments/assets/5bab709b-2c5a-4a97-bf5d-42d2069fb72c" />
<img width="1919" height="923" alt="dockerhub-tags" src="https://github.com/user-attachments/assets/a92aa72a-e263-4569-9bc5-6d2f3024bd3b" />
   


---
## Cómo ejecutar

docker compose up -d
URL:
http://localhost:8080
