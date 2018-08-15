var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/getExpressData', function(req, res, next) {
  const simulateData = {
    httpCode: 200,
    data: {
      title: '索尼大法好'
    }
  }
  res.end(JSON.stringify(simulateData))
})

module.exports = router;
