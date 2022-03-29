const router = require('express').Router();
const Canvacord = require('canvacord');

router.get('/', (req, res) => {
	if(!req.query.avatar) {
		return res.status(400).json({
			status: 400,
			message: 'Missing avatar parameter',
			example: `${req.protocol}://${req.get('host')}/api/v1/canvas/affect?avatar=AVATAR_URL`
		});
	};
		Canvacord.Canvas.blur(req.query.avatar)
	.then(data => {

		if(req.query.raw == "yes"){
			return res.json({
				url: `${req.protocol}://${req.get('host')}/api/v1/canvas/blur?avatar=${req.query.avatar}`
			})
		}


		var result = Buffer.from(data, 'blur.jpeg') // Use jpeg mime type for faster response
		res.setHeader('Content-Type', 'image/jpeg')
		res.end(result)
	})
	.catch(err => {
		res.json({
			error: "Invalid image, or there was a error!"
		})
		console.log(err.stack)
	})
})

module.exports = router;