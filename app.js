const express = require('express');
const app = express()



// env configuration
require('dotenv').config()

const PORT = process.env.PORT || 3000;


app.use('/', require('./server/routes/userRouter'))

app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
})