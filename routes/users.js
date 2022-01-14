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

router.get("/echo/:id", (req, res) => {
    const { id } = req.params;
    const hdrs = req.headers;
    var ts =  Date.now();
    console.log(`Start:/poke/${id}-${ts}`);

    // const data = {
    //     id :`${id}`
    // };

    res.status(200).send(hdrs);
    ts =  Date.now();
    console.log(`End:/poke/${id}-${ts}`);
})


module.exports = router;
