const express = require('express');
const router = express.Router();

router.post('/register',(req, res) => {
    res.send("Register Endpoint")
})

router.post('/login',(req, res) => {
    res.send("Login Endpoint")
})

router.post('/logout',(req, res) => {
    res.send("Logout Endpoint")
})

module.exports = router;