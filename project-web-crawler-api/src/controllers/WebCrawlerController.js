const puppeteer = require('puppeteer');
const getArticles = async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(req.query.url);

    const articles = await page.evaluate(() => {
        let articles = document.querySelectorAll('article.list_news');
        articles = [...articles];
        let index = 0;
        return articles.map(item => {
            return {
                id: index++,
                title: item.querySelector('.title_news > a').getAttribute('title'),
                url: item.querySelector('.title_news > a').getAttribute('href'),
                imgUrl: item.querySelector('a.thumb > img') ? item.querySelector('a.thumb > img').getAttribute('src') : null,
                description: item.querySelector('p.description > a') ? item.querySelector('p.description > a').innerHTML : "",
            }
        });
    });
    console.log('Evaluate');
    res.json(articles);
}

const getArticleContent = async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(req.query.url);

    const content = await page.evaluate(() => {
        const title = document.querySelector('.title_news_detail').innerText;
        const description = document.querySelector('meta[itemprop="description"]').getAttribute('content');
        const content = document.querySelector('article.content_detail').innerHTML;
        const time = document.querySelector('span.time').innerText;
        
        return {
            title, time, description, content
        }
    });

    res.json(content);
}


module.exports = {
    getArticles, getArticleContent
}