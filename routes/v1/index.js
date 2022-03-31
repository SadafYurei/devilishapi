const router = require('express').Router();

router.get('/', (req, res) => {
	res.status(200).json({
		message: 'Welcome to api routes',
		status: res.statusCode,
		path: req.path
	});
	
});

router.use('/info', require('./info/index'));
router.use('/canvas', require('./canvas/index'))
router.use('/random', require('./random/index'))
router.use('/nsfw', require('./nsfw/index'))

// Single Files

router.use('/meme', require('./fun/meme'))
router.use('/skyrim', require('./fun/skyrim'))
router.use('/id', require('./fun/id'))

module.exports = router;