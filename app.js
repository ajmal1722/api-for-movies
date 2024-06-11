const express = require('express');
const connectDB = require('./server/database/connection')
require('dotenv').config()

const PORT = process.env.PORT || 3000;
const app = express()

// Connect to the database
connectDB();

app.use('/', require('./server/routes/userRouter'))

app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
})