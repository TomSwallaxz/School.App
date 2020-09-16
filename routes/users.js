const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = [{
    "id": 1,
    "name": "Itshak Maharat "
  },
  {
    "id": 2,
    "name": "Tom Swalla"
  },
  {
    "id": 3,
    "name": "Ephraim Akale"
  }

];
  res.send(users);
});

module.exports = router;
