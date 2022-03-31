const router = require('express').Router();
const moment = require('moment')



router.get('/', async (req, res) => {
    if(!req.query.id) {
		return res.status(400).json({
			status: 400,
			message: 'Missing id parameter',
			example: `${req.protocol}://${req.get('host')}/api/v1/id?id=SNOWFLAKE_ID`
		});
	};
    
    function convertIDtoUnix(id) {
        /* Note: id has to be str */
        var bin = (+id).toString(2);
        var unixbin = '';
        var unix = '';
        var m = 64 - bin.length;
        unixbin = bin.substring(0, 42-m);
        unix = parseInt(unixbin, 2) + 1420070400000;
        return unix;
    }
   
        var unix = convertIDtoUnix(req.query.id.toString());
        var timestamp = moment.unix(unix/1000);

        res.json(
            {
                date: `${timestamp.format('YYYY-MM-DD, h:mm:ss A')}`,
                ago: timestamp.fromNow()
            }
        )

});

module.exports = router;