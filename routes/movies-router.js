const express = require('express');

const router = express.Router();

router.get('/', (req, res) => (
    res.send('Movies')
));

router.get('/specific', (req, res) => (
    res.send('specific movie')
));

module.exports = router;
