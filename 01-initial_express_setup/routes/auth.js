const express = require('express');
const router = express.Router();

//login route
router.post('/', (req, res) => {
    const { name } = req.body;

    if (name) {
        res.status(200).send(`hello and welcome ${name}`);
    }
    res.status(401).send('please, provide credentials');
});

module.exports = router;
