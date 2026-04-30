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


App en ArgoCD Healthy / Synced
<img width="1920" height="1080" alt="Screenshot from 2026-04-29 21-37-39" src="https://github.com/user-attachments/assets/1cfab821-5cd8-4b8d-8121-55211359c6f9" />

Login de ArgoCD con el dominio
<img width="1920" height="1001" alt="Screenshot from 2026-04-29 21-37-58" src="https://github.com/user-attachments/assets/305826c1-ed18-41d5-adb7-b9dd486ca61f" />


Aplicación funcionando con el dominio
<img width="1920" height="1001" alt="Screenshot from 2026-04-29 21-38-07" src="https://github.com/user-attachments/assets/e218a192-aa6b-49ce-ab48-77fe130facc0" />


kubectl get pods
kubectl get svc -n traefik
<img width="731" height="476" alt="Screenshot from 2026-04-29 21-41-11" src="https://github.com/user-attachments/assets/311b2979-5634-46f4-8e28-43fd52459d4a" />

## Dominios locales configurados

Se configuraron los siguientes dominios locales en el archivo `/etc/hosts`:

```txt
192.168.49.2 app.victor-deleon.com
192.168.49.2 argo.victor-deleon.com




