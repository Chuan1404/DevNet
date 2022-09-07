const express = require('express');
const router = express.Router();
const { User } = require('../database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


// login
router.post('/login', async (req, res) => {
    // find account in database
    const { email, password } = req.body;

    const data = await User.findOne({ email });

    // check account and create token
    let isTruePassword = await bcrypt.compare(password, data?.password);

    if (isTruePassword) {

        const accessToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '60s' });
        const refreshToken = jwt.sign({ email }, process.env.REFRESH_TOKEN_SECRET);

        return res.json({ accessToken, refreshToken })
    }

    // error
    return res.json({ error: 'Email or Password is not corrent' })

})


// register
router.post('/register', async (req, res) => {
    // find account in database
    const { email, password } = req.body;

    const data = await User.findOne({ email });

    // create add add new account to database
    if (data) {
        var salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        let newUser = new User({ email, password: hashedPassword });
        return newUser.save().then(() => {
            res.json({ status: 'success' })
        })
    }

    // error
    return res.json({ error: 'This account already exist' })
})

router.post('/refresh', (req, res, next) => {
    const refreshToken = req.body.token;

    if (!refreshToken) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, data) => {
        console.log(data)
        if (err) return res.sendStatus(403);

        const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '60s' });
        res.json({ accessToken })
        next();
    })
})

module.exports = router;