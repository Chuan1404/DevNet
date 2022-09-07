const express = require('express');
const database = require('./database');
const cors = require('cors')
const { homeRouter, authRouter } = require('./router')

// config env
require('dotenv').config();

// variable
const PORT = process.env.PORT || 5000;
const app = express()


//middleware
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.use('/', homeRouter);
app.use('/auth', authRouter);


// run app
app.listen(PORT, () => {
    console.log('Listen at port ' + PORT);
})

