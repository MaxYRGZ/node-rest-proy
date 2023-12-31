# API de Gestión de Usuarios, Contraseñas, Consejos y Anuncios

Este proyecto presenta una API RESTful que administra usuarios, contraseñas, consejos y anuncios. Utiliza Node.js y se ejecuta en contenedores Docker para una fácil implementación y despliegue.

## Tabla de contenido

- [API de Gestión de Usuarios, Contraseñas, Consejos y Anuncios](#api-de-gestión-de-usuarios-contraseñas-consejos-y-anuncios)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Requisitos de instalación](#requisitos-de-instalación)
  - [Instrucciones para la instalación](#instrucciones-para-la-instalación)
  - [Documentación detallada](#documentación-detallada)
  - [Enlaces externos](#enlaces-externos)

## Requisitos de instalación

Asegúrate de tener instalado y configurado Docker antes de comenzar.

- [Docker](https://www.docker.com)

## Instrucciones para la instalación

1. Clonar el repositorio en la máquina local:
   
   ```sh
   git clone https://github.com/MaxYRGZ/node-rest-proy.git
   ```

2. Navegar al directorio del proyecto:
   
   ```sh
   cd node-rest-proy
   ```

3. Ejecutar el siguiente comando para iniciar los contenedores:

    ```sh
    docker-compose up -d
    ```

    > **IMPORTANTE**
    >
    > Debe estar iniciado el Docker engine para ejecutar el comando anterior,
    > si no lo está, se devolverá un mensaje de error indicando que no se
    > encontró el docker daemon.

4. La API estará disponible en `http://localhost:3001`.

## Documentación detallada

Para obtener información detallada sobre los endpoints y cómo utilizar la API,
consulta la [documentación detallada](./docs/README.md).

## Enlaces externos

- [Node.js](https://www.nodejs.org)
- [Docker](https://www.docker.com)