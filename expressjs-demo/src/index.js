import express from "express";

const app = new express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('Test');
});

app.listen(PORT, () => console.log('STARTED'));