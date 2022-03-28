const RedditImageFetcher = require("reddit-image-fetcher");

const router = require('express').Router();

router.get('/', async (req, res) => {

    RedditImageFetcher.fetch({
        type: 'meme'
    }).then(result => {
        res.send(result)
    });

});

module.exports = router;