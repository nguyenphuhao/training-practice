const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


const WebCrawlerRouter = require('./src/routes/WebCrawlerRoutes');

const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


app.use(WebCrawlerRouter, (req, res, next) => {
    next();
});


app.listen(PORT, () => {
    console.log('Server has been started');
});