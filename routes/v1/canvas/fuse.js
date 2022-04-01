const router = require('express').Router();
const Canvacord = require('canvacord');

router.get('/', (req, res) => {
	if(!req.query.image1) {
		return res.status(400).json({
			status: 400,
			message: 'Missing image1 parameter',
			example: `${req.protocol}://${req.get('host')}/api/v1/canvas/fuse?image1=URL&image2=URL`
		});
	};
    if(!req.query.image2) {
		return res.status(400).json({
			status: 400,
			message: 'Missing image2 parameter',
			example: `${req.protocol}://${req.get('host')}/api/v1/canvas/fuse?image1=URL&image2=URL`
		});
	};
	Canvacord.Canvas.fuse(req.query.image1, req.query.image2)
	.then(data => {

		if(req.query.raw == "1"){
			return res.json({
				url: `${req.protocol}://${req.get('host')}/api/v1/canvas/fuse?image1=${req.query.image1}&image2=${req.query.image2}`,
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