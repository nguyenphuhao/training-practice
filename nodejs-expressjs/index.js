const express = require('express');
const app = express();
app.use((req, res, next) => {
    console.log('MD 3');
    next();
});
app.use((req, res, next) => {
    res.setHeader('x-server-date', new Date());
    console.log('MD 1');
    next();
});

app.use((req, res, next) => {
    console.log('MD 2');
    next();
});

app.get('/throw', (req, res, next) => {
    throw new Error('Something went wrong');
});

app.get('/next', (req, res, next) => {
    setTimeout(() => {
        next(new Error('Something went wrong'));
    }, 5000);
});

app.get('/', (req, res, next) => {
    return res.send('Hello, I am a webserver');
});

app.get('/time', (req, res, next) => {
    return res.send(new Date().toString());
});

app.get('/hello', (req, res, next) => {
    if (!req.query.name) {
        return res.status(400).end();
    }
    return res.send(`Hello, ${req.query.name}`);
});


app.get('/user/:name', (req, res, next) => {
    return res.send(`User Profile: ${req.params.name}`);
});

app.listen(3000);