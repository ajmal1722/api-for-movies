
const homeRoute = async (req, res) => {
    res.json('home');
};

const userLogin = async (req, res) => {
    res.json('login')
}

module.exports = { homeRoute, userLogin };
                