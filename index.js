const express = require("express")

const app = express()

app.use("/", (req, res) => {
    res.send("<h1>César is Lerning! And It is Really Awesome!</h1>")
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listing in port ${port}`))

/* DOCKER COMANDS
docker iamges --> show the docker's images
docker ps --> show docker's instances runing
docker build -t node-app-image . --> create a image using the Dockerfile in the root and put de name node-app-image
docker run -v $(pwd):/app -p 3000:3000 -d --name node-app node-app-image --> runs the node-app-image, put the name 
    node-app to the instance, listening the changes from the $(pwd) to /app, and listening on port 3000:3000
docker rm node-app -f --> remove the node-app intance with focer
docker image rm node-app-image --> remove the image with the name node-app-image
*/