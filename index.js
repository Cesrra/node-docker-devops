const express = require("express")

const app = express()

app.use("/", (req, res) => {
    res.send(`<h1>${process.env.NAME} is Lerning! - And - It is Really Awesome!</h1>`)
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listing in port ${port}`))

/* DOCKER COMANDS
docker iamges --> show the docker's images
docker ps --> show docker's containers that are runing
docker ps -a --> show docker's containers that are runing and stoped
docker logs node-app --> show the logs from node-app container
docker build -t node-app-image . --> create a image using the Dockerfile in the root and put de name node-app-image
docker run -v $(pwd):/app -p 3000:3000 -d --name node-app node-app-image --> runs the node-app-image, put the name 
    node-app to the instance, listening the changes from the $(pwd) to /app, and listening on port 3000:3000 and
    we have all permisions to CRUD and this changes are afected the -v $(pwd)
docker run -v $(pwd):/app -v /app/node_modules -p 3000:3000 -d --name node-app node-app-image --> it's the same to the previous 
    but created a new -v and indicated that /app/node_modules should not be oberriding
docker run -v $(pwd):/app:ro -v /app/node_modules -p 3000:3000 -d --name node-app node-app-image --> it's the same to the previous
    but only give the permission to read with the :ro
docker run -v $(pwd):/app:ro -v /app/node_modules --env PORT=4000 -p 3000:3000 -d --name node-app node-app-image
docker exec -it node-app bash --> execueted a bash to the container node-app
docker rm node-app -f --> remove the node-app continer with focer
docker image rm node-app-image --> remove the image with the name node-app-image
printenv --> into the bash show the env variables
docker volume ls --> list the volumes that you have
docker volume prune --> deleted all volumes that are not using
*/

/* Docker-Compose to Crated a many docker containers automatically
We need to build a docker-compose.yml file and put the configuration on it
docker-compose up -d --> execute the docker-compose.yml file
docker-compose down -v --> remuve the containers and the volumes
docker-compose up -d --build --> forze to do the build  
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --> create one container
    with the union of the configurations files that you pass
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build --> the same but 
    force the build process

*/