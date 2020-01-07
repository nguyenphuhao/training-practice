import express from 'express';
import { PORT } from './config/env';
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import routes from "./routes";


const app = new express();
const api = '/v1/api';
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Init ROUTER
app.use(api, (req, res, next) => {
    console.log(`Request from: ${req.originalUrl}`);
    console.log(`Request type: ${req.method}`);
    next();
}, routes);

app.use((req, res) => {
    const data = res.locals.data;
    const status = res.locals.status;
    res.json({
        status: status,
        data: data
    })
});

app.listen(PORT, () => {
    console.log(`The server has been started at port ${PORT}`);
});