const express = require("express")
const mongoose = require("mongoose")

const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require("./src/config/config")
const postRouter = require("./src/routes/postRoutes")
const userRouter = require("./src/routes/userRoutes")

const app = express()
const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`

const conectWithRetry = () => {
    mongoose
        .connect(MONGO_URL)
        .then(() => console.log("Succesfully conected to BD"))
        .catch((e) => {
            console.log(e)
            setTimeout(conectWithRetry, 5000)
        })

}

conectWithRetry()

app.use(express.json())

app.use("/api/v1/posts", postRouter)
app.use("/api/v1/users", userRouter)

app.use("/", (req, res) => {
    res.send(`<h1>${process.env.NAME} is Lerning! - And - It is Really Awesome!</h1>`)
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listing in port ${port}`))

/* DOCKER COMANDS
docker image pull mongo --> get an image of mongo
docker build -t node-app-image . --> create a image using the Dockerfile in the root and put de name node-app-image
docker iamges --> show the docker's images
docker image rm node-app-image --> remove the image with the name node-app-image
docker run -v $(pwd):/app -p 3000:3000 -d --name node-app node-app-image --> runs the node-app-image, put the name 
    node-app to the instance, listening the changes from the $(pwd) to /app, and listening on port 3000:3000 and
    we have all permisions to CRUD and this changes are afected the -v $(pwd)
docker run -v $(pwd):/app -v /app/node_modules -p 3000:3000 -d --name node-app node-app-image --> it's the same to the previous 
    but created a new -v and indicated that /app/node_modules should not be oberriding
docker run -v $(pwd):/app:ro -v /app/node_modules -p 3000:3000 -d --name node-app node-app-image --> it's the same to the previous
    but only give the permission to read with the :ro
docker run -v $(pwd):/app:ro -v /app/node_modules --env PORT=4000 -p 3000:3000 -d --name node-app node-app-image
                                                                  Externo:Interno
docker ps --> show docker's containers that are runing
docker ps -a --> show docker's containers that are runing and stoped
docker logs node-app --> show the logs from node-app container
docker exec -it node-app bash --> execueted a bash to the container node-app
    printenv --> into the bash show the env variables
docker rm node-app -f --> remove the node-app continer with focer
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

/* Create a MongoDB
mongosh -u "dbmongo" -p "p4ssw0rd" --> into the bash of container of mongo, this command loging to DB
docker exec -it node-docker-devops_mongodb_1 mongosh -u "dbmongo" -p "p4ssw0rd" --> to loging faster
use mydb --> to use the mydb database
show dbs --> show the available databases
db.books.insert({"name": "César Rincón"})
db.books.find() --> get all tha documents from collection books
------ If you down de containers the information was gone -----------
docker inspect node-docker-devops_mongodb_1 --> get deatils about that container "IPAddress".
    this works with networks, ...
docker logs node-docker-devops_node-app_1
docker network ls

*/