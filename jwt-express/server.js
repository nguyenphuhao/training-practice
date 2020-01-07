const express = require("express");
const app = express();
const initAPIs = require('./src/routes/api');

app.use(express.json());
initAPIs(app);

let port = 8017;

app.listen(port, () => {
    console.log(`SERVER STARTED at ${port}`);
})