const express = require("express")

const app = express()

app.use("/", (req, res) => {
    res.send("<h1>César is Lerning!!!</h1>")
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listing in port ${port}`))