const router = require('express').Router();
const skyrim = require('../../../assets/skyrim.json')
router.get('/', async (req, res) => {


    var i = Math.floor(Math.random() * skyrim.length);
    //getting a random number
    i = req.query.id ? req.query.id : i;
    const result = skyrim[i]
    res.header('Content-Type', 'application/json');
    var data = {
      "id":i.toString(),
      "data" : skyrim[i]
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