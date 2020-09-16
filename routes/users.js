<<<<<<< HEAD

var express = require('express');
=======
var express = require("express");
>>>>>>> 18a042e31735746a35ad5a371cb5cfe021dccc19

var router = express.Router();

/* GET users listing. */
<<<<<<< HEAD
router.get('/', function(req, res, next) {
  const users = [{
    "id": 1,
    "name": "Itshak Maharat "
  },
  {
    "id": 2,
    "name": "Tom swallla"
  }
];
=======
router.get("/", function (req, res, next) {
  const users = [
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 2,
      name: "Tom Swalla",
    },
  ];
>>>>>>> 18a042e31735746a35ad5a371cb5cfe021dccc19
  res.send(users);
});

module.exports = router;
