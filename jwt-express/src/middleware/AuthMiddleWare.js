const jwtHelper = require('../helpers/jwt.helpers');
const debug = console.log.bind(console);

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || "access-token-secret-hao";

let isAuth = async (req, res, next) => {
    const tokenFromClient = req.body.token || req.query.token || req.headers['x-access-token'];
    if (tokenFromClient) {
        try {
            const decoded = await jwtHelper.verifyToken(tokenFromClient, accessTokenSecret);
            req.jwtDecoded = decoded;
            next();
        } catch (error) {
            debug("Error while verify token", error);
            return res.status(401).send({
                message: "Unauthorized."
            });
        }
    } else {
        return res.status(403).send({
            message: 'No token provided.'
        });
    }
}

module.exports = {
    isAuth
}