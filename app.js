const express = require('express');
const connectDB = require('./server/database/connection')
require('dotenv').config()
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express')

const PORT = process.env.PORT || 3000;
const app = express()

// Connect to the database
connectDB();

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger setup
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Movie Streaming API',
            version: '1.0.0',
            description: 'API for managing a movie streaming service'
        },
        servers: [
            {
                url: 'http://localhost:8000/'
            }
        ]
    },
    apis: ['./server/routes/*.js'] // Path to the API docs
};

const spacs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spacs))

app.use('/', require('./server/routes/userRouter'))
app.use('/api/movies/', require('./server/routes/movieRouter'))

app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
})