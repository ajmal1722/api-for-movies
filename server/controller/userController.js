const User = require('../collections/userCollection');
const bcrypt = require('bcryptjs');

const homeRoute = async (req, res) => {
    res.json('home');
};

const userSignUp = async (req, res) => {
    try {
        // Extracting data from the request body
        const { name, email, password } = req.body;

        // Check if all required fields are provided
        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        } else if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        } else if (!password) {
            return res.status(400).json({ error: 'Password is required' });
        }

        // check if the user already exists
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ error: 'User with this email already exist'})
        }

        // Hashing the password
        const hashedPassword = await bcrypt.hash(password, 8)
        console.log(hashedPassword)

        // Creating the user
        const userData = await User.create({ name, email, password: hashedPassword })
        userData.password = undefined // Remove password from the response

        res.status(201).json({ status: 'Success', userData });
    } catch (error) {
        console.log('Error message:', error)
        res.status(500).json({ error: error.message })
    }
}

module.exports = { homeRoute, userSignUp };
                