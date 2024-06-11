const User = require('../collections/userCollection');
const bcrypt = require('bcryptjs');

const homeRoute = async (req, res) => {
    res.json('home');
};

const userSignUp = async (req, res) => {
    try {
        // getting data from request body
        const { name, email, password } = req.body;

        // check if the user already exists
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ error: 'User with this email already exist'})
        }

        // hashyng the password
        const hashedPassword = await bcrypt.hash(password, 8)
        console.log(hashedPassword)

        const userData = await User.create({ name, email, password: hashedPassword })
        userData.password = undefined



        res.json({status: 'Success', userData})
    } catch (error) {
        console.log('Error message:', error)
        res.status(500).json({ error: error.message })
    }
}

module.exports = { homeRoute, userSignUp };
                