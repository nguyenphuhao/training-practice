const express = require('express');
const router = express.Router();
const speakerRouter = require('./speakers');
const feedbackRouter = require('./feedback');

module.exports = () => {
    router.get('/', (req, res, next) => {
        return res.send('Index');
    });

    router.use('/speakers', speakerRouter());
    router.use('/feedbacks', feedbackRouter());

    return router;
}