# UTN-2021-nodejs-example

### Pasos de instalacion

1. ir a la carpeta `server` con un `cd server`

2. Para poder instalar las dependencias y que el ide las detecte ejecutar un `yarn install` en caso que yarn no exista usar un `npm install`

3. Luego construir la imagen con un `sudo docker build .`

4. Nos movemos a la carpeta del docker con un `cd ../docker` y ejecutamos un `sudo docker-compose up --build`

5. En caso de mostrar algun error ejecutar un `docker exec -it server sh` y ejecutar un `yarn install`
