const router = require('express').Router();
const fs = require('fs')
router.get("/", (req, res) => {
    res.send(fs.readFileSync("C:\\Users\\devilish\\Desktop\\api v3\\routes\\v1\\nsfw\\index.html", "utf-8"))
})

router.use('/test', require('./test'))

module.exports = router;