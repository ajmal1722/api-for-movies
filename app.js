const express = require('express');
// env configuration
require('dotenv').config()

const PORT = process.env.PORT || 3000;
const app = express()

app.use('/', require('./server/routes/userRouter'))

app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
})