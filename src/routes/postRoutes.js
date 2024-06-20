const express = require("express")
const { 
    createOnePost, 
    getAllPosts, 
    getOnePost, 
    updateOnePost, 
    deleteOnePost 
} = require("../controllers/postController")

const router = express.Router()

router.route("/")
    .get(getAllPosts)
    .post(createOnePost)

router.route("/:id")
    .get(getOnePost)
    .patch(updateOnePost)
    .delete(deleteOnePost)

module.exports = router