const express = require('express')
const router = express.Router()


/* create route, use get to get a root, create function and pass request & response  */
router.get(`/`, (req, res) => {
    res.render('index')
})

module.exports = router 