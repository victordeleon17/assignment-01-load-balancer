# Assignment 08 - Kubernetes con Minikube, ArgoCD y Traefik

## Descripción

En esta práctica se creó un clúster local de Kubernetes utilizando Minikube. Sobre este clúster se configuró Traefik como controlador de rutas e IngressRoute, y ArgoCD como herramienta para administrar el despliegue de aplicaciones mediante GitOps.

La aplicación utilizada corresponde a un balanceador con dos servidores web, donde cada servidor muestra un mensaje diferente. Esta aplicación fue desplegada en Kubernetes utilizando manifiestos YAML.

## Tecnologías utilizadas

- Minikube
- Kubernetes
- Docker
- Traefik
- ArgoCD
- GitHub
- YAML

## Dominios locales configurados

Se configuraron los siguientes dominios locales en el archivo `/etc/hosts`:

```txt
192.168.49.2 app.victor-deleon.com
192.168.49.2 argo.victor-deleon.com

App en ArgoCD Healthy / Synced
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/3b766816-61dc-4acc-9eb9-36a193391a6a" />

Login de ArgoCD con el dominio
<img width="1920" height="1001" alt="image" src="https://github.com/user-attachments/assets/3ee5eb1b-5b13-418b-9dbc-ec89984eb592" />

Aplicación funcionando con el dominio
<img width="1920" height="1001" alt="image" src="https://github.com/user-attachments/assets/5e4dbe0c-97a3-478d-bc37-765f2ee84773" />

kubectl get pods
kubectl get svc -n traefik
<img width="731" height="476" alt="image" src="https://github.com/user-attachments/assets/e2177939-7957-4cc4-af3e-2c9867a305b0" />


