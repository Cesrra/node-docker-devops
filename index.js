const express = require("express")

const app = express()

app.use("/", (req, res) => {
    res.send(`<h1>${process.env.NAME} is Lerning! And It is Really Awesome!</h1>`)
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
*/