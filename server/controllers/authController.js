const User = require('../models/userSchema')
const bcrypt = require('bcryptjs')


// SIGNUP 
exports.signup = async (req, res) => {
    const { username, email, password, phone, profilePic } = req.body
    try {
        if (!username || !email || !password || !phone) {
            return res.status(400).json({ error: "require all fields" })
        }
        const savedUser = await User.findOne({ email })
        console.log(savedUser)
        if (savedUser) {
            return res.status(400).json({ error: "exiting user , please add a new email" })
        }
        // for Generating Hashed Password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt)
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
            phone,
            profilePic
        })
        return res.status(201).json({ success: "signup Successful", user })
    } catch (error) {
        console.log("error" + error)
    }
}




// LOGIN 
exports.login = async (req, res) => {
    const { email, password } = req.body
    try {
        if (!email || !password) {
            return res.status(400).json({ error: "require all fields" })
        }
        const savedUser = await User.findOne({ email })
        if (!savedUser) {
            return res.status(404).json({ error: "Not a user, Please signup" })
        }
        const pwdMatch = bcrypt.compareSync(password, savedUser.password);
        if (!pwdMatch) {
            return res.status(404).json({ error: "invalid Credential" })
        } else {
            return res.status(200).json({ success: "login Successful", user: savedUser })
        }
    } catch (error) {
        console.log("errror: " + error)
    }


}