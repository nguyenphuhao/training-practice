import express from 'express';
const router = express.Router();
export const AssetsRoutes = () => {
    router.route('/')
        .get((req, res, next) => {
            res.locals.data = [
                {
                    name: "Vietcombank"
                }
            ];
            next();
        }).post((req, res) => {
            res.send('POST request');
        });

    router.route('/:id')
        .get((req, res) => {
            res.send('GET request');
        }).put((req, res) => {
            res.send('PUT request')
        }).delete((req, res) => {
            res.send('DELETE request')
        });

    return router;
}