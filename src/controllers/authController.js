const User = require("../models/userModel")
const bcrypt = require("bcryptjs")

exports.signUp = async (req, res) => {
    const { password, username } = req.body
    const hashPassword = await bcrypt.hash(password, 12)

    try {
        const newUser = await User.create({
            username,
            password: hashPassword
        })
        req.session.user = newUser
        res.status(201).json({
            status: "succes",
            data: {
                user: newUser
            }
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "fail"
        })
    }
}

exports.login = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await User.findOne({username})

        if(!user) {
            return res.status(404).json({
                status: "fail",
                message: "User no found!"
            })
        }

        const isCorrect = await bcrypt.compare(password, user.password)
        
        if(isCorrect) {
            req.session.user = user
            res.status(200).json({
                status: "succes",
                data: {
                    user
                }
            })
        }else {
            res.status(400).json({
                status: "fail",
                message: "Incorrecte password!"
            })
        }

    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "fail"
        })
    }
}