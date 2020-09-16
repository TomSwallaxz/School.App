
var express = require('express');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = [{
    "id": 1,
    "name": "Itshak Maharat "
  },
  {
    "id": 2,
    "name": "Tom Swalla"
  }
];
  res.send(users);
});

module.exports = router;
