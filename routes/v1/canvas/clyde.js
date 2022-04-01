const router = require('express').Router();
const Canvacord = require('canvacord');

router.get('/', (req, res) => {
	if(!req.query.text) {
		return res.status(400).json({
			status: 400,
			message: 'Missing text parameter',
			example: `${req.protocol}://${req.get('host')}/api/v1/canvas/clyde?text=TEXT`
		});
	};
	Canvacord.Canvas.clyde(req.query.text)
	.then(data => {

		if(req.query.raw == "1"){
			return res.json({
				url: `${req.protocol}://${req.get('host')}/api/v1/canvas/clyde?text=${req.query.text.replace(/\s+/g, "%20")}`,
				status: res.statusCode
			})
		}


		var result = Buffer.from(data, 'clyde.jpeg') // Use jpeg mime type for faster response
		res.setHeader('Content-Type', 'image/jpeg')
		res.end(result)
	})
	.catch(err =>{
		return res.status(400).json({
			status: 400,
			message: 'Invalid text, or error?',
			example: `${err.stack}`
		});
		console.log(err.stack)
	})
})

module.exports = router;