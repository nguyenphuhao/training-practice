const express = require('express');
const app = new express();

const routes = require('./routes');

app.use('/', routes());

const port = 3000;
app.listen(port, () => {
    console.log(`The localhost has been started at port ${port}`);
});

module.exports = app;