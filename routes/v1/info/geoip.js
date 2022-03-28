const router = require('express').Router();
var geoip = require('geoip-lite');


router.get('/', (req, res) => {
	if(!req.query.ip) {
		return res.status(400).json({
			status: 400,
			message: 'Missing IP!',
			example: `${req.protocol}://${req.get('host')}/api/v1/info/geoip?ip=IP`
		});
	};
	var geo = geoip.lookup(req.query.ip);
	res.set()
	res.json(geo);
})


module.exports = router;