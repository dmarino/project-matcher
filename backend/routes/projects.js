const express = require('express');
const router = express.Router();

/* GET projects listing. */
router.get('/', function(req, res, next) {
    res.send('query mongo and return');
});

/* GET specific project listing. */
router.get('/:id', function(req, res, next) {
    res.send('query mongo with id and return');
});

/* POST project */
router.post('/', function(req, res, next) {
    res.send('added new entry to db');
});

module.exports = router;