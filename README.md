# Assignment 08 - Kubernetes con Minikube, ArgoCD y Traefik

## Descripción

En esta práctica se creó un clúster local de Kubernetes utilizando Minikube. Sobre este clúster se configuró Traefik como controlador de rutas e IngressRoute, y ArgoCD como herramienta para administrar el despliegue de aplicaciones mediante GitOps.

La aplicación utilizada corresponde a un balanceador con dos servidores web, donde cada servidor muestra un mensaje diferente. Esta aplicación fue desplegada en Kubernetes utilizando manifiestos YAML y sincronizada desde ArgoCD mediante la rama `assignment-08`.

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
```

## Aplicación funcionando con DNS local

La aplicación fue expuesta mediante Traefik usando el dominio:

```txt
http://app.victor-deleon.com:30264
```

<img width="1920" height="1001" alt="Aplicación funcionando con dominio" src="https://github.com/user-attachments/assets/e218a192-aa6b-49ce-ab48-77fe130facc0" />

## Configuración de ArgoCD con dominio local

ArgoCD fue expuesto mediante Traefik usando el dominio:

```txt
http://argo.victor-deleon.com:30264
```

Manifiesto utilizado para exponer ArgoCD:

```yaml
apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: argocd-ingress
  namespace: argocd
spec:
  entryPoints:
    - web
  routes:
    - match: Host(`argo.victor-deleon.com`)
      kind: Rule
      services:
        - name: argocd-server
          port: 80
```

Captura de ArgoCD usando el dominio configurado:

<img width="1920" height="1001" alt="Login de ArgoCD con dominio" src="https://github.com/user-attachments/assets/305826c1-ed18-41d5-adb7-b9dd486ca61f" />

## Aplicación sincronizada en ArgoCD

Se creó una aplicación llamada `mi-app` dentro de ArgoCD, conectada al repositorio de GitHub en la rama `assignment-08`, utilizando la carpeta `manifests`.

La aplicación aparece en estado `Healthy` y `Synced`, lo que confirma que ArgoCD está administrando correctamente los recursos del clúster.

<img width="1920" height="1080" alt="App en ArgoCD Healthy y Synced" src="https://github.com/user-attachments/assets/1cfab821-5cd8-4b8d-8121-55211359c6f9" />

## Manifiestos de las aplicaciones

Los manifiestos utilizados se encuentran dentro de la carpeta:

```txt
manifests/
```

Archivos incluidos:

```txt
app-ingressroute.yaml
argocd-ingressroute.yaml
traefik-values.yaml
web1-configmap.yaml
web1-deployment.yaml
web2-configmap.yaml
web2-deployment.yaml
web-services.yaml
```

## Lista de comandos ejecutados

```bash
minikube start --driver=docker
kubectl get nodes
```

```bash
helm repo add traefik https://traefik.github.io/charts
helm repo update
kubectl create namespace traefik
helm install traefik traefik/traefik -n traefik -f manifests/traefik-values.yaml
```

```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

```bash
kubectl apply -f manifests/
```

```bash
kubectl patch configmap argocd-cmd-params-cm -n argocd \
--type merge \
-p '{"data":{"server.insecure":"true"}}'

kubectl rollout restart deployment argocd-server -n argocd
```

```bash
kubectl get pods
kubectl get svc -n traefik
kubectl get pods -n argocd
```

```bash
git checkout -b assignment-08
git add .
git commit -m "Add Kubernetes manifests for assignment 08"
git push -u origin assignment-08
```

## Evidencia de pods y servicios

Se verificó que los pods de la aplicación estuvieran en estado `Running` y que Traefik estuviera expuesto mediante `NodePort`.

<img width="731" height="476" alt="kubectl get pods y kubectl get svc" src="https://github.com/user-attachments/assets/311b2979-5634-46f4-8e28-43fd52459d4a" />

## Resultado final

Se logró crear un clúster local de Kubernetes con Minikube, instalar Traefik y ArgoCD, configurar dominios locales mediante `/etc/hosts`, desplegar la aplicación usando manifiestos YAML y sincronizarla desde ArgoCD mediante GitOps.



