# KomMonitor Kubernetes
This repository provides several Kubernetes manifests that facilitate the deployment of the KomMonitor platform
within a Kubernetes Cluster.

## Project structure
## Projec root
This project uses Kustomize to bundle all required resources for deploying KomMonitor. Hence, you'll find kustomization files at the root and in all subdirectories.

The root of the project also contains configurations for an Ingress as well as an Issuer.

## Components
The components subdirectory contains manifests for all services that are required to run KomMonitor
* __keycloak__: Keycloak configurations and resources
* __keycloak-db__: Postgres configurations and resources, which will be used as Keycloak DB
* __komMonitor__: Configurations and resource for all KomMonitor services
* __komMonitor-db__: PostGIS configurations and resources, which will be used as DB for KomMonitor Data Management
* __redis__: Configurations and resources for Redis

## Getting started
This repository only provides templates for manifests, which have to be customized for your target cluster
environment. Consider the steps listed below to bring KomMonitor into production. Note, that the following steps
assume that your cluster is already configured to be ready for deploying KomMonitor related ressources in it and
does not cover any cluster provider related actions.

1. Configure a Cert Manager for the [KomMonitor Ingress](./ingress.yaml) by defining your own [Issuer](./issuer.yaml)

2. Create your own hidden secrets, which are used by several Pods that run the KomMonitor components. You'll find
`secret.yaml` files in all subdirectories for those components that consume secrets. Just add your own Base64
encoded secrets in these files and apply them to your cluster.  Note: some secrets assume that you already have a 
running Keycloak instance and created Keycloak secrets for each KomMonitor client. Hence, you may  first deploy
Keycloak in your cluster or use a already running instance in order to create those secrets.

3. Adapt all `configmap.yaml` files to your cluster deployment. This, in particular, applies to all URLs that
reference KomMonitor, DB and Keycloak services in the cluster.

4. Apply all resources to your cluster by running `kubectl apply -k .`

5. Adapt the [Client Config Server configurations files](./components/kommonitor/client-config/config) to your cluster
deployment. These files are provided by the Client Config Server to the KomMonitor Web Client and contain
serveral configuration parameters for the Web Client.

6. Before you open the KomMonitor Web Client the first time, you have to provide the config files from the previous
step to the Client Config server. Simply add it to the server by performing a HTTP POST request to all three 
endpoints:
    * https://your.kommonitor.url/client-config/config/client-app-config 
    * https://your.kommonitor.url/client-config/config/client-keycloak-config
    * https://your.kommonitor.url/client-config/config/client-controls-config

    Below you'll find an example request for the client-keycloak-config endpoint:
    ```
    curl --location 'https://your.kommonitor.url/client-config/config/client-keycloak-config' \
    --header 'Authorization: Bearer 
    YOUR KECLOAK ACCESS TOKEN' \
    --form 'appConfig=@"./components/kommonitor/client-config/config/webClientKeycloakConfig.json"'
    ```
    Get your own access token from Keycloak and add it to the request. Also adopt the `--location` and `--form` parameter. You can also use Postman for performing the request. 

7. Now, the KomMonitor deployment for your Kubernetes Cluster should be ready. Have fun!
