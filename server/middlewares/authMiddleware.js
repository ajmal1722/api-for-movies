const jwt = require('jsonwebtoken');
const User = require('../collections/userCollection')

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            // Get token from headers
            token = req.headers.authorization.split(' ')[1]

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // Get user from token, also removed password
            req.user = await User.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.log('Error', error)
            return res.status(401).json({ error: 'Not authorized'})
        }
    }

    if (!token) {
        return res.status(401).json({ error: 'Not authorized, no token'})
    }
}

// Authorization for movie crud Operation
const isAdminAuth = async (req, res, next) => {
    try {
        const user = req.user;

        if (user && user.isAdmin === true) {
            next();
        } else {
            return res.status(403).json({ error: 'You do not have access' });
        }
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ error: error.message });
    }
}

module.exports = { protect, isAdminAuth }