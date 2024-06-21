const Post = require("../models/postModel")

exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find()

        res.status(200).json({
            status: "succes",
            results: posts.length,
            data: {
                posts
            }
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            estatus: "fail",
        })
    }
}

exports.getOnePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json({
            status: "succes",
            data: {
                post
            }
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "fail"
        })
    }
}

exports.createOnePost = async (req, res, next) => {
    try {        
        const post = await Post.create(req.body)
        res.status(201).json({
            status: "succes",
            data: {
                post
            }
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "fail"
        })
    }
}

exports.updateOnePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })

        res.status(200).json({
            status: "succes",
            data: {
                post
            }
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "fail"
        })
    }
}

exports.deleteOnePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "succes"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "fail"
        })
    }
}