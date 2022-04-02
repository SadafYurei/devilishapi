const router = require('express').Router();
const fs = require('fs')
router.get('/', (req, res) => {
	res.status(200).send('Hello world from, home page')
});

// Api routes
router.get('/song', (req, res) => {
try{
    if(!req.query.id){
        res.status(404).json({error: `Give a ID!`})
    }
    res.sendFile(__dirname + `/songs/${req.query.id}.mp3`)
}catch(error){
    res.status(404).json({error: `That song doesn't exist here!`})
    console.log(error.stack)
}
})


router.get('/list', (req, res) => {

        var files = fs.readdirSync(__dirname + "/songs")
        res.send(files)
   
})

module.exports = router;