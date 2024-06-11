const User = require('../collections/userCollection');

const homeRoute = async (req, res) => {
    res.json('home');
};

const userLogin = async (req, res) => {
    try {
        const userData = req.body;
        console.log(userData)


        res.json({login: 'welcome to login'})
    } catch (error) {
        console.log('Error message:', error)
        res.status(500).json({ error: 'Internal server error'})
    }
}

module.exports = { homeRoute, userLogin };
                