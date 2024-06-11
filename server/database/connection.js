const mongoose = require('mongoose');
require('dotenv').config();

const dbUrl = process.env.MONGODB_URL;

const connectionParams = {
    useNewUrlParser: true,  
    useUnifiedTopology: true
};

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl, connectionParams);
        console.info('Connected to DB');
    } catch (e) {
        console.error('Error connecting to the database', e);
        process.exit(1);  // Exit process with failure
    }
};

module.exports = connectDB;
