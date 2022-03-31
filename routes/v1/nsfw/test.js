const router = require('express').Router();
const skyrim = require('../../../assets/test.json')
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
     res.send(JSON.stringify(data, null, 5));
    }else{
      var json = {
        error:"That ID does not exist!"}
     res.send(JSON.stringify(json, null, 5));
   }
  
});

module.exports = router;