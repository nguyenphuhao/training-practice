const express = require('express');
const router = express.Router();
const AuthMiddleWare = require('../middleware/AuthMiddleWare');
const AuthController = require('../controllers/AuthController');
const FriendController = require('../controllers/FriendController');

let initAPIs = (app) => {
    router.post('/login', AuthController.login);
    router.post('/refresh-token', AuthController.refreshToken);
    router.use(AuthMiddleWare.isAuth);
    router.get('/friends', FriendController.friendLists);

    return app.use('/', router);
}

module.exports = initAPIs;