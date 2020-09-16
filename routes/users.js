const express = require('express');

const router = express.Router();

/* GET users listing. */
<<<<<<< HEAD
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
=======
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
>>>>>>> f86bf8370aed9663f1b5822b96ec062049d2959a
  res.send(users);
});

module.exports = router;
