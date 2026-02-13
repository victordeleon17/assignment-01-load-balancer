# assignment01 - load balancer con nginx y docker

## descripción

En esta tarea se utilizo un balanceador de carga usando nginx como proxy reverso y docker para poder levantar toda la infraestructura de una forma más sencilla.

Se crearon dos servidores (web1 y web2) que muestran mensajes diferentes, para poder identificar cuál responde cada vez.

El balanceador distribuye las solicitudes utilizando el algoritmo round robin, que va alternando las peticiones entre los servidores.

---

## Infraestructura

cliente → load balancer (nginx) → web1  
                                → web2

---

## Cómo ejecutar

En la carpeta del proyecto:

```bash
docker compose up -d
