const express = require('express');
const router = express.Router();

module.exports = () => {
    router.get('/', (req, res, next) => {
        return res.send("Feedback");
    });

    router.get('/:feedback', (req, res, next) => {
        return res.send('Detail');
    });

    return router;
}