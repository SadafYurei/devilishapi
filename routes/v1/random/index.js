const router = require('express').Router();

router.get('/', (req, res) => {
	res.status(200).json({
		message: 'Welcome to information routes routes',
		status: req.statusCode,
		path: req.path
	});
});

router.use('/float', require('./float'));

module.exports = router;