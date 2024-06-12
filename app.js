const express = require('express');
const connectDB = require('./server/database/connection')
require('dotenv').config()

const PORT = process.env.PORT || 3000;
const app = express()

// Connect to the database
connectDB();

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./server/routes/userRouter'))
app.use('/api/movies/', require('./server/routes/movieRouter'))

app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
})