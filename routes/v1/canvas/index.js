const router = require('express').Router();

router.get('/', (req, res) => {
	res.status(200).send('Wecome to canvas routes')
})

router.use('/affect', require('./affect'))
router.use('/beautiful', require('./beautiful'))
router.use('/changemymind', require('./changemymind'))
router.use('/delete', require('./delete'))
router.use('/jail', require('./jail'))
router.use('/blur', require('./blur'))
router.use('/facepalm', require('./facepalm'))
router.use('/hitler', require('./hitler'))
router.use('/bed', require('./bed'))
router.use('/joke', require('./joke'))
router.use('/clyde', require('./clyde'))
router.use('/fuse', require('./fuse'))
router.use('/ph', require('./ph'))

module.exports = router;