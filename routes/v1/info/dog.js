const router = require('express').Router();
const dogFacts = require('dog-facts')

router.get('/', async (req, res) => {
	let randomFact = dogFacts.random();
	res.json(
		{
		fact: randomFact
		}
	)
});

module.exports = router;