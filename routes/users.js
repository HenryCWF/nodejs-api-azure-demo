var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const echoStr = req.query.echoStr;
  var ts =  Date.now();
  console.log(`Start:/echo?${echoStr}-${ts}`);
  if(!echoStr){
      res.status(418).send({message : 'We need an echoStr!'});
  }else{
      res.status(200).send({
          echoText:`echo : ${echoStr}`
      })
  }
  ts =  Date.now();
  console.log(`End:/echo?${echoStr}-${ts}`);
});

module.exports = router;
