const router = require('express').Router();
const fetch = require('node-fetch');

router.get('/', async(req, res) => {

    
    const neb = req.query.neb
	function isValidURL(string) {
		//regex for link
		// eslint-disable-next-line no-useless-escape
		const res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
		return (res !== null);
	}
	if (isValidURL(neb) == true) {
		const url = `http://api.qrserver.com/v1/create-qr-code/?data=${neb}&size=100x100`;

		res.send(url)
	}
	else return res.send(`no`)


})


module.exports = router;