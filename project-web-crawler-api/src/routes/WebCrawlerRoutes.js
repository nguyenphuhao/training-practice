const express = require('express');
const router = express.Router();

const { getArticles, getArticleContent } = require('../controllers/WebCrawlerController');

router.route('/articles').get((req, res) => {
    getArticles(req, res);
});

router.route('/articles/content').get((req, res) => {
    getArticleContent(req, res);
});

module.exports = router;