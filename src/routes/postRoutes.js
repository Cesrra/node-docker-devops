const express = require("express")
const { 
    createOnePost, 
    getAllPosts, 
    getOnePost, 
    updateOnePost, 
    deleteOnePost 
} = require("../controllers/postController")
const protected = require("../middleware/authMiddleware")

const router = express.Router()

router.route("/")
    .get(protected, getAllPosts)
    .post(protected, createOnePost)

router.route("/:id")
    .get(protected, getOnePost)
    .patch(protected, updateOnePost)
    .delete(protected, deleteOnePost)

module.exports = router