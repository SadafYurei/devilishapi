const router = require('express').Router();

router.get('/', async (req, res) => {
	if(!req.query.float){
		return res.status(400).json({
            "error": [
                {
                    status: 400,
                    message: 'Float number cannot be null',
                    example: `https://${req.host}/api/v1/float?float=NUMBER`
                }
            ]
        });
	}

	const floatNumber = req.query.float
	function randomFloat(minimum, maximum) {
		if (maximum === undefined) {
			maximum = minimum;
			minimum = 0;
		}
	
	
	
		return (Math.random() * (maximum - minimum)) + minimum;
	}
	res.json({
		float: `${randomFloat(floatNumber)}`
	})
});

module.exports = router;