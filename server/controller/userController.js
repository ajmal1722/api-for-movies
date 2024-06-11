
const homeRoute = async (req, res) => {
    res.json('home');
};

const userLogin = async (req, res) => {
    try {
        res.json({login})
    } catch (error) {
        
    }
}

module.exports = { homeRoute, userLogin };
                