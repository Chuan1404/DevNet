const mongoose = require('mongoose');
const URL = 'mongodb://localhost:27017/DevNet';

const User = require('./user');

mongoose.connect(URL, (req, res) => {
    console.log('Connect to database');
})

module.exports = {
    User
}