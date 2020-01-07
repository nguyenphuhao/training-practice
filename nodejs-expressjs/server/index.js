const express = require('express');
const app = express();

const routes = require('./routes')
app.use(express.static('public'));
app.use('/', routes());
app.get('/favicon.ico', () => {
    
});
app.listen(3000);

module.exports = app;