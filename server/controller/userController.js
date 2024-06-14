const User = require('../collections/userCollection');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

// Creating jwt token
const generateToken = (id) => {
    return jwt.sign(
        { id }, 
        process.env.JWT_SECRET, 
        { expiresIn: '2d'}
    )
}

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

        res.status(201).json({
            status: 'Success',
            userData,
            token: generateToken(userData._id)
        });
    } catch (error) {
        console.log('Error message:', error)
        res.status(500).json({ error: error.message })
    }
}

const userLogin = async (req, res) => {
    try {
        // Destructuring name and email from req.body
        const { email, password } = req.body;

        // finding the user
        const user = await User.findOne({ email });

        // if no user throw an error
        if (!user) {
            return res.status(404).json({ error: 'User does not exist' });
        }

        // Compare the Password
        const passwordMatch = await bcrypt.compare(password, user.password)
        
        if (passwordMatch) {
            user.password = undefined;
            
            res.status(200).json({
                status: 'Success',
                message: 'User successfully logged in',
                user,
                token: generateToken(user._id)
            });
        } else {
            return res.status(401).json({ error: 'Password does not match'})
        }
    } catch (error) {
        console.log('Error message:', error)
        res.status(500).json({ error: error.message })
    }
}

const myAccount = async (req, res) => {
    try {
        const userId = req.user.id;

        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({ error: 'User does not found'})
        }

        user.password = undefined;

        res.status(200).json({ 
            status: 'Success',
            user 
        });
    } catch (error) {
        console.log('Error message:', error)
        res.status(500).json({ error: error.message }) 
    }
}

module.exports = { homeRoute, userSignUp, userLogin, myAccount };
                