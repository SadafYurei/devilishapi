const router = require('express').Router();
const ass = require('../../../data/ass.json')
router.get('/', async (req, res) => {


    var i = Math.floor(Math.random() * ass.length);
    //getting a random number
    i = req.query.id ? req.query.id : i;
    const result = ass[i]
    res.header('Content-Type', 'application/json');
    var data = {
      "id":i.toString(),
      "data" : ass[i].url
    };
    if(result){
     res.json(data);
    }else{
      var json = {
        error:"unknown id"}
     res.status(500).json(json);
   }
  
});

module.exports = router;