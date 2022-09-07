const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../utils/token')

router.get('/', authenticateToken, (req, res) => {
    res.send('homepage')
})


module.exports = router;