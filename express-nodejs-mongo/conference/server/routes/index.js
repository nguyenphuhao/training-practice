const express = require('express');
const router = express.Router();

const speakerRouter = require('./speakers');
module.exports = () => {
    router.get('/', (req, res, next) => {
        return res.send('Index');
    });

    router.use('/speakers', speakerRouter());
    return router;
};