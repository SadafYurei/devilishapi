const router = require('express').Router();
const Canvacord = require('canvacord');

router.get('/', (req, res) => {
	if(!req.query.username) {
		return res.status(400).json({
			status: 400,
			message: 'Missing username parameter',
			example: `${req.protocol}://${req.get('host')}/api/v1/canvas/ph?username=TEXT&message=TEXT`
		});
	};
    if(!req.query.message) {
		return res.status(400).json({
			status: 400,
			message: 'Missing message parameter',
			example: `${req.protocol}://${req.get('host')}/api/v1/canvas/ph?username=TEXT&message=TEXT`
		});
	};


	Canvacord.Canvas.phub(options = {username: req.query.username, message: req.query.message, image: "https://cdn.discordapp.com/attachments/946266253453037578/959244293275541534/unknown.png"})


	.then(data => {

		if(req.query.raw == "1"){
			return res.json({
				url: `${req.protocol}://${req.get('host')}/api/v1/canvas/ph?username=${req.query.username}&message=${req.query.message}`,
				status: res.statusCode
			})
		}


		var result = Buffer.from(data, 'fuse.jpeg') // Use jpeg mime type for faster response
		res.setHeader('Content-Type', 'image/jpeg')
		res.end(result)
	})
	.catch(err =>{
		return res.status(400).json({
			status: 400,
			message: 'Invalid images, or error?',
			example: `${err.stack}`
		});
		console.log(err.stack)
	})
})

module.exports = router;