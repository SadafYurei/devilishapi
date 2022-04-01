const router = require('express').Router();
const Canvacord = require('canvacord');

router.get('/', (req, res) => {
	if(!req.query.avatar) {
		return res.status(400).json({
			status: 400,
			message: 'Missing avatar parameter',
			example: `${req.protocol}://${req.get('host')}/api/v1/canvas/jail?avatar=AVATAR_URL`
		});
	};
	Canvacord.Canvas.jail(req.query.avatar)
	.then(data => {
		if(req.query.raw == "1"){
			return res.json({
				url: `${req.protocol}://${req.get('host')}/api/v1/canvas/jail?avatar=${req.query.avatar}`,
				status: res.statusCode
			})
		}

		var result = Buffer.from(data, 'jail.jpeg') // Use jpeg mime type for faster response
		res.setHeader('Content-Type', 'image/jpeg')
		res.end(result)
	})
	.catch(err => {
		return res.status(400).json({
			status: 400,
			message: 'Invalid image, or error?',
			example: `${err.stack}`
		});
		console.log(err.stack)
	})
})

module.exports = router;